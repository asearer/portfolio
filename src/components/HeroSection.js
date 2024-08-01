import React, { useState } from 'react';
import './HeroSection.css'; // Ensure this CSS file includes styles for the HeroSection

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


const HeroSection = () => {
  const [showContact, setShowContact] = useState(false);

  const handleContactToggle = () => {
    setShowContact(prevState => !prevState);
  };

  return (
    <div className="hero-section">
      <h1>Welcome to My Portfolio</h1>
      <p>I am a motivated software developer specializing in JavaScript, HTML, CSS, and related web technologies.</p>
      <button className="contact-button" onClick={handleContactToggle}>
        {showContact ? 'Hide Contact Info' : 'Show Contact Info'}
      </button>

      {showContact && (
        <div className="contact-info">
          <p><FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:asearerdev@gmail.com">asearerdev@gmail.com</a></p>
          <p><FontAwesomeIcon icon={faPhone} /> Phone: (123) 456-7890</p>
          <p><FontAwesomeIcon icon={faLinkedin} /> LinkedIn: <a href="https://www.linkedin.com/in/alonzasearer/" target="_blank" rel="noopener noreferrer">Your LinkedIn Profile</a></p>
        </div>
      )}
    </div>
  );
};

export default HeroSection;




