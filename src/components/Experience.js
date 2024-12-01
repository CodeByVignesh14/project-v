import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "React Native Developer",
      company: "iSportz Inc.",
      year: "2023-Present",
      details: [
        "Enhanced app performance by optimizing React Native components.",
        "Integrated third-party libraries and APIs for extended functionality.",
        "Developed reusable components for better maintainability.",
      ],
    },
    {
      role: "Software Engineer",
      company: "CG-VAK Software and Exports",
      year: "2020-2023",
      details: [
        "Developed scalable and maintainable code.",
        "Collaborated with teams for software design and development.",
        "Executed testing for improved app stability.",
      ],
    },
  ];

  return (
    <section className="experience" id="experience">
      <h2>Work Experience</h2>
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>{exp.role} - {exp.company}</h3>
          <p>{exp.year}</p>
          <ul>
            {exp.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </section>
  );
};

export default Experience;
