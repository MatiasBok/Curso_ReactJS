import Header from "./components/Header";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Footer from "./components/Footer";
import Main from "./components/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Carrito from './components/Carrito'


const App = () => {
  return (
    <BrowserRouter>
          <Header />
          <Main nombre="Matias" edad={35}/>
          <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="/categoria/:idcategoria" element={<ItemListContainer/>}/>
                    <Route path="/productos/:idproducto" element={<ItemDetailContainer/>}/>
                    <Route path="/carrito" element={<Carrito/>}/>
          </Routes>
          <Footer /> 
    </BrowserRouter>
  )
}

export default App;





