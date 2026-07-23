import { lazy, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./style/style.css";

// Scripts
import "./assets/js/preline";

// Pages — lazy-loaded so each route ships as its own chunk
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Skills = lazy(() => import("./pages/Skills"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <HashRouter>
      <main>
        <Suspense fallback={null}>
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
