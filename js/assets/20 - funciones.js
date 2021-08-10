'use strict'

function porConsola(numero1,numero2){
    console.log('suma:' + (numero1+numero2));
    console.log('resta:' + (numero1-numero2));
    console.log('Multiplicación:' + (numero1*numero2));
    console.log('Division:' + (numero1/numero2));
    console.log('****************');
}

function porPantalla(numero1,numero2){
    document.write('suma:' + (numero1+numero2) + '<br/>');
    document.write('resta:' + (numero1-numero2) + '<br/>');
    document.write('Multiplicación:' + (numero1*numero2) + '<br/>');
    document.write('Division:' + (numero1/numero2) + '<br/>');
}


function calculadora(numero1,numero2, mostrar = false){

if(mostrar==false){
    porConsola(numero1,numero2);
}else{
   porPantalla(numero1,numero2);
}

}

calculadora(4,2,true);
calculadora(6,2,false);