import { serverTimestamp } from 'firebase/firestore';
import {useContext, useEffect} from 'react'; 
import Main from './Main';
import {contexto} from '../Context/MiContexto'
import {db} from '../firebase';
import {collection, addDoc} from "firebase/firestore";
import ItemCount from './ItemCount';

const Carrito = () => {

  const {carrito, precioTotalParcial, removeItem} = useContext(contexto)

  useEffect(()=>{
    document.title="Tu Carrito"
  },[])

  
  const terminarCompra= async () => {
    const orden = {
      comprador : {
        nombre:"Matias",
        telefono:"+5491123456789",
        email: "matias@hotmail.com"
      },
      items: carrito,
      date: serverTimestamp(),
      total: precioTotalParcial()}
  

  const vendidosCollection = collection(db,"vendidos");
  const ordenDeCompra = await addDoc(vendidosCollection, orden);
  console.log(ordenDeCompra.id);
}

  return (
    <>
      <Main title="Tu Carrito"/>
      <div className='carrito'>
          {carrito.map(producto => (
            <div className= "carritoInfo" key={producto.id}>
            <img className="imgCarrito" src={producto.imageURL} alt={producto.nombre}></img>
               <div className="carritoDetalles">
                  <strong className="carritoNombre">{producto.nombre}</strong>
                  <p>Cantidad: {producto.cantidad}  </p> 
                  <ItemCount/>
                  <p>Precio unitario: ${producto.precio} </p>             
                  <button className='buttonBorrar'onClick={()=>removeItem(producto.id)}>BORRAR</button>
                  <strong>Total: ${producto.cantidad * producto.precio}</strong>
                  <button className='buttonTerminar' onClick= {terminarCompra}>Terminar la compra</button>
               </div>
            </div> 
          ))},         
      </div>
    </>
    )
}


export default Carrito

