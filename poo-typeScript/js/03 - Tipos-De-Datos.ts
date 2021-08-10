// string
let letras:string = "Esto es un String";

// number

let numero: number = 29;

// boolean
let v_f: boolean = true;

// array
let lenguajes: Array<string> = ['PHP','JS','ANGULAR','VUE JS'];
//otra manera de declarar un array
let numeros: number[] = [1,2,3,4,5];

// any - Acepta culaquier valor
let cualquiera: any[] = ['El rey león','Nemo','Madagascar','Spirint',12, true];

// Multiples tipos de datos
let multiple: string | number =  'Dato string o number';

// Tipos de datos personalizados agregar un alias a una regla
type alfanumerico = string | number;
var algo: alfanumerico = 'Calquier dato string o number';

// Diferencia entre let y var
// -- Let solo funciona dentro de su entorno y var es global reasigna valores
var num1 = 10;
var num2 = 20;

if(num1+num2 == 30){
    var num1 = 30;
    let num2 = 0;
    console.log(num1,num2)
}
console.log(num1,num2);

console.log(letras,numero,v_f,lenguajes,numeros,cualquiera,multiple);
