import React from 'react';
import Item from './Item'

export default function ItemList ({productos}) {
    return (
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
    )
}



