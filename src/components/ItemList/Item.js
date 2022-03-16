import React from 'react';
import Card from 'react-bootstrap/Card'

export default function Item({productos}) {
  return(    
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={productos.imageURL} alt={productos.nombre}/>
         <Card.Body>
            <Card.Title>{productos.nombre}</Card.Title>
            <p>${productos.precio}</p>
            <small>Stock: {productos.stock}</small>
            <Card.Text> {productos.description}</Card.Text>
            <strong>{productos.marca}</strong>
            
        </Card.Body>
    </Card>
    )}


