import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/ServicesSection.scss";
import { services } from "../../public/dummyData";

gsap.registerPlugin(ScrollTrigger);


const ServicesSection = () => {
  const servicesRefs = useRef([]);

  useEffect(() => {
    servicesRefs.current.forEach((service, index) => {
      const imgFromX = index % 2 === 0 ? -200 : 200; 
      const textFromX = index % 2 === 0 ? 200 : -200;

      gsap.fromTo(
        service.img,
        { x: imgFromX, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: service.img,
            start: "top bottom-=200",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        service.text,
        { x: textFromX, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: service.text,
            start: "top bottom-=200",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <section className="services-section">
      <h2>Our Specialized Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div
            className="service"
            key={service.id}
            ref={(el) => (servicesRefs.current[index] = el)}
          >
            <img src={service.img} alt={service.title} ref={(el) => (service.img = el)} />
            <div ref={(el) => (service.text = el)}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
