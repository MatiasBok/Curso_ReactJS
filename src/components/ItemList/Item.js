import React from 'react';
import Card from 'react-bootstrap/Card';


export default function Item({producto}) {
  return(      
        <Card className='CardListILC'style={{ width: '20rem' }}>
            <Card.Img variant="top" src={producto.imageURL} alt={producto.nombre}/>
            <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <p>${producto.precio}</p>
                <small>Stock: {producto.stock}</small>
                <strong>{producto.marca}</strong>
                <button className="buttonIL"to={`/producto/${producto.id}`}>Ver detalle</button>            
            </Card.Body>
        </Card>
          
    )}


