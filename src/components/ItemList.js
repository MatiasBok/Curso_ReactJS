import React from 'react';
import Card from './Card'

const ItemList = ({productos}) => {
    return (
        <>
        <ul>
            {productos.map((miProducto)=>{
                return <Card key={miProducto.id}>{miProducto.nombre}<hr/></Card>
            })}
        </ul>
        <Card />
        </>
        
    )
}

export default ItemList