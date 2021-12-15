import React,{useContext, useState, useEffect} from 'react';
import Direccion from './Direccion';
import Productos from './Productos';
import generadoresContext from '../../generadores/generadoresContext';
import swal from 'sweetalert'

export default function DireccionProductos() {

    //llamar a la alerta
    // const alert = useAlert();

    //traer producto del state
    const contextGeneradores = useContext(generadoresContext);
    const{agregarProducto, mostrarBotones, listadoproductos} = contextGeneradores;

    //state de direccion
    const [datos, actualizarDatos] = useState({
        ciudad: '',
        direccion: '',
        comentarios: ''
    })

    const [producto, actualizarProducto] = useState({
        tipo: '',
        nombre: '',
        dimensiones: '',
        peso: '',
        descripcion: '',
        imagen: null,

    })

    //Combinando los objetos 
    const objeto = {...datos, ...producto}

    const {ciudad, direccion, comentarios, tipo, nombre, dimensiones, peso, descripcion, imagen} = objeto

    const reiniciarFormulario = () =>{
        //Reiniciar el formulario
        actualizarDatos({
            ciudad: '',
            direccion: '',
            comentarios: ''
        })

        actualizarProducto({
            tipo: '',
            nombre: '',
            dimensiones: '',
            peso: '',
            descripcion: '',
            imagen: null,
        })
    }



    //Cuando presiona enviar
    const onSubmit = (e) => {
        e.preventDefault()
        // Verificando campos vacios
        //Verificar si todos los datos son validos
        if( tipo === ''|| nombre === '' || dimensiones === ''|| peso === ''|| descripcion === ''|| imagen === null || ciudad === '' || direccion === '' || comentarios === ''){
            return swal('Todos los datos son obligatorios')
        }
        //Agregando el objeto completo
        agregarProducto(objeto)

        //Reiniciar el formulario
        reiniciarFormulario();

        //ocultar los botones
        mostrarBotones(false)
    }


        // //obtener lista en localstorage
        // useEffect(()=>{
        //     const ls = JSON.parse(localStorage.getItem('Productos'));
        //     ls.map(item=>agregarProducto(item))
        // },[])

    //Guardar lista en localStorage
    useEffect(()=>{
        localStorage.setItem('Productos', JSON.stringify(listadoproductos));
    }, [listadoproductos])


    return (
        <section className='izquierdo'>
            <form id='enviar' onSubmit={onSubmit} >
                <Direccion
                    datos = {datos}
                    actualizarDatos= {actualizarDatos}
                />
                <Productos
                    producto = {producto}
                    actualizarProducto = {actualizarProducto}
                />
            </form>
        </section>
    )
}
