import React, {useState, useEffect} from 'react';
import products from '../../database/products.js';
import ItemDetail from './ItemDetail.js';
import {useParams} from 'react-router-dom';
import Spinner from '../Spinner'
import { toast } from 'react-toastify';


function getProduct(idproducto){
    return new Promise ((resolve)=>{
        setTimeout(function(){
           let producto = products.find(producto => producto.id === Number(idproducto))
           resolve(producto)
        },2000);
    })
}

function ItemDetailContainer(){
    const [producto,setProducto] = useState([]);
    const {idproducto} = useParams();
    const [loading,setLoading]=useState(true)


useEffect (() =>{ 
        toast.info("Trayendo detalles del producto...")
        getProduct(idproducto).then(function(respuestaPromise) {
            setProducto(respuestaPromise)
            toast.dismiss()
        })
        .catch((error)=>{
            toast.error("Error al traer el detalle del producto")
        })
        .finally(()=>{
            setLoading(false)
        })
    },[idproducto]);

 return (
         <div className='classIDC' style={{marginTop: '20px'}}>
         {loading ? <Spinner /> :<ItemDetail producto={producto}/>}
         </div>
        )
}

export default ItemDetailContainer;