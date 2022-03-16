import React, {useState, useEffect} from 'react';
import products from '../../database/products.js';
import ItemList from './ItemList.js'

const ItemListContainer = () => {

const [productos,setProductos] = useState([]);

function getDatos(){

    return new Promise ((resolve)=>{
        setTimeout(function(){
            resolve(products);
        },4000);
    })
}

useEffect (() =>{ 
        getDatos()
        .then(respuestaPromise => setProductos(respuestaPromise))
    },[]);
    
 return (
        <>
         <p>A continuación podrás ver todos nuestro merchandising</p>
         <ItemList productos={productos}/>
        </>
            )
}
   

export default ItemListContainer;