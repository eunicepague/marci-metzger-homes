import "./Footer.css";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "Properties", href: "#properties" },
  { name: "About Marci", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "Facebook",
    image: "/images/icons/fb.png",
    href: "https://www.facebook.com/",
  },
  {
    name: "Instagram",
    image: "/images/icons/inst.png",
    href: "https://www.instagram.com/",
  },
  {
    name: "LinkedIn",
    image: "/images/icons/linkedin.png",
    href: "https://www.linkedin.com/",
  },
  {
    name: "Yelp",
    image: "/images/icons/yelp.png",
    href: "https://www.yelp.com/",
  },
];

const officeAddress = "3190 HW-160, Suite F, Pahrump, Nevada 89048";

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  officeAddress,
)}`;

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Main Footer */}
        <div className="footer-main">
          {/* Left: Branding */}
          <div className="footer-brand">
            <a href="#home" aria-label="Marci Metzger Homes">
              <img
                src="/images/marci-logo.jpg"
                alt="Marci Metzger Homes"
                className="footer-logo"
                loading="lazy"
              />
            </a>

            <h2 className="footer-tagline">
              Local expertise.
              <br />A place to call home.
            </h2>

            <p className="footer-location mb-3">Serving Pahrump, Nevada.</p>

            <p className="footer-brokerage text-uppercase mb-0">
              The Ridge Realty Group
            </p>
          </div>

          {/* Right: Explore + Contact */}
          <div className="footer-right-group">
            {/* Explore */}
            <nav className="footer-explore" aria-label="Footer navigation">
              <h3 className="footer-label mb-4">Explore</h3>

              <ul className="footer-links list-unstyled mb-0">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Visit or Call */}
            <div className="footer-contact">
              <h3 className="footer-label mb-4">Visit or Call</h3>

              {/* Phone */}
              <a
                href="tel:+12069196886"
                className="footer-phone d-inline-flex align-items-center gap-3 mb-4"
              >
                <i className="bi bi-telephone" aria-hidden="true"></i>

                <span>(206) 919-6886</span>
              </a>

              {/* Address */}
              <p className="footer-address mb-3">
                3190 HW-160, Suite F
                <br />
                Pahrump, Nevada 89048
              </p>

              {/* Office Hours */}
              <div className="footer-hours d-flex align-items-center gap-3 mb-3">
                <i className="bi bi-clock" aria-hidden="true"></i>

                <span>Daily · 8:00 am – 7:00 pm</span>
              </div>

              {/* Directions */}
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-directions d-inline-flex align-items-center gap-2"
              >
                Get directions
                <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom mt-5 pt-4 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
          {/* Copyright */}
          <p className="mb-0">
            © {new Date().getFullYear()} Marci Metzger. All rights reserved.
          </p>

          {/* Social Media */}
          <div className="footer-socials d-flex align-items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img
                  src={social.image}
                  alt=""
                  className="footer-social-icon"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
