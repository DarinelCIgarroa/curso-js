'use strict'

var animes = {
    titulo: 'shigeky no kioyin',
    duracion: 'tres temporadas',
    prosedencia: 'China',
};

var anime = [
    {titulo: 'Naruto',          duracion: 'cinco temporadas',   prosedencia: 'China',},
    {titulo: 'Dragon Ball Z',   duracion: 'seis temporadas',    prosedencia: 'China',},
    {titulo: 'Parasyte',        duracion: '1 temporada',        prosedencia: 'China',},
    animes
];

var content = document.querySelector('#contenedor');

for(const indice in anime){
    var parrafo = document.createElement('p');
    parrafo.append(anime[indice].titulo + ' - ' + anime[indice].duracion);
    content.append(parrafo);
}

console.log(anime);



