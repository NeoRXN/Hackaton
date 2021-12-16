import React from 'react'
import './copyRight.css'
import hack7 from '../../iconos e imagenes/Hack7.png'


const CopyRight = ({id}) => {
    return (
        <div className='containerCopy' id={id}>
            <img src={hack7} alt="grupo7 logo" width={'50px'} className='imgCopy'/>
            <p className='copyRight'>
				{' '}
				© COPYRIGHT 2021 - Todos los derechos Reservados
			</p>
        </div>
    )
}

export default CopyRight
