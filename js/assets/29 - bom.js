'use strict'
// BOM - Browser Object Model -> Modelo de Objetos del Navegador
function getBom(){
    console.log(screen.width);
    console.log(screen.height);
    console.log(window.location.pathname);
}

function redirect(url){
    window.location.href = url;
}

// function abrirVentana(url){
//     window.open(url);
// }


function abrirVentana(url){
    window.open(url,"","width=400,height=300");
}