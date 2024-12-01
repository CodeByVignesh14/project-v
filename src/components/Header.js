import React from "react";
import { motion } from "framer-motion";
import developerGif from "../assets/images/developer.gif";
const Header = () => {
  return (
    <motion.header
      className="header"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <nav>
      <div style={{ display: 'flex',
        justifyContent:'space-between',alignItems:'center'}}>
      <div style={{ display: 'flex',
        justifyContent:'space-between',alignItems:'center'}}>
      <h1>VB</h1>
      <img
            src={developerGif}
            alt="Developer at Work"
            className="gif-image"
          />
      </div>
    
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
     
      </nav>
    </motion.header>
  );
};

export default Header;
