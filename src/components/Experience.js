import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "React Native Developer",
      company: "iSportz Inc.",
      year: "2023 - Present",
      responsibilities: [
        "Enhanced app performance by optimizing React Native components.",
        "Integrated third-party libraries and APIs to extend functionality.",
        "Developed reusable components for faster development cycles.",
      ],
    },
    {
      role: "Software Engineer",
      company: "CG-VAK Software and Exports",
      year: "2020 - 2023",
      responsibilities: [
        "Developed scalable and maintainable code for long-term stability.",
        "Collaborated with teams on application design and progress updates.",
        "Conducted thorough unit testing to ensure application stability.",
      ],
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Experience</h2>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{exp.role} at {exp.company}</h3>
            <p>{exp.year}</p>
            <ul>
              {exp.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
