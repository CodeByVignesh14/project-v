import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaBootstrap, FaDatabase } from "react-icons/fa";
import { SiFirebase, SiJavascript, SiNestjs, SiKeycloak } from "react-icons/si";

const Skills = () => {
  const techSkills = [
    { name: "React Native", icon: <FaReact /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "NestJS", icon: <SiNestjs /> },
    { name: "React JS", icon: <FaReact /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3 /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Keycloak", icon: <SiKeycloak /> },
    { name: "SQL", icon: <FaDatabase /> },
  ];

  const softSkills = ["Leadership", "Adaptability", "Responsibility", "Teamwork"];

  return (
    <section className="skills" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skills-tech">
            <h3>Tech Stack</h3>
            <div className="skills-icons">
              {techSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="skill-card"
                >
                  {skill.icon}
                  <p>{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="skills-soft">
            <h3>Soft Skills</h3>
            <ul>
              {softSkills.map((softSkill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  {softSkill}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
