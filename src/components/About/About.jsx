import "./About.css";

function About() {
  return (
    <section className="about-section py-5" id="about">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          {/* Profile Image */}
          <div className="col-lg-5">
            <img
              src="/images/marci-front.jpg"
              alt="Marci Metzger, real estate professional"
              className="about-image img-fluid w-100 rounded-2"
              loading="lazy"
            />
          </div>

          {/* About Content */}
          <div className="col-lg-7">
            <div className="ps-lg-3">
              <p className="about-label text-uppercase fw-semibold mb-3">
                Meet Marci Metzger
              </p>

              <h2 className="about-title mb-4">
                Local Expertise.
                <br />
                Lasting Relationships.
              </h2>

              <p className="about-description mb-4">
                With nearly three decades in real estate, I help buyers and
                sellers find their next chapter in Pahrump through local
                insight, thoughtful guidance, and a personal approach.
              </p>

              <p className="about-role mb-4">
                REALTOR® · The Ridge Realty Group
              </p>

              <a href="#contact" className="btn about-btn px-4 py-3">
                More About Marci
                <i className="bi bi-arrow-right ms-3"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
