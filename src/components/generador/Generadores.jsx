import React,{Fragment} from 'react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import DireccionProductos from './DireccionProductos';
import MapaCosto from './MapaCosto';
import '../../css/generadores.css';
import Title from '../../atoms/title';
import CopyRight from '../../atoms/copyRight'

export default function Generadores() {
    const pageTitle = 'Solicitud de Recoleción'
    return (
        <Fragment className="body">
            <Header/>
            <Title title={pageTitle} ></Title>
            <main className='main container grid'>
                <DireccionProductos/>
                <MapaCosto/>
            </main>
            <CopyRight id='flex' />
        </Fragment>
    )
}
