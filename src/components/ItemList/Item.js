import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from  'react-router-dom'

export default function Item({producto}) {
  return(      
        <Card className='CardI'style={{ width: '18%'}}>
            <Card.Img variant="top" src={producto.imageURL} alt={producto.nombre}/>
            <Card.Body className='BodyI'>
                <Card.Title className='titleCardIL'>{producto.nombre}</Card.Title>
                <p>${producto.precio}</p>
                <strong>{producto.marca}</strong>
                <Link className="buttonIL"to={`/producto/${producto.id}`}>Ver detalle</Link>            
            </Card.Body>
        </Card>
          
    )}


