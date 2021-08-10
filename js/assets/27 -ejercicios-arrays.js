'use strict'

/*
1.- pida 6 números por pantalla y los meta en un array.
2.- Mostrar el array (todos los elementos) en el cuerpo de la página y en la consola
3.- Ordenar y mostrarlo.
4.- Invertir su orde y mostrarlo.
5.- Mostrar cuantos elmentos tiene el array
6.- Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice.
(Se valora el uso de funciones)
*/

var numeros = [];

do{
    var numero = parseInt(prompt('Ingresa un numero'));
    numeros.push(numero);
}while(numeros.length<=5);

document.write('<h1>Números Ingresados</h1>');

document.write('<ul>');

numeros.forEach(numero => {
    document.write('<li>'+ numero +'</li>');
});

document.write('</ul>');


console.log(numeros.reverse());

var elementos = numeros.length;
document.write('Hay ' + elementos + ' elementos en el array');

var busqueda = parseInt(prompt('Ingresa el numero que deseas buscar'));
1
function encontrar (busqueda){
    var resultado = numeros.indexOf(busqueda);
    
    if(resultado > -1){
        alert('El número encontrado en el array es: ' + busqueda + ' y se encuentra en el indice: ' + resultado);
    }else{
        alert('EL número no fue encontrado dentro del array');
    }
    
    return true;
}

encontrar(busqueda);


