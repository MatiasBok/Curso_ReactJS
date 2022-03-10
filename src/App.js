import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import Main from "./components/Main";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <>
    <Header />
    <Main nombre="Matias" edad={35}/>
    <ItemListContainer />
    <Footer />
    </>
  )
}

export default App;





