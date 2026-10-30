import "./WhyChooseMarci.css";

const advantages = [
  {
    id: 1,
    tag: "Proven Results",
    title: "$28.5M",
    description: "Nearly 90 clients helped and $28.5 million in sales in 2021.",
    color: "filled",
    image: "/images/advantage/advantage1.jpg",
  },
  {
    id: 2,
    tag: "Strategic Marketing",
    title: "Get It SOLD!",
    description:
      "Comprehensive property exposure and effective marketing strategies to reach potential buyers.",
    color: "light",
  },
  {
    id: 3,
    tag: "Expert Buyer Guidance",
    title: "Buy with Confidence",
    description:
      "Local market analysis, personalized assistance, and trusted contractor connections.",
    color: "filled",
    image: "/images/advantage/advantage2.jpg",
  },
];

function WhyChooseMarci() {
  return (
    <section className="advantage-section py-5" id="why-marci">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <p className="advantage-eyebrow text-uppercase fw-semibold mb-2">
            Why Work With Marci
          </p>

          <h2 className="advantage-heading mb-2">The Marci Advantage</h2>

          <p className="advantage-intro mb-0">
            Experience, dedication, and guidance you can trust.
          </p>
        </div>

        {/* Advantage Cards */}
        <div className="row g-3">
          {advantages.map((advantage) => (
            <div className="col-12 col-md-4" key={advantage.id}>
              <article
                className={`advantage-card advantage-card--${advantage.color} h-100 d-flex flex-column`}
              >
                {/* Card Background Image */}
                {advantage.image && (
                  <img
                    src={advantage.image}
                    alt=""
                    className="advantage-card-image"
                    loading="lazy"
                    aria-hidden="true"
                  />
                )}

                {/* Card Tag */}
                <span className="advantage-tag fw-semibold">
                  {advantage.tag}
                </span>

                {/* Card Content */}
                <div className="advantage-content mt-auto">
                  <h3 className="advantage-card-title mb-3">
                    {advantage.title}
                  </h3>

                  <p className="advantage-description mb-3">
                    {advantage.description}
                  </p>

                  {/* Arrow Button */}
                  <div className="d-flex justify-content-end">
                    <a
                      href="#contact"
                      className="advantage-arrow rounded-circle d-flex align-items-center justify-content-center"
                      aria-label={`Contact Marci about ${advantage.tag}`}
                    >
                      <i
                        className="bi bi-arrow-up-right"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseMarci;
