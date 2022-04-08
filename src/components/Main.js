import React, { useEffect } from 'react';
import {Container} from 'react-bootstrap';
import ItemDetailContainer from './ItemDetail/ItemDetailContainer';
import ItemListContainer from './ItemList/ItemListContainer';
import Carrito from './Carrito';
import {Routes, Route} from 'react-router-dom';

const Main = ({title}) => {

useEffect(()=>{
    document.title= "Tienda Crazy4Tennis";
},[])
 
   return (
        <Container className= 'estiloMain' as= "main" fluid>
            <h2 className='estiloTitulo'>Bienvenidos al e-commerce de la Academia</h2> 
            <h3>{title}</h3>     
            <Routes>
                    <Route path="/" element={<ItemListContainer component="Home"/>}/>
                    <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
                    <Route path="/producto/:idProducto" element={<ItemDetailContainer/>}/>
                    <Route path="/carrito" element={<Carrito/>}/>
            </Routes>
        </Container>
    );
}

export default Main