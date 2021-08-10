'use strict'

var form = document.querySelector('#formPeliculas');

form.addEventListener('submit', function () {
    var title = document.querySelector('#title').value;
    if(title.length <= 0 || title == null){
        alert("Ingresa una pelicula valida");
    }else{
        localStorage.setItem(title, title);
    }
});

var formDelete = document.querySelector('#formDeletePeliculas');

formDelete.addEventListener('submit', function(){
    var title = document.querySelector('#titleDelete').value;
    if(title.length >= 1){
        localStorage.removeItem(title, title);
    }
});


var content = document.querySelector('#listarPeliculas');

for (const i in localStorage) {
    if(typeof localStorage[i] == 'string') {
        var li = document.createElement("li");
        li.append(localStorage[i]);
        content.append(li);
    }
}