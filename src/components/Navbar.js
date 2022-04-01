import React, {useContext} from 'react';
import CartWidget from './CartWidget.js';
import {contexto} from './Context/MiContexto';
import {Nav, Navbar as NavbarBS, Container} from 'react-bootstrap'
import {Routes, Route, Link} from 'react-router-dom';
import useDocumentTitle from './useDocumentTitle'



function Page(props) {
  return <h2>{props.content}</h2>
}

function Home() {
  useDocumentTitle("Bienvenidos a la tienda online de la Academia")
  return <Page content="Bienvenidos a la tienda online de la Academia" />
}

function Indumentaria() {
  useDocumentTitle("Indumentaria")
  return <Page content="Indumentaria" />
}

function Calzado() {
  useDocumentTitle("Calzado")
  return <Page content="Calzado" />
}

function Raquetas() {
    useDocumentTitle("Raquetas")
    return <Page content="Raquetas" />
  }

function Carrito() {
    useDocumentTitle("Tu carrito")
    return <Page content="Tu carrito" />
  }

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
                <div>
                    <Link to="/carrito"><CartWidget />{calcularCantidad()}</Link>
                    <Routes>
                        <Route path="/carrito" element={<Carrito/>}/>
                    </Routes>
                </div>
                </Nav>
                </NavbarBS.Collapse>
            </Container>            
        </NavbarBS>
       )
    }


export default Navbar