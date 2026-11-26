import "./PageLoader.css";

// Skeleton shown as the Suspense fallback while a lazy route chunk loads.
// Mirrors the shared page layout (navbar → hero → content grid) so the
// transition into the real page feels seamless instead of flashing white.
function PageLoader() {
  return (
    <div className="skl" role="status" aria-busy="true" aria-label="Loading page">
      {/* Navbar */}
      <div className="skl__container">
        <div className="skl__nav">
          <div className="skl__block skl__block--logo" />
          <div className="skl__navlinks">
            <div className="skl__block skl__block--link" />
            <div className="skl__block skl__block--link" />
            <div className="skl__block skl__block--link" />
            <div className="skl__block skl__block--link" />
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="skl__container">
        <div className="skl__hero">
          <div className="skl__block skl__block--subtitle" />
          <div className="skl__block skl__block--title" />
          <div className="skl__block skl__block--subtitle" />
          <div className="skl__block skl__block--btn" />
        </div>
      </div>

      {/* Content grid */}
      <div className="skl__container">
        <div className="skl__grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="skl__card" key={i}>
              <div className="skl__block skl__block--thumb" />
              <div className="skl__block skl__block--line" />
              <div className="skl__block skl__block--line-short" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PageLoader;
