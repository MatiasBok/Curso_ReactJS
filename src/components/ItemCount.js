import React from 'react';
import {useState} from 'react';
import {Container} from 'react-bootstrap';

const ItemCount = ({stock,inicial}) => {

    let [estado,setEstado]=useState(inicial)

    const handleSumar = () => {
      if (estado < stock) {
          setEstado(estado + 1);
      }  
    }

    const handleRestar = () => {
        if (estado > 1) {
            setEstado(estado - 1);
        }
    }
    
    const handleAgregarAlCarrito = () => {
          console.log();
    }

    return (
        <>
        <Container as="main">
            <p>Mi Contador va: {estado}</p>
            <button onClick={handleSumar}>Sumar</button>
            <button onClick={handleRestar}>Restar</button>
            <button onClick={handleAgregarAlCarrito}>Agregar al carrito</button>
        </Container>
        </>
    );
}

export default ItemCount