'use strict'

window.addEventListener('load', function(){
    var boton = document.querySelector('#boton');


    function cambiarColor(){
        
        var bg = boton.style.background;
        console.log(bg);
    
        if(bg == 'green'){
            boton.style.background = 'red';
        }else{
            boton.style.background = 'green';
        }
        
        return true;
    }
    
    // Evento click
    
    boton.addEventListener('click', function(){
        cambiarColor();
    });
    
    // Evento Mouse over (mouseover)
    
    boton.addEventListener('mouseover', function(){
        this.style.background = 'yellow'; // El this se utiliza para hace referencia al objeto
    });

    
    // Evento mouse out (mouseout)
    
    boton.addEventListener('mouseout',function(){
        boton.style.background = 'white';
    });
    
    // Focus
    // saber si estoy dentro de un elemento
    
    var campo = document.querySelector('#campo_nombre');
    
    campo.addEventListener('focus', function(){
        console.log('Estas dentro del focus');
    });
    
    // Blur
    // saber si estoy fuera de un elemento
    campo.addEventListener('blur', function(){
        console.log('Estas fuera del focus');
    });
    
    /* 
    EVENTOS DEL TECLADO :
    
    KeyDown     = la tecla se ha undido
    
    KeyUp       = la tecla se ha soltado --habiendo estado undida
    
    KeyPress    =   Solo sucede cuando la tecla ha sido undido y soltada en el objeto que maneja el evento, por ejemplo
                    puedes undir una tecla en una forma, mover el mouse e irte a otra y en ella si soltarla... 
                    alli no habria KeyPress sino solo KeyUp y solo en la forma donde has navegado con el mouse
    */
    
    // Keydown
    // Saber que tecla estamos presionando
    campo.addEventListener('keydown', (event) => {
        const keyName = event.key;
        console.log('[keydown] El boton que estas presionando es: ' + keyName);
      });
    
    // Keypress
    // Saber que tecla se presiono
    campo.addEventListener('keypress', function(event){
        const KeyPress = event.key;
        console.log('[keypress] El boton que presionantes es: ' + KeyPress);
    });
    
    
    // Keyup
    // La tecla que se ha soltado
    campo.addEventListener('keyup', function(event){
        const KeyUp = event.key;
        console.log('[keyup] El boton que presionantes es: ' + KeyUp);
    });
    
});