import React from "react";
import {Link} from "react-router-dom";
import './cardImg.css'

const CardImg = ({origin,className }) => {
  return (
    <div className={className}>
      <Link to={'/information'}>
        <img src={origin} alt="img-banner" width={'100%'} height={'250px'} className="img-banner"/>
      </Link>
    </div>
  );
};

export default CardImg;
