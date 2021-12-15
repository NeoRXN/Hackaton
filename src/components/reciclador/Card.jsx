import React,{Fragment, useContext} from 'react'
import generadoresContext from '../../generadores/generadoresContext'


export default function Card({producto}) {
    //traer producto del state
    const contextGeneradores = useContext(generadoresContext);
    const{mostrarCards, seleccionarProducto} = contextGeneradores;

    const onClickInfo = () =>{
        //selecciona el producto    
        seleccionarProducto(producto)
        //oculta las tarjetas y muestra la ventana
        mostrarCards(false)
    }

    return (
        <Fragment>
            <div class="card">
                <h3 class="titulo">{producto.nombre}</h3>
                <div class="cardBody grid">
                    <div class="col1">
                        <p>{producto.generador}</p>
                        <p>{producto.tipo}</p>
                    </div>
                    <div class="col2">
                        <p>Tamaño: {producto.tamaño}</p>
                        <p>Peso: {producto.peso}</p>
                    </div>
                    <div class="col3">
                        <p>Dirección: {producto.direccion}</p>
                        <button class="Gbtn" onClick={onClickInfo}>Más información</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
