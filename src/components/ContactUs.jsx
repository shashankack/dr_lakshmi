import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/ContactUs.scss";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const contactRef = useRef(null);
  const detailsRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contactRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      detailsRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: detailsRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      formRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="contact-section" ref={contactRef}>
      <h2>Get in Touch</h2>

      <div className="map-container">
        <iframe
          title="Clinic Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509107!2d144.95592591531517!3d-37.81720997975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e5359c4e16b1!2s123%20Wellness%20Street!5e0!3m2!1sen!2sin!4v1614130193734!5m2!1sen!2sin"
          width="100%"
          allowFullScreen=""
          loading="lazy"
        />
      </div>

      <div className="contact-container">
        <div className="contact-details" ref={detailsRef}>
          <div className="detail-item">
            <FaMapMarkerAlt className="icon" />
            <h3>Our Location</h3>
            <p>📍 123 Wellness Street, Chennai</p>
          </div>

          <div className="detail-item">
            <FaPhoneAlt className="icon" />
            <h3>Call Us</h3>
            <p>📞 +91 98765 43210</p>
          </div>

          <div className="detail-item">
            <FaEnvelope className="icon" />
            <h3>Email Us</h3>
            <p>📧 contact@optimalminds.com</p>
          </div>

          <div className="detail-item">
            <FaClock className="icon" />
            <h3>Working Hours</h3>
            <p>🕒 Mon-Fri: 9 AM - 7 PM</p>
            <p>🕒 Sat-Sun: 10 AM - 5 PM</p>
          </div>
        </div>

        
        <div className="contact-form-container" ref={formRef}>
          <h3>Send Us a Message</h3>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
