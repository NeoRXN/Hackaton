import React,{Fragment,useContext} from 'react'
import generadoresContext from '../../generadores/generadoresContext';



export default function Direccion({datos, actualizarDatos}) {
    
    //traer producto del state
    const contextGeneradores = useContext(generadoresContext);
    const{actual, productoActual} = contextGeneradores;

    //extraer datos de... datos
    const {ciudad, direccion, comentarios} = datos;


    //Guardar lo que escribe el usuario
    const onChange = e => {
        //guardar el producto
        actualizarDatos  ({
            ...datos,
            [e.target.name] : e.target.value
        })
        productoActual({
            ...actual,
            ...datos,
            [e.target.name] : e.target.value
        })
    }   


    return (
        <Fragment>
            <h3 className="titulo">Dirección y producto a reciclar</h3>
            <div className="direccion">
                <h3 className="titulo">Dirección</h3>
                <div 
                    method="post" 
                    className="direccionForm flex"
                    id="enviar2"
                >
                    <select 
                        name="ciudad" 
                        id="ciudad" 
                        className="input"
                        value={ciudad}
                        onChange={onChange}
                    >
                        <option value="">---Seleccione---</option>
                        <option value="cartagena">Cartagena</option>
                        <option value="barranquilla">Barranquilla</option>
                        <option value="medellin">Medellín</option>
                        <option value="bogota">Bogotá</option>
                    </select>

                    <input 
                        type="text" 
                        placeholder="Dirección" 
                        className="input"
                        name="direccion" 
                        value={direccion}
                        onChange={onChange}
                    />

                    <textarea 
                        className="input" 
                        name="comentarios" 
                        id="comentarios" 
                        cols="30" 
                        rows="2 " 
                        placeholder="Comentarios" 
                        value={comentarios}
                        onChange={onChange}
                    ></textarea>
                </div>
            </div>
        </Fragment>
    )
}
