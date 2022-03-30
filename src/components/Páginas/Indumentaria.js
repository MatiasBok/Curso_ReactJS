import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Indumentaria extends Component{
    componentDidMount() {
       document.title= 'Indumentaria'
    }  
    render(){
        return(
          <>
             <title>Indumentaria</title>
             <Link to="/"> Volver a Inicio</Link>
          </>        
        )} 
}  

export default Indumentaria