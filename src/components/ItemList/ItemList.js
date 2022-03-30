import React from 'react';
import Item from './Item'

export default function ItemList ({productos}) {
    return (
        <div className="container rowItemList">
            <div className="row rowItemList">                  
                {productos.map(miProducto=>{
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



