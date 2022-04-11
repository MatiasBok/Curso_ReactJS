import React, {Fragment, useState} from 'react'
import {useNavigate} from  'react-router-dom';


function TerminarLaCompra() {

    const navigate = useNavigate();


const [form, setForm] = useState({nombre: '', apellido: '', dirección:'', teléfono:'', email:''})

const handleChange = (e) => {
  console.log(e.target.value)

  setForm({
      ...form,
      [e.target.name] : e.target.value,
      [e.target.apellido] : e.target.value,
      [e.target.dirección] : e.target.value,
      [e.target.teléfono] : e.target.value,
      [e.target.email] : e.target.value,
  })
}

const enviarDatos = (event) => {
  event.preventDefault()
  console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)
}

if (form.sent)
return(
  <div>
        <h3>Muchas Gracias!!!</h3>
        <p>Tu compra está siendo procesada</p>
        <button className='btn btn-success buttonFinalizar' onClick={()=>navigate("/")}>Volver al catálogo</button>
  </div>
)

return (
    <Fragment className="fragmentTerminar">
       <div>Muchas Gracias por su compra!!!</div>
       <p> Por favor, llene el formulario con sus datos para una mejor atención</p>
       <h1>Formulario</h1>
       <form className="row" onSubmit={enviarDatos}>
          <div className="col-md-3">
              <input type="text" placeholder="Nombre" className="form-control" onChange={handleChange} name="nombre" value={form.nombre}></input>
          </div>
          <div className="col-md-3">
              <input type="text" placeholder="Apellido" className="form-control" onChange={handleChange} name="apellido" value={form.apellido}></input>
          </div>
          <div className="col-md-3">
              <input type="text" placeholder="Dirección" className="form-control" onChange={handleChange} name="dirección" value={form.dirección}></input>
          </div>
          <div className="col-md-3">
              <input type="text" placeholder="Teléfono" className="form-control" onChange={handleChange} name="teléfono" value={form.teléfono}></input>
          </div>
          <div className="col-md-3">
              <input type="text" placeholder="Email" className="form-control" onChange={handleChange} name="email" value={form.email}></input>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
       </form>
       <ul>
           <p>Tus datos:</p>
           <li>{form.nombre}</li>
           <li>{form.apellido}</li>
           <li>{form.dirección}</li>
           <li>{form.teléfono}</li>
           <li>{form.email}</li>
       </ul>
   </Fragment>
  );
}

export default TerminarLaCompra

