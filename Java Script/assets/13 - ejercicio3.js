'use strict'

/* 
Hacer un programa que muestre todos los nuemros introducidos
entre dos numeros.
*/

var num1 = parseInt(prompt('Ingrese el rango de inicio'));
var num2 = parseInt(prompt('Ingrese el rango final'));

for(num1; num1<=num2; num1++){
    document.write(num1+"<br/>")
}

