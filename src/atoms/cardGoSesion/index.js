import React from 'react';
import './cardGoSesion.css'
// import Button from '@mui/material/Button';

const CardGoSesion =({title,text,textButton}) => {
  return (
    <div className='cardGoSesion'>
      <div className='cardInfo'>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className='cardButton' >
        <input
          href='www.google.com'
          className='buttonSesion'
          type='button'
          value={textButton}
        />
      </div>
    </div>
  );
}

export default CardGoSesion;
