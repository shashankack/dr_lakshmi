import { useState, useEffect } from "react";
import logo from "../assets/white_logo.png";
import "../styles/Navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <nav className="navbar-left">
        <ul className={isMobile ? "active" : ""}>
          <li><a href="#/">Home</a></li>
          <li><a href="#/about-us">About Us</a></li>
          <li><a href="#/services">Services</a></li>
        </ul>
      </nav>
      
      <nav className="navbar-center">
        <a href="#/">
          <img src={logo} className="logo" alt="Logo" />
        </a>
      </nav>

      <nav className="navbar-right">
        <ul className={isMobile ? "active" : ""}>
          <li><a href="#/blogs">Blogs</a></li>
          <li><a href="#/testimonials">Testimonials</a></li>
          <li><a href="#/contact">Contact Us</a></li>
        </ul>
      </nav>

      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={() => setIsMobile(!isMobile)}>
        <div className={`bar ${isMobile ? "open" : ""}`}></div>
        <div className={`bar ${isMobile ? "open" : ""}`}></div>
        <div className={`bar ${isMobile ? "open" : ""}`}></div>
      </div>
    </header>
  );
};

export default Navbar;
