import React, { useState } from 'react';
import './HeroSection.css'; 

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';


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
          <p><FontAwesomeIcon icon={faLinkedin} /> LinkedIn: <a href="https://www.linkedin.com/in/alonzasearer/" target="_blank" rel="noopener noreferrer">Alonza Searer</a></p>
          <p><FontAwesomeIcon icon={faXTwitter} /> : <a href="https://x.com/AlonzaSearer" target="_blank" rel="noopener noreferrer">Alonza Searer</a></p>
        <p><FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:asearerdev@gmail.com">asearerdev@gmail.com</a></p>
        <p><FontAwesomeIcon icon={faFacebook} /> Facebook: <a href="https://www.facebook.com/ASearerDev" target="_blank" rel="noopener noreferrer">ASearerDev</a></p>
        {/* <p><FontAwesomeIcon icon={faPhone} /> Phone: (123) 456-7890</p> */}
        
      </div>
      
      )}
    </div>
  );
};

export default HeroSection;




