import React, {useContext} from 'react';
import CartWidget from './CartWidget.js';
import {contexto} from '../Context/MiContexto';
import {Nav, Navbar as NavbarBS, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom';

const Navbar = () => {

   const {calcularCantidad} = useContext(contexto);

return (
        <NavbarBS expand="lg">
            <Container>
                <div>
                <Link to="/" className="nav__link">Home</Link>
                </div>
                <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
                <NavbarBS.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                   <Link to="/categoria/Indumentaria" className="nav__link">Indumentaria</Link>  
                   <Link to="/categoria/Calzado" className="nav__link">Calzado</Link>  
                   <Link to="/categoria/Raquetas" className="nav__link">Raquetas</Link>  
                   <Link to="/carrito"><CartWidget />{calcularCantidad()}</Link>
                </Nav>
                </NavbarBS.Collapse>
            </Container>            
        </NavbarBS>
       )
    }


export default Navbar