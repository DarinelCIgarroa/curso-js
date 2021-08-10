'use strict'

// Arrays, Arreglos, Matrices

var nombres = [
    'Darinel',
    'Derky',
    'Juan',
    'Darwin',
];

var lenguajes = new Array('PHP','JAVA','ANGULAR','VUEJS','PYTHON');

// Saber cuantos elementos tengo en el array

console.log(lenguajes.length);

// Sacar un elemento del array

var seleccion = parseInt(prompt("¿Que elemento del array deseas sacar?", 0));

if(seleccion <= nombres.length){
    alert(nombres[seleccion]);
}else{
    alert('No existe el elemento, introduce un número menor o igual a: '+ nombres.length);
}

//Recorrer todos los elemntos de un array con for

document.write("<ul>");

for(var i = 0; i < lenguajes.length; i++){
    document.write('<li>' + lenguajes[i] + '</li>');
}

document.write("</ul>");

// Recorrer todos los elementos de un array con Foreach

document.write('<ul>');

lenguajes.forEach((lenguaje, index) => {
    document.write('<li>' + index + ' - ' +  lenguaje + '</li>');
});

document.write('</ul>');

// Recorrer todos los elementos con un For In

document.write('<ul>');
    for(let lenguaje in lenguajes){
        document.write('<li>'+ lenguajes[lenguaje] +'</li>');
        document.write('Recorriendo dentro de un ForIN');
    }
document.write('</ul>');

