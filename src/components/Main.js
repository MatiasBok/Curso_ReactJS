import React from 'react'
import ItemCount from './ItemCount'

const Main = ({nombre,edad}) => {
    
    return (
        <main>
            <h2>Bienvenido {nombre} al Mercado Online de la Academia!</h2>
            <h3>Tienes {edad} puedes ingresar! </h3>
            <ItemCount stock={10} inicial={1}/>
        </main>
    );
}

export default Main