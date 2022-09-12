import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import FreddyboyLogo from '../imgs/freddyboylogo.png';
import FreddyboyGif from '../imgs/fb_logo.gif'
import './navbar.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar className="myYellow" variant="light" sticky="top" expand="lg" collapseOnSelect>
            <Navbar.Brand>
                <Link to="/">
                    <img id="fbLogo" className="static" src={FreddyboyLogo} alt="freddyboy" />
                    <img id="fbgif" className="active" src={FreddyboyGif} alt="freddyboy gif" />
                </Link>
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="navbar-end">
                    <Nav.Link href="/music" className="navOptions">music</Nav.Link>
                    <Nav.Link href="/about" className="navOptions">about</Nav.Link>
                    <Nav.Link href="https://spiritgoth.com/products/sg33-freddyboy-vignette002" className="navOptions">merch</Nav.Link>
                    <Nav.Link href="/contact" className="navOptions">contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
}

export default Navigation;