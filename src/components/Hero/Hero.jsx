import PropertySearch from "../PropertySearch/PropertySearch";
import "./Hero.css";

function Hero({ onSearch }) {
  return (
    <section className="hero-section" id="home">
      <div className="hero-panel">
        {/* Background Image */}
        <img
          src="/images/hero1.jpg"
          alt="Luxury desert home in Pahrump, Nevada"
          className="hero-background"
          fetchPriority="high"
        />

        <div className="container hero-inner d-flex flex-column">
          {/* Hero Content */}
          <div className="hero-center d-flex justify-content-center text-center flex-grow-1">
            <div className="hero-content">
              <p className="hero-eyebrow text-uppercase fw-semibold mb-3">
                Pahrump, Nevada
              </p>

              <h1 className="hero-title mb-3">
                Desert Living,
                <br />
                Beautifully <em>Found.</em>
              </h1>

              <a
                href="#properties"
                className="hero-explore-link d-inline-flex align-items-center gap-2 fw-semibold"
              >
                Explore Homes
                <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>

          {/* Property Search Inside Hero */}
          <div className="hero-search">
            <PropertySearch onSearch={onSearch} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
