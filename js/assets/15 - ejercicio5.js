'use strict'

/*
Hacer un programa que muestre todos los numeros
divisores de un numero introducido en un prompt
*/

var numero = parseInt(prompt('Ingrese un número'));

console.log(numero);

for(var i = 0; i<=numero; i++){
    if(numero % i == 0){
        document.write(i + "<br/>");
    }
}

