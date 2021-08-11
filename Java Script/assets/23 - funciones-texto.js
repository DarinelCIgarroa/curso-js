'use strict'

// Tranformación de textos

var numero  =   44;
var texto1  =   '       Bienvenido al curso de js, el mejor curso      ';
var texto2  =   'Es un buen curso';

var dato = numero.toString();
    dato = texto1.toUpperCase(); // Convierte el texto a mayusculas

console.log(dato);

// Calcula la longitud que tiene el texto

var nombre = 'Darinel Cigarroa';
    nombre = [
                'hola',
                'hello'
            ];
console.log(nombre.length);

// Concatenar texto
var textoTotal;

textoTotal = texto1 + ' ' + texto2;
// Otra opción
textoTotal = texto1.concat(' ' + texto2);
console.log(textoTotal);

// Busquedas
//indexOf('***') en que pocision exite esta palabra
//lastIndexOf('*****') sacar la ultima coincidencia
//search puedes buscar y donde aparece la palabra
//match devuelve un array de los resultados que encuentre
//charAt(44) saca una letra en la posicion en la que se indica
//startWith('Bienvenido') busca una palabra al inicio y devulve true o false
//endWith('Bienvenido') busca una palabra al final y devuleve true o false
// includes buscar en un string una paabra si existe devuelve true ysi no false
var busqueda = texto1.includes('mejor');

console.log(busqueda);

// Remplazar texto
// replace
var texto = texto1.replace('Bienvenido', 'Bienvenidos');

// Recortar texto
// slice recorta la palabra y la muestra estre los dos parametros
// Bienvenido al curso de js, el mejor curso
var texto = texto1.slice(14,19);

var array = texto1.split(" ");

// Limpiar espacio

var espacio = texto1.trim();
console.log(espacio);

// Buscaar en un array

var animales = ['León', 'Tiburón', 'Cococdrilo', 'Venado', 'Lince', 'Iguana'];

var busqueda = animales.find(function(animal){
    return animal == 'Cocodrilo';
});