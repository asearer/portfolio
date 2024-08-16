import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Layout.css'; // Ensure this path is correct

const Layout = ({ children }) => (
  <>
    <Navbar bg="light" expand="lg" className="navbar-neumorphic">
      <Navbar.Brand href="/">asearerdev</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="/">Home</Nav.Link> */}
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/skills">Skills</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="https://github.com/asearer" target="_blank" rel="noopener noreferrer">GitHub</Nav.Link>
          <Nav.Link href="https://codepen.io/asearer" target="_blank" rel="noopener noreferrer">CodePen</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Container className="my-4 neumorphic-card">
      {children}
    </Container>
    <footer className="footer-neumorphic text-center py-3">
      <p>Footer content here</p>
    </footer>
  </>
);

export default Layout;



