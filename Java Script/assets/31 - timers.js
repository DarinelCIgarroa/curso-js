'use strict'
// setInterval Ejecuta una función o un fragmento de código de forma repetitiva cada vez que 
// termina el periodo de tiempo determinado. Devuelve un ID de proceso.

window.addEventListener('load', function(){
    
    var tiempo = intervalo();

    function intervalo(){
        var title = document.querySelector('#title');

        var colores = ['purple','green','red','black','yellow','gray','pink','orange','blue','brown'];

        var time = setInterval(function(){
            var colorRandom = colores[Math.floor(Math.random()*colores.length)];
            title.style.color = colorRandom;
        },400);

        return time;
    }
    
    // Inciar el intervalo 
    var start = document.querySelector('#start');
    
    start.addEventListener('click', function(){
        
        intervalo();
    });
    
    // Parar el bucle del intervalo
    var stop = document.querySelector('#stop');
    
    stop.addEventListener('click', function(){
      
        clearInterval(tiempo);
    });

});

