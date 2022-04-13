import React, {Fragment, useContext, useState, useEffect} from 'react'
import {useNavigate} from  'react-router-dom';
import {contexto} from '../Context/MiContexto';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import {db} from '../firebase';
import carrito from './Carrito'


const TerminarLaCompra= () => {

  useEffect(()=>{
    document.title="Formulario"
  },[])

    const navigate = useNavigate();  
    const {calcularPrecioTotal} = useContext(contexto)
    const [envioCompleto, setEnvioCompleto] = React.useState(false)
    const [form, setForm] = useState({nombre: '', apellido: '', dirección:'', teléfono:'', email:''})

const handleChange = (e) => {
  console.log(e.target.value)

  setForm({
      ...form,
      [e.target.nombre] : e.target.value,
      [e.target.apellido] : e.target.value,
      [e.target.dirección] : e.target.value,
      [e.target.teléfono] : e.target.value,
      [e.target.email] : e.target.value,
  })
}

const finalizarEnvio= async () => {
  setEnvioCompleto(true);
  setTimeout (()=>{
  envioCompleto()/*Sé que no es una función pero no sé cómo ponerlo*/
  },3000)

  const orden = {
    comprador : {
      nombre:"",
      apellido:"",
      dirección:"",
      teléfono:"",
      email: ""
    },
    items: [...carrito],
    fecha: ordenConFecha(),
    total: calcularPrecioTotal()
  }    

    const fecha = Timestamp.now();
    const ordenConFecha = {...orden, timestamp: fecha}
    const vendidosCollection = collection(db,"vendidos");
    const ordenDeCompra = await addDoc(vendidosCollection, ordenConFecha);
    console.log(ordenDeCompra.id);
    }
 
if (form.sent)
return(
  <div className="container">
    {envioCompleto ?
        <div>
            <h3>Muchas Gracias!!!</h3>
            <p>Su compra está siendo procesada</p>
            <button className='btn btn-success buttonFinalizar' onClick={()=>navigate("/")}>Volver al catálogo</button>
        </div>
        :
        <Fragment className="fragmentTerminar">
            <div >
                <h3 className="tituloTerminar">Muchas Gracias por su compra!!!</h3>
                <p className="parrafoTerminar"> Por favor, complete el formulario con sus datos para una mejor atención</p>
            </div>
          <h4 className="formularioTerminar">Formulario</h4>
          <form className="row formTerminar" onSubmit={finalizarEnvio}>
            <div className="datosTerminar">
              <input type="text" placeholder="Nombre" className="form-control" onChange={handleChange} name="nombre" value={form.nombre}></input>
              <input type="text" placeholder="Apellido" className="form-control" onChange={handleChange} name="apellido" value={form.apellido}></input>
              <input type="text" placeholder="Dirección" className="form-control" onChange={handleChange} name="dirección" value={form.dirección}></input>
              <input type="text" placeholder="Teléfono" className="form-control" onChange={handleChange} name="teléfono" value={form.teléfono}></input>
              <input type="text" placeholder="Email" className="form-control" onChange={handleChange} name="email" value={form.email}></input>
            </div>
              <button type="submit" className='btn btn-success buttonEnviar'>Enviar</button>
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
    }
    </div>
  )
}

export default TerminarLaCompra

