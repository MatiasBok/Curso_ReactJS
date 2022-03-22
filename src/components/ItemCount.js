import React from 'react';
import {useState} from 'react';
import {Container} from 'react-bootstrap';

const ItemCount = ({stock,inicial=1,onAdd}) => {

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
          onAdd(estado);
          alert('Agregaste al carrito ' + estado + ' producto(s)' );
    }

    return (
        <>
        <Container as="main">
            <button onClick={handleSumar}>Sumar</button>
            <button onClick={handleRestar}>Restar</button>
            <button disabled= {number===0} onClick={handleAgregarAlCarrito}>Agregar al carrito</button>
        </Container>
        </>
    );
}

export default ItemCount