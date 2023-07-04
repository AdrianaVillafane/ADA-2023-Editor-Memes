
const urlInput = document.getElementById('url-input');
const memeImg = document.getElementById('meme-img');

urlInput.addEventListener('input', (e)=> changeBackground(e));

const changeBackground= (e)=>{
  console.log(e.target.value)
  memeImg.style.backgroundImage = `url(${e.target.value})`
}

//COLOR DE FONDO, conteiner de imagen
// Obtengo los elementos del DOM
let colorInput = document.getElementById("colorInput");
let colorMeme = document.getElementById("meme-img");

// Agrego un evento de escucha al campo de entrada
colorInput.addEventListener("input", function() {
  let color = colorInput.value;
  colorMeme.style.backgroundColor = color;
});

//ESCALA DE BRILLO-FUNCIONANDO
// Obtener referencias a los elementos del DOM
const brightnessSlider = document.getElementById('brightness-slider');
const image = document.getElementById('image');

// Manejar el evento de cambio del input range
brightnessSlider.addEventListener('input', () => {
  // Obtener el valor del input range
  const brightnessValue = brightnessSlider.value;

  // Aplicar el filtro de brillo a la imagen
  image.style.filter = `brightness(${brightnessValue}%)`;
});

//ESCALA DE GRISES-FUNCIONANDO
// Obtener referencias a los elementos del DOM
const grayscaleSlider = document.getElementById('grayscale-slider');


// Manejar el evento de cambio del input range
grayscaleSlider.addEventListener('input', () => {
  // Obtener el valor del input range
  const grayscaleValue = grayscaleSlider.value;

  // Aplicar el filtro de escala de grises a la imagen
  image.style.filter = `grayscale(${grayscaleValue}%)`;
});
