import React,{Fragment} from 'react'
import '../../css/logingenerador.css'
import logo from '../../iconos e imagenes/Sharc.png'
import hack7 from '../../iconos e imagenes/Hack7.png'
import {Link} from 'react-router-dom';


export default function LoginGenerador() {
    return (
        <Fragment>
            <header className="LGHeader container">
                <img src={logo} alt="SHARC logo" className="LGLogo"/>
                <h1>Generadores</h1>
            </header>

            <main className="container">
                <section className="LGFormulario">
                    <form action="" className="flex">
                        <label htmlFor="usuario">Usuario o correo</label>
                    <input className="LGInput" type="text" name="usuario" id="usuario"/>
                    
                    <label htmlFor="password">contraseña</label>
                    <input className="LGInput" type="text" name="password" id="password"/>

                    <button className="LGBtn">Iniciar sesión</button>
                    </form>
                </section>

                <section className="LGOpciones flex">
                    <a href="!#" className="LGOlvido">¿Olvidó su contraseña?</a>
                    <Link to={'/registrogenerador'} className="enlace-cuenta">
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
