import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure this import is correct
import './Layout.css'; // Ensure this import path is correct

const Layout = ({ children }) => (
  <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">My App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Nav className="mr-auto">
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="/skills">Skills</Navbar.Link>
          <Navbar.Link href="/projects">Projects</Navbar.Link>
          <Navbar.Link href="https://github.com/asearer" target="_blank" rel="noopener noreferrer">GitHub</Navbar.Link>
          <Navbar.Link href="https://codepen.io/asearer" target="_blank" rel="noopener noreferrer">CodePen</Navbar.Link>
        </Navbar.Nav>
      </Navbar.Collapse>
    </Navbar>
    <Container className="my-4">
      {children}
    </Container>
    <footer className="bg-light text-center py-3">
      <p>Footer content here</p>
    </footer>
  </>
);

export default Layout;

