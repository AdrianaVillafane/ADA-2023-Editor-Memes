//

const urlInput = document.getElementById("url-input");
const memeImg = document.getElementById("meme-img");

console.log(memeImg);

urlInput.addEventListener("input", () => 
  changeBackground())


const changeBackground = () => {
  console.log('funcion cambio color se ejecuta');

  memeImg.style.backgroundImage = `url(${urlInput.value})`;
};

//FILTROS
const filtros = () => {
  memeImg.style.filter = `brightness(${brightInput.value}) opacity(${opacityInput.value}) blur(${blurInput.value}) contrast(${contrastInput.value}%) grayscale(${grayscaleInput.value}%) hue-rotate(${hueRotateInput.value}deg) sepia(${sepiaInput.value}%) saturate(${saturateInput.value}%) invert(${invertInput.value})`;
}

//COLOR DE FONDO, conteiner de imagen
// Obtengo los elementos del DOM
const colorInput = document.getElementById("colorInput");


// Agrego un evento de escucha al campo de entrada
colorInput.addEventListener("input", function () {
  let color = colorInput.value;
  memeImg.style.backgroundColor = color;
});

//ESCALA DE BRILLO-
// Obtener referencias a los elementos del DOM
const brightnessSlider = document.getElementById("brightness-slider");
const image = document.getElementById("meme-img");

// Manejar el evento de cambio del input range
brightnessSlider.addEventListener("input", () => {
  // Obtener el valor del input range
  const brightnessValue = brightnessSlider.value;

  // Aplicar el filtro de brillo a la imagen
  memeImg.style.filter = `brightness(${brightnessValue}%)`;
filtros();
});

//OPACIDAD
//Obtener datos 
const opacitySlider = document.getElementById("opacity-slider");
//Manejar el evento de cambio de input range
opacitySlider.addEventListener("input", () => {
  const opacityValue = opacitySlider.value;

//Aplicar el filtro en la imagen
memeImg.style.filter = `opacity(${opacityValue})`;
filtros();
});
//Aplicar filtro a la imagen
const opacityValue = opacitySlider.value;
memeImg.style.filter = `opacity(${opacityValue})`;

//ESCALA DE GRISES-FUNCIONANDO
// Obtener referencias a los elementos del DOM
const grayscaleSlider = document.getElementById("grayscale-slider");

// Manejar el evento de cambio del input range
grayscaleSlider.addEventListener("input", () => {
  // Obtener el valor del input range
  const grayscaleValue = grayscaleSlider.value;

  // Aplicar el filtro de escala de grises a la imagen
  image.style.filter = `grayscale(${grayscaleValue}%)`;
});
