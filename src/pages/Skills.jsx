import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import './Skills.css';

const skills = [
  'UI/UX Design', 'Web Development', 'HTML/CSS', 'JavaScript', 'React.js',
  'Node.js', 'MongoDB', 'Progressive Web Apps', 'UI Animations', 'Cybersecurity'
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <>
      <Helmet>
        <title>My Skills - SaiLokesh Nalabothu</title>
      </Helmet>
      <div className="skills-container">
        <h1 className="skills-title">My Skills</h1>
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-tag"
              variants={itemVariants}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
