import React from 'react';
import {useState} from 'react';
import {Container} from 'react-bootstrap';

const ItemCountCarrito = ({stock,inicial=1, onAdd}) => {

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
            <td>
                <strong>Agregar:</strong>
				<button onclick={handleSumar}>+</button>
		    	<input type="text" size="1" readonly="true" value="0"/>
			    <button onclick={handleRestar}>-</button>
                <button onclick={handleConfirmar}>Confirmar</button>
			</td>
        </Container>
        </>
    );
}

export default ItemCountCarrito