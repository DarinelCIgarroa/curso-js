//interface - sirve para definir que metodos obligatoriamente debe tener una clase.
interface camisetaBase{
    setColor(newColor);
    getColor();
}

function estampar(logo:string){
    return function(target: Function){
        target.prototype.estampacion = function() {
            console.log("Camiseta estampada con el logo de: " + logo);
        }
    }
}

// @estampar('nike')
// Clase (Modelo del objeto)

class camiseta implements camisetaBase{
    // Propiedades (Caracteristicas del objeto)
    public color: string;
    public modelo: string;
    public marca: string;
    public talla: number;

    // Constructor
    /* El contructor es el primer metodo que se carga y se carga de manera automatica
    se usa mayormente para asignar valores por default a las propiedades.
    */
    constructor(color,modelo,marca,talla){
        this.color  = 'Verde';
        this.modelo = 'Manga Larga';
        this.marca  = 'Lacoste';
        this.talla  = 32;
    }

    // Metodos (Funciones )
    public setColor(newColor){
        this.color = newColor;
    }

    public getColor(){
        return this.color;
    }

    public setModelo(newModelo){
        this.modelo = newModelo;
    }

    public getModelo(){
        return this.modelo;
    }
}

// Clase hija
class sudadera extends camiseta{
    private gorro: boolean;

    public setGorro(boolean){
        this.gorro = boolean;
    }

    public getGorro(){
        return this.gorro;
    }
}

var sudadera_nike = new sudadera('Blanca','Manga Larga','nike',32);
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

