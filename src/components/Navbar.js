import React from 'react';
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget.js';
import {Nav, Container} from 'react-bootstrap'

const Navbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/categoria/Indumentaria" className="nav__link">Indumentaria</Link>   
                    <Link to="/categoria/Calzado" className="nav__link">Calzado</Link>
                    <Link to="/categoria/Raquetas" className="nav__link">Raquetas</Link>  
                </Nav>
                </Navbar.Collapse>
            </Container>
            <Link to="/carrito">
                <CartWidget />
            </Link>
        </Navbar>
       /* <nav className="nav">
        </nav> */
    )
}

export default Navbar