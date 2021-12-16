import React,{Fragment, useState, useEffect, useContext} from 'react'
import logo from '../../iconos e imagenes/Sharc.png'
import hack7 from '../../iconos e imagenes/Hack7.png'
import '../../css/registrogenerador.css'
import generadoresContext from '../../generadores/generadoresContext';



export default function RegistroGenerador() {

        //traer producto del state
        const contextGeneradores = useContext(generadoresContext);
        const{usuarios, guardarUsuarios} = contextGeneradores;

    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email:'',
        password:'',
        telefono:''
    });

    const {nombre, email, password, telefono} = usuario;

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
            telefono:''
        })
    }
    
    useEffect(()=>{
        localStorage.setItem('Usuarios', JSON.stringify(usuarios));
    }, [usuarios])

    return (
        <Fragment>
            <header className="RGHeader container">
                <img src={logo} alt="SHARC logo" className="RGLogo"/>
                <h1>Generador</h1>
            </header>
            <main class="container">
                <section class="RGFormulario">
                    <form action="" class="flex" onSubmit={onSubmit}>
                        <label htmlFor="nombre">Nombre completo</label>
                        <input className="RGInput" type="text" name="nombre" value={nombre} id="usuario" onChange={onChange}/>
                        
                        <label htmlFor="email">Email</label>
                        <input className="RGInput" type="text" name="email" value={email} id="email" onChange={onChange}/>

                        <label htmlFor="password">Contraseña</label>
                        <input className="RGInput" type="password" name="password" value={password} id="password" onChange={onChange}/>

                        <label htmlFor="telefono">Teléfono</label>
                        <input className="RGInput" type="text" name="telefono" value={telefono} id="telefono" onChange={onChange}/>

                        <input type='submit' value='Registrar' class="RGBtn"/>
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
