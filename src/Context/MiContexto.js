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

    const addItem = (producto,cantidad) => {
        const copiaCarrito = [...carrito];
        const itemAlCarrito = {...producto, cantidad};
        
        if(isInCart(producto.id)){
            let index = copiaCarrito.findIndex (products => products.id === producto.id);
            copiaCarrito[index].cantidad += cantidad;
            setCarrito(copiaCarrito);
        }else{
            copiaCarrito.push(itemAlCarrito);
            setCarrito(copiaCarrito);
        }
    }

    const removeItem = (productoID) => {
        const copiaCarrito = [...carrito];
                
        if(isInCart(productoID)){
            let index = copiaCarrito.findIndex (products => products.id === productoID);
            copiaCarrito.splice(index,1);
            setCarrito(copiaCarrito);
        }
    }

    const calcularCantidad = () => {
        let cantidad = 0;
        carrito.forEach(products => cantidad += products.cantidad)
        return cantidad;
    };

    const calcularPrecioTotal = () => {
        var obj = document.getElementById("totalAPagar");
				var allSingelSubElement = document.getElementsByClassName("totalProducto");
				var sum = "0";
				for (singelSubElement of allSingelSubElement){
					if (sum != ""){
						sum += "+";
					}
					sum += singelSubElement.innerHTML;
				}
				obj.innerHTML = eval(sum);
			}

    const clearCarrito =() => {
        setCarrito([]);
        setTotal(0)
        setEstado(0)
    }

    /*const finalizarCompra = () => {
        
    }*/

    const valorDelContexto = {
        carrito: carrito,
        addItem: addItem,
        removeItem: removeItem,
        isInCart: isInCart,
        calcularCantidad: calcularCantidad,
        total: calcularPrecioTotal,
        clearCarrito: clearCarrito,
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default MiProvider