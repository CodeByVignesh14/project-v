import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>About Me</h2>
        <p>
          I am a highly proficient Software Engineer with 4+ years of industrial experience in front-end, back-end, and mobile app development. Skilled in React Native, JavaScript, and other modern technologies, I excel in building scalable and maintainable applications.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
