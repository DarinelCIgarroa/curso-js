'use strict'

//pruebas con let y var

/*
Var se usa para definir variables globales y let para definir
variables que funcionan dentro de su ecosistema o blucles
*/

var numero = 40;
console.log(numero);

if(true){
    numero = 50;
    console.log(numero);
}

console.log(numero);

// Prueba con let
var texto = 'Curso js';
console.log(texto);

if(true){
    let texto = 'Curso js modificado';
    console.log(texto);
}

console.log(texto);