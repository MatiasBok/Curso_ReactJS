import { serverTimestamp } from 'firebase/firestore';
import {useContext, useEffect} from 'react'; 
import Main from './Main';
import {contexto} from '../Context/MiContexto';
import {db} from '../firebase';
import {collection, addDoc} from "firebase/firestore";
import ItemCount from './ItemCount';
import {Link} from  'react-router-dom'

const Carrito = () => {

  const {carrito, clearCarrito, calcularPrecioTotal, addItem, removeItem} = useContext(contexto)

  const finalizarCompra= async () => {
    clearCarrito();
    console.log("Se ha vaciado el carrito");
    const orden = {
      comprador : {
        nombre:"Matias",
        telefono:"+5491123456789",
        email: "matias@hotmail.com"
      },
      items: [...carrito],
      date: serverTimestamp(),
      total: calcularPrecioTotal()
    }
  
  const vendidosCollection = collection(db,"vendidos");
  const ordenDeCompra = await addDoc(vendidosCollection, orden);
  console.log(ordenDeCompra.id);
}
  
  useEffect(()=>{
    document.title="Tu Carrito"
  },[])
  
  if (carrito.length === 0)
  return(
    <div className="containerCarrito1">
          <h3>Tu Carrito esta vacío</h3>
          <p>Te invitamos a que mires nuestros productos!!!</p>
          <Link type="button" className="btn btn-primary" to="/">Ir al catálogo</Link>
    </div>
  )
  else
  return (
    <div id="productosCarrito">
        <h2 id="tituloProductosCarrito">Productos en tu carrito</h2>
        <div className="containerCarrito2">
          {carrito.map(producto => (
              <div className="detallesCompra" >
                  <div className= "carritoInfo" key={producto.id}>
                        <img className="imgCarrito" src={producto.imageURL} alt={producto.nombre}></img>
                          <div className="carritoDetalles">
                              <strong className="carritoNombre">{producto.nombre}</strong>
                              <p>Cantidad: {producto.cantidad}  </p> 
                              <p>Precio unitario: ${producto.precio} </p>             
                              <strong>Total producto: ${producto.cantidad * producto.precio}</strong>
                              <div className="botonesProdCarrito">
                                <button className='buttonBorrar'onClick={()=>removeItem(producto.id)}>BORRAR PRODUCTO</button>
                                <Link type="button" className="seguirComprando" to="/">Seguir comprando</Link>                              
                              </div>
                          </div>
                  </div>                   
              </div>
            ))},
        </div>
            <div className="compraTotal">
                <p className="mt-3 fs-4 badge bg-warning text-wrap"> Total a abonar: $ {calcularPrecioTotal}</p>
                <button className='btn btn-success buttonFinalizar' onClick= {finalizarCompra}>Finalizar compra</button>
                <button className='btn btn-danger vaciarCarrito' onClick= {clearCarrito}>Vaciar Carrito</button>
            </div>        
    </div>
    ) 
}


export default Carrito

