'use strict'

// Switch

var edad    = 18;
var imprime = "";

switch(edad)
    {
    case 15:
        imprime = "Eres menor de edad";
        break;
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad";
        break;
    case 20:
        imprime = "Eres adulto"
        break;
    case 70:
        imprime = "Eres de la tercera edad"
        break;
    default:
        imprime = "No hay una edad registrada";
        break;
    }

 console.log(imprime);