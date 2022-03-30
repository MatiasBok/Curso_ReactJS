import {useContext} from 'react'; 
import {contexto} from './Context/MiContexto'

const Carrito = () => {

  const {carrito, total} = useContext(contexto)

  const handleClick =() => {
    
  }

  return (
    <div className='carrito'>
        <h3>Tu carrito</h3>
        {carrito.map(producto => (
          <div key={producto.id}>
              <p>{producto.nombre}</p>
              <p>{producto.estado} x {producto.precio}</p>
              <strong>Total Parcial: ${producto.cantidad * producto.precio}</strong>
              <button onClick={handleClick}>BORRAR</button>
          </div>
        ))}
    </div>
  )
}

export default Carrito

