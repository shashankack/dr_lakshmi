import { useState } from "react";
import logo from "../../assets/white_logo.png";
import "./Header.scss";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className="navbar">
      <nav className="navbar-left">
        <ul>
          <li>
            <a href="#/">Home</a>
          </li>
          <li>
            <a href="#/about-us">About Us</a>
          </li>
          <li>
            <a href="#/services">Services</a>
          </li>
        </ul>
      </nav>
      <nav className="navbar-center">
        <a href="#/">
          <img src={logo} className="logo" />
        </a>
      </nav>
      <div className="navbar-right">
        <ul>
          <li>
            <a href="#/blogs">Blogs</a>
          </li>
          <li>
            <a href="#/login">Testimonials</a>
          </li>
          <li>
            <a href="#/contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
