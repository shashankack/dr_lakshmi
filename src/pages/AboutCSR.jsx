import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/AboutCSR.scss";
import { FaHeartbeat, FaBrain, FaChalkboardTeacher, FaUsers } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const AboutCSR = () => {
  const csrRef = useRef(null);
  const sections = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      csrRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: csrRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

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
            start: "top 85%",
            toggleActions: "play none none none",
          },
          delay: index * 0.2,
        }
      );
    });
  }, []);

  return (
    <section className="about-csr" ref={csrRef}>
      <div className="csr-container">
        <h2>Our Commitment to Mental Health Awareness</h2>
        <p>
          At <strong>Optimal Minds Brain Wellness Clinic</strong>, we believe that
          mental health awareness is the foundation of a healthier society. Our CSR
          initiatives focus on education, early intervention, and destigmatizing mental health care.
        </p>
      </div>

      {/* Grid Section */}
      <div className="csr-grid">
        {/* Heart to Heart Campaign */}
        <div className="csr-section" ref={(el) => sections.current.push(el)}>
          <FaHeartbeat className="icon" />
          <h3>The "Heart to Heart" Campaign</h3>
          <p>
            Our flagship initiative enhances mental well-being in educational institutions. We conduct
            interactive workshops, awareness sessions, and screenings to foster an emotionally healthy learning environment.
          </p>
        </div>

        {/* Stress & Addiction Awareness */}
        <div className="csr-section" ref={(el) => sections.current.push(el)}>
          <FaBrain className="icon" />
          <h3>Stress Management & Addiction Awareness</h3>
          <p>
            With rising stress, anxiety, and addiction-related challenges, we focus on educating individuals on stress reduction,
            addiction awareness, and corporate wellness strategies to build emotional resilience.
          </p>
        </div>

        {/* Faculty & Leadership Training */}
        <div className="csr-section" ref={(el) => sections.current.push(el)}>
          <FaChalkboardTeacher className="icon" />
          <h3>Faculty & Leadership Training</h3>
          <p>
            Educators and corporate leaders play a vital role in mental health advocacy. Our training programs equip them with
            the knowledge and tools to support mental well-being in their communities.
          </p>
        </div>

        {/* Impact */}
        <div className="csr-section" ref={(el) => sections.current.push(el)}>
          <FaUsers className="icon" />
          <h3>Our Impact</h3>
          <p>
            Over 1000 individuals have benefited from our programs, including students, corporate professionals, and educators.
            We continue to collaborate with institutions to build a more informed and mentally resilient society.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCSR;
