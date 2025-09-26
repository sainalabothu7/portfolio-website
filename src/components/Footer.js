import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>&copy; 2024 Jules Verne. All rights reserved.</p>
        <p>A journey through narrative and code.</p>
      </div>
      <div className="footer-socials">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
}

export default Footer;