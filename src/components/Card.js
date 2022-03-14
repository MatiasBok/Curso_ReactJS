import React from 'react'

export default function Card ({misProductos}){
    return(
        <>
        <h4>Producto: {misProductos.nombre}</h4>
        <p>Precio: {misProductos.precio}</p>
        <p>Stock: {misProductos.stock}</p>
        <p>Descripción: {misProductos.descripcion}</p>
        </>
    )
}