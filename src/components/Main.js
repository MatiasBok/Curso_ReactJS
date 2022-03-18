import React from 'react';
import {Container} from 'react-bootstrap';
import {Route, Routes} from 'react-router-dom'
import Carrito from './Carrito.js'
import ItemDetailContainer from './ItemDetail/ItemDetailContainer';
import ItemListContainer from './ItemList/ItemListContainer'


const Main = ({nombre,edad}) => {
 
   return (
        <Container as= "main" fluid>
            <h2>Bienvenido {nombre} al Mercado Online de la Academia!</h2>
            <h3>Tienes {edad} puedes ingresar!</h3>        
            <>
                <ul>
                    <li>Cargando los productos... Por favor, espere</li>
                </ul>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
                    <Route path="/productos/:idProducto" element={<ItemDetailContainer/>}/>
                    <Route path="/carrito" element={<Carrito/>}/>
                </Routes>
            </>
        </Container>
    );
}

export default Main