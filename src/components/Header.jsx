import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import logo from "../assets/wide_green_logo.svg";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="nav-menu">
        <div className="nav-left">
          <a href="#energy-healing" onClick={closeMenu}>
            Energy Healing
          </a>
          <a href="#psychotherapy" onClick={closeMenu}>
            Holistic Psychotherapy
          </a>
          <HashLink smooth to="#services" onClick={closeMenu}>
            Services
          </HashLink>
        </div>
      </nav>

      <HashLink
        smooth
        to="#hero"
        className={`logo ${isScrolled ? "scrolled" : ""}`}
      >
        <img src={logo} alt="Logo" />
      </HashLink>

      <nav className="nav-menu">
        <div className="nav-right">
          <HashLink smooth to="#about" onClick={closeMenu}>
            About
          </HashLink>
          <HashLink smooth to="#page3" onClick={closeMenu}>
            Page3
          </HashLink>
          <HashLink smooth to="#testimonials" onClick={closeMenu}>
            Testimonials
          </HashLink>
        </div>
      </nav>

      <div
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <a href="#energy-healing" onClick={closeMenu}>
          Energy Healing
        </a>
        <a href="#psychotherapy" onClick={closeMenu}>
          Holistic Psychotherapy
        </a>
        <HashLink smooth to="#services" onClick={closeMenu}>
          Services
        </HashLink>
        <HashLink smooth to="#about" onClick={closeMenu}>
          About
        </HashLink>
        <HashLink smooth to="#page3" onClick={closeMenu}>
          Page3
        </HashLink>
        <HashLink smooth to="#testimonials" onClick={closeMenu}>
          Testimonials
        </HashLink>
      </div>
    </header>
  );
};

export default Header;
