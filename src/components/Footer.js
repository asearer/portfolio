import React from 'react';

const Footer = () => (
  <footer>
    <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    <div className="social-links">
      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
      {/* Add other social links as needed */}
    </div>
  </footer>
);

export default Footer;
