import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/FAQSection.scss";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What therapies do you offer?",
    answer: "We offer a range of therapies including Cognitive Behavioral Therapy (CBT), Psychotherapy, PrTMS, and more.",
  },
  {
    question: "How do I book a session?",
    answer: "You can book an appointment by calling us, visiting our website, or filling out our contact form.",
  },
  {
    question: "Is therapy covered by insurance?",
    answer: "Coverage depends on your insurance provider. We recommend checking with them for details.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      faqRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".faq-section",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            ref={(el) => (faqRefs.current[index] = el)}
          >
            <h3>{faq.question}</h3>
            {openIndex === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
