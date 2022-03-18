import React from 'react';
import Navbar from './Navbar.js';

import {Link} from 'react-router-dom'

const Header = () => {
  return (
      <header id="layout-header" className="header"> 
          <Link to="/">
               <h1 className="header__title">Crazy4Tennis Tienda Online</h1>  
          </Link>
          <Navbar />
     </header>
  )
}


export default Header