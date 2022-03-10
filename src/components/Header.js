import React from 'react'
import Navbar from './Navbar'
import CartWidget from './CartWidget'

const Header = () => {
  return (
      <header id="layout-header" className="header"> 
              <h1 className="header__title">Crazy4Tennis Tienda Online</h1>  
              <Navbar />
              <CartWidget />
      </header>
  )
}


export default Header