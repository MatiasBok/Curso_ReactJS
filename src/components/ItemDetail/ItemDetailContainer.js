import React, {useState, useEffect} from 'react';
import products from '../../database/products.js';
import ItemDetail from './ItemDetail.js'


const ItemDetailContainer = () => {

const [producto,setProducto] = useState([]);

function getProduct(){

    return new Promise ((resolve)=>{
        setTimeout(function(){
            resolve(products[0]);
        },2000);
    })
}

useEffect (() =>{ 
        getProduct()
        .then(respuestaPromise => setProducto(respuestaPromise))
    },[]);
    
 return (
        <>
         <p>A continuación podrás ver todo nuestro merchandising</p>
         <ItemDetail producto={producto}/>
        </>
            )
}
   

export default ItemDetailContainer;