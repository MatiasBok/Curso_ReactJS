import {Container} from 'react-bootstrap';
import {useState} from 'react'

const ItemCount = ({stock}) => {

    let [estado,setEstado]=useState(1)

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
        <Container as="main">
            <p>Mi Contador va: {estado}</p>
            <button onClick={handleSumar}>Sumar</button>
            <button onClick={handleRestar}>Restar</button>
            <button onClick={handleResetear}>Resetear</button>
        </Container>
    );
}

export default ItemCount