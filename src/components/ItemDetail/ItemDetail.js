import {useContext, useState} from 'react';
import 'rc-rate/assets/index.css';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount';
import {Link} from 'react-router-dom';
import {contexto} from '../../Context/MiContexto';
import Carousel from 'react-bootstrap/Carousel'


const ItemDetail = ({producto}) => {
  const [estado,setEstado] = useState(0)
  const {addItem} = useContext(contexto);
  const [index, setIndex] = useState(0);
  
  const onAdd = (cantidad) => {
   setEstado (cantidad); 
   addItem(producto,cantidad)
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return( 
       <div className="cardDetails">
         <Carousel className="carouselID" fade="true" interval="60000" variant="dark" activeIndex={index} onSelect={handleSelect}>
             <Carousel.Item>
                <img className='cardImagenID' src={producto.imageURL} alt={producto.nombre}/>       
             </Carousel.Item>
             <Carousel.Item>
                <img className='cardImagenID' src={producto.imageURL2} alt={producto.nombre}/>        
             </Carousel.Item>
             <Carousel.Item>
                <img className='cardImagenID' src={producto.imageURL3} alt={producto.nombre}/>        
             </Carousel.Item>
         </Carousel>
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
        </div>
    )
}

export default ItemDetail



  

  