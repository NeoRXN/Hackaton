import React from 'react';
import './cardInformationL.css'

const CardInformationL = ({origin, text, title, more, video}) => {
    console.log(origin)
    return (
        <div className='imgInformationL'>
            <div className='imgInformation' >
                <img src={origin} alt='imgInformation' width={'65%'} className='imgL' ></img>
            </div>
            <div className='txtInformation'>
                <h3>{title}</h3>
                <p>{text} <a href={more} target='_blank' rel='noreferrer'>Leer más</a></p>
                <br/>
                <a href={video} target='_blank' rel='noreferrer'>Ver video</a>
        </div>
        </div >
    );
}

export default CardInformationL;
