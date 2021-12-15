import React,{Fragment} from 'react'
import logo from '../../iconos e imagenes/Sharc.png'
import hack7 from '../../iconos e imagenes/Hack7.png'
import '../../css/registroreciclador.css'

export default function RegistroReciclador() {
    return (
        <Fragment>
            <header className="RRHeader container">
                <img src={logo} alt="SHARC logo" className="RRLogo"/>
                <h1>Recicladores</h1>
            </header>
            <main className="container">
                <section className="RRFormulario">
                    <form action=""  className="grid RRForm">
                        <div className="RRIzquierda">
                            <label htmlFor="usuario">Nombre completo</label>
                            <input className="RRInput" type="text" name="usuario" id="usuario"/>
                            
                            <label htmlFor="email">Email</label>
                            <input className="RRInput" type="text" name="email" id="email"/>

                            <label htmlFor="password">Contraseña</label>
                            <input className="RRInput" type="password" name="password" id="password"/>
                        </div>

                        <div className="RRDerecha">
                            <label htmlFor="telefono">Teléfono</label>
                            <input className="RRInput" type="text" name="telefono" id="telefono"/>

                            <label htmlFor="tipo">Tipo de material que recicla</label>
                            <input className="RRInput" type="text" name="tipo" id="tipo"/>

                            <label htmlFor="capacidad">Capacidad de recolección</label>
                            <input className="RRInput" type="text" name="capacidad" id="capacidad"/>
                        </div>
                    </form>
                    <div className="RRRecolectores">
                        <label >¿Posee recolectores propios?</label>
                        <div className="RRSi">
                            <input type="radio" name="recolectores" id="si" value="si"/> Si
                            <input type="radio" name="recolectores" id="no" value="no"/> No
                        </div>
                    </div>
                    <div className="RRBoton">
                        <button className="RRBtn">Registrar</button>
                    </div>
                </section>
            </main> 
            <footer className='RRFooter'>
                <div className="RRContenidoFooter flex">
                    <p>Todos los derechos reservados ©| diseñado y construido por </p>
                    <img src={hack7} alt="grupo7 logo"/>
                </div>
            </footer>
        </Fragment>
        
    )
}
