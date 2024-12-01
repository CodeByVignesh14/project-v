import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "iSportz",
    description: "Sports fan engagement app with real-time updates.",
    tech: "React Native",
  },
  {
    name: "Invafresh",
    description: "Mobile app for demand forecasting in fresh food retail.",
    tech: "React Native",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <span>{project.tech}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
