
setTimeout(() => {
  const headerCarrossel = document.getElementById("carrossel");
  headerCarrossel.style.animation = "updown 5s";
}, 10000);

// Mudar a imagem do carrossel a cada 5 segundos
let contador = 1;
const backgroundImages = [
  'url("img/destaque_1.jpg")',
  'url("img/destaque_2.jpg")',
  'url("img/destaque_3.jpg")',
  'url("img/destaque_4.jpg")',
];
setInterval(() => {
  const carrossel = document.querySelector(".header");
  carrossel.style.background = backgroundImages[contador];
  carrossel.style.backgroundPosition = "center";
  carrossel.style.backgroundRepeat = "no-repeat";
  carrossel.style.backgroundSize = "cover";
  
  if (contador == 4) {
    contador = 0;
  } else contador++;
}, 6000);
