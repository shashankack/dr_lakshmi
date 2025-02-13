import React from "react";
import "../styles/ServicesSection.scss";
import { motion } from "framer-motion";

const services = [
  {
    title: "Child Neuropsychiatric Disorders",
    description:
      "We provide specialized care for Autism, ADHD, Anxiety, Depression, and other childhood behavioral challenges with a holistic, multidisciplinary approach.",
  },
  {
    title: "Adult Neuropsychiatric Disorders",
    description:
      "From anxiety, depression, bipolar disorder, PTSD to addiction, we provide evidence-based treatment, counseling, and therapeutic support.",
  },
  {
    title: "Senior Neuropsychiatric Disorders",
    description:
      "For individuals above 50, we offer cognitive therapy and rehabilitation for dementia, elderly depression, and neurodegenerative conditions.",
  },
  {
    title: "Personalized Repetitive Transcranial Magnetic Stimulation (PrTMS)",
    description:
      "We offer advanced, non-invasive neuromodulation treatments for anxiety, depression, ADHD, addiction disorders, and more.",
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Services
      </motion.h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
