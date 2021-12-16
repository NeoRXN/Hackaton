import React from 'react';
import CardImg from '../../atoms/cardImg';
import './bannerImg.css'
import img1 from '../../iconos e imagenes/Acopio.jpg'
import img2 from '../../iconos e imagenes/Clasificacion.jpg'
import img4 from '../../iconos e imagenes/Separacion.jpg'
import img3 from '../../iconos e imagenes/Importanciareciclar.jpg'

const BannerImg = () => {
  const images = [
      {origin:img1,
      className:'img1'},
      {origin:img2,
      className:'img2'},
      {origin:img3,
      className:'img3'},
      {origin:img4,
      className:'img4'},
  ]

  return (
    <section className='bannerImg'>
        {images.map(item=>{
            return (<CardImg origin={item.origin} className={item.className} />)
        })}
    </section>
  );
}

export default BannerImg;
