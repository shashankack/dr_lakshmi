import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import logo from "../assets/wide_green_logo.svg";
import {HashLink} from 'react-router-hash-link';

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="nav-menu nav-left">
        <a href="#energy-healing">Energy Healing</a>
        <a href="#psychotherapy">Holistic Psychotherapy</a>
        <HashLink smooth to="#services">Services</HashLink>
      </nav>
      <HashLink smooth to="#hero" className="logo"><img src={logo}/></HashLink>
      
      <nav className="nav-menu nav-right">
        <HashLink smooth to="#about">About</HashLink>
        <HashLink smooth to="#page3">Page3</HashLink>
        <HashLink smooth to="#testimonials">Testimonials</HashLink>
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
        <a href="#energy-healing">Energy Healing</a>
        <a href="#psychotherapy">Holistic Psychotherapy</a>
        <HashLink smooth to="#services">Services</HashLink>
        <HashLink smooth to="#about">About</HashLink>
        <HashLink smooth to="#page3">Page3</HashLink>
        <HashLink smooth to="#testimonials">Testimonials</HashLink>
      </div>
    </header>
  );
};

export default Header;
