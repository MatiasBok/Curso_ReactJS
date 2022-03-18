import React, {useState, useEffect} from 'react';
import products from '../../database/products.js';
import ItemList from './ItemList.js';
import {toast} from 'react-toastify';
import {useParams} from 'react-router-dom'


const ItemListContainer = () => {

const [loading,setLoading]=useState(true)
const [productos,setProductos] = useState([]);

const {idCategoria}= useParams()

useEffect(()=>{
    toast.info("Trayendo productos...")
    
    const pedido =new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log(idCategoria)
            resolve(products);
            //reject(products);
        },4000);
    })

    pedido
    .then ((resultado) => {
        toast.dismiss()
        setProductos(resultado)
    })
    .catch((error)=>{
        toast.error("Error al traer los productos")
    })
    .finally(()=>{
        setLoading(false)
    })
},[])

    if (loading){
        return <h1>Cargando...</h1>
    }else{
        return <ItemList productos={productos}/>
    }
}


export default ItemListContainer