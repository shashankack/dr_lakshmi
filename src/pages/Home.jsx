import React from "react";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import Testimonials from "../components/Testimonials";
import FAQSection from "../components/FAQSection";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <Testimonials />
      <FAQSection />
      <ContactUs />
    </>
  );
};

export default Home;
