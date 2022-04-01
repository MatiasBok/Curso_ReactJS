import React from 'react';
import {Container} from 'react-bootstrap';

const Main = ({nombre,edad}) => {
 
   return (
        <Container className= 'estiloMain' as= "main" fluid>
            <h2 className='estiloTitulo'>Bienvenido {nombre} al e-commerce de la academia </h2>
            {/*<h3>Tienes {edad} puedes ingresar!</h3>*/}           
        </Container>
    );
}

export default Main