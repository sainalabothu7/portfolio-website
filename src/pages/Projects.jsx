import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import './Projects.css';

const projects = [
  {
    name: 'Smart Attendance System',
    tech: ['React.js', 'Node.js', 'MongoDB', 'OpenCV'],
    description: 'An AI-powered platform that uses face recognition for marking student attendance, reducing manual effort.',
    github: 'https://github.com/adoreproject',
    live: '#'
  },
  {
    name: 'Portfolio Website',
    tech: ['React.js', 'Framer Motion', 'CSS'],
    description: 'A responsive personal portfolio website to showcase my skills, projects, and journey as a developer.',
    github: '#',
    live: '#'
  },
    {
    name: 'E-commerce Platform',
    tech: ['React.js', 'Redux', 'Firebase'],
    description: 'A fully functional e-commerce site with product listings, a shopping cart, and payment integration.',
    github: '#',
    live: '#'
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
        <title>My Projects - SaiLokesh Nalabothu</title>
      </Helmet>
      <div className="projects-container">
        <h1 className="projects-title">Projects</h1>
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
            >
              <div className="project-header">
                <h2 className="project-name">{project.name}</h2>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <ul className="project-tech-list">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Projects;
