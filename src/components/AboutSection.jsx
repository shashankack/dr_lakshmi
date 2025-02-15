import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import "../styles/AboutSection.scss";
import { FaUserMd, FaBrain, FaHandsHelping } from "react-icons/fa";
import aboutImg from "../assets/about-section.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const buttonsRef = useRef([]);
  const navigate = useNavigate();

  const handleRedirect = (link) => {
    navigate(link);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -100 },
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
      { opacity: 0, x: 100 },
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

    buttonsRef.current.forEach((button, index) => {
      gsap.fromTo(
        button,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section className="about-section" ref={aboutRef}>
      <div className="about-container">
        <div className="about-image" ref={imageRef}>
          <img src={aboutImg} alt="About Optimal Minds" />
        </div>

        <div className="about-content" ref={contentRef}>
          <h2>Why Choose Optimal Minds?</h2>
          <p>
            At Optimal Minds Brain Wellness Clinic, we provide compassionate,
            holistic psychiatric care through advanced interventions and
            counseling, offering ethical, science-backed treatments for
            individuals of all ages, from childhood neurodevelopmental disorders
            to adult anxiety, PTSD, addiction, and geriatric mental health.
          </p>

          <div className="about-highlights">
            <div className="top">
              <div className="highlight-item">
                <FaBrain className="icon" />
                <p>Advanced Science-Based Treatments</p>
              </div>
            </div>
            <div className="bottom">
              <div className="highlight-item">
                <FaUserMd className="icon" />
                <p>Expert Mental Health Professionals</p>
              </div>
              <div className="highlight-item">
                <FaHandsHelping className="icon" />
                <p>Holistic & Compassionate Care</p>
              </div>
            </div>
          </div>

          <div className="about-links">
            <button
              onClick={() => handleRedirect("/about/founder")}
              className="about-link"
              ref={(el) => (buttonsRef.current[0] = el)}
            >
              Our Founder’s Vision
            </button>
            <button
              onClick={() => handleRedirect("/about/mission")}
              className="about-link"
              ref={(el) => (buttonsRef.current[1] = el)}
            >
              Our Approach & Mission
            </button>
            <button
              onClick={() => handleRedirect("/about/csr")}
              className="about-link"
              ref={(el) => (buttonsRef.current[2] = el)}
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
