import "./Affiliations.css";

const affiliations = [
  {
    name: "The Ridge Realty Group",
    image: "/images/affiliations/ridge.jpg",
  },
  {
    name: "Equal Housing Opportunity",
    image: "/images/affiliations/equal.jpg",
  },
  {
    name: "REALTOR",
    image: "/images/affiliations/realtor.jpg",
  },
  {
    name: "Pahrump Valley Chamber of Commerce",
    image: "/images/affiliations/pahrump.jpg",
  },
];

// Repeat logos to fill wider screens
const marqueeLogos = Array(3).fill(affiliations).flat();

function Affiliations() {
  return (
    <section
      className="affiliations-section py-4"
      aria-label="Professional Affiliations"
    >
      <div className="container text-center mb-5">
        <p className="affiliations-label text-uppercase fw-semibold mb-0">
          Professional Affiliations
        </p>
      </div>

      <div className="affiliations-track">
        {[0, 1].map((group) => (
          <div
            className="affiliations-group"
            key={group}
            aria-hidden={group === 1}
          >
            {marqueeLogos.map((item, index) => (
              <img
                key={`${group}-${index}`}
                src={item.image}
                alt={
                  group === 0 && index < affiliations.length ? item.name : ""
                }
                className="affiliations-logo"
                loading="lazy"
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Affiliations;
