import React, {Component} from 'react';
import Header from "./components/Header";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import MiProvider from './components/Context/MiContexto';
import Carrito from './components/Carrito'

class App extends Component{
render(){
    return ( 
        <MiProvider>
             <BrowserRouter>
                <Header />    
                <Main/>   
				<Routes>
                    <Route path="/" element={<ItemListContainer component="Home"/>}/>
                    <Route path="/categoria/:idCategoria" element={<ItemListContainer component=""/>}/>
                    <Route path="/producto/:iProducto" element={<ItemDetailContainer component="Detalles del producto"/>}/>
                </Routes>
                <Footer /> 
                <ToastContainer />
            </BrowserRouter>  
        </MiProvider>
    )
  }
}

export default App;





