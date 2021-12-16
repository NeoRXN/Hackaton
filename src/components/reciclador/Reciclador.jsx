import React,{useContext,useEffect} from 'react'
import Header from '../../layout/Header';
import '../../css/recicladores.css';
import Cards from './Cards';
import Informacion from './Informacion';
import generadoresContext from '../../generadores/generadoresContext'
import Title from '../../atoms/title';
import CopyRight from '../../atoms/copyRight'

export default function Reciclador() {

    const pageTitle = 'Solicitudes Vigentes'
    //traer producto del state
    const contextGeneradores = useContext(generadoresContext);
    const{cards, agregarProducto} = contextGeneradores;

    //obtener lista en localstorage
    useEffect(()=>{
        const ls = JSON.parse(localStorage.getItem('Productos'));
        ls.map(item=>agregarProducto(item))
    },[])
    return (
        <section className='body'>
            <Header/>
            <Title title={pageTitle} ></Title>
            <main className='main container'>
                {cards ? <Cards/> : <Informacion/>}
            </main>
            <CopyRight id='display' />
        </section>
    )
}
