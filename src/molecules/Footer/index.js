import React from 'react'
import CardFooter from '../../atoms/cardFooter';
import BodyNetworkFooter from '../../atoms/bodyNetworkFooter'
import BodyContact from '../../atoms/bodyContact'
import BodyLegal from '../../atoms/bodyLegal';
import './footer.css'

const Footer = () => {
    const cardNetwork='Redes Sociales'
    const cardContact='Información Contacto'
    const cardLegal='Aspecto Legal'

    return (
        <footer className='homeFooter'>
            <CardFooter
                title={cardNetwork}>
                {<BodyNetworkFooter />}
            </CardFooter>
            <CardFooter
                title={cardContact}>
                {<BodyContact />}
            </CardFooter>
            <CardFooter
                title={cardLegal}>
                {<BodyLegal />}
            </CardFooter>
        </footer>
    )
}

export default Footer;