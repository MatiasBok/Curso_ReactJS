import React, {useState, useEffect} from 'react';
import products from '../../database/products.js';


const ItemDetailContainer = () => {

const [producto,setProductos] = useState([]);

function getProduct(){

    return new Promise ((resolve)=>{
        setTimeout(function(){
            resolve(products[0]);
        },4000);
    })
}

useEffect (() =>{ 
        getProduct()
        .then(respuestaPromise => setProductos(respuestaPromise))
    },[]);
    
 return (
        <>
         <p>A continuación podrás ver todos nuestro merchandising</p>
        </>
            )
}
   

export default ItemDetailContainer;