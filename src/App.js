import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import Main from "./components/Main";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
    <Header />
    <Main nombre="Matias" edad={35}/>
    <ItemListContainer greeting="Bienvenidos!"/>
    <Footer />
    </div>
  )
}

export default App;





