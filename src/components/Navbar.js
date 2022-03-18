import React from 'react';
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="nav">
                <Link to="/categoria/1" className="nav__link">cat1</Link>   
                <Link to="/categoria/2" className="nav__link">cat2</Link>
                <Link to="/categoria/3" className="nav__link">cat3</Link>  
        </nav> 
    )
}

export default Navbar