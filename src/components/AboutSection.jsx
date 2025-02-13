import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, useNavigate } from "react-router-dom";
import "../styles/AboutSection.scss";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const nav = useNavigate();

  const handleRedirect = (link) => {
    nav(link);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    // GSAP Animations for About Section
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="about-section" ref={aboutRef}>
      <div className="about-container">
        {/* Image */}
        <div className="about-image" ref={imageRef}>
          <img src="https://placehold.co/1200x1080" alt="About Optimal Minds" />
        </div>

        {/* Text Content */}
        <div className="about-content" ref={contentRef}>
          <h2>About Optimal Minds</h2>
          <p>
            At Optimal Minds Brain Wellness Clinic, we provide compassionate,
            holistic psychiatric care, advanced interventions, and counseling to
            enhance overall well-being.
          </p>
          <p>
            We believe in ethical, science-backed treatments that address mental
            health conditions across all ages, from childhood neurodevelopmental
            disorders to adult anxiety, PTSD, addiction, and geriatric mental
            health.
          </p>

          {/* Links to Internal Pages */}
          <div className="about-links">
            <button
              onClick={() => handleRedirect("/about/founder")}
              className="about-link"
            >
              Our Founder’s Vision
            </button>
            <button
              onClick={() => handleRedirect("/about/mission")}
              className="about-link"
            >
              Our Approach & Mission
            </button>
            <button
              onClick={() => handleRedirect("/about/csr")}
              className="about-link"
            >
              Mental Health Awareness (CSR)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
