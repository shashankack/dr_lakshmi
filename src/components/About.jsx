import React from "react";
import "../styles/About.css";
import about_img from "../assets/about_img.png";

const AboutMe = () => {
  const statsData = [
    { number: Math.floor(Math.random() * 20) + 1, text: "Years of Experience" },
    {
      number: Math.floor(Math.random() * 100000) + 1,
      text: "Lives Transformed",
    },
    {
      number: Math.floor(Math.random() * 10) + 1 + "+",
      text: "Services Options",
    },
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={about_img} alt="About Me" />
        </div>
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
            nobis illo, ipsa minima maxime laudantium eligendi vel, harum ipsum
            libero similique omnis nihil cum dicta.
          </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <div className="stats-container">
            {statsData.map((data, index) => (
              <div key={index} className="stat-item">
                <h3>{data.number}</h3>
                <p>{data.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
