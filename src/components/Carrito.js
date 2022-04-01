import { serverTimestamp } from 'firebase/firestore';
import {useContext} from 'react'; 
import {contexto} from './Context/MiContexto'
import {db} from '../firebase';
import {collection, adDoc, query, where,} from "firebase/firestore";

const Carrito = () => {

  const {carrito, total} = useContext(contexto)

  const handleClick =() => {
    
  }

  const terminarCompra=() => {
    const orden = {
      comprador : {
        nombre:"Matias",
        telefono:"+5491123456789",
        email: "matias@hotmail.com"
      },
      items: carrito,
      date: serverTimestamp(),
      total:total     }
  }

  const vendidosCollection = collection(db,"vendidos");

  return (
    <div className='carrito'>
        {carrito.map(producto => (
          <div key={producto.id}>
              <p>{producto.nombre}</p>
              <p>{producto.estado} x {producto.precio}</p>              
              <button onClick={handleClick}>BORRAR</button>
              <strong>Total: ${producto.cantidad * producto.precio}</strong>
          </div>
        ))}
        <p>Total: ${total}</p>
        <button onClick= {terminarCompra}>Terminar la compra</button>
    </div>
  )
}

export default Carrito

