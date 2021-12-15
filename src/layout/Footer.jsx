import React from 'react'
import hack7 from '../iconos e imagenes/Hack7.png'

export default function Footer() {
    return (
        <footer>
            <div className="footer flex">
                <p>Todos los derechos reservados ©| diseñado y construido por </p>
                <img src={hack7} alt="grupo7 logo"/>
            </div>
        </footer>
    )
}
