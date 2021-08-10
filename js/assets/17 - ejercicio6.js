'use strict'

/*
Hacer un programa que diga si un numero es par o impar
*/

do{
    var numero = parseInt(prompt('Ingresa un número'));

    if(isNaN(numero)){
        alert('Ingresa un número valido');
    }else if(numero != isNaN){
        var operacion = numero % 2;
        if(operacion == 0){
            alert('El número ' + numero +  ' es par');
        }else{
            alert('El número ' + numero + ' es impar');
        }
    }
    var res = confirm('Deseas hacer otra operacion');
    
}while(res == true)
