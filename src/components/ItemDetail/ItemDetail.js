import {useContext, useState} from 'react';
import 'rc-rate/assets/index.css';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount';
import {Link} from 'react-router-dom';
import {contexto} from '../Context/MiContexto'


const ItemDetail = ({producto}) => {
  const [estado,setEstado] = useState(0)
  const {addItem} = useContext(contexto);
  
  const onAdd = (cantidad) => {
   setEstado (cantidad); 
   addItem(producto,cantidad)
  };

  return( 
       <Card className='cardDetails'>
            <Card.Img className='cardImagenID'variant="top" src={producto.imageURL} alt={producto.nombre}/>
            <Card.Body className='cardBodyID'>
                <Card.Title>{producto.nombre}</Card.Title>
                <strong>{producto.marca}</strong>
                <p>${producto.precio}</p>
                <Card.Text> {producto.description}</Card.Text>
                <div>
                {estado === 0 ? (
                    <ItemCount stock={producto.stock} onAdd={onAdd}/>
                  ) : (
                    <Link to="/Carrito">Ir al Carrito</Link>)
                }
                </div>
            </Card.Body>
        </Card>
  )}

export default ItemDetail
