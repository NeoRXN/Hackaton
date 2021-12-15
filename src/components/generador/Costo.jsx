import React,{Fragment, useContext} from 'react'
import generadoresContext from '../../generadores/generadoresContext';

export default function Costo() {


    //traer producto del state
    const contextGeneradores = useContext(generadoresContext);
    const{botones, mostrarBotones, actual, reiniciarFormulario} = contextGeneradores;

    //Extraer datos del producto actual
    const {ciudad, direccion, comentarios, tipo, dimensiones, peso, descripcion, imagen} = actual

    const solicitarBtn = () => {
        if( tipo === '' || dimensiones === ''|| peso === ''|| descripcion === ''|| imagen === null || ciudad === '' || direccion === '' || comentarios === ''){
            return;
        }
        //mostrar botones
        mostrarBotones(false)
    }

    const cancelar = () =>{
        mostrarBotones(true)
        reiniciarFormulario(true)
    }

    return (
        <div className='costo'>
            <h3 className="titulo">Costo</h3>
                <div className="info flex">
                    <p>Tamaño</p>
                    <span>{dimensiones}</span>
                    <p>peso</p>
                    <span className="valor">{peso}</span>
                </div>
                <div className="valor flex">
                    <p>valor</p>
                    <span>Valor estimado a pagar</span>
                </div>
                <div className="botones flex">
                    {botones 
                    ? (<button 
                        className="solicitar"
                        onClick={solicitarBtn}
                        >Solicitar servicio</button>)
                    
                    : (<Fragment>
                            <input 
                                type='submit'
                                className="confirmar"
                                value='Confirmar'
                                form='enviar'
                                
                            />
                                
                            <input 
                                type='button'
                                className="confirmar"
                                value='Cancelar'
                                form='enviar'
                                onClick={cancelar}
                            />
                        </Fragment>)}
                </div>
        </div>
    )
}
