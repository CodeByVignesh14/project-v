import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "iSportz",
    description: "A sports fan engagement app with real-time updates, personalized feeds, and community features.",
    tech: "React Native",
    link: "#",
  },
  {
    name: "Invafresh",
    description: "An app for demand forecasting in fresh food retail, improving accuracy and inventory control.",
    tech: "React Native",
    link: "#",
  },
  {
    name: "HBCU Spark",
    description: "A college search app with advanced filtering, increasing user engagement and accessibility.",
    tech: "React Native",
    link: "#",
  },
  {
    name: "GoReedem",
    description: "A ticket redemption app for merchants, reducing processing time by 25%.",
    tech: "Ionic",
    link: "#",
  },
  {
    name: "Espresso Data Storytelling App",
    description: "A ticket redemption app for merchants, reducing processing time by 25%.",
    tech: "Ionic",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <span>{project.tech}</span>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
