import React from 'react';
import { Link } from 'react-router-dom';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Home.css';
import { Helmet } from 'react-helmet';

const Home = () => {
  const [text] = useTypewriter({
    words: ['UI/UX Designer', 'Web Developer'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <>
      <Helmet>
        <title>SaiLokesh Nalabothu - Home</title>
      </Helmet>
      <motion.div
        className="home-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="home-content">
          <p className="greeting">Hi, I’m</p>
          <h1 className="full-name">SaiLokesh Nalabothu</h1>
          <h2 className="title">
            A <span className="highlight">{text}</span>
            <Cursor cursorColor='#64ffda' />
          </h2>
          <p className="description">
            Passionate developer crafting beautiful, responsive websites with cutting-edge technology.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-btn">Hire Me</Link>
            <Link to="/contact" className="cta-btn secondary">Let's Talk</Link>
            <a href="/MyResume.pdf" download className="cta-btn">Download Resume</a>
          </div>
          <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          </div>
        </div>
        <div className="home-image">
          <img src="https://via.placeholder.com/400" alt="SaiLokesh Nalabothu" />
        </div>
      </motion.div>
    </>
  );
};

export default Home;
