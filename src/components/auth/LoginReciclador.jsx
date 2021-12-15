import React,{Fragment} from 'react'
import '../../css/loginreciclador.css'
import logo from '../../iconos e imagenes/Sharc.png'
import hack7 from '../../iconos e imagenes/Hack7.png'
import {Link} from 'react-router-dom';


export default function LoginReciclador() {
    return (
        <Fragment>
            <header className="LRHeader container">
                <img src={logo} alt="SHARC logo" className="LRLogo"/>
                <h1>Recicladores</h1>
            </header>

            <main className="container">
                <section className="LRFormulario">
                    <form action="" className="flex">
                        <label htmlFor="usuario">Usuario o correo</label>
                    <input className="LRInput" type="text" name="usuario" id="usuario"/>
                    
                    <label htmlFor="password">contraseña</label>
                    <input className="LRInput" type="text" name="password" id="password"/>

                    <button className="LRBtn">Iniciar sesión</button>
                    </form>
                </section>

                <section className="LROpciones flex">
                    <a href="!#" className="LGOlvido">¿Olvidó su contraseña?</a>
                    <Link to={'/registroreciclador'} className="LGOlvido">
                        ¿Nuevo usuario? Cree su cuenta aquí
                    </Link>
                </section>
            </main>
            <footer class="LGFooter">
                <div class="LGContenidoFooter flex">
                    <p>Todos los derechos reservados ©| diseñado y construido por </p>
                    <img src={hack7} alt="grupo7 logo"/>
                </div>
            </footer>
        </Fragment>
    )
}
