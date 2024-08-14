import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Header.css'; // Ensure this CSS file includes any additional styles

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
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link href="https://github.com/asearer" target="_blank" rel="noopener noreferrer">GitHub</Nav.Link>
            <Nav.Link href="https://codepen.io/asearer" target="_blank" rel="noopener noreferrer">CodePen</Nav.Link>
            {/* Add login button if needed */}
            {/* <Nav.Link onClick={handleLoginClick}>Admin</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Login Modal */}
      <Modal show={isModalOpen} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" id="username" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" id="password" className="form-control" />
            </div>
            <Button variant="primary" type="submit">Login</Button>
            <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          </form>
        </Modal.Body>
      </Modal>
    </header>
  );
};

export default Header;






