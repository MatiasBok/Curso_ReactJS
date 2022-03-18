import React from 'react';
import {Container} from 'react-bootstrap';

const Main = ({nombre,edad}) => {
 
   return (
        <Container as= "main" fluid>
            <h2>Bienvenido {nombre} al Mercado Online de la Academia!</h2>
            <h3>Tienes {edad} puedes ingresar!</h3>        
                <ul>
                    <li>Cargando los productos... Por favor, espere</li>
                </ul>
        </Container>
    );
}

export default Main