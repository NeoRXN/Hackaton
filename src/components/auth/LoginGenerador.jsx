import React,{Fragment, useState, useEffect, useContext} from 'react'
import '../../css/logingenerador.css'
import logo from '../../iconos e imagenes/Sharc.png'
import hack7 from '../../iconos e imagenes/Hack7.png'
import {Link} from 'react-router-dom';
import generadoresContext from '../../generadores/generadoresContext';



export default function LoginGenerador() {
        //traer producto del state
        const contextGeneradores = useContext(generadoresContext);
        const{usuarios, guardarUsuarios} = contextGeneradores;

        const [usuario, actualizarUsuario] = useState({
            nombre: '',
            password: ''
        })

        const {nombre, password} = usuario;

        const onChange = e =>{
            //guardar datos
            actualizarUsuario({
                ...usuario,
                [e.target.name] : e.target.value
            })
        }

        const [avanzar, actualizarAvanzar] = useState('/logingenerador')
    
        //obtener lista en localstorage
        useEffect(()=>{
            const ls = JSON.parse(localStorage.getItem('Usuarios'));
            ls.map(item=>guardarUsuarios(item))
        },[])

        //Comparando 
        const onClick = () =>{
            usuarios.map(item =>{
                if(usuario.nombre === item.nombre || usuario.nombre === item.email){
                    console.log('usuario o email coninciden');
                    if(usuario.password === item.password){
                        console.log('contraseña coincide');
                        actualizarAvanzar('/generador')
                    }
                    console.log('no coincide contraseña')
                }
                console.log('no coincide usuario')
                return null;
            })
        }

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
                        <input className="LGInput" type="text" name="nombre" id="usuario" value={nombre} onChange={onChange}/>
                    
                    <label htmlFor="password">contraseña</label>
                    <input className="LGInput" type="text" name="password" id="password" value={password} onChange={onChange}/>

                    <Link to={avanzar}><button className="LGBtn" onClick={onClick}>Iniciar sesión</button></Link>
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
