import React from 'react';
import Card from 'react-bootstrap/Card'
import ItemCount from '../ItemCount'

export default function ItemDetail({producto}) {
  return( 
      <>
        <Card className='cardDetails'>
            <Card.Img className='cardImagen'variant="top" src={producto.imageURL} alt={producto.nombre}/>
            <Card.Body className='cardBody'>
                <Card.Title>{producto.nombre}</Card.Title>
                <strong>{producto.marca}</strong>
                <p>${producto.precio}</p>
                <small>Stock: {producto.stock}</small>
                <Card.Text> {producto.description}</Card.Text>
                <ItemCount stock={producto.stock}/>
            </Card.Body>
        </Card>
        
      </>   

    )}
