import './home.css';
import Navbar from '../../atoms/navbar'
import Carousell from '../../atoms/carousel'
import CardGoSesion from '../../atoms/cardGoSesion';
import CopyRight from '../../atoms/copyRight';
import Footer from '../../molecules/Footer'
import BannerImg from '../../molecules/bannerImg'

const Home = ()  => {

  const generador='Eres Generador de Residuos'
  const reciclador='Eres Reciclador'
  const acopio='Eres un Acopio-Integrador'
  const textGenerador='Todos lo somos!!!, desesas deshacerte de ese viejo colchon, muebles, carton, plastico o vidrio, entonces este es tu lugar.'
  const textReciclador='Eres un duro y sabes cómo se debe aprovechar los residuos reciclables y cual es su forma de disposición final? entonces este es tu lugar.'
  const textAcopio='Tienes un lugar de acopio para los residuos reciclabes y/o incluso los procesos? Entonces este es tu lugar'
  const inicioSesion='INICIAR SESIÓN'
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <Carousell></Carousell>
      <section className='homeInfo'>
        <div className='homeText'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consequatur excepturi quibusdam error ratione optio deleniti a eveniet reiciendis quisquam! Veniam iure consectetur quaerat impedit ipsa itaque unde magni consequuntur!</p>
        </div>
        <div className='homeCards'>
          <CardGoSesion
          title={generador} 
          text={textGenerador}
          textButton={inicioSesion} />
          <CardGoSesion
          title={reciclador}
          text={textReciclador} 
          textButton={inicioSesion}/>
          <CardGoSesion
          title={acopio} 
          text={textAcopio} 
          textButton={inicioSesion} />
        </div>
      </section>
      <BannerImg/>
      <Footer/>    
      <CopyRight/>  
 </div>
  );
}



export default Home;


