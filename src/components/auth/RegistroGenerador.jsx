import React,{Fragment} from 'react'
import logo from '../../iconos e imagenes/Sharc.png'
import hack7 from '../../iconos e imagenes/Hack7.png'
import '../../css/registrogenerador.css'


export default function RegistroGenerador() {
    return (
        <Fragment>
            <header className="RGHeader container">
                <img src={logo} alt="SHARC logo" className="RGLogo"/>
                <h1>Generador</h1>
            </header>
            <main class="container">
                <section class="RGFormulario">
                    <form action="" class="flex">
                        <label htmlFor="usuario">Nombre completo</label>
                        <input className="RGInput" type="text" name="usuario" id="usuario"/>
                        
                        <label htmlFor="password">Email</label>
                        <input className="RGInput" type="text" name="password" id="password"/>

                        <label htmlFor="password">Contraseña</label>
                        <input className="RGInput" type="password" name="password" id="password"/>

                        <label htmlFor="password">Teléfono</label>
                        <input className="RGInput" type="text" name="telefono" id="telefono"/>

                        <button class="RGBtn">Registrar</button>
                    </form>
                </section>
            </main> 
            <footer className='RGFooter'>
                <div className="RGContenidoFooter flex">
                    <p>Todos los derechos reservados ©| diseñado y construido por </p>
                    <img src={hack7} alt="grupo7 logo"/>
                </div>
            </footer>
        </Fragment>
    )
}
