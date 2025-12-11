import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>&copy; {new Date().getFullYear()} <span className="text-secondary">asearer.dev</span>. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
