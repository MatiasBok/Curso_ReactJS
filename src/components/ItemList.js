import React from 'react';
import Item from './Item'

export default function ItemList ({productos}) {
    return (
        <section>
           {productos.map(miProducto=>{
              return(
                    <div>
                        <Item
                        key={miProducto.id}
                        Producto= {miProducto.nombre}
                        Precio= {miProducto.precio}
                        Stock= {miProducto.stock}
                        Descripción= {miProducto.description}
                        Marca= {miProducto.marca}
                        />
                    </div>
              )
            })}            
        </section>
    )
}



