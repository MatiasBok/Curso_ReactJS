import React, {useContext} from 'react';
import Navbar from './Navbar.js';
import {contexto} from './Context/MiContexto'

const Header = () => {

     const {estado} = useContext(contexto)

  return (
      <header id="layout-header" className="header"> 
          <h1 className="header__title">Crazy4Tennis Tienda Online</h1>  
          <Navbar />
     </header>
  )
}


export default Header