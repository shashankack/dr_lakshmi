import React from "react";
import { motion } from "framer-motion";
import "../styles/AboutFounder.scss";

const AboutFounder = () => {
  return (
    <section className="about-founder">
      <div className="founder-container">
        {/* Founder Image */}
        <motion.div
          className="founder-image"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="https://placehold.co/600x800" alt="Dr. Lakshmi Sanjay" />
        </motion.div>

        {/* Founder Text Content */}
        <motion.div
          className="founder-content"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Dr. Lakshmi Sanjay - Founder & Director</h2>
          <p>
            Dr. Lakshmi Sanjay is the visionary Founder and Director of
            <strong> Optimal Minds Brain Wellness Clinic</strong>. She is a
            <strong> renowned psychiatrist, mental health coach, and advocate</strong>
            for holistic psychiatric care.
          </p>
          <p>
            With years of experience in <strong>neuropsychiatry and psychotherapy</strong>,
            Dr. Lakshmi has helped countless individuals navigate mental
            health challenges with a <strong>compassionate, science-backed approach</strong>.
          </p>
        </motion.div>
      </div>

      {/* Vision Section */}
      <div className="vision-section">
        <h3>🔹 Her Vision</h3>
        <p>
          Dr. Lakshmi believes in <strong>mental wellness beyond treating disorders</strong>.
          Her mission is to foster emotional resilience, self-awareness, and long-term well-being.
        </p>
        <blockquote>
          <em>
            "Mental health is not just about removing distress—it's about
            building resilience, emotional strength, and a fulfilling life."
          </em>
        </blockquote>
        <img src="https://placehold.co/1200x600" alt="Founder Vision" />
      </div>

      {/* Expertise Section */}
      <div className="expertise-section">
        <h3>🔹 Her Expertise</h3>
        <p>Dr. Lakshmi specializes in:</p>
        <ul>
          <li>✅ Child & Adolescent Mental Health - Autism, ADHD, Behavioral Issues</li>
          <li>✅ Adult Neuropsychiatric Disorders - Depression, Anxiety, Bipolar, OCD, PTSD</li>
          <li>✅ Addiction Recovery - Internet, Gaming, Alcohol & Drug Addiction</li>
          <li>✅ Senior Mental Health - Dementia, Elderly Depression, Cognitive Disorders</li>
        </ul>
        <img src="https://placehold.co/1200x500" alt="Founder Expertise" />
      </div>

      {/* Contributions Section */}
      <div className="contributions-section">
        <h3>🔹 Contributions & Initiatives</h3>
        <p>
          🌱 <strong>Pioneering Mental Health Awareness:</strong> Conducts
          **seminars, corporate wellness programs, faculty training** to spread
          awareness.
        </p>
        <p>
          💡 <strong>"Heart to Heart" Campaign:</strong> Aims to improve mental
          well-being in **students & faculty** through structured programs.
        </p>
        <p>
          📖 <strong>Research & Education:</strong> Works towards integrating
          **modern psychiatry with traditional healing techniques**.
        </p>
        <img src="https://placehold.co/1200x600" alt="Founder Contributions" />
      </div>

      {/* Message Section */}
      <div className="message-section">
        <h3>🔹 Message from Dr. Lakshmi Sanjay</h3>
        <blockquote>
          <em>
            "Every individual deserves to live a life free from mental distress. My mission
            is to provide compassionate, evidence-based, and holistic psychiatric care that
            not only heals but also empowers individuals to lead fulfilling lives."
          </em>
        </blockquote>
      </div>
    </section>
  );
};

export default AboutFounder;
