import React,{useReducer, useEffect} from 'react';
import generadoresContext from './generadoresContext';
import generadoresReducer from './generadoresReducer';
import {v4 as uuid}  from 'uuid';
import { 
    AGREGAR_PRODUCTO,
    MOSTRAR_BOTONES,
    SELECCIONAR_ACTUAL,
    OBTENER_PRODUCTOS,
    MOSTRAR_CARDS,
    SELECCIONAR_PRODUCTO,
    REINICIAR_FORMULARIO
} from '../types';

// State de valores iniciales
const GeneradoresState = props => {
    // const listadoproductos = []
    const initialState ={
        listadoproductos: [],
        botones: true,
        actual: [],
        cards: true,
        seleccion: null,
        reiniciar: false
    }

    //dispatch para ejecutar acciones
    const [state, dispatch] = useReducer(generadoresReducer, initialState)



    //Agregar producto al listado
    const obtenerProductos = listadoproductos => {
        
        dispatch({
            type: OBTENER_PRODUCTOS,
            payload: listadoproductos
        })
    }


    const agregarProducto = producto => {
        producto.id = uuid();
        producto.generador = 'Jean Correa';
        dispatch({
            type:AGREGAR_PRODUCTO,
            payload: producto
        })
    }

    //Mostrar/ocultar los botones de cancelar, confirmar
    const mostrarBotones = estado =>{
        dispatch({
            type:MOSTRAR_BOTONES,
            payload: estado
        })
    }

    //seleccionar datos actuales
    const productoActual = producto => {
        dispatch({
            type:SELECCIONAR_ACTUAL,
            payload: producto
        })
    }

    //mostrar/ocultar cards
    const mostrarCards = estado => {
        dispatch({
            type: MOSTRAR_CARDS,
            payload: estado
        })
    }

    const seleccionarProducto = producto =>{ 
        dispatch({
            type:SELECCIONAR_PRODUCTO,
            payload:producto
        })
    }

    //Reiniciar el formulario de generador
    const reiniciarFormulario = estado =>{
        dispatch({
            type:REINICIAR_FORMULARIO,
            payload: estado
        })
    }

    return(
        <generadoresContext.Provider
            value={{
                //states
                listadoproductos: state.listadoproductos,
                botones: state.botones,
                actual: state.actual,
                cards: state.cards,
                seleccion: state.seleccion,
                reiniciar:state.reiniciar,
                //funciones
                obtenerProductos,
                agregarProducto,
                mostrarBotones,
                productoActual,
                mostrarCards,
                seleccionarProducto,
                reiniciarFormulario
            }}
        >
            {props.children}
        </generadoresContext.Provider>
    )
}

export default GeneradoresState
