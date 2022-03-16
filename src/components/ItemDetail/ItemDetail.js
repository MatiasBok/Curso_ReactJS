import React from 'react';

export default function ItemDetail({producto}) {
  return(    
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={producto.imageURL} alt={producto.nombre}/>
         <Card.Body>
            <Card.Title>{producto.nombre}</Card.Title>
            <p>${producto.precio}</p>
            <small>{producto.stock}</small>
            <Card.Text> {producto.description}</Card.Text>
            <strong>{producto.marca}</strong>
            <Button variant="primary">Añadir al carrito</Button>
        </Card.Body>
    </Card>
    )}
