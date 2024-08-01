import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Ensure your styles are imported

const Header = () => (
  <header className="neumorphic-card">
    <nav>
      <h1>My Portfolio</h1>
      <ul>
        <li><Link className="neumorphic-button" to="/">Home</Link></li>
        <li><Link className="neumorphic-button" to="/about">About</Link></li>
        <li><Link className="neumorphic-button" to="/skills">Skills</Link></li>
        <li><Link className="neumorphic-button" to="/projects">Projects</Link></li>
        <li><Link className="neumorphic-button" to="/blog">Blog</Link></li>
        <li><Link className="neumorphic-button" to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;


