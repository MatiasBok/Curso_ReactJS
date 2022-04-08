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
    
    const handleConfirmar = () => {
          onAdd(estado);
    }

    return (
        <>
        <Container as="main">
            <h5>{estado}</h5>
            <button onClick={handleSumar}>Sumar</button>
            <button onClick={handleRestar}>Restar</button>
            <button onClick={handleConfirmar}>Confirmar cantidad</button>
        </Container>
        </>
    );
}

export default ItemCount