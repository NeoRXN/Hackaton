import React,{useContext} from 'react'
import generadoresContext from '../../generadores/generadoresContext'

export default function Informacion() {

        //traer producto del state
        const contextGeneradores = useContext(generadoresContext);
        const{seleccion, mostrarCards} = contextGeneradores;

        //extraer la posicion 0 del objeto
        const [productoActual] = seleccion;


    const onClick = () =>{
        //oculta la ventana y muestra las tarjetas
        mostrarCards(true)
    }

    return (
        <section className='Ginformacion'>
            <div className="Gimagen"><img src={productoActual.imagen} alt='producto img'/></div>
            <div class="Ginfo grid">
                <div class="Gizquierdo">
                    <p class="Gnombre">{productoActual.generador}</p>
                    <p class="Gproducto">{productoActual.nombre}</p>
                    <p class="Gtipo">{productoActual.tipo}</p>
                    <p class="Gdescripcion">{productoActual.descripcion}</p>
                </div>
                <div class="Gderecho">
                    <p class="Gtamaño">{productoActual.tamaño}</p>
                    <p class="Gpeso">{productoActual.peso}</p>
                    <button class="Gbtn" onClick={onClick}>Aceptar producto</button>
                </div>
            </div>
        </section>
    )
}
