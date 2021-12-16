import React,{Fragment, useContext, useState, useEffect} from 'react'
import logo from '../../iconos e imagenes/Sharc.png'
import hack7 from '../../iconos e imagenes/Hack7.png'
import '../../css/registroreciclador.css'
import generadoresContext from '../../generadores/generadoresContext';
import {Link} from 'react-router-dom';


export default function RegistroReciclador() {
    //traer producto del state
    const contextGeneradores = useContext(generadoresContext);
    const{usuarios, guardarUsuarios} = contextGeneradores;

    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email:'',
        password:'',
        telefono:'',
        tipo: '',
        capacidad:''
    });

    const {nombre, email, password, telefono, tipo, capacidad} = usuario;

    const onChange = e =>{
        //guardar datos
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e =>{
        e.preventDefault()
        //Guardar el usuario
        guardarUsuarios(usuario)
        //reiniciar formulario
        guardarUsuario({
            nombre: '',
            email:'',
            password:'',
            telefono:'',
            tipo: '',
            capacidad:''
        })
    }

    useEffect(()=>{
        localStorage.setItem('Usuarios', JSON.stringify(usuarios));
    }, [usuarios])

    return (
        <Fragment>
            <header className="RRHeader container">
                <img src={logo} alt="SHARC logo" className="RRLogo"/>
                <h1>Recicladores</h1>
            </header>
            <main className="container">
                <section className="RRFormulario">
                    <form action=""  className="grid RRForm" onSubmit={onSubmit}>
                        <div className="RRIzquierda">
                            <label htmlFor="nombre">Nombre completo</label>
                            <input className="RRInput" type="text" name="nombre" id="usuario" value={nombre} onChange={onChange}/>
                            
                            <label htmlFor="email">Email</label>
                            <input className="RRInput" type="text" name="email" id="email" value={email} onChange={onChange}/>

                            <label htmlFor="password">Contraseña</label>
                            <input className="RRInput" type="password" name="password" id="password" value={password} onChange={onChange}/>
                        </div>

                        <div className="RRDerecha">
                            <label htmlFor="telefono">Teléfono</label>
                            <input className="RRInput" type="text" name="telefono" id="telefono" value={telefono} onChange={onChange}/>

                            <label htmlFor="tipo">Tipo de material que recicla</label>
                            <input className="RRInput" type="text" name="tipo" id="tipo" value={tipo} onChange={onChange}/>

                            <label htmlFor="capacidad">Capacidad de recolección</label>
                            <input className="RRInput" type="text" name="capacidad" id="capacidad" value={capacidad} onChange={onChange}/>
                        </div>
                        <div className="RRBoton">
                            <input type='submit' className="RRBtn" value='Registrar'/>
                        </div>
                    </form>
                    <div className="RRRecolectores">
                        <label >¿Posee recolectores propios?</label>
                        <div className="RRSi">
                            <input type="radio" name="recolectores" id="si" value="si"/> Si
                            <input type="radio" name="recolectores" id="no" value="no"/> No
                        </div>
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
