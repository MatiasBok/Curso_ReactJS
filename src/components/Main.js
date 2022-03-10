import React from 'react'
import ItemCount from './ItemCount'
import {useEffect, useState} from 'react'
import Item from './Item'

const Main = ({nombre,edad}) => {

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])

    useEffect (()=>{
        console.log ("Ejecutando useEffect")
        setTimeout(()=>{
            setProductos (Item)  
        },2000)
    },[])

    console.log(productos)

    return (
        <main>
            <h2>Bienvenido {nombre} al Mercado Online de la Academia!</h2>
            <h3>Tienes {edad} puedes ingresar! </h3>
            <button onClick={()=> setLoading (!loading)}>toggle</button>
            <ul>
                <li>Cargando los productos... Por favor, espere</li>
            </ul>
            <ItemCount stock={10} inicial={1}/>
        </main>
    );
}

export default Main