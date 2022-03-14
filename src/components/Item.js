import React from 'react';

export default function Item(productos) {
  return(
    <div>
        <h4>{productos.nombre}</h4>
        <img src={productos.imageURL} alt={productos.nombre}></img>
        <p>{productos.precio}</p>
        <p>{productos.stock}</p>
        <p>{productos.description}</p>
        <p>{productos.marca}</p>
    </div>  
    )}


