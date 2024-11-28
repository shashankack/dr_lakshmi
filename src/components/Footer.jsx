import React, { useState } from "react";
import "../styles/Footer.css";
import logo from "../assets/wide_white_logo.png";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="footer">
      <div className="inner-footer">
        <div className="footer-items">
          <img src={logo}/>
        </div>

        <div className="footer-items">
          <h3>Quick Links</h3>
          <div className="border1"></div>
          <ul>
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

        <div className="footer-items">
          <h3>Services</h3>
          <div className="border1"></div>
          <ul>
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

        <div className="footer-items">
          <h3>Contact us</h3>
          <div className="border1"></div>
          <ul>
            <li>
              <i className="fa fa-map-marker" aria-hidden="true"></i>XYZ, abc
            </li>
            <li>
              <i className="fa fa-phone" aria-hidden="true"></i>123456789
            </li>
            <li>
              <i className="fa fa-envelope" aria-hidden="true"></i>xyz@gmail.com
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
