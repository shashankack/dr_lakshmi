import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/AboutMission.scss";
import { FaRegLightbulb, FaUserCheck, FaBrain, FaHandsHelping } from "react-icons/fa";
import BackButton from "../components/BackButton";

gsap.registerPlugin(ScrollTrigger);

const AboutMission = () => {
  const sections = useRef([]);

  useEffect(() => {
    sections.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: index * 0.2,
        }
      );
    });
  }, []);

  return (
    <section className="about-mission">
      <BackButton />
      <div className="mission-container" ref={(el) => sections.current.push(el)}>
        <h2>Our Approach & Mission</h2>
        <p>
          At <strong>Optimal Minds Brain Wellness Clinic</strong>, we believe that **mental health care should be holistic, ethical, and tailored to individual needs**.
          Our mission is to **bridge the gap between neuroscience and compassionate therapy**, ensuring that every person receives **comprehensive and evidence-based treatment**.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="bento-grid">
        {/* Core Principles */}
        <div className="grid-item large" ref={(el) => sections.current.push(el)}>
          <FaRegLightbulb className="icon" />
          <h3>Our Core Principles</h3>
          <p>
            We prioritize **personalized care, science-backed treatments, and multidisciplinary healing**, ensuring early intervention and long-term mental well-being.
          </p>
        </div>

        {/* Holistic Approach */}
        <div className="grid-item" ref={(el) => sections.current.push(el)}>
          <FaUserCheck className="icon" />
          <h3>Holistic & Patient-Centered Care</h3>
          <p>We treat the **whole person** by addressing the mind, body, and brain for complete recovery.</p>
        </div>

        {/* Breaking the Stigma */}
        <div className="grid-item" ref={(el) => sections.current.push(el)}>
          <FaBrain className="icon" />
          <h3>Breaking the Stigma</h3>
          <p>We actively promote mental health awareness through **campaigns, corporate wellness programs, and educational initiatives**.</p>
        </div>

        {/* Innovation & Research */}
        <div className="grid-item large" ref={(el) => sections.current.push(el)}>
          <FaHandsHelping className="icon" />
          <h3>Innovation & Research</h3>
          <p>
            We continuously evolve with **advancements in psychiatry, neuroscience, and behavioral science**, ensuring access to cutting-edge treatments.
          </p>
          <img src="https://placehold.co/1200x500" alt="Innovation in Mental Health" />
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
