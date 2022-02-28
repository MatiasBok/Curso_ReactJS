import React from 'react'

const Main = ({nombre,edad}) => {

    return(
        <main>
            <h2>Bienvenido {nombre} al Mercado Online de la Academia!</h2>
            <h3>Tienes {edad} puedes ingresar! </h3>
        </main>
    )
}

export default Main