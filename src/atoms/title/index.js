import React from 'react';
import './title.css'

const Title = ({title}) => {
  return (
    <div className='containerTitle'>
      <h1 className='title' >{title}</h1>
    </div>
  );
}

export default Title;
