import { useState } from "react";
import "./Header.css";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Properties", href: "#properties" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

function Header() {
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (name) => {
    setActiveLink(name);
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav
        className="navbar navbar-expand-xl"
        data-bs-theme="light"
        aria-label="Main navigation"
      >
        <div className="container-fluid header-layout">
          {/* Left: Logo */}
          <a
            className="navbar-brand brand-logo"
            href="#home"
            onClick={() => handleNavClick("Home")}
            aria-label="Marci Metzger Homes - Home"
          >
            <img
              src="/images/marci-logo.jpg"
              alt="Marci Metzger Homes"
              className="brand-image"
              fetchPriority="high"
            />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarMenu"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Center: Navigation + Right: CTA */}
          <div
            className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
            id="navbarMenu"
          >
            {/* Navigation Links */}
            <ul className="navbar-nav nav-links">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.name}>
                  <a
                    href={link.href}
                    className={`nav-link ${
                      activeLink === link.name ? "active" : ""
                    }`}
                    aria-current={
                      activeLink === link.name ? "location" : undefined
                    }
                    onClick={() => handleNavClick(link.name)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Button */}
            <a
              href="#contact"
              className="contact-btn"
              onClick={() => handleNavClick("Contact")}
            >
              Contact Marci
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
