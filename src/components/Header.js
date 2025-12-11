import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
    const location = useLocation();

    return (
        <header className="site-header">
            <Navbar expand="lg" variant="dark" className="custom-navbar">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="brand-logo">
                        <span className="text-accent">asearer</span>.dev
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto nav-links">
                            <Nav.Link as={Link} to="/" active={location.pathname === '/'}>Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" active={location.pathname === '/about'}>About</Nav.Link>
                            <Nav.Link as={Link} to="/skills" active={location.pathname === '/skills'}>Skills</Nav.Link>
                            <Nav.Link as={Link} to="/languages" active={location.pathname === '/languages'}>Languages</Nav.Link>
                            <Nav.Link as={Link} to="/projects" active={location.pathname === '/projects'}>Projects</Nav.Link>
                            <div className="nav-divider"></div>
                            <Nav.Link href="https://github.com/asearer" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </Nav.Link>
                            <Nav.Link href="https://codepen.io/asearer" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-codepen"></i>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
