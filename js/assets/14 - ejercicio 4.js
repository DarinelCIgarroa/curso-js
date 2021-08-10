'use strict'

/*
Mostrar todos los números impares que hay dentro dos
numeros introducidos por el usuario.
*/

var num1 = prompt('ingresa el primer número');
var num2 = prompt('ingresa el segundo número');
var impares;

for(num1; num1<=num2; num1++){
    if(num1 % 2 == 1){
        document.write(num1 + "<br/>");
    }
}




