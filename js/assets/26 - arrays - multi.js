'use strict'

// Arrays multidimensionales

var categoria = ['Salvajes', 'Acuaticos', 'Terrestres', 'Aves'];

var animales = ['León', 'Ballena', 'Colibri', 'Cocodrilo', 'Jirafa', 'Puma', 'Aguila'];

// Esto es un array bidimensional
var fauna = [categoria, animales];

console.log(fauna[0][1],fauna[1][1]);



// Inserta más registros en un array
// con push añadimos elementos al array

animales.push('Hipopotamo');
console.log(animales);

// Añadiendo animales hasta que el usuario desee
do{
    var anexo = prompt('Añade otro animal a la lista');
    animales.push(anexo);
    var res = confirm('¿Deseas añadir otro animal?');    
}while(res == true)

console.log(animales);

// Eliminar un elemento en especifico en el array

// El método indexOf() retorna el primer índice en el que se puede 
// encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.
var indice = animales.indexOf('Jirafa');
if(indice > -1){
    document.write('Se ha eliminado' + animales[indice] + '</br>');
    animales.splice(indice, 1);
    document.write(animales);
}else{
    document.write('No existe el animal en la lista');
}
console.log(indice);
console.log(animales);


// Convertir el array en String

var newAnimals = animales.join();
document.write(newAnimals);

// Convertir un string en array

var cities = 'New York, Dubai, Londres, CDMX, París, Singapur'; 
var cities_Array = cities.split(', ');
console.log(cities_Array);

// Ordenar arrays por abecedario

cities_Array.sort();
console.log(cities_Array);

// Ordenar arrays de manera inversa al abecedario

cities_Array.reverse();
console.log(cities_Array);