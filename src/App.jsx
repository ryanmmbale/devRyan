import { lazy, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./style/style.css";
import { PageLoader } from "./components";

// Scripts
import "./assets/js/preline";

// DEV ONLY: artificial minimum time the skeleton loader stays visible, in ms.
// Set to 0 (or remove withMinDelay below) before deploying to production.
const MIN_LOADER_MS = 5000;

// Keeps the lazy chunk from resolving until MIN_LOADER_MS has elapsed, so the
// skeleton is actually visible even when the chunk downloads instantly.
const withMinDelay = (factory) =>
  lazy(() =>
    Promise.all([
      factory(),
      new Promise((resolve) => setTimeout(resolve, MIN_LOADER_MS)),
    ]).then(([module]) => module)
  );

// Pages — lazy-loaded so each route ships as its own chunk
const Home = withMinDelay(() => import("./pages/Home"));
const About = withMinDelay(() => import("./pages/About"));
const Portfolio = withMinDelay(() => import("./pages/Portfolio"));
const Skills = withMinDelay(() => import("./pages/Skills"));
const Services = withMinDelay(() => import("./pages/Services"));
const Contact = withMinDelay(() => import("./pages/Contact"));

function App() {
  return (
    <HashRouter>
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route index exact path="/" element={<Home />} />
            <Route index exact path="/portfolio" element={<Portfolio />} />
            <Route index exact path="/about" element={<About />} />
            <Route index exact path="/skills" element={<Skills />} />
            <Route index exact path="/services" element={<Services />} />
            <Route index exact path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
    </HashRouter>
  );
}

export default App;
