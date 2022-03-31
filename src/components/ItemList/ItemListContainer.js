import React, {useState, useEffect} from 'react';
import ItemList from './ItemList.js';
import {toast} from 'react-toastify';
import Spinner from '../Spinner';
import {db} from '../firebase';
import {collection, getFirestore, getDocs, query, where} from "firebase/firestore";

const ItemListContainer = () => {

    const [productos,setProductos] = useState([]);    
    const [loading,setLoading]=useState(true);

  useEffect(()=> {
        toast.info("Trayendo productos...")
        const db = getFirestore(); 
        const productosCollection = collection(db,"productos");
        getDocs(productosCollection).then((snapshot)=>{
            setProductos(snapshot.docs.map((doc) => ({id:doc.id, ...doc.data()})));
            setLoading(false)
            toast.dismiss()
        })    
        .catch(()=>{
         toast.error("Error al traer los productos")
      });   
    },[]);


   /* useEffect(() => {
        toast.info("Trayendo productos...")
        const db = getFirestore();
        
        const q= query(collection(db,"productos"), where("categoria","==","true"));
        getDocs(q).then((snapshot) =>{
            if (snapshot.size === 0){
                setLoading(false)
                toast.dismiss()
            } else {
                setProductos(snapshot.docs.map((doc) => ({id:doc.id, ...doc.data()})));
              }
        })    
            .catch(()=>{
            toast.error("Error al traer los productos")
      });   

        },[]);*/
            

        return (
            <div class="container" className="estiloItemListContainer">
                <div style={{marginTop: '50px'}}>
                   {loading ? <Spinner /> : <ItemList producto={productos}/> }  
                </div>
            </div>    
         )       
    }

export default ItemListContainer