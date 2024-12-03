import React, { useState, useEffect } from "react";
import "../styles/Footer.css";
import logo from "../assets/wide_white_logo.png";

const Footer = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 540); // Toggle dropdown for screens <= 540px
    };

    handleResize(); // Initialize state based on screen size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="footer">
      <div className="inner-footer">
        <div className="footer-items logo-section">
          <img src={logo} alt="Logo" />
        </div>

        {/* Quick Links */}
        <div className="footer-items">
          <h3 onClick={() => isSmallScreen && toggleSection("links")}>
            Quick Links
            {isSmallScreen && (
              <span className="dropdown-icon">{openSection === "links" ? "-" : "+"}</span>
            )}
          </h3>
          <div className={`border1 ${isSmallScreen && openSection !== "links" ? "hidden" : ""}`}></div>
          <ul className={!isSmallScreen || openSection === "links" ? "visible" : "hidden"}>
            <a href="#">
              <li>Link 1</li>
            </a>
            <a href="#">
              <li>Link 2</li>
            </a>
            <a href="#">
              <li>Link 3</li>
            </a>
            <a href="#">
              <li>Link 4</li>
            </a>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-items">
          <h3 onClick={() => isSmallScreen && toggleSection("services")}>
            Services
            {isSmallScreen && (
              <span className="dropdown-icon">{openSection === "services" ? "-" : "+"}</span>
            )}
          </h3>
          <div className={`border1 ${isSmallScreen && openSection !== "services" ? "hidden" : ""}`}></div>
          <ul className={!isSmallScreen || openSection === "services" ? "visible" : "hidden"}>
            <a href="#">
              <li>Service 1</li>
            </a>
            <a href="#">
              <li>Service 2</li>
            </a>
            <a href="#">
              <li>Service 3</li>
            </a>
            <a href="#">
              <li>Service 4</li>
            </a>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-items">
          <h3 onClick={() => isSmallScreen && toggleSection("contact")}>
            Contact us
            {isSmallScreen && (
              <span className="dropdown-icon">{openSection === "contact" ? "-" : "+"}</span>
            )}
          </h3>
          <div className={`border1 ${isSmallScreen && openSection !== "contact" ? "hidden" : ""}`}></div>
          <ul className={!isSmallScreen || openSection === "contact" ? "visible" : "hidden"}>
            <li>
              <i className="fa fa-map-marker" aria-hidden="true"></i> XYZ, abc
            </li>
            <li>
              <i className="fa fa-phone" aria-hidden="true"></i> 123456789
            </li>
            <li>
              <i className="fa fa-envelope" aria-hidden="true"></i> xyz@gmail.com
            </li>
          </ul>
          <div className="social-media">
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-google-plus-square"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">Copyright &copy; Optimal Minds 2024.</div>
    </div>
  );
};

export default Footer;
