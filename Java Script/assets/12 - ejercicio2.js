'use strict'

/*
Utilizando un bulce, mostrar la suma y la media de los numeros
introducidos hasta introducir un numero negativo y de allí
mostrar el resultado
*/

do{
    var num1 = parseInt(prompt('Ingresa el primer numero'));
    var num2 = parseInt(prompt('Ingresa el segundo numero'));

    var suma = num1+num2;
    var media = suma/2;
    alert('la suma de los numeros son ' + suma + ' La media es ' + media);
    
}while(num1 > 0 || num2 > 0)
