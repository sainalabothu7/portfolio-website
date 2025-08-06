import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import './About.css';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Me - SaiLokesh Nalabothu</title>
      </Helmet>
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="about-title">About Me</h1>
        <div className="about-content">
          <p>
            I'm a Computer Science Engineering student with a strong passion for the intersection of design and development. My journey began with a fascination for how things work, which naturally led me to programming. However, I quickly realized that a great product isn't just about functional code; it's about creating an intuitive and beautiful user experience. This blend of logic and creativity is where I thrive.
          </p>
          <p>
            My approach is driven by a relentless curiosity. I am constantly exploring new tools, frameworks, and design trends to stay at the forefront of web technology. Whether it's mastering a new JavaScript library, diving into responsive design principles, or understanding the nuances of UI animations, I am committed to continuous learning and improvement.
          </p>
          <p>
            Looking ahead, my long-term vision is to be part of innovative projects that solve real-world problems. I am passionate about the startup ecosystem and hope to one day build or contribute to a company that makes a tangible impact. I believe in the power of collaboration and am always eager to work with like-minded individuals to bring ambitious ideas to life.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default About;
