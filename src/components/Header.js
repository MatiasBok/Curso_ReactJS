import React from 'react'
import Nav from './Nav'
import CartWidget from './CartWidget'

const Header = () => {
  return (
      <header id="layout-header" className="header"> 
              <h1 className="header__title">Crazy4Tennis Tienda Online</h1>  
              <Nav />
              <CartWidget />
      </header>
  )
}


export default Header