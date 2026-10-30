import { useState } from "react";
import "./FeaturedProperties.css";

const properties = [
  {
    id: 1,
    title: "Modern Desert Retreat",
    price: 425000,
    address: "1234 Vista Ridge Ave, Pahrump, NV",
    beds: 3,
    baths: 2,
    area: 2012,
    image: "/images/features/building1.jpg",
  },
  {
    id: 2,
    title: "Mountain View Escape",
    price: 382500,
    address: "5678 Horizon Rd, Pahrump, NV",
    beds: 3,
    baths: 2,
    area: 1856,
    image: "/images/features/building2.jpg",
  },
  {
    id: 3,
    title: "Resort-Style Living",
    price: 515000,
    address: "9012 Desert Vista Ln, Pahrump, NV",
    beds: 4,
    baths: 3,
    area: 2438,
    image: "/images/features/building6.jpg",
  },
  {
    id: 4,
    title: "Sunset Valley Residence",
    price: 465000,
    address: "2345 Sunset Ridge Dr, Pahrump, NV",
    beds: 4,
    baths: 2,
    area: 2250,
    image: "/images/features/building3.jpg",
  },
  {
    id: 5,
    title: "Desert Oasis Villa",
    price: 589000,
    address: "6789 Oasis Springs Rd, Pahrump, NV",
    beds: 4,
    baths: 3,
    area: 2780,
    image: "/images/features/building4.jpg",
  },
  {
    id: 6,
    title: "Mountain Serenity Home",
    price: 349000,
    address: "3456 Mountain View Ln, Pahrump, NV",
    beds: 3,
    baths: 2,
    area: 1740,
    image: "/images/features/building5.jpg",
  },
];

function PropertyCard({ property }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const details = [
    { icon: "bi-house-door", text: `${property.beds} Beds` },
    { icon: "bi-droplet", text: `${property.baths} Baths` },
    {
      icon: "bi-aspect-ratio",
      text: `${property.area.toLocaleString()} sq ft`,
    },
  ];

  return (
    <article className="property-card bg-white rounded-2 overflow-hidden h-100 d-flex flex-column">
      {/* Property Image */}
      <div className="position-relative">
        <img
          src={property.image}
          alt={property.title}
          className="property-image w-100 d-block"
          loading="lazy"
        />

        <span className="property-badge position-absolute top-0 start-0 m-3 px-3 py-2 rounded-1 text-uppercase fw-semibold">
          For Sale
        </span>

        <button
          type="button"
          className="property-favorite btn rounded-circle position-absolute top-0 end-0 m-3 d-flex align-items-center justify-content-center"
          onClick={() => setIsFavorite(!isFavorite)}
          aria-pressed={isFavorite}
          aria-label={
            isFavorite
              ? `Remove ${property.title} from favorites`
              : `Add ${property.title} to favorites`
          }
        >
          <i className={`bi ${isFavorite ? "bi-heart-fill" : "bi-heart"}`}></i>
        </button>
      </div>

      {/* Property Information */}
      <div className="property-body p-3 p-xl-4 d-flex flex-column flex-grow-1">
        <p className="property-price mb-1">
          ${property.price.toLocaleString()}
        </p>

        <h3 className="property-title mb-2">{property.title}</h3>

        <p className="property-address d-flex align-items-start gap-2 mb-3 pb-3 border-bottom">
          <i className="bi bi-geo-alt-fill"></i>
          <span>{property.address}</span>
        </p>

        {/* Property Details */}
        <div className="property-details d-flex flex-wrap align-items-center gap-2 mb-3">
          {details.map((detail, index) => (
            <span
              key={detail.text}
              className={`d-inline-flex align-items-center gap-2 ${
                index < details.length - 1 ? "border-end pe-2" : ""
              }`}
            >
              <i className={`bi ${detail.icon}`}></i>
              {detail.text}
            </span>
          ))}
        </div>

        {/* Property Link */}
        <a
          href="#contact"
          className="property-link d-inline-flex align-items-center gap-3 mt-auto"
        >
          View property
          <i className="bi bi-arrow-right"></i>
        </a>
      </div>
    </article>
  );
}

function FeaturedProperties() {
  return (
    <section className="featured-properties py-5" id="properties">
      <div className="container">
        {/* Section Header */}
        <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
          <div>
            <p className="featured-eyebrow text-uppercase fw-semibold mb-2">
              Curated for You
            </p>

            <h2 className="featured-heading mb-2">Featured Properties</h2>

            <p className="featured-description mb-0">
              Exceptional homes. A place to call your own.
            </p>
          </div>

          <a
            href="#properties"
            className="view-all-link d-inline-flex align-items-center gap-3"
          >
            View all properties
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>

        {/* Property Grid */}
        <div className="row g-4">
          {properties.map((property) => (
            <div className="col-12 col-md-6 col-lg-4" key={property.id}>
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProperties;
