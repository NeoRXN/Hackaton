import React from 'react';
import Carousel from 'react-material-ui-carousel';
import './carousel.css'
import imgBanner1 from '../../iconos e imagenes/Banner1.png'
import imgBanner2 from '../../iconos e imagenes/Banner2.png'
import imgBanner3 from '../../iconos e imagenes/Banner3.png'

const Carousell =() =>{
    const items = [
        {
            name: 'imgBanner1',
            text: 'dddddddddddddddddddddddddddd',
            description: imgBanner1,
        },
        {
            name: 'imgBanner2',
            text: 'dddddddddddddddddddddddddddd',
            description: imgBanner2
        },
        {
            name: 'imgBaner3',
            text: 'dddddddddddddddddddddddddddd',
            description: imgBanner3,
        },
    ];

    return (
        <Carousel>
            {items.map((item, i) => (
                <Item key={i} {...item} />
            ))}
        </Carousel>
    );
}

const Item = ({name, description, text}) => {
    return (
        <div className='carousel'>
            <img src={description} alt={name} className='homeCarousell' ></img>
            {/* <p className='carouselText'>{text}</p> */}
        </div>
    );
};

export default Carousell;