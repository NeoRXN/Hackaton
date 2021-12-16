import React from 'react'
import './bodyLegal.css'

const BodyLegal = () => {
    const info = [
        { href : 'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/IA/INS/manual-gestion-integral-residuos.pdf',
          name : 'Manual de Gestión Integral de Residuos'},
        { href : 'https://www.cancilleria.gov.co/economia-circular',
          name : 'Economía Circular en Colombia'},
        { href : 'https://www.icontec.org/eval_conformidad/certificacion-del-sistema-de-gestion-basura-cero/',
          name : 'Reciclaje en Colombia'},
        { href : 'https://repository.eafit.edu.co/bitstream/handle/10784/29682/JulioOrlando_CastroGuaman_2021.pdf?sequence=2&isAllowed=y',
          name : 'Manejo de Residuos'},
    ]
    return (
        <div className='legalFooter'>
        {info.map((item)=>{
            return (
                <a href={item.href}>{item.name}</a>
            )
        })}
        </div>   
    )
}

export default BodyLegal; 