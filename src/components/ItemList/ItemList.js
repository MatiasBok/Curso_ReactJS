import React from 'react';
import Item from './Item'

export default function ItemList ({producto}) {
    return (
        <div className="container rowItemList">
            <div className="row rowItemList">                  
                {producto.map(miProducto=>{
                    return(                            
                        <Item
                            class="col-md-4"
                            key={miProducto.id}
                            producto={miProducto}
                        />
                        )
                        })} 
            </div> 
        </div> 
                    
    )
}



