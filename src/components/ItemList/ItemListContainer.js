import React, {useState, useEffect} from 'react';
import products from '../../database/products.js';
import ItemList from './ItemList.js';
import {toast} from 'react-toastify';
import {useParams} from 'react-router-dom';
import {Spinner} from '../Spinner'

function getProductos(idcategoria){
    return new Promise ((resolve)=>{
        setTimeout(function(){
            if (!idcategoria){
                resolve(products)
            }else{
                let productos = products.filter(productos => productos.categoria === idcategoria);
            resolve(productos)
            }
        },2000);
    })
}

function ItemListContainer () {
    const [productos,setProductos] = useState([]);
    const {idcategoria}= useParams()
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        setLoading(true)        
        toast.info("Trayendo productos...")
        getProductos(idcategoria)
        pedido
          .then ((respuestaPromise => setProductos(respuestaPromise)) => {
            toast.dismiss(),
            setProductos(resultado)
        })
        .catch((error)=>{
            toast.error("Error al traer los productos")
        })
        .finally(()=>{
            setLoading(false)
        })
    },[idcategoria])

    if (loading){
        return (
            <div style={{marginTop: '20px'}}>
            {loading ? <Spinner /> : <ItemList productos={productos}/> }  
        </div>
         
        )
        
    }
}

export default ItemListContainer