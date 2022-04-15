import React, {Fragment, useContext, useState, useEffect} from 'react'
import {useNavigate} from  'react-router-dom';
import {contexto} from '../Context/MiContexto';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import {db} from '../firebase';

const TerminarLaCompra= () => {
  const {carrito} = useContext(contexto)
 
  useEffect(()=>{
    document.title="Formulario"
  },[])

    const navigate = useNavigate();  
    const {calcularPrecioTotal} = useContext(contexto);
    const [envioCompleto, setEnvioCompleto] = React.useState(false);
    const [form, setForm] = useState({nombre: '', apellido: '', dirección:'', teléfono:'', email:''})

const handleChange = (e) => {
  console.log(e.target.value)
  console.log(e.target.name)
  
  setForm({
    ...form,
    [e.target.name] : e.target.value,
  });
}

const finalizarEnvio= async (evt) => {
evt.preventDefault();



  const orden = {
    comprador : {
      nombre:"",
      apellido:"",
      dirección:"",
      teléfono:"",
      email: ""
    },
    items: [...carrito],
    fecha: Timestamp.now(),
    total: calcularPrecioTotal()
  };  
  
  const vendidosCollection = collection(db,"vendidos");
  const ordenDeCompra = await addDoc(vendidosCollection, orden);

  setEnvioCompleto(true);
  
  console.log(ordenDeCompra.id);

};
 
return(
  <div className="Terminar">
    {envioCompleto ? (
        <div className="compraProcesada">
            <h3 className="tituloProcesada" >El formulario se envío con éxito!</h3>
            <p className="parrafoProcesada">Su compra está siendo procesada, recibirá un email con toda la información.</p>
            <button className='btn btn-success buttonFinalizar' onClick={()=>navigate("/")}>Volver al catálogo</button>
        </div>
     ) : (
        <Fragment>
            <div>
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
        )}
    </div>
  );
};

export default TerminarLaCompra

