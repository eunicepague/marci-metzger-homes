import { useRef, useState } from "react";
import "./PropertySearch.css";

// Main Search Filters
const filters = [
  {
    name: "location",
    label: "Location",
    icon: "bi-geo-alt",
    options: [
      "Pahrump, NV",
      "Alamo, NV",
      "Alton, NV",
      "Amargosa Valley, NV",
      "Beatty, NV",
      "Beryl, UT",
      "Blue Diamond, NV",
      "Boulder City, NV",
      "Caliente, NV",
      "Crystal, NV",
      "Dyer, NV",
      "Elko, NV",
      "Ely, NV",
      "Goldfield, NV",
      "Goodsprings, NV",
      "Henderson, NV",
      "Las Vegas, NV",
    ],
  },
  {
    name: "propertyType",
    label: "Property Type",
    icon: "bi-house-door",
    options: [
      "Any Type",
      "Residential",
      "House",
      "Condo",
      "Land",
      "Residential Lease",
      "High Rise",
    ],
  },
  {
    name: "priceRange",
    label: "Price Range",
    icon: "bi-tag",
    options: [
      "Any Price",
      "Under $300,000",
      "$300,000 - $500,000",
      "$500,000 - $750,000",
      "$750,000+",
    ],
  },
];

// Sort Options
const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "priceAsc", label: "Least Expensive to Most" },
  { value: "priceDesc", label: "Most Expensive to Least" },
  { value: "bedsAsc", label: "Bedrooms (Low to High)" },
  { value: "bedsDesc", label: "Bedrooms (High to Low)" },
  { value: "bathsAsc", label: "Bathrooms (Low to High)" },
  { value: "bathsDesc", label: "Bathrooms (High to Low)" },
];

// Bedroom Options
const bedroomOptions = [
  { value: "", label: "Any Number" },
  { value: "0", label: "Studio" },
  ...[1, 2, 3, 4, 5, 6].map((number) => ({
    value: String(number),
    label: `${number}+`,
  })),
];

// Bathroom Options
const bathroomOptions = [
  { value: "", label: "Any Number" },
  ...[1, 2, 3, 4, 5, 6].map((number) => ({
    value: String(number),
    label: `${number}+`,
  })),
];

