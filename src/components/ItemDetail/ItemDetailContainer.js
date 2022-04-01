import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail.js';
import {useParams} from 'react-router-dom';
import Spinner from '../Spinner'
import { toast } from 'react-toastify';
import {db} from '../firebase';
import {collection, getDocs, query, where} from "firebase/firestore";

const ItemDetailContainer = () => {

    const [producto,setProducto] = useState([]);
    const {idProducto} = useParams();
    const [loading,setLoading]=useState(true)

function getProduct(idProducto){
    return new Promise ((resolve)=>{
        setTimeout(function(){
           let producto = db.find(producto => producto.id === Number(idProducto))
           resolve(producto)
        },3000);
    })
}

useEffect(()=> {
    
    const productosCollection = collection(db,"productos");
    const filtro= query(productosCollection, where("id","==",idProducto));
    const pedido = getDocs(filtro);

    pedido        
        .then((res)=>{
            setProducto(res.docs[0].data());
            toast.info("Trayendo detalles del producto...")
        })    
        .catch(()=>{
         toast.error("Error al traer el detalle del producto")
       })
        .finally(() => {
            setLoading(false)
        })

    },[idProducto])       


  return (
         <div className='classIDC' style={{marginTop: '20px'}}>
         {loading ? <Spinner /> :<ItemDetail producto={producto}/>}
         </div>
        )
}


export default ItemDetailContainer;