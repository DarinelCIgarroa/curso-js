'use strict'

var usuarios = [];
var usuario = [];
var comentarios = [];

var usuariosContenedor = document.querySelector('#usuarios');
var contenedorUsuario = document.querySelector('#usuario');
var contenederComentario = document.querySelector('#comments');

var loading = document.querySelector('#loading');
var loadingComments = document.querySelector('#loadingComments');

getUsuarios() // Funcion para traer usuarios
    .then(data => data.json()) // Convertir los datos del fetch en json
    .then(users => {  // guardamos los data en la variable users
        usuarios = users; // Volvemos a guardar en una variable usuarios
        mostrarUsuarios(usuarios); // Pasamos la variable a la funcion
        return getUsuario();
    })
    .then(data => data.json())
    .then(userJanet => {
        mostrarUsuario(userJanet.data, userJanet.support);
        return getComments();
    })
    // .then(data => data.json())
    // .then(comments => {
    //     mostrarComments(comments);
    //     return getInfo();
    // })
    .then(data => {
        console.log(data);
    }).catch( error => {
        alert('Uppps ocurrio un error:' + error)
    });

function getUsuarios() {
    return fetch('https://jsonplaceholder.typicode.com/users');
}

function mostrarUsuarios(usuarios) {
    usuarios.forEach(usuario => { // como son varios usuarios vamos a utilizar un foreach
        
        let nombre = document.createElement('h5'); // cramos una etiquita h5 guardada en nombre
        nombre.innerHTML = 'nombre: ' + usuario.name + "<br>" + "Email:" + usuario.email; // A la etiqueta h5 le agregamos los datos
        usuariosContenedor.append(nombre); // Para mostrar los datos en nuestro contenido html agregamos con append a nuestro div los datos
    
        loadingUsuarios.style.display = "none"; // desactivamos el cargando
    });
}

function getUsuario() {
    return fetch('https://reqres.in/api/users/2');
}

function mostrarUsuario(user, support) {
    var usuarioJanet = document.createElement('h5');
    let avatar = document.createElement('img');

    usuarioJanet.innerHTML = 'Nombre: ' + user.first_name + '<br>' + 'Email: ' + user.email +  '</br>' + 'Soporte: ' + support.url;
    contenedorUsuario.append(usuarioJanet);

    avatar.src = user.avatar;
    avatar.width = "100";
    avatar.height = "100";
    contenedorUsuario.append(avatar);

    loadingUsuario.style.display = "none";
}

function getComments() {
    return fetch('https://jsonplaceholder.typicode.com/comments');
}

function mostrarComments(comments) {
    comments.forEach(comment => {
        var texto = document.createElement('h5');
        texto.innerHTML = ' Nombre: ' + comment.name + '<br>' + 'Correo: ' + comment.email + '<br>' + 'Cuerpo: ' + comment.body;
        contenederComentario.append(texto);

        loadingComments.style.display = 'none';
    });
}

function getInfo() {
    var profersor = {
        nombre: 'Darinel',
        apellido: 'Cigarroa',
        url: 'www.google.com',
    };

    return new Promise((resolve, reject) => {
        var profesor_string = JSON.stringify(profersor);
        if (typeof profesor_string != 'string') return reject('ERROR');
        return resolve(profesor_string);
    });
}
