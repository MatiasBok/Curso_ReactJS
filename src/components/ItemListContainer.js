import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import Item from './Item';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect (()=>{
        console.log ("Ejecutando useEffect")
        setTimeout(()=>{
            setProductos(Item)  
        },2000)
    },[])

    console.log(productos)
    return (
        <>
        <p>A continuación podrás ver todos nuestro merchandising</p>
        <ItemList productos={productos}/>
        </>
        )
}

export default ItemListContainer