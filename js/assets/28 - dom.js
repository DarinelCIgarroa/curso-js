'use strict'

// DOM - Document Object Model -> Modelo de Objetos del Documento

// Conseguir elementos con un ID en concreto
function cambiaColor(color){
 var color = prompt('Ingresa el color de fondo que deseas');
 caja.style.background = color;

 return true;
}

var caja = document.getElementById('micaja');

var caja = document.querySelector('#micaja');

caja.innerHTML = '¡TEXTO EN LA CAJA DESDE JS!';
caja.style.background = 'GREEN';
// cambiaColor();
caja.style.padding = "20px";
caja.style.color = 'white';
caja.className = 'clase1 clase2';
// console.log(caja);

// Conseguir elementos por su etiqueta
var contenedores = document.getElementsByTagName('div');

contenedores[1].innerHTML = "Segundo div desde JS";
contenedores[1].style.background = 'BLUE';
contenedores[1].style.padding = "30px";
contenedores[1].style.color = "white";

console.log(contenedores);

// Añadir texto en una seccion
var valor;
var seccion = document.querySelector('#miSeccion');
var hr = document.createElement("hr");



for(valor in contenedores){
   if(typeof contenedores[valor].textContent == 'string'){
    var parrafo = document.createElement('p');
    var texto   = document.createTextNode(contenedores[valor].textContent);
    parrafo.appendChild(texto);
    document.querySelector('#miSeccion').appendChild(parrafo);
   }
}

seccion.append(hr);

// Conseguir elementos por sus clases

var divsPurple = document.getElementsByClassName('purple');
var pintar;

for(pintar in divsPurple){
    if(divsPurple[pintar].className == 'purple'){
        divsPurple[pintar].style.background = 'purple';
        divsPurple[pintar].style.padding = "20px";
    }
}

var divGris = document.getElementsByClassName('gray');

divGris[0].style.background = 'gray';