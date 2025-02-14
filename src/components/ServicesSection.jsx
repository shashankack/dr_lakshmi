import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/ServicesSection.scss";

import serviceImg1 from "../assets/mental-health-1.jpg";
import serviceImg2 from "../assets/mental-health-2.jpg";
import serviceImg3 from "../assets/mental-health-3.jpg";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Child Neuropsychiatric Disorders",
    description:
      "We provide specialized care for Autism, ADHD, Anxiety, Depression, and other childhood behavioral challenges with a holistic, multidisciplinary approach.",
    img: serviceImg1,
  },
  {
    title: "Adult Neuropsychiatric Disorders",
    description:
      "From anxiety, depression, bipolar disorder, PTSD to addiction, we provide evidence-based treatment, counseling, and therapeutic support.",
    img: serviceImg2,
  },
  {
    title: "Senior Neuropsychiatric Disorders",
    description:
      "For individuals above 50, we offer cognitive therapy and rehabilitation for dementia, elderly depression, and neurodegenerative conditions.",
    img: serviceImg3,
  },
  {
    title: "Personalized Repetitive Transcranial Magnetic Stimulation (PrTMS)",
    description:
      "We offer advanced, non-invasive neuromodulation treatments for anxiety, depression, ADHD, addiction disorders, and more.",
    img: serviceImg1,
  },
];

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
            key={index}
            className={`service ${index % 2 === 0 ? "" : "reverse"}`}
          >
            <div
              className="image-container"
              ref={(el) =>
                (servicesRefs.current[index] = {
                  img: el,
                  text: servicesRefs.current[index]?.text,
                })
              }
            >
              <img src={service.img} alt={service.title} />
            </div>

            <div
              className="text-container"
              ref={(el) => (servicesRefs.current[index].text = el)}
            >
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
