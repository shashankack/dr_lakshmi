import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import "../styles/HeroSection.scss";

import brainVid from "../assets/videos/brain.mp4";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <video style={{
        height: "100vh",
      }}
        className="background-video"
        src={brainVid}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="overlay"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Holistic Psychiatric Care for Your Well-Being
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Discover how a holistic approach to brain health can make a
          difference. Join us at Optimal Minds Brain Wellness Clinic in Adyar,
          Chennai.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="cta-buttons"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <a href="/appointments" className="btn primary">
            Book an Appointment
          </a>
          <a href="/services" className="btn secondary">
            Learn More
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
