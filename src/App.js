import Header from "./components/Header";
/*import ItemListContainer from "./components/ItemList/ItemListContainer";*/
import Footer from "./components/Footer";
import Main from "./components/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import {BrowserRouter} from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
          <Header />
          <Main nombre="Matias" edad={35}/>
          {/*<ItemListContainer>*/}
          <ItemDetailContainer/>
          <Footer />   
    </BrowserRouter>
  )
}

export default App;





