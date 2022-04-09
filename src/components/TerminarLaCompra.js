/*import React, {Fragment, useState} from 'react'


export default function TerminarLaCompra() {


const [datos, setDatos] = useState({
  nombre: '',
  apellido: ''
})

const handleInputChange = (event) => {
  // console.log(event.target.name)
  // console.log(event.target.value)
  setDatos({
      ...datos,
      [event.target.name] : event.target.value
  })
}

const enviarDatos = (event) => {
  event.preventDefault()
  console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)
}

return (
  <Fragment>
       <div>Muchas Gracias por su compra!!!</div>
       <p> Por favor, llene el formulario con sus datos para una mejor atención</p>
       <h1>Formulario</h1>
       <form className="row" onSubmit={enviarDatos}>
          <div className="col-md-3">
              <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
          </div>
          <div className="col-md-3">
              <input type="text" placeholder="Apellido" className="form-control" onChange={handleInputChange} name="apellido"></input>
          </div>

          <button type="submit" className="btn btn-primary">Enviar</button>
       </form>
       <ul>
           <li>{datos.nombre}</li>
           <li>{datos.apellido}</li>
       </ul>
   </Fragment>
  );
}

export default TerminarLaCompra*/

