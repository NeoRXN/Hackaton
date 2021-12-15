import React,{Fragment, useContext,useEffect} from 'react'
import Header from '../../layout/Header';
import '../../css/recicladores.css';
import Cards from './Cards';
import Informacion from './Informacion';
import generadoresContext from '../../generadores/generadoresContext'
import hack7 from '../../iconos e imagenes/Hack7.png'



export default function Reciclador() {


    //traer producto del state
    const contextGeneradores = useContext(generadoresContext);
    const{cards, agregarProducto} = contextGeneradores;

    //obtener lista en localstorage
    useEffect(()=>{
        const ls = JSON.parse(localStorage.getItem('Productos'));
        ls.map(item=>agregarProducto(item))
    },[])
    return (
        <Fragment>
            <Header/>
            <main className='main container'>
                {cards ? <Cards/> : <Informacion/>}
            </main>
            <footer className='Gfooter'>
                <div className="Gcontenidofooter flex">
                    <p>Todos los derechos reservados ©| diseñado y construido por </p>
                    <img src={hack7} alt="grupo7 logo"/>
                </div>
            </footer>
        </Fragment>
    )
}