function PropertySearch() {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [error, setError] = useState("");
  const dialogRef = useRef(null);

  // Handle Search
  const handleSubmit = (e) => {
    e.preventDefault();

    const values = Object.fromEntries(new FormData(e.currentTarget));

    // Validate Custom Price Range
    if (
      values.minPrice !== "" &&
      values.maxPrice !== "" &&
      Number(values.minPrice) > Number(values.maxPrice)
    ) {
      setError("Min Price cannot be greater than Max Price.");
      return;
    }

    setError("");

    // Show Coming Soon Popup
    dialogRef.current?.showModal();
  };

  // Close Popup
  const closeModal = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <form
        className="property-search bg-white rounded-3 shadow p-3"
        onSubmit={handleSubmit}
        onReset={() => setError("")}
        aria-label="Search properties"
      >
        {/* Main Search Fields */}
        <div className="row g-3 align-items-end">
          {filters.map((filter) => (
            <div className="col-12 col-md-6 col-lg-3" key={filter.name}>
              <label
                htmlFor={filter.name}
                className="form-label small fw-semibold mb-2"
              >
                {filter.label}
              </label>

              <div className="position-relative">
                <i
                  className={`bi ${filter.icon} search-icon`}
                  aria-hidden="true"
                ></i>

                <select
                  id={filter.name}
                  name={filter.name}
                  className="form-select search-select"
                  defaultValue={filter.options[0]}
                >
                  {filter.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}

          {/* Search Button */}
          <div className="col-12 col-md-6 col-lg-3">
            <button type="submit" className="btn search-btn w-100 fw-semibold">
              <i className="bi bi-search me-2" aria-hidden="true"></i>
              Search Homes
            </button>
          </div>
        </div>

        {/* More Filters Toggle */}
        <div className="search-actions d-flex align-items-center justify-content-between flex-wrap gap-2 mt-3">
          <button
            type="button"
            className="search-more-btn"
            onClick={() => setShowAdvanced(!showAdvanced)}
            aria-expanded={showAdvanced}
            aria-controls="advancedSearch"
          >
            <i className="bi bi-sliders me-2" aria-hidden="true"></i>

            {showAdvanced ? "Fewer Filters" : "More Filters"}

            <i
              className={`bi ${
                showAdvanced ? "bi-chevron-up" : "bi-chevron-down"
              } ms-2`}
              aria-hidden="true"
            ></i>
          </button>

          {showAdvanced && (
            <button type="reset" className="search-reset-btn">
              <i
                className="bi bi-arrow-counterclockwise me-1"
                aria-hidden="true"
              ></i>
              Reset Filters
            </button>
          )}
        </div>

        {/* Advanced Filters */}
        <div
          id="advancedSearch"
          className="search-advanced"
          hidden={!showAdvanced}
        >
          <div className="advanced-fields">
            {/* Sort By */}
            <div className="advanced-field">
              <label
                htmlFor="sortBy"
                className="form-label small fw-semibold mb-2"
              >
                Sort By
              </label>

              <select
                id="sortBy"
                name="sortBy"
                className="form-select search-select-advanced"
                defaultValue="newest"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Bedrooms */}
            <div className="advanced-field">
              <label
                htmlFor="bedrooms"
                className="form-label small fw-semibold mb-2"
              >
                Bedrooms
              </label>

              <select
                id="bedrooms"
                name="bedrooms"
                className="form-select search-select-advanced"
                defaultValue=""
              >
                {bedroomOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Bathrooms */}
            <div className="advanced-field">
              <label
                htmlFor="bathrooms"
                className="form-label small fw-semibold mb-2"
              >
                Baths
              </label>

              <select
                id="bathrooms"
                name="bathrooms"
                className="form-select search-select-advanced"
                defaultValue=""
              >
                {bathroomOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Min Price */}
            <div className="advanced-field">
              <label
                htmlFor="minPrice"
                className="form-label small fw-semibold mb-2"
              >
                Min Price
              </label>

              <div className="search-price-field">
                <span aria-hidden="true">$</span>

                <input
                  type="number"
                  id="minPrice"
                  name="minPrice"
                  className="form-control search-price-input"
                  placeholder="No minimum"
                  min="0"
                  step="1000"
                />
              </div>
            </div>

            {/* Max Price */}
            <div className="advanced-field">
              <label
                htmlFor="maxPrice"
                className="form-label small fw-semibold mb-2"
              >
                Max Price
              </label>

              <div className="search-price-field">
                <span aria-hidden="true">$</span>

                <input
                  type="number"
                  id="maxPrice"
                  name="maxPrice"
                  className="form-control search-price-input"
                  placeholder="No maximum"
                  min="0"
                  step="1000"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <p className="search-error small mt-3 mb-0" role="alert">
            {error}
          </p>
        )}
      </form>

      {/* Search Coming Soon Modal */}
      <dialog
        ref={dialogRef}
        className="search-modal"
        aria-labelledby="searchModalTitle"
        aria-describedby="searchModalDescription"
      >
        <div className="search-modal-content text-center">
          {/* Close Icon */}
          <button
            type="button"
            className="search-modal-close"
            onClick={closeModal}
            aria-label="Close popup"
          >
            <i className="bi bi-x-lg" aria-hidden="true"></i>
          </button>

          {/* Search Icon */}
          <div className="search-modal-icon mx-auto mb-4">
            <i className="bi bi-search" aria-hidden="true"></i>
          </div>

          {/* Heading */}
          <h2 id="searchModalTitle" className="search-modal-title mb-3">
            Search Coming Soon
          </h2>

          {/* Description */}
          <p
            id="searchModalDescription"
            className="search-modal-description mb-3"
          >
            Our property search feature is currently unavailable in this website
            preview.
          </p>

          <p className="search-modal-description mb-4">
            In the meantime, feel free to contact Marci for personalized
            property assistance.
          </p>

          {/* Contact Button */}
          <a
            href="#contact"
            className="search-modal-contact d-flex align-items-center justify-content-center gap-2 mb-3"
            onClick={closeModal}
          >
            Contact Marci
            <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
          </a>

          {/* Dismiss Button */}
          <button
            type="button"
            className="search-modal-dismiss"
            onClick={closeModal}
          >
            Maybe Later
          </button>
        </div>
      </dialog>
    </>
  );
}

export default PropertySearch;
