import React from 'react';
import Carousel from 'react-material-ui-carousel';
import './carousel.css'

const Carousell =(props) =>{
    const items = [
        {
            name: 'Aya Bouchiha',
            text: 'dddddddddddddddddddddddddddd',
            description: 'https://ugc.kn3.net/i/origin/http://2.bp.blogspot.com/-z8SQGvfAdYw/UCaeMYyC4dI/AAAAAAAAF8w/yj8AN3waQig/s1600/perritos+tiernos+5%255B1%255D.jpg',
        },
        {
            name: 'John Doe',
            text: 'dddddddddddddddddddddddddddd',
            description: 'https://s3-eu-west-1.amazonaws.com/barkibu-blog/blog+images/Trato+a+mi+perro+como+un+beb%C3%A9%2C+%C2%BFes+malo+para+%C3%A9l%3F/bebe3.jpg',
        },
        {
            name: 'Pitsu Coma',
            text: 'dddddddddddddddddddddddddddd',
            description: 'https://s3-eu-west-1.amazonaws.com/barkibu-blog/blog+images/Trato+a+mi+perro+como+un+beb%C3%A9%2C+%C2%BFes+malo+para+%C3%A9l%3F/bebe3.jpg',
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