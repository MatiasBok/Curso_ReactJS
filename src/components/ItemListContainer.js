import React, {useState, useEffect} from 'react';
import products from '../database/products.js';
import ItemList from './ItemList.js'

const ItemListContainer = () => {

function getDatos(){

    return new Promise ((resolve)=>{
        setTimeout(function(){
            resolve(products);
            /*const algunaLogica= Match.floor(Math.random()*100)
            const error = algunaLogica < 50 ? true : false;
            
            if (error === false){
                
            }else{
                reject("Error obteniendo los datos");*/
        },4000);
    })
}

function ItemListContainer(){
    
    const [productos,setProductos] = useState([]);

    useEffect (() =>{ 
        getDatos()
        .then(respuestaPromise => setProductos(respuestaPromise))
    },[]);
    
}

 /* const [productos, setProductos] = useState([])

    useEffect (()=>{
        console.log ("Ejecutando useEffect")
        setTimeout(()=>{
            setProductos(Item)  
        },2000)
    },[])*/

   
return (
    <>
     <p>A continuación podrás ver todos nuestro merchandising</p>
     <ItemList productos={productos}/>
    </>
        )
}

export default ItemListContainer;