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
  const sesionGenerador='/logingenerador'
  const sesionRecolector='/'
  const sesionReciclador='/loginreciclador'
  const textoPrincipal = 'SHARC integra personas, comercios y empresas involucradas en la Gestión inteligente de residuos sólidos aprovechables con el fin de trabajar juntos en pro de alcanzar entornos saludables, empresas eficientes y ciudades sostenibles.'
  const textoPrincipal1 = 'Llegamos hasta tu hogar para recoger tus residuos reciclables o de difícil disposición, no los tires a las calles ni fuentes de agua porque esto ocasiona daños al medio ambiente; recuerda, debemos cuidar el planeta.'
  const textoPrincipal2 = 'Desarrollamos una labor social enfocada en el mejoramiento de las condiciones de trabajo de la población recicladora, mediante condiciones laborales dignas y con mayores ingresos económicos. Lo que para usted es basura, para ellos es  su fuente de sustento y calidad de vida.'
  const textoPrincipal3 = 'Usted también puede contribuir a este propósito de mejorar el medio ambiente, Inicie sesión de acuerdo a su perfil.'
  const textoPrincipal4 = 'Sea parte del cambio!.'
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <Carousell></Carousell>
      <section className='homeInfo'>
        <div className='homeText'>
          <p>{textoPrincipal} </p>   
          <br/>     
          <p>{textoPrincipal1} </p>   
          <br/>     
          <p>{textoPrincipal2} </p> 
          <br/>     
          <p>{textoPrincipal3} </p>
          <br/>     
          <p><b>{textoPrincipal4}</b> </p>        
        </div>
        <div className='homeCards' id='homeCards'>
          <CardGoSesion
          title={generador} 
          text={textGenerador}
          textButton={inicioSesion} 
          sesion={sesionGenerador} />
          <CardGoSesion
          title={reciclador}
          text={textReciclador} 
          textButton={inicioSesion}
          sesion={sesionRecolector}/>
          <CardGoSesion
          title={acopio} 
          text={textAcopio} 
          textButton={inicioSesion}
          sesion={sesionReciclador} />
        </div>
      </section>
      <BannerImg/>
      <Footer/>    
      <CopyRight/>  
 </div>
  );
}



export default Home;


