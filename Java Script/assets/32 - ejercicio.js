'use strict'


window.addEventListener('load', function(){

var form = document.querySelector('#form');

form.addEventListener('submit',function(){
    console.log('evento submit');

    var nombre      = document.querySelector('#name').value;
    var apellidos   = document.querySelector('#lastname').value;
    var edad        =  parseInt(document.querySelector('#age').value);
    console.log(typeof edad);
    // Validar formulario
    if(nombre.trim() == null || nombre.trim().length == 0){
        var campoNombre = document.querySelector('#name');
        campoNombre.style.borderColor="#F21B1B";
        var error_nombre = document.querySelector('#error-nombre');
        error_nombre.innerHTML = 'Ingrea un nombre valido';
        console.log(error_nombre);
        
        return false;
    }else{
        var campoNombre = document.querySelector('#name');
        campoNombre.style.borderColor="#14BB10";
        document.querySelector('#error-nombre').style.display = "none";
    }

    if(apellidos.trim() == null || apellidos.trim().length == 0){
        var campoApellidos = document.querySelector('#lastname');
        campoApellidos.style.borderColor = "#F21B1B";
        var error_apellidos = document.querySelector('#error-apellidos');
        error_apellidos.innerHTML = "Ingrese apellidos validos";

        return false;
    }else{
        var campoApellidos = document.querySelector('#lastname');
        campoApellidos.style.borderColor="#14BB10";
        document.querySelector('#error-apellidos').style.diplay = "none";
    }
    if(edad == null || edad <= 0 || isNaN(edad)){
        var campoEdad = document.querySelector('#age');
        campoEdad.style.borderColor = "#F21B1B";
        var error_edad = document.querySelector('#error-edad');
        error_edad.innerHTML = "Ingrese una edad valida";
    }else{
        var campoEdad = document.querySelector('#age');
        campoEdad.style.borderColor="#14BB10";
        document.querySelector('#error-edad').style.diplay = "none";
    }

    var p_nombre = document.querySelector('#p-nombre span');
    var p_apellidos = document.querySelector('#p-apellido span');
    var p_edad = document.querySelector('#p-edad span');
    
    p_nombre.innerHTML = nombre;
    p_apellidos.innerHTML = apellidos;
    p_edad.innerHTML = edad;

    // var content = document.querySelector('#data');

    // var datos_usuario = [nombre,apellidos,edad];

    // for(var usuario in datos_usuario){ // recorremos los datos_usuario a usuario
    //     var parrafo = document.createElement("p"); // Creamos un elemento <p></p>
    //     parrafo.append(datos_usuario[usuario]); // Añadimos al elemento <p> un indice del array
    //     content.append(parrafo); // Cada parrafo se añade al contenedor
    // }
});

});