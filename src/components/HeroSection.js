import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './HeroSection.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faXTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Typewriter = ({ text, delay = 50 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

const HeroSection = () => {
  return (
    <motion.section
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container hero-container">
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ y: -20, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Building Digital <span className="highlight">
              <Typewriter text="Experiences" delay={150} />
            </span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            Hi, I’m Alonza Searer. I create custom software, websites, and mobile apps to help businesses grow and bring ideas to life. Let’s connect and build something impactful together!
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Link to="/projects" className="btn-primary">View My Work</Link>
            <Link to="/about" className="btn-outline">About Me</Link>
            <a href="mailto:asearerdev@gmail.com" className="btn-outline">Contact Me</a>
          </motion.div>

          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <a href="https://github.com/asearer" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/alonzasearer/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.facebook.com/asearerdev/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://x.com/AlonzaSearer" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="mailto:asearerdev@gmail.com" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </motion.div>
        </div>

        <div className="hero-visual">
          <motion.div
            className="profile-image-container"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="/assets/profile-photo.png"
              alt="Alonza Searer"
              className="profile-image"
            />
            <div className="profile-glow-ring"></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
