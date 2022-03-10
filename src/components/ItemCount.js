import React from 'react'
import {useState} from 'react'
import {Container} from 'react-bootstrap'
import Item from './Item'


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
    
    const handleResetear = () => {
          setEstado(1);
    }

    return (
        <>
        <Container as="main">
            <p>Mi Contador va: {estado}</p>
            <button onClick={handleSumar}>Sumar</button>
            <button onClick={handleRestar}>Restar</button>
            <button onClick={handleResetear}>Resetear</button>
        </Container>
        <Item />
        </>
    );
}

export default ItemCount