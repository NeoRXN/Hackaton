import React from 'react';
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './bodyNetworkFooter.css'

const BodyNetworkFooter = () => {
  const networks = [
    {
      icon : <FontAwesomeIcon icon={faInstagram}/>,
      name : 'Instagram',
      href : 'https://www.instagram.com/empresa_sharc'
    },
    {
      icon : <FontAwesomeIcon icon={faFacebookSquare}/>,
      name : 'Facebook',
      href : '#'
    },
    {
      icon :  <FontAwesomeIcon icon={faWhatsapp}/>,
      name : 'Whatsapp',
      href : '#'
    }
  ]
  return (
    <div>
      {networks.map((item)=>{
        return (
          <a href={item.href}  target='_blank' className='networkLinks' rel='noreferrer'>   
            {item.icon}
            <p>{item.name} </p>
          </a>
        )
      })}
    </div>
  );
}

export default BodyNetworkFooter;