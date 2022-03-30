import React, {useContext} from 'react';
import CartWidget from './CartWidget.js';
import {contexto} from './Context/MiContexto';
import {Nav, Navbar as NavbarBS, Container} from 'react-bootstrap'
import {Routes, Route, Link} from 'react-router-dom';
import Indumentaria from './Páginas/Indumentaria';
import Calzado from './Páginas/Calzado';
import Raquetas from './Páginas/Raquetas'


const Navbar = () => {

   const {calcularCantidad} = useContext(contexto);

return (
        <NavbarBS expand="lg">
            <Container>
                <Link to="/" className="nav__link">Home</Link>
                <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
                <NavbarBS.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <div>
                    <Link to="/categoria/Indumentaria" className="nav__link">Indumentaria</Link>  
                    <Routes>
                        <Route exact path="/categoria/Indumentaria" component={Indumentaria}/>
                    </Routes>
                </div>
                <div>
                    <Link to="/categoria/Calzado" className="nav__link">Calzado</Link>  
                    <Routes>
                        <Route exact path="/categoria/Calzado" component={Calzado}/>
                    </Routes>
                </div>
                <div>
                    <Link to="/categoria/Raquetas" className="nav__link">Raquetas</Link>  
                    <Routes>
                        <Route exact path="/categoria/Raquetas" component={Raquetas}/>
                    </Routes>
                </div> 
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