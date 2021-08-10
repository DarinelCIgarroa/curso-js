var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de: " + logo);
        };
    };
}
// @estampar('nike')
// Clase (Modelo del objeto)
var camiseta = /** @class */ (function () {
    // Constructor
    /* El contructor es el primer metodo que se carga y se carga de manera automatica
    se usa mayormente para asignar valores por default a las propiedades.
    */
    function camiseta(color, modelo, marca, talla) {
        this.color = 'Verde';
        this.modelo = 'Manga Larga';
        this.marca = 'Lacoste';
        this.talla = 32;
    }
    // Metodos (Funciones )
    camiseta.prototype.setColor = function (newColor) {
        this.color = newColor;
    };
    camiseta.prototype.getColor = function () {
        return this.color;
    };
    camiseta.prototype.setModelo = function (newModelo) {
        this.modelo = newModelo;
    };
    camiseta.prototype.getModelo = function () {
        return this.modelo;
    };
    return camiseta;
}());
// Clase hija
var sudadera = /** @class */ (function (_super) {
    __extends(sudadera, _super);
    function sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    sudadera.prototype.setGorro = function (boolean) {
        this.gorro = boolean;
    };
    sudadera.prototype.getGorro = function () {
        return this.gorro;
    };
    return sudadera;
}(camiseta));
var sudadera_nike = new sudadera('Blanca', 'Manga Larga', 'nike', 32);
sudadera_nike.setGorro(true);
console.log(sudadera_nike);
// Exiten tres tipos de propiedades private, public, protected
/*
La propieda private hace que las prpiedades y atributos solo son accesibles en la clase que lo define.
La propiedad public es accesible desde otras clases y cualquier parte.
la propiedad protected hace que las propiedades y atributos solo sean accesibles desde la clase que lo define y las que heredan de ella
*/
// Podemos cambiar directamente los valores si las propiedades son publicas
// var playera = new camiseta();
// playera.color = 'rojo';
// Podemos acceder a las propiedades a traves de los metodos aun así sean privados
/*
1.- Creamos un nuevo objeto usando la clase.
2.- Accedemos a los metodos a traves del objeto instanciado
3.- Manejamos los metodos como queramos,
*/
// var newCamiseta = new camiseta('azul','cuello v','nike',42);
// newCamiseta.cambiarColor('rojo');
// newCamiseta.getColor();
