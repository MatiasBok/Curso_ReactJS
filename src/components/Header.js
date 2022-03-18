import React from 'react';
import Navbar from './Navbar.js';
import CartWidget from './CartWidget.js';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
      <header id="layout-header" className="header"> 
          <Link to="/">
               <h1 className="header__title">Crazy4Tennis Tienda Online</h1>  
          </Link>
          <Navbar />
          <Link to="/carrito">
                <CartWidget />
          </Link>
      </header>
  )
}


export default Header