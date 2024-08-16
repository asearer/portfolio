import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
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
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">asearerdev</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link as={Link} to="/">Home</Nav.Link> */}
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link href="https://github.com/asearer" target="_blank" rel="noopener noreferrer">GitHub</Nav.Link>
            <Nav.Link href="https://codepen.io/asearer" target="_blank" rel="noopener noreferrer">CodePen</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      
    </header>
  );
};

export default Header;






