// string
var letras = "Esto es un String";
// number
var numero = 29;
// boolean
var v_f = true;
// array
var lenguajes = ['PHP', 'JS', 'ANGULAR', 'VUE JS'];
//otra manera de declarar un array
var numeros = [1, 2, 3, 4, 5];
// any - Acepta culaquier valor
var cualquiera = ['El rey león', 'Nemo', 'Madagascar', 'Spirint', 12, true];
// Multiples tipos de datos
var multiple = 'Dato string o number';
var algo = 'Calquier dato string o number';
// Diferencia entre let y var
// -- Let solo funciona dentro de su entorno y var es global reasigna valores
var num1 = 10;
var num2 = 20;
if (num1 + num2 == 30) {
    var num1 = 30;
    var num2_1 = 0;
    console.log(num1, num2_1);
}
console.log(num1, num2);
console.log(letras, numero, v_f, lenguajes, numeros, cualquiera, multiple);
