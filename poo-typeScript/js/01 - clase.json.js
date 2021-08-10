var bicicleta = {
    color:   'verde',
    modelo:  'BMX',
    frenos:  'De disco',
    velMax:  '60km/h',
    cambiarColor: function(nuevoColor) {
        bicicleta.color = nuevoColor;
        // this.color = nuevoColor;
    }
}

bicicleta.cambiarColor('Azul');
console.log(bicicleta);