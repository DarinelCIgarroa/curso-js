'use strict'

function listaFrutas(fruta1,fruta2,...mas_frutas){
    document.write('Fruta 1:' + fruta1 + '<br/>');
    document.write('Fruta 2:' + fruta2 + '<br/>');
    console.log(mas_frutas);
}

var frutas = ['Melon','Mandarina'];

listaFrutas(...frutas,'Sandia','Coco','Naranja');