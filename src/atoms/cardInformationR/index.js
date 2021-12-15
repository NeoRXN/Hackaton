import React from 'react';
import './cardInformationR.css'

const CardInformationR = ({origin, text, title, more, video}) => {
    return (
        <div className='imgInformationR'>
            <div className='txtInformationR'>
                <h3>{title}</h3>
                <p >{text} <a href={more} target='_blank' rel='noreferrer'>Leer más</a></p>
                
                <br/>
                <a href={video} target='_blank' rel='noreferrer'>Ver video</a>
            </div>
            <div className='imgInfoR' >
                <img src={origin} alt='imgInformation' width={'65%'} className='imgR' ></img>
            </div>
        </div>
    );
}

export default CardInformationR;
