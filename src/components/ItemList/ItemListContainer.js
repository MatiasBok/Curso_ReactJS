import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemList from './ItemList.js';
import {toast} from 'react-toastify';
import Main from '../Main';
import Spinner from '../Spinner';
import {db} from '../../firebase';
import {collection, getDocs, query, where,} from "firebase/firestore";

const ItemListContainer = () => {

    const [productos,setProductos] = useState([]);    
    const [loading,setLoading] = useState(true);
    const {idCategoria} =  useParams();

  useEffect(()=> {
    document.title=idCategoria;

    if(!idCategoria){

        const productosCollection = collection(db,"productos");
        const pedido = getDocs(productosCollection); 
        toast.info("Trayendo productos...") 

    pedido    
        .then((res)=>{
            setProductos(res.docs.map(doc => doc.data()));
            toast.dismiss();
        })        
        .catch(()=>{
            toast.error("Error al traer el detalle del producto")
        })
        .finally(() => {
            setLoading(false)
        })

    }else{
        const productosCollection = collection(db,"productos");
        const filtro= query(productosCollection, where("categoria","==",idCategoria));
        const pedido = getDocs(filtro);
        toast.info("Trayendo categoría seleccionada...");

    pedido        
        .then((res)=>{
            setProductos(res.docs.map(doc => doc.data()));
            toast.dismiss();
        })    
        .catch(()=>{
         toast.error("Error al traer la categoría seleccionada")
       })
        .finally(() => {
            setLoading(false)
        })
        
    } 
  
    },[idCategoria]);


    return (
            <>
            <Main title={idCategoria}/>
            <div class="container" className="estiloItemListContainer">
                <div style={{marginTop: '50px'}}>
                 {loading ? <Spinner /> : <ItemList producto={productos}/> }  
                </div>
            </div>    
            </>
         )       
    }

export default ItemListContainer