'use strcit'

/*
Programa que nos diga cual es mayor cula es menor
 o si son iguales
*/


do{
    var num1 = prompt('Ingresa el primer número');
    num1 = parseInt(num1);
    var num2 = prompt('Ingresa el segundo número');
    num2 = parseInt(num2);
    while(isNaN(num1) || isNaN(num2)){
        alert('Ingresa números validos');
        num1 = prompt('Ingresa el primer número');
        num1 = parseInt(num1);
        num2 = prompt('Ingresa el segundo número');
        num2 = parseInt(num2);
    }
    if(num1 > num2){
        alert(num1 + ' Es mayor que ' + num2);
    }else if(num1 == num2){
        alert('Los numeros son iguales')
    }else{
        alert('El número ' + num2 + ' es mayor que ' + num1);
    }
    var res = confirm('¿Deseas hacer otra operación?');
    if(res == false){
        alert('BYE....');
    }
}while(res== true)
