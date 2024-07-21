import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ButtonStyle from '../button/Button';
import './Navbar.css';
import logo from '../../../assets/images/logo.png';

const NavBar = () => {
    return (
        <Navbar expand="lg" bg="transparent" className="navbar">
            <Container>
                <Navbar.Brand to="#">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                        <span>DIVERGE AI</span>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto color-white">
                        <Nav.Link to="/">Home</Nav.Link>
                        <Nav.Link to="/about">About</Nav.Link>
                        <Nav.Link to="/services">Services</Nav.Link>
                        <Nav.Link to="/project">Projects</Nav.Link>
                        <Nav.Link to="/pages">Pages</Nav.Link>
                        <Nav.Link to="/contact">Contact Us</Nav.Link>
                        <ButtonStyle />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
