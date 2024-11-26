import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import logo from "../assets/wide_green_logo.svg";

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
        <a href="#contact">Contact</a>
      </nav>
      <a href="#" className="logo"><img src={logo} alt="Logo" /></a>
      <nav className="nav-menu nav-right">
        <a href="#public-speaking">Public Speaking</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
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
        <a href="#contact">Contact</a>
        <a href="#public-speaking">Public Speaking</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
      </div>
    </header>
  );
};

export default Header;
