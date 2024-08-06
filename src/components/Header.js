import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="neumorphic-card">
      <nav>
        <h1>asearerdev</h1>
        <ul>
          <li><Link className="neumorphic-button" to="/">Home</Link></li>
          <li><Link className="neumorphic-button" to="/about">About</Link></li>
          <li><Link className="neumorphic-button" to="/skills">Skills</Link></li>
          <li><Link className="neumorphic-button" to="/projects">Projects</Link></li>
          {/* <li><Link className="neumorphic-button" to="/blog">Blog</Link></li> */}
          {/* <li><Link className="neumorphic-button" to="/contact">Contact</Link></li> */}
          {/* <li><button className="neumorphic-button" onClick={handleLoginClick}>Admin</button></li> */}
        </ul>
      </nav>

      {/* Login Modal */}
      {isModalOpen && (
        <div className="login-modal">
          <h2>Login</h2>
          <form>
            <label>
              Username
              <input type="text" name="username" />
            </label>
            <label>
              Password
              <input type="password" name="password" />
            </label>
            <button type="submit">Login</button>
            <button type="button" onClick={handleCloseModal}>Close</button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;




