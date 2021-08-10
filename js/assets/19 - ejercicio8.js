'use strict'

/*
Calculadora

- Pida dos números por pantalla
- Si tenemos uno mal que nos lo vuelva a pedir
- mostrar el resultado por la consola
*/

var num1 = parseInt(prompt('Ingresa el primer número'));
var num2 = parseInt(prompt('Ingresa el segundo número'));

while(isNaN(num1) || isNaN(num2)){
    alert('Solo se permiten números');
    num1 = parseInt(prompt('Ingresa el primer número'));
    num2 = parseInt(prompt('Ingresa el segundo número'));
}

var suma            = num1 +  num2;
var multiplicacion  = num1 * num2;
var division        = num1 / num2;

document.write('la suma es: ' + suma + '<br/>' +
                'la multiplicación es: ' + multiplicacion + '<br/>' +
                'la división es: ' + division);

alert('la suma es: ' + suma);
alert('la multiplicación es: ' + multiplicacion);
alert('la división es: ' + division);