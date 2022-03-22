import React from 'react';
import Card from 'react-bootstrap/Card'
import ItemCount from '../ItemCount'

const ItemDetail = ({producto}) => {
  const [estado,setEstado] = useState(0)
  let navigate = useNavigate();

  const onAdd = (estado) => {
   setEstado (estado); 
   setTimeout(() =>{
     navigate('/carrito');
   }, 2000);
  };

  return( 
       <Card className='cardDetails'>
            <Card.Img className='cardImagen'variant="top" src={producto.imageURL} alt={producto.nombre}/>
            <Card.Body className='cardBody'>
                <Card.Title>{producto.nombre}</Card.Title>
                <strong>{producto.marca}</strong>
                <p>${producto.precio}</p>
                <Card.Text> {producto.description}</Card.Text>
                <div>
                {cantidad === 0 ? (
                    <ItemCount stock={producto.stock} onAdd={onAdd}/>
                  ) : (
                    <Link to="/Carrito">Ir al Carrito</Link>)
                }
                </div>
            </Card.Body>
        </Card>
  )}

export default ItemDetail
