import React from "react";
import HeroImage from "../assets/hero_img.png";
import reel from "../assets/insta-reel.mp4";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        
        <div className="hero-image">
          <img src={HeroImage} alt="Hero Section" />
        </div>

        <div className="video-container">
          <video src={reel} playsInline autoPlay muted loop className="drlakshmi-vid" />
        </div>

        <div className="hero-text">
          <h1>
            Align with the Frequency of <span>Your Greatest Truth</span>
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            cumque nam voluptate alias, soluta maiores. Ad, reiciendis magni quo
            laborum error velit rerum ratione non! Est quod optio aliquid
            quibusdam.
          </p>
          <div className="hero-buttons">
            <nav>
              <ul>
                <li>
                  home<span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </li>
                <li>
                  products<span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
