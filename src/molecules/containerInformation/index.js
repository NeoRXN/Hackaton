import React from 'react';
import CardInformationL from '../../atoms/cardInformationL';
import CardInformationR from '../../atoms/cardInformationR';
import Clasificaciones from '../../images/Clasificacion.jpg'
import Importancia from '../../images/Importanciareciclar.jpg'
import Recoleccion from '../../images/Recoleccion.jpg'
import Acopio from '../../images/Acopio.jpg'
import Recuperacion from '../../images/Recuperacion.png'
import Separacion from '../../images/Separacion.jpg'

const ContainerInformation = () => {
  const textInfo1='Reciclar es una de las alternativas utilizadas para la reducción del volumen de residuos sólidos. Se trata de un proceso que consiste básicamente en volver a utilizar materiales que fueron desechados y que aún son aptos para elaborar otros productos o refabricar los mismos. Ejemplos de materiales reciclables son los metales, el vidrio, el plástico y el papel.'
  const textInfo2='La separación en la fuente es un mecanismo efectivo para mitigar el impacto negativo de los residuos sólidos en el medio ambiente y prolongar la vida útil de los rellenos sanitarios, pero para esto, necesitamos que esta actividad se convierta en un hábito cotidiano de todos los hogares y demás grupos de la sociedad.'
  const textInfo3='En un contexto en el que se hacen más visibles las consecuencias de la crisis ambiental, producto de la lógica capitalista de acumulación, la gestión de materiales reciclables resulta un punto clave, y junto con ella, sus protagonistas: los Recuperadores Urbanos. Estos trabajadores se dedican a recuperar materiales reciclables en puntos verdes, instituciones, comercios, domicilios particulares, vía pública o basurales a cielo abierto (BCA); y luego comercializarlos en las distintas etapas de la cadena de valor del reciclaje.'
  const textInfo4='La Central de acopio es un lugar cerrado con espacios específicos para la separación de los residuos acorde a sus características, cuenta con sistema de extracción de olores, equipos de lavado, sirviendo como instrumento de prevención de la contaminación del medio ambiente a través de la correcta clasificación, segregación, almacenamiento y disposición final de cada residuo de acuerdo con sus características.'
  const textInfo5='Una planta de clasificación o centro de clasificación de residuos es una instalación con diversidad de maquinaria automática y procesos manuales que tiene el objetivo de separar las fracciones recuperables según el tipo de residuo y para luego compactarlos y enviarlos a la planta de reciclaje.'
  const textInfo6='Reciclador final (o planta de valoración): donde finalmente los residuos se reciclan (papeleras, plastiqueros, etc.), se almacenan (vertederos) o se usan para producción de energía (cementeras, biogás, etc.).'
  
  const imgInfo1=Importancia
  const imgInfo2=Separacion
  const imgInfo3=Recoleccion
  const imgInfo4=Acopio
  const imgInfo5=Clasificaciones
  const imgInfo6=Recuperacion

  const titleInfo1='La Importancia de Reciclar'
  const titleInfo2='Separación en la fuente'
  const titleInfo3='Recolección'
  const titleInfo4='Centro de acopio de residuos'
  const titleInfo5='Centro de Clasificación de Residuos'
  const titleInfo6='Recuperación '

  const urlFuente1=' https://inta.gob.ar/noticias/la-importancia-de-reciclar'
  const urlFuente2=' https://www.emserfusa.com.co/publicaciones/556/sabes-como-separar-en-la-fuente/'
  const urlFuente3=' https://www.uncuyo.edu.ar/prensa/gestion-de-residuos-como-trabajan-hoy-los-recuperadores-urbanos'
  const urlFuente4=' https://www.uninorte.edu.co/web/gestion-administrativa-y-financiera/centro-de-acopio'
  const urlFuente5=' https://gester.es/blog/planta-de-clasificacion-de-residuos-que-es-y-como-funciona/'
  const urlFuente6=' https://es.wikipedia.org/wiki/Reciclaje#:~:text=Reciclador%20final%20(o%20planta%20de,%2C%20biog%C3%A1s%2C%20etc.).'

  const urlMore1='https://youtu.be/LoWRxBdDJmE'
  const urlMore2='https://youtu.be/Wgrf9HZ-DzE?t=38'
  const urlMore3='https://youtu.be/N69s6LPkuDY'
  const urlMore4='https://youtu.be/XiJHmJOYESo'
  const urlMore5='https://youtu.be/Me276QsckLA'
  const urlMore6='https://www.youtube.com/watch?v=i3GlJ8xCrAc'

  return (
    <section>
        <CardInformationL
        text={textInfo1} origin={imgInfo1} title={titleInfo1} more={urlFuente1} video={urlMore1} />
        <CardInformationR
        text={textInfo2} origin={imgInfo2} title={titleInfo2}  more={urlFuente2} video={urlMore2}/>
        <CardInformationL
        text={textInfo3} origin={imgInfo3} title={titleInfo3} more={urlFuente3} video={urlMore3}/>
        <CardInformationR
        text={textInfo4} origin={imgInfo4} title={titleInfo4}  more={urlFuente4} video={urlMore4}/>
        <CardInformationL
        text={textInfo5} origin={imgInfo5} title={titleInfo5}  more={urlFuente5} video={urlMore5}/>
         <CardInformationR
        text={textInfo6} origin={imgInfo6} title={titleInfo6}  more={urlFuente6} video={urlMore6}/>
    </section>
  );
}

export default ContainerInformation;
