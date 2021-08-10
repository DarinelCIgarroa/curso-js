'use strict'

if(typeof(Storage) != 'undefined'){
    console.log('localStorage disponible');
}else{
    console.log('localStorage incompatible');
}

// Guardar datos en localStorage

localStorage.setItem('titulo','Cuando la tierra se detuvo');

// Recuperar un elemento de localStorage

document.querySelector('#contenedor').innerHTML = localStorage.getItem('titulo');

// Guardar datos en localStorage cuando es un array

var peliculas = {
    title:  'The king Lion',
    time:   '2:50 min',
    by:     'Disney',
    from:   'EUA'
};

localStorage.setItem('movies', JSON.stringify(peliculas));

// Recuperar un objeto

var movies = JSON.parse(localStorage.getItem('movies'));
console.log(movies);

document.querySelector("#contenedor").append(' '+ movies.title + ' - ' + movies.time); 

// Eliminar un objeto de localStorage
// localStorage.removeItem('movies');

// Elimar todos los objetos de localStorage
localStorage.clear();