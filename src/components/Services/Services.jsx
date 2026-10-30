import "./Services.css";

const services = [
  {
    id: 1,
    title: "Real Estate Done Right",
    tag: "Buying & Selling",
    variant: "image",
    image: "/images/gallery/fourth.jpg",
    description:
      "Whether you're buying, selling, or exploring investments, enjoy personalized guidance at every step.",
  },
  {
    id: 2,
    title: "Commercial & Residential",
    tag: "Property Solutions",
    variant: "filled",
    description:
      "From residential homes to commercial spaces, we help you find the right property at the right price.",
  },
  {
    id: 3,
    title: "Rely on Expertise",
    tag: "Expert Guidance",
    variant: "image",
    image: "/images/gallery/seventh.jpg",
    description:
      "Get the right support, answers, and local insight to move forward with confidence.",
  },
];

function ServiceCard({ service }) {
  return (
    <article
      className={`service-card service-card--${service.variant} rounded-4 h-100 d-flex flex-column`}
    >
      {service.variant === "image" && (
        <>
          <img
            src={service.image}
            alt={service.title}
            className="service-card-image"
            loading="lazy"
          />
          <div className="service-card-overlay"></div>
        </>
      )}

      <span className="service-tag fw-semibold">{service.tag}</span>

      <div className="service-content mt-auto">
        <h3 className="service-title mb-3">{service.title}</h3>

        <p className="service-description mb-3">{service.description}</p>

        <div className="d-flex justify-content-end">
          <a
            href="#contact"
            className="service-arrow rounded-circle d-flex align-items-center justify-content-center"
            aria-label={`Learn more about ${service.title}`}
          >
            <i className="bi bi-arrow-up-right"></i>
          </a>
        </div>
      </div>
    </article>
  );
}

function Services() {
  return (
    <section className="services-section py-5" id="services">
      <div className="container">
        {/* Section Heading */}
        <div className="row g-4 align-items-start mb-5">
          <div className="col-lg-6">
            <h2 className="services-heading mb-0">Our Services</h2>
          </div>

          <div className="col-lg-5 ms-lg-auto">
            <p className="services-intro mb-3">
              We provide a full range of real estate services to help you find,
              buy, sell, or invest with confidence and clarity.
            </p>

            <p className="services-subtext mb-0">
              From personalized property search and local market guidance to
              negotiation support and strategic advice, we help make every step
              smooth and stress-free.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="row g-3 align-items-stretch">
          {services.map((service) => (
            <div className="col-12 col-md-6 col-lg-4" key={service.id}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
