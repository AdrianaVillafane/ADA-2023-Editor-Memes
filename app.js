











//URL

const urlInput = document.getElementById("url-input");
const memeImg = document.getElementById("meme-img");

console.log(memeImg);

urlInput.addEventListener("input", () => 
  changeBackground())


const changeBackground = () => {
  console.log('funcion cambio color se ejecuta');

  memeImg.style.backgroundImage = `url(${urlInput.value})`;
};


//boton de color

const colorPicker = document.getElementById("color-picker");
const colorName = document.getElementById("color-name");

const cambiarFondoMeme = () => {
  let colorElegido = colorPicker.value;
  colorName.innerHTML = `${colorElegido}`;
};

colorPicker.addEventListener("input", () => cambiarFondoMeme());


//COLOR DE FONDO, conteiner de imagen
// Obtengo los elementos del DOM
const colorInput = document.getElementById("color-picker");


// Agrego un evento de escucha al campo de entrada
colorInput.addEventListener("input", function () {
  let color = colorInput.value;
  memeImg.style.backgroundColor = color;
});
//FILTRO DE FONDO
const filtroFondo = () => {
  memeImg.style.backgroundBlendMode = `ninguno(${ninguno.value})`
}

//FILTROS
const filtros = () => {
  memeImg.style.filter = `brightness(${brightInput.value}) opacity(${opacityInput.value}) blur(${blurInput.value}) contrast(${contrastInput.value}%) grayscale(${grayscaleInput.value}%) hue-rotate(${hueRotateInput.value}deg) sepia(${sepiaInput.value}%) saturate(${saturateInput.value}%) invert(${invertInput.value})`;
}

//ESCALA DE BRILLO-
// Obtener referencias a los elementos del DOM
const brightnessSlider = document.getElementById("brightness-slider");
const image = document.getElementById("meme-img");

// Manejar el evento de cambio del input range
brightnessSlider.addEventListener("input", () => {
  console.log('funcion brillo  se ejecuta');
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
  console.log('funcion opacidad se ejecuta');
  const opacityValue = opacitySlider.value;

//Aplicar el filtro en la imagen
memeImg.style.filter = `opacity(${opacityValue})`;
filtros();
});
//Aplicar filtro a la imagen
const opacityValue = opacitySlider.value;
memeImg.style.filter = `opacity(${opacityValue})`;
//CONTRASTE
//obtengo datos
const contrastSlider = document.getElementById("contrast-slider");
//evento cambio de input rango
contrastSlider.addEventListener("input", () => {
  const contrastValue = contrastSlider.value;

  //aplico filtro a la imagen
  memeImg.style.filter = `contrast(${contrastValue})`;
  filtros();

})
//DESENFOQUE (BLUR)
//obtengo datos
const blurSlider = document.getElementById("blur-slider");
//evento cambio de input rango
blurSlider.addEventListener("input", () => {
  const blurValue = blurSlider.value;
  //aplico a imagen
  memeImg.style.filter = `blur(${blurValue})`
  filtros();
})


//ESCALA DE GRISES-FUNCIONANDO
// Obtener referencias a los elementos del DOM
const grayscaleSlider = document.getElementById("grayscale-slider");

// Manejar el evento de cambio del input range
grayscaleSlider.addEventListener("input", () => {
  // Obtener el valor del input range
  const grayscaleValue = grayscaleSlider.value;

  // Aplicar el filtro de escala de grises a la imagen
  memeImg.style.filter = `grayscale(${grayscaleValue}%)`;
  filtros();
});
//SEPIA
//Obtener datos
const sepiaSlider = document.getElementById("sepia-slider");

//manejar el evento de cambio del input range
sepiaSlider.addEventListener("input",() => {
  //obtener el valor del input range
  const sepiaValue = sepiaSlider.value;
  //aplico filtro a la imagen
  memeImg.style.filter = `sepia(${sepiaValue})`;
  filtros();
})
//HUE
//datos
const hueSlider = document.getElementById("hue-slider");
//evento
hueSlider.addEventListener("input",() => {
  //obtengo valor del input
  const hueValue = hueSlider.value;
  //aplico en la img
  memeImg.style.filter =`hue(${hueValue})`;
  filtros();
})


//SATURACION
//datos
const saturationSlider = document.getElementById("saturation-slider");
//
saturationSlider.addEventListener("input",() => {
  //obtengo valor del input
  const saturationValue = saturationSlider.value;
  //aplico en la img
  memeImg.style.filter = `saturation(${saturationValue})`;
  filtros();
})



// NEGATIVO
// Obtener referencias a los elementos del DOM
const invertSlider = document.getElementById("invert-slider");
console.log(invertSlider);
// Manejar el evento de cambio del input range
invertSlider.addEventListener("input", () => {
  // Obtener el valor del input range
  const invertValue = invertSlider.value;

  // Aplicar el filtro de escala de grises a la imagen
  memeImg.style.filter = `invert(${invertValue}%)`;
  filtros();
});


//TEXTO

const topTextInput = document.getElementById("top-text-input");
const bottomTextInput = document.getElementById("bottom-text-input");

const topText = document.getElementById("top-text");
const bottomText = document.getElementById("bottom-text");

topTextInput.addEventListener("change", () => hideTopText());
bottomTextInput.addEventListener("change", () => hideBottomText());




















//DESCARGA MEME

const downloadButton = document.getElementById("download-btn");
const meme = document.getElementById("meme-container");

downloadButton.addEventListener("click", () => downloadMeme());

const downloadMeme = () => {
  domtoimage.toBlob(meme).then(function (blob) {
    window.saveAs(blob, "mi-meme.png");
  });
};
