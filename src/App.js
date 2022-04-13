import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import MiProvider from '../src/Context/MiContexto';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import Carrito from './components/Carrito';
import TerminarLaCompra from './components/TerminarLaCompra'

function App() {

useEffect(()=>{
    document.title= "Tienda Crazy4Tennis";
},[])

    return ( 
        <BrowserRouter>
             <MiProvider>
                <Header />  
                
                <Routes>
                    <Route path="/" element={<ItemListContainer component="Home"/>}/>
                    <Route path="/categoria/:idCategoria" element={<ItemListContainer component=""/>}/>
                    <Route path="/producto/:idProducto" element={<ItemDetailContainer component="Detalles del producto"/>}/>
                    <Route path="/carrito" element={<Carrito/>}/>
                    <Route path="/TerminarLaCompra" element={<TerminarLaCompra/>}/>
                </Routes>
                <Footer /> 
                <ToastContainer />
            </MiProvider>
        </BrowserRouter>  
    )
  }

export default App;





