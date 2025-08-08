import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'education', label: 'Education' },
    { to: 'skills', label: 'Skills' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="home" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>
          SaiLokesh
        </Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={isOpen ? 'navbar-links active' : 'navbar-links'}>
        {navLinks.map(link => (
          <li key={link.to}>
            <Link
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              activeClass="active"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
