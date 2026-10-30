import { useEffect, useState } from "react";
import "./Contact.css";

const CONTACT_EMAIL = "marcimetzger@gmail.com";

const OFFICE_ADDRESS = "3190 HW-160, Suite F, Pahrump, Nevada 89048";

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  OFFICE_ADDRESS,
)}`;

const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  OFFICE_ADDRESS,
)}&output=embed`;

function Contact() {
  const [showToast, setShowToast] = useState(false);
  const [emailDraft, setEmailDraft] = useState("");

  // Automatically dismiss notification
  useEffect(() => {
    if (!showToast) return;

    const timer = setTimeout(() => {
      setShowToast(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, [showToast]);

  // Prepare Email Draft
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const interest = String(formData.get("interest") || "General Inquiry");
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) return;

    const subject = `New Website Inquiry - ${interest}`;

    const body = [
      "Hello Marci,",
      "",
      message,
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Interested In: ${interest}`,
      "",
      "Sent through Marci Metzger Homes website.",
    ].join("\n");

    const mailtoUrl =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    setEmailDraft(mailtoUrl);

    // Show notification without leaving the page
    setShowToast(true);
  };

  const closeToast = () => {
    setShowToast(false);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        {/* Section Heading */}
        <div className="contact-section-header">
          <p className="contact-eyebrow text-uppercase fw-semibold">
            Contact Marci
          </p>

          <h2 className="contact-heading">
            Let's talk about your next chapter.
          </h2>

          <p className="contact-intro">
            Buying, selling, or exploring Pahrump? Let's make your next move
            feel simple.
          </p>
        </div>

        <div className="row g-4 align-items-stretch">
          {/* LEFT: Contact Form */}
          <div className="col-12 col-lg-6">
            <div className="contact-form-card h-100">
              <h3 className="contact-form-title">Send a message</h3>

              <p className="contact-form-subtitle">
                Tell us a little about what you have in mind.
              </p>

              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="contact-field">
                  <label htmlFor="contactName" className="contact-label">
                    Your name *
                  </label>

                  <input
                    type="text"
                    id="contactName"
                    name="name"
                    className="form-control contact-input"
                    placeholder="Full name"
                    autoComplete="name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="contact-field">
                  <label htmlFor="contactEmail" className="contact-label">
                    Email address *
                  </label>

                  <input
                    type="email"
                    id="contactEmail"
                    name="email"
                    className="form-control contact-input"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </div>

                {/* Interest */}
                <div className="contact-field">
                  <label htmlFor="contactInterest" className="contact-label">
                    I'm interested in
                  </label>

                  <select
                    id="contactInterest"
                    name="interest"
                    className="form-select contact-input"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an option
                    </option>

                    <option value="Buying a Home">Buying a Home</option>

                    <option value="Selling a Home">Selling a Home</option>

                    <option value="Investing">Real Estate Investment</option>

                    <option value="Commercial Property">
                      Commercial Property
                    </option>

                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div className="contact-field">
                  <label htmlFor="contactMessage" className="contact-label">
                    Message *
                  </label>

                  <textarea
                    id="contactMessage"
                    name="message"
                    className="form-control contact-input contact-textarea"
                    placeholder="How can Marci help?"
                    rows="4"
                    required
                  />
                </div>

                <p className="contact-required">* Required fields</p>

                {/* Submit Button */}
                <button type="submit" className="contact-submit-btn">
                  Send message
                  <i className="bi bi-arrow-right" aria-hidden="true"></i>
                </button>

                <p className="contact-form-note">
                  Prepares a message you can review and send through your email
                  app.
                </p>
              </form>
            </div>
          </div>

          {/* RIGHT: Contact Details and Map */}
          <div className="col-12 col-lg-6">
            <div className="contact-right-column">
              {/* Navy Contact Box */}
              <div className="contact-info-card">
                <h3 className="contact-info-title">Prefer to talk directly?</h3>

                {/* Phone */}
                <div className="contact-info-row">
                  <i className="bi bi-telephone" aria-hidden="true"></i>

                  <div>
                    <p className="contact-info-label">Call Marci</p>

                    <a href="tel:+12069196886" className="contact-phone">
                      (206) 919-6886
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="contact-info-row">
                  <i className="bi bi-clock" aria-hidden="true"></i>

                  <div>
                    <p className="contact-hours">Daily, 8:00 am – 7:00 pm</p>

                    <p className="contact-hours-note">
                      Appointments outside office hours available upon request.
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="contact-map">
                <iframe
                  title="Marci Metzger Realty Office Location"
                  src={mapUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />

                {/* Map Location Card */}
                <div className="contact-map-card">
                  <div className="contact-map-details">
                    <i className="bi bi-geo-alt-fill" aria-hidden="true"></i>

                    <div>
                      <h4 className="contact-map-title">Visit our office</h4>

                      <p className="contact-map-company">
                        Marci Metzger · The Ridge Realty Group
                      </p>
                    </div>
                  </div>

                  <p className="contact-map-address">
                    3190 HW-160, Suite F
                    <br />
                    Pahrump, Nevada 89048
                  </p>

                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-directions"
                  >
                    Get directions
                    <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EMAIL DRAFT TOAST */}
      {showToast && (
        <div className="contact-toast" role="status" aria-live="polite">
          <div className="contact-toast-icon">
            <i className="bi bi-check-lg" aria-hidden="true"></i>
          </div>

          <div className="contact-toast-content">
            <p className="contact-toast-title">Message Ready!</p>

            <p className="contact-toast-text">
              Your email draft is prepared. Open your email app to finish
              sending.
            </p>

            <a
              href={emailDraft}
              className="contact-toast-action"
              onClick={closeToast}
            >
              Open Email App
              <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
            </a>
          </div>

          <button
            type="button"
            className="contact-toast-close"
            onClick={closeToast}
            aria-label="Close notification"
          >
            <i className="bi bi-x-lg" aria-hidden="true"></i>
          </button>
        </div>
      )}
    </section>
  );
}

export default Contact;
