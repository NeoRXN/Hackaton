import React from 'react';
import './cardGoSesion.css'
// import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

const CardGoSesion =({title,text,textButton,sesion}) => {
  return (
    <div className='cardGoSesion'>
      <div className='cardInfo'>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className='cardButton' >
        <Link
          to={sesion}
          className='buttonSesion'
          type='button'
        >{textButton}</Link>
      </div>
    </div>
  );
}

export default CardGoSesion;
