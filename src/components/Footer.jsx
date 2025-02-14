import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../assets/white_logo.png";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo-section">
          <img src={logo} alt="Optimal Minds Logo" className="logo" />
          <div className="socials">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="nav-section">
          <a href="#">Home</a>
          <a href="#">Blogs</a>
          <a href="#">About Us</a>
          <a href="#">Testimonials</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>

        <div className="button-section">
          <button className="appointment-btn">Book an Appointment</button>
          <button className="whatsapp-btn">
            <FaWhatsapp fontSize={"25px"} /> Chat on Whatsapp
          </button>
        </div>
      </div>

      <div className="footer-contact-section">
        <div className="footer-contact-item">
          <FaEnvelope /> random@mail.com
        </div>
        <div className="footer-contact-item">
          <FaPhone /> +91 9xxxx xxxx9
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Optimal Minds. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
