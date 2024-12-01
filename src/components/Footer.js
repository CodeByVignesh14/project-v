import React from "react";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h4>Vignesh Balasubramaniyan</h4>
        <p>Mobile App Developer</p>
        <div className="footer-icons">
          <a href="https://linkedin.com/in/vignesh-balasubramaniyan" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:vignesh17881@gmail.com">
            <FaEnvelope />
          </a>
          <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
      <p>© 2024 Vignesh Balasubramaniyan. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
