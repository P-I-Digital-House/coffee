import { useEffect } from 'react';
import '../Carrossel/carrossel.css';
import Destaque1 from '../../assets/destaque_1.jpg'
import Destaque2 from '../../assets/destaque_2.jpg'
import Destaque3 from '../../assets/destaque_3.jpg'
import Destaque4 from '../../assets/destaque_4.jpg'

export function Carrossel() {
  // useEffect(() => {
  //   setTimeout(() => {
  //     const headerCarrossel = document.getElementById("carrossel");
  //     headerCarrossel.style.animation = "updown 5s";
  //   }, 10000);
    
  //   // Mudar a imagem do carrossel a cada 6 segundos
  //   let contador = 1;
  //   const backgroundImages = [
  //     Destaque1,
  //     Destaque2,
  //     Destaque3,
  //     Destaque4,      
  //   ];
  //   setInterval(() => {
  //     console.log(contador)
  //     const carrossel = document.querySelector(".header");
  //     carrossel.style.background = backgroundImages[contador];
  //     carrossel.style.backgroundPosition = "center";
  //     carrossel.style.backgroundRepeat = "no-repeat";
  //     carrossel.style.backgroundSize = "cover";
      
  //     if (contador == 4) {
  //       contador = 0;
  //     } else contador++;
  //   }, 6000);
  // }, [])
  
  return(    
      <img src={Destaque2} id='carrossel' alt="" />    
  )
}