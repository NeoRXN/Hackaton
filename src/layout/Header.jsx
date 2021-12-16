import React from 'react'
import logo from '../iconos e imagenes/Sharc.png';
import { UilUserCircle } from '@iconscout/react-unicons';
import {Link} from 'react-router-dom';


export default function Header() {
    return (
        <header className='header flex'>
            <div className="logo flex">
                <img src={logo} alt="logo"/>
                <h1>SHARC</h1>
            </div>
            <div className="usuario flex">
                <div className="logoUsuario flex">
                    <UilUserCircle size="100px" color="#B98CF2"/>
                    <h2 className="nombreUsuario">Nombre de usuario</h2>
                </div>
                <div>
                    <Link to={'/'}><button className="cerrarSesion">Volver al inicio</button></Link>
                    <Link to={'/information'}><button className="cerrarSesion">¿Como reciclar?</button></Link>
                    <Link to={'/'} className="cerrarSesion">cerrar sesión</Link>
                </div>
            </div>
        </header>  
    )
}
