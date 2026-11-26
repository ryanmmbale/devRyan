import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import {
  HashRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./style/style.css";
import { PageLoader } from "./components";

// Scripts
import "./assets/js/preline";

// Hard cap: the loader is hidden after this long no matter what, so a stalled
// asset can never leave the loader spinning forever. (2 minutes)
const MAX_LOADER_MS = 120000;

// Pages — lazy-loaded so each route ships as its own chunk
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Skills = lazy(() => import("./pages/Skills"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));

// Mounts once the lazy chunk for a route has loaded, then waits until every
// image the browser is actually fetching has finished before signalling ready.
// Images that are still lazily deferred (below the fold, not yet requested) are
// intentionally ignored so the loader doesn't wait on assets that won't load
// until the user scrolls.
function PageReadyGate({ onReady, children }) {
  useEffect(() => {
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      onReady();
    };

    // Hard cap so the loader can never hang.
    const cap = setTimeout(finish, MAX_LOADER_MS);

    // Wait a frame so the browser has begun fetching in-viewport images
    // (their `currentSrc` becomes set once a request starts).
    const raf = requestAnimationFrame(() => {
      const pending = Array.from(document.querySelectorAll("img")).filter(
        (img) => img.currentSrc && !img.complete
      );

      if (pending.length === 0) {
        finish();
        return;
      }

      let remaining = pending.length;
      const one = () => {
        remaining -= 1;
        if (remaining <= 0) finish();
      };
      pending.forEach((img) => {
        img.addEventListener("load", one, { once: true });
        img.addEventListener("error", one, { once: true });
      });
    });

    return () => {
      clearTimeout(cap);
      cancelAnimationFrame(raf);
    };
  }, [onReady]);

  return children;
}

function AppShell() {
  const location = useLocation();
  const [ready, setReady] = useState(false);

  // Every navigation restarts the loader.
  useEffect(() => {
    setReady(false);
  }, [location.pathname]);

  const handleReady = useCallback(() => setReady(true), []);

  return (
    <main>
      <Suspense fallback={null}>
        {/* key forces the gate to remount on every route so its image-wait
            logic runs again, even when the chunk is already cached. */}
        <PageReadyGate key={location.pathname} onReady={handleReady}>
          <Routes>
            <Route index exact path="/" element={<Home />} />
            <Route index exact path="/portfolio" element={<Portfolio />} />
            <Route index exact path="/about" element={<About />} />
            <Route index exact path="/skills" element={<Skills />} />
            <Route index exact path="/services" element={<Services />} />
            <Route index exact path="/contact" element={<Contact />} />
          </Routes>
        </PageReadyGate>
      </Suspense>

      {/* Overlay loader — covers the page (which loads underneath) until the
          chunk has mounted and its visible images have finished loading. */}
      {!ready && <PageLoader />}
    </main>
  );
}

function App() {
  return (
    <HashRouter>
      <AppShell />
    </HashRouter>
  );
}

export default App;
