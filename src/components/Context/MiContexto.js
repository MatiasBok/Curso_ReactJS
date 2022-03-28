import React, {createContext, useState} from 'react';

export const contexto = createContext() 
const {Provider} = contexto

const MiProvider = ({children}) => {
    const [carrito,setCarrito] = useState ([])
    const[estado, setEstado] = useState(0)
    const[total,setTotal] = useState(false)

    const isInCart = (id) => {
        return carrito.some(products => products.id === id);
    }

    const addItem = (producto,estado) => {
        const copiaCarrito = [...carrito];
        const itemAlCarrito = [...producto, estado];
        
        if(isInCart(producto.id)){
            let index = copiaCarrito.findIndex (products => products.id === producto.id);
            copiaCarrito[index].estado += estado;
        }else{
            copiaCarrito.push(itemAlCarrito);
            setCarrito(copiaCarrito);
        }
    }

    const removeItem = (producto,estado) => {
        const copiaCarrito = [...carrito];
        const itemDelCarrito = [...producto, estado];
        
        if(isInCart(producto.id)){
            let index = copiaCarrito.findIndex (products => products.id === producto.id);
            copiaCarrito[index].estado -= estado;
        }else{
            copiaCarrito.pop(itemDelCarrito);
            setCarrito(copiaCarrito);
        }
    }

    const calcularCantidad = () => {
        let estado = 0;
        carrito.forEach(products => estado = products.estado)
        return estado;
    };

    const calcularPrecioTotal = () => {
        let precioTotal = 0;
        carrito.forEach(products => products.estado * products.precio)
        return precioTotal
    }

    const clear =() => {
        setCarrito([]);
        setEstado(0)
    }

    const valorDelContexto = {
        carrito: carrito,
        addItem: addItem,
        removeItem: removeItem,
        isInCart: isInCart,
        calcularCantidad: calcularCantidad,
        calcularPrecioTotal: calcularPrecioTotal,
        clear: clear,
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default MiProvider