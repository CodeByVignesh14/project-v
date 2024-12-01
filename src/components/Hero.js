import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import developerGif from "../assets/images/Devhero.png";
const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <motion.div
        className="hero-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Left Content */}
        <div className="hero-content">
          <h1>
            Hello, I'm <span className="highlight">Vignesh Balasubramaniyan</span>
          </h1>
          <p className="subtitle">
            A Skilled <span className="highlight">Mobile App Developer</span>
            <br />
            Passionate About Building Modern and Scalable Applications
          </p>
          <motion.div
            className="hero-icons"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <a
              href="https://linkedin.com/in/vignesh-balasubramaniyan-525b70194"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:vignesh17881@gmail.com">
              <FaEnvelope />
            </a>
            <a href="tel:+916374867160">
              <FaPhone />
            </a>
          </motion.div>
          <a href="#projects">
            <motion.button
              className="cta-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Discover My Work
            </motion.button>
          </a>
        </div>

        {/* Right Image */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <img
            src={developerGif}
            alt="Developer at Work"
            className="gif-image"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
