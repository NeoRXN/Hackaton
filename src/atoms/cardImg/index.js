import React from "react";
import {Link} from "react-router-dom";
import './cardImg.css'

const CardImg = ({origin,className }) => {
    console.log(className)
  return (
    <div className={className}>
      <Link to={'/information'}>
        <img src={origin} alt="img-banner" width={'100%'} className="img-banner"/>
      </Link>
    </div>
  );
};

export default CardImg;
