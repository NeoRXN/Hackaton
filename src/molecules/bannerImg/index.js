import React from 'react';
import CardImg from '../../atoms/cardImg';
import './bannerImg.css'

const BannerImg = () => {
  const images = [
      {origin:'https://pbs.twimg.com/media/EYQMXo8XQAAIP5T.jpg',
      className:'img1'},
      {origin:'https://pbs.twimg.com/media/EYQMXo8XQAAIP5T.jpg',
      className:'img2'},
      {origin:'https://pbs.twimg.com/media/EYQMXo8XQAAIP5T.jpg',
      className:'img3'},
      {origin:'https://pbs.twimg.com/media/EYQMXo8XQAAIP5T.jpg',
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
