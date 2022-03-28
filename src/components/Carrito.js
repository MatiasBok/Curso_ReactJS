import {useContext} from 'react'; 
import {contexto} from './Context/MiContexto'

const Carrito = () => {

  const {carrito, total} = useContext(contexto)

  const handleClick =() => {
    
  }

  return (
    <div>
        <h3>Carrito</h3>
        {carrito.map(producto => (
          <div key={producto.id}>
              <p>{producto.nombre}</p>
              <p>{producto.estado} x {producto.precio}</p>
              <p>Total Parcial: {producto.cantidad * producto.precio}</p>
              <button onClick={handleClick}>BORRAR</button>
          </div>
        ))}
    </div>
  )
}

export default Carrito

