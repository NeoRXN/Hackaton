import React from 'react';
import Navbar from '../../atoms/navbar'
import ContainerInformation from '../../molecules/containerInformation';
import './information.css'
import Title from '../../atoms/title'
import Footer from '../../molecules/Footer'
import CopyRight from '../../atoms/copyRight';

const Information = () => {
  return (
    <div className='informationPage'>
      <Navbar/>
      <Title
      title='¿Cómo Reciclar?' />
      <ContainerInformation/>
      <Footer/>
      <CopyRight/>
    </div>
  );
}

export default Information;