import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget.js';
import {contexto} from './Context/MiContexto';
import {Nav, Navbar as NavbarBS, Container} from 'react-bootstrap'

const Navbar = () => {

   const {calcularCantidad} = useContext(contexto);

    return (
        <NavbarBS expand="lg">
            <Container>
                <NavbarBS.Brand href="#home">Home</NavbarBS.Brand>
                <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
                <NavbarBS.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/categoria/Indumentaria" className="nav__link">Indumentaria</Link>   
                    <Link to="/categoria/Calzado" className="nav__link">Calzado</Link>
                    <Link to="/categoria/Raquetas" className="nav__link">Raquetas</Link>  
                </Nav>
                </NavbarBS.Collapse>
            </Container>
            <Link to="/carrito">
                <CartWidget />
                {calcularCantidad()}
            </Link>
        </NavbarBS>
       /* <nav className="nav">
        </nav> */
    )
}

export default Navbar