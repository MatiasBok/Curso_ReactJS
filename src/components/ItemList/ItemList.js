import React from 'react';
import Item from './Item'

export default function ItemList ({productos}) {
    return (
        <div class="row">
            <div class="col-md-4">
                <section>                   
                    {productos.map(miProducto=>{
                        return(                            
                                <Item
                                    key={miProducto.id}
                                    producto={miProducto}
                                />
                        )
                        })}  
                 </section>
              </div>
        </div> 
                    
    )
}



