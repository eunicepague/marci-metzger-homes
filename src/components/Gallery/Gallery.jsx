import { useEffect, useState } from "react";
import "./Gallery.css";

const photos = [
  {
    id: 1,
    image: "/images/gallery/sixth.jpg",
    title: "The Community",
  },
  {
    id: 2,
    image: "/images/gallery/second.jpg",
    title: "Desert Homes",
  },
  {
    id: 3,
    image: "/images/gallery/fifth.jpg",
    title: "Spaces to Unwind",
  },
  {
    id: 4,
    image: "/images/gallery/first.jpg",
    title: "Life Outdoors",
  },
  {
    id: 5,
    image: "/images/gallery/third.jpg",
    title: "Pahrump Living",
  },
];

function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const isOpen = selectedIndex !== null;

  const changePhoto = (direction) => {
    setSelectedIndex(
      (current) => (current + direction + photos.length) % photos.length,
    );
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((current) => (current + 1) % photos.length);
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex(
          (current) => (current - 1 + photos.length) % photos.length,
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const openAllPhotos = () => {
    setSelectedIndex(0);
  };

  return (
    <section className="gallery-section py-5" id="gallery">
      <div className="container">
        {/* Section Header */}
        <div className="mb-4">
          <p className="gallery-eyebrow text-uppercase fw-semibold mb-2">
            Photo Gallery
          </p>

          <h2 className="gallery-heading mb-2">A glimpse of life in Pahrump</h2>

          <p className="gallery-description mb-0">
            Explore the homes, views, and spaces that make this place feel like
            home.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <article
              key={photo.id}
              className={`gallery-card ${
                index === 0 ? "gallery-card-featured" : ""
              }`}
            >
              <img src={photo.image} alt={photo.title} loading="lazy" />

              {/* Open Image */}
              <button
                type="button"
                className="gallery-open"
                onClick={() => setSelectedIndex(index)}
                aria-label={`View ${photo.title} photo`}
              />

              {/* Expand Icon */}
              {index === 0 && (
                <span className="gallery-expand">
                  <i className="bi bi-arrows-angle-expand"></i>
                </span>
              )}

              {/* Image Caption */}
              <span className="gallery-caption">{photo.title}</span>

              {/* View All Photos */}
              {index === 4 && (
                <button
                  type="button"
                  className="gallery-view-all"
                  onClick={openAllPhotos}
                >
                  <i className="bi bi-grid-2x2-gap"></i>
                  View all photos
                </button>
              )}
            </article>
          ))}
        </div>

        {/* Bottom Caption */}
        <p className="gallery-footer mt-3 mb-0">
          Discover Pahrump, one view at a time.
        </p>
      </div>

      {/* Image Lightbox */}
      {isOpen && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo gallery preview"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            className="gallery-close"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close gallery"
            autoFocus
          >
            <i className="bi bi-x-lg"></i>
          </button>

          {/* Previous */}
          <button
            type="button"
            className="gallery-nav"
            onClick={(e) => {
              e.stopPropagation();
              changePhoto(-1);
            }}
            aria-label="Previous photo"
          >
            <i className="bi bi-chevron-left"></i>
          </button>

          {/* Image Preview */}
          <div
            className="gallery-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[selectedIndex].image}
              alt={photos[selectedIndex].title}
            />

            <p className="mb-0 mt-3 text-center">
              {photos[selectedIndex].title}

              <span className="d-block small mt-1">
                {selectedIndex + 1} / {photos.length}
              </span>
            </p>
          </div>

          {/* Next */}
          <button
            type="button"
            className="gallery-nav"
            onClick={(e) => {
              e.stopPropagation();
              changePhoto(1);
            }}
            aria-label="Next photo"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      )}
    </section>
  );
}

export default Gallery;
