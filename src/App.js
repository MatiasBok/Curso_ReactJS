import Header from "./components/Header"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Footer from "./components/Footer";
import Main from "./components/Main"


const App = () => {
  return (
    <>
    <Header />
    <NavBar />
    <Main nombre="Matias" edad={35}/>
    <ItemListContainer />
    <Footer />
    </>
  )
}

export default App;





