import React from 'react'
import NavBar from './NavBar'
import CartWidget from './CartWidget'

const Header = () => {
  return (
      <header id="layout-header" className="header"> 
              <h1 className="header__title">Crazy4Tennis Tienda Online</h1>  
              <NavBar />
              <span class="material-icons">shopping_cart</span>
      </header>
  )
}


export default Header