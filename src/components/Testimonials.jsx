import React from "react";
import "../styles/Testimonials.scss";
import { motion } from "framer-motion";

const testimonials = [
  "Optimal Minds helped me overcome my anxiety. Their approach was holistic, and I felt truly heard and cared for.",
  "The therapy sessions at Optimal Minds have been life-changing. The team is incredibly professional and compassionate.",
  "Highly recommended for anyone struggling with mental health. They provide modern treatments while making sure you're comfortable throughout the process.",
  "I was skeptical about therapy at first, but this clinic changed my perception. The personalized care and attention are remarkable.",
  "The PrTMS treatment was a game changer for me. I felt significant improvements in my cognitive function and overall mental clarity.",
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        What Our Patients Say
      </motion.h2>
      <div className="testimonials-grid">
        {testimonials.map((review, index) => (
          <motion.div
            className="testimonial-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <p>"{review}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
