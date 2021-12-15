import React,{Fragment} from 'react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import DireccionProductos from './DireccionProductos';
import MapaCosto from './MapaCosto';
import '../../css/generadores.css';

export default function Generadores() {
    return (
        <Fragment className="body">
            <Header/>
            <main className='main container grid'>
                <DireccionProductos/>
                <MapaCosto/>
            </main>
            <Footer/>
        </Fragment>
    )
}
