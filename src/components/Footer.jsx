import React, { useState } from "react";
import "../styles/Footer.css";
import logo from "../assets/wide_white_logo.png";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div class="footer">
      <div class="inner-footer">
        <div class="footer-items">
          <img src={logo}/>
        </div>

        <div class="footer-items">
          <h3>Quick Links</h3>
          <div class="border1"></div>
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

        <div class="footer-items">
          <h3>Services</h3>
          <div class="border1"></div>
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

        <div class="footer-items">
          <h3>Contact us</h3>
          <div class="border1"></div>
          <ul>
            <li>
              <i class="fa fa-map-marker" aria-hidden="true"></i>XYZ, abc
            </li>
            <li>
              <i class="fa fa-phone" aria-hidden="true"></i>123456789
            </li>
            <li>
              <i class="fa fa-envelope" aria-hidden="true"></i>xyz@gmail.com
            </li>
          </ul>

          <div class="social-media">
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fab fa-google-plus-square"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">Copyright &copy; Optimal Minds 2024.</div>
    </div>
  );
};

export default Footer;
