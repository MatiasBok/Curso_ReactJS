import React, { useEffect } from 'react';
import {Container} from 'react-bootstrap';

const Main = ({title}) => {

useEffect(()=>{
    document.title= "Tienda Crazy4Tennis";
},[])
 
   return (
        <Container className= 'estiloMain' as= "main" fluid>
            <h2 className='estiloTitulo'>Bienvenidos al e-commerce de la Academia</h2> 
            <h3>{title}</h3>       
        </Container>
    );
}

export default Main