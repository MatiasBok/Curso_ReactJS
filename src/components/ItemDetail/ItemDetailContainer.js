import React, {useState, useEffect} from 'react';
import products from '../../database/products.js';
import ItemDetail from './ItemDetail.js';
import {useParams} from 'react-router-dom';


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
    const [idproducto] = useParams();


useEffect (() =>{ 
        getProduct(idproducto)
        .then(respuestaPromise => setProducto(respuestaPromise))
    },[idproducto]);


 return (
        <>
         <p>A continuación podrás ver todo nuestro merchandising</p>
         <div>
         <ItemDetail producto={producto}/>
         </div>
        </>
            )
}

   

export default ItemDetailContainer;