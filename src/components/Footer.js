import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar as NavbarBS, Container} from 'react-bootstrap'

const Footer = () => {

 return (
    <footer id="main-footer">
      <div className="texto-footer">
        <p>&copy; Copyright 2022 - Matias Bökenhans</p>
        <p>Todos los derechos reservados</p>
      </div>
        <NavbarBS id="nav_footer" expand="lg">
            <Container>
                <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
                <NavbarBS.Collapse id="basic-navbar-nav">
                <Nav className="linksFooter" >
                   <Link to="/" className="nav_link_footer">Home</Link>
                   <Link to="/categoria/Indumentaria" className="nav_link_footer">Indumentaria</Link>  
                   <Link to="/categoria/Calzado" className="nav_link_footer">Calzado</Link>  
                   <Link to="/categoria/Raquetas" className="nav_link_footer">Raquetas</Link>  
                </Nav>
                </NavbarBS.Collapse>
            </Container>            
        </NavbarBS>
   </footer>
  )
}
export default Footer