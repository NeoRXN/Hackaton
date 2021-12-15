import React from 'react';
import Carousel from 'react-material-ui-carousel';
import './carousel.css'
import imgBanner1 from '../../images/Banner1.png'
import imgBanner2 from '../../images/Banner2.png'
import imgBanner3 from '../../images/Banner3.png'

const Carousell =(props) =>{
    const items = [
        {
            name: 'Aya Bouchiha',
            text: 'dddddddddddddddddddddddddddd',
            description: imgBanner1,
        },
        {
            name: 'John Doe',
            text: 'dddddddddddddddddddddddddddd',
            description: imgBanner2
        },
        {
            name: 'Pitsu Coma',
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