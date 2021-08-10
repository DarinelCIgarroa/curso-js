'use strict'

// var numero = parseInt(prompt('Ingresa el número de la tabla que deseas listar'));
// var operacion;

// document.write('<h1>' + 'Tabla de mulltiplicar del numero ' + numero + '</h1>');

// for(var i = 0; i<=10; i++){
//     operacion = numero * i;   
//     document.write(numero + ' x ' + i + ' = ' + operacion + '<br/>');
//     console.log(typeof numero);
// }

document.write('<h1> Todas las tablas de multipciar </h1>');
var contador = 0;
var tabla;
for(contador; contador<=10; contador++){
    document.write('<h1> Tabla de multiplicar del número ' + contador + '<h1>');
    for(var i = 0; i<=10; i++ ){
        tabla = contador * i;
        document.write(contador + ' x ' + i + ' = ' + tabla + '<br/>' );
    }
}

