import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Calzado extends Component{
    componentDidMount() {
       document.title= 'Calzado'
    }  
    render(){
        return(
          <>
             <title>Calzado</title>
             <Link to="/"> Volver a Inicio</Link>
          </>        
        )} 
}  

export default Calzado