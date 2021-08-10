'use strict'

// Condicional if
// Si A es igual a B entonces haz algo
var edad1 = 20;
var edad2 = 24;

// Si pasa esto
if(edad1 > edad2){
// Ejecuta esto
    console.log("Edad uno es mayor que edad dos");
}else{
    console.log('Edad dos es mayor que edad uno')
}

// Operadores relaciones
/* 
    mayor: >
    menor: <
    mayor o igual: >=
    menor o igual: <=
    Igual: ==
    Distinto: !=
*/

var edad = 80;
var nombre = "Darinel Cigarroa";

if(edad >= 18){
    alert('El usuario ' + nombre + ' es mayor de edad');
    if(edad == 33){
        alert('Eres milenial');
    }else if(edad > 70){
        alert('Eres de tercera edad');
    }else{
        alert('Tu rango de edad es de 18 a 33 años');
    }
}else{
    alert('EL usuario ' + nombre + ' es menor de edad');
}

var año = 2021;
/*
 //Operadores logicos
    AND(Y): &&  *Si se cumplen ambas condiciones
    OR(O): ||   *Si cualquiera de las dos se cumplem
    Negacion: ! *Si es diferente de
 */

// Negación
if(año >= 2010 && año <= 2030){
 console.log('EL año esta dentro del rango');
}else{
    console.log('El año esta fuera del rango');
}

if(año >= 2030 || año == 2021){
    console.log('El año esta en el rango');
}else{
    console.log('El año esta fuera del rango');
}

if(año != 2021){
    console.log('Estas fuera del 2021');
}else{
    console.log('Estas dentro del 2021');
}