import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = (productos) => {
    return (
        <>
        <p>A continuación podrás ver todos nuestro merchandising</p>
        <ul>
            {productos.map((productos)=>{
                return <li key={productos.id}>{productos.nombre}</li>
            })}
        </ul>
        <ItemList />
        </>
        )
}
export default ItemListContainer