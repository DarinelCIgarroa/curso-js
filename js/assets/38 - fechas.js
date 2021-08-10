// Fechas

var year    = new Date().getFullYear();
var month   = new Date().getMonth();
var day     = new Date().getDate();
var hours   = new Date().getUTCHours();


document.write(
    '<h3>' + 'El año es: ' + year + '</h3>',
    '<h3>' + 'El mes es: ' + month + '</h3>',
    '<h3>' + 'El día es: ' + day + '</h3>',
    '<h3>' + 'La hora es: ' + hours + '</h3>'
);

// Operaciones matematicas predefinidas
var numeroRandom = Math.random(); // Número random
console.log(numeroRandom);

var numero = 20.98;
console.log(Math.round(numero)); // redondear un número

// https://www.w3schools.com/jsref/jsref_obj_math.asp
