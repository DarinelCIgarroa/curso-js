'use strict'
// Funciones anonimas es una función que no tiene nombre

function sumar(numero1,numero2,mostarSuma,sumaPorDos){
    
    var suma = numero1 + numero2;

    mostarSuma(suma);
    sumaPorDos(suma);
    
    return suma;
}

sumar(10,5, function(suma){
    console.log('La suma es: ' + suma);
},

function(suma){
    console.log('La multipliacion por 2 es: ' + (suma*2));
});

sumar(90,10, suma => {
    console.log('La suma es: ', + (suma));
}, suma => {
    console.log('la multiplicación por 2 es: ', + (suma*2));
});