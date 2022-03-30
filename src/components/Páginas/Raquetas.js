import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Raquetas extends Component{
    componentDidMount() {
       document.title= 'Raquetas'
    }  
    render(){
        return(
          <>
             <title>Raquetas</title>
             <Link to="/"> Volver a Inicio</Link>
          </>        
        )} 
}  

export default Raquetas