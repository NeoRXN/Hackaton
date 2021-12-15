import React,{useContext, useEffect, useState} from 'react'
import generadoresContext from '../../generadores/generadoresContext'
import Card from './Card';

export default function Cards() {

    //traer producto del state
    const contextGeneradores = useContext(generadoresContext);
    const{ listadoproductos, agregarProducto} = contextGeneradores;


    

    const [verificar, actualzarVerificar] = useState(true);
    
    if(listadoproductos === []){
        actualzarVerificar(false)
    }

    return (
        <section className="cards">
            {listadoproductos.map(producto=>(
                <Card 
                key = {producto.id}
                producto={producto}/>
            ))
            // : <p>No hay productos</p>
            }
        </section>
    )
}
