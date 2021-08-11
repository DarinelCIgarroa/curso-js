'use strict'

// ALERTA
// alert('Esta es mi alerta');
// alert('Mi segunda alerta');

// CONFIRMACION
// do{
//     var mi_resultado = confirm('¿Estas seguro de querer continuar?');
//     if(mi_resultado == true){
//         alert('repitio');
//     }else{
//         alert('BYE...');
//     }
// }while(mi_resultado == true)

var num1=0;

do{
    var num1 = prompt('Ingresa el numero');

    if (num1 % 1 == 0) {
        console.log(typeof num1);
        alert('El numero ' + num1 + ' es entero');

    }else{
        alert('El numero ' + num1 + ' no es entero')
    }
    var mi_resultado = confirm('¿Quieres realizar otra operación?');
}while(mi_resultado == true)


