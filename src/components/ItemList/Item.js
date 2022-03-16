import React from 'react';

export default function Item({productos}) {
  return(    
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={productos.imageURL} alt={productos.nombre}/>
         <Card.Body>
            <Card.Title>{productos.nombre}</Card.Title>
            <p>${productos.precio}</p>
            <small>{productos.stock}</small>
            <Card.Text> {productos.description}</Card.Text>
            <strong>{productos.marca}</strong>
            <Button variant="primary">Ver detalle</Button>
        </Card.Body>
    </Card>
    )}


