import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaBootstrap, FaDatabase } from "react-icons/fa";
import { SiFirebase, SiJavascript, SiNestjs, SiKeycloak } from "react-icons/si";

const skills = [
  { name: "React Native", icon: <FaReact /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "NestJS", icon: <SiNestjs /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3 /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Keycloak", icon: <SiKeycloak /> },
  { name: "SQL", icon: <FaDatabase /> },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="icon-container">{skill.icon}</div>
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
