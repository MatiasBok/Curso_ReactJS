import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail.js';
import {useParams} from 'react-router-dom';
import Main from '../Main';
import Spinner from '../Spinner'
import { toast } from 'react-toastify';
import {db} from '../../firebase';
import {collection, getDocs, query, where} from "firebase/firestore";

const ItemDetailContainer = () => {

    const [producto,setProducto] = useState([]);
    const {idProducto} = useParams();
    const [loading,setLoading]=useState(true)

useEffect(()=> {
    
    const productosCollection = collection(db,"productos");
    const filtro= query(productosCollection, where("id","==",Number(idProducto)));
    const pedido = getDocs(filtro);
    toast.info("Trayendo detalles del producto...")

    pedido        
        .then((res)=>{
            setProducto(res.docs[0].data());
            toast.dismiss();
        })    
        .catch(()=>{
         toast.error("Error al traer el detalle del producto")
       })
        .finally(() => {
            setLoading(false)
        })

    },[idProducto])       


  return (
        <>
         <Main title="Detalles del producto" />
         <div className='classIDC'>
         {loading ? <Spinner /> :<ItemDetail producto={producto}/>}
         </div>
        </>
        )
}


export default ItemDetailContainer;