import React, {useContext} from 'react';
import CartWidget from './CartWidget.js';
import {contexto} from '../Context/MiContexto';
import {Nav, Navbar as NavbarBS} from 'react-bootstrap'
import {Link} from 'react-router-dom';

const Navbar = () => {

   const {calcularCantidad} = useContext(contexto);

return (
        <NavbarBS expand="lg">
            <Nav className="me-auto" className="navbar">
               <Link to="/" className="nav__link">Home</Link>
               <Link to="/categoria/Indumentaria" className="nav__link">Indumentaria</Link>  
               <Link to="/categoria/Calzado" className="nav__link">Calzado</Link>  
               <Link to="/categoria/Raquetas" className="nav__link">Raquetas</Link>  
               <Link to="/carrito" className="linkCarrito"><CartWidget />{calcularCantidad()}</Link>
               <Link to="/TerminarLaCompra" className="linkCarrito">Terminar la Comrpa</Link>
            </Nav>                       
        </NavbarBS>
       )
    }


export default Navbar