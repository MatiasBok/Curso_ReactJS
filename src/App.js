import React, {Component} from 'react';
import Header from "./components/Header";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Footer from "./components/Footer";
import Main from "./components/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Carrito from './components/Carrito';
import MiProvider from './components/Context/MiContexto';


class App extends Component{
render(){
    return ( 
        <MiProvider>
             <BrowserRouter>
                <Header />    
                <Main/>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="/categoria/:idcategoria" element={<ItemListContainer/>}/>
                    <Route path="/producto/:idproducto" element={<ItemDetailContainer/>}/>
                    <Route path="/carrito" element={<Carrito/>}/>
                </Routes>
                <Footer /> 
                <ToastContainer />
            </BrowserRouter>  
        </MiProvider>
    )
  }
}

export default App;





