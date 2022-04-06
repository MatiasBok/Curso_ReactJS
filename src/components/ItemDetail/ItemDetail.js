import {useContext, useState} from 'react';
import 'rc-rate/assets/index.css';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount';
import {Link} from 'react-router-dom';
import {contexto} from '../../Context/MiContexto'
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';


const ItemDetail = ({producto}) => {
  const [estado,setEstado] = useState(0)
  const {addItem} = useContext(contexto);
  
  const onAdd = (cantidad) => {
   setEstado (cantidad); 
   addItem(producto,cantidad)
  };

  return( 
       <div className="cardDetails">
         <MDBCarousel showControls>
            <MDBCarouselInner>
              <MDBCarouselItem className='active'>
              <MDBCarouselElement className='cardImagenID' src={producto.imageURL} alt={producto.nombre}/>
              </MDBCarouselItem>
              <MDBCarouselItem>
                <MDBCarouselElement className='cardImagenID' src={producto.imageURL2} alt={producto.nombre} />
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
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
  )}

export default ItemDetail
