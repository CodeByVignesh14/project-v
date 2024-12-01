import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about-section" id="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
        <p>
          I am a <span className="highlight">highly skilled Mobile App Developer</span> with 4+ years of experience in front-end and back-end technologies. 
          My expertise includes <span className="highlight">React Native, JavaScript, and scalable software solutions</span>. 
          I strive to create intuitive and engaging applications that deliver real value to users.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
