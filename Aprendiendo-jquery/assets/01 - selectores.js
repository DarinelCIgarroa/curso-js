// Cambiar atributos css
$(document).ready(function () {
    $('#verde').css('background', 'GREEN')
        .css('padding', '20')
        .css('width', '450');
    $('.rojo').css('background', 'RED')
        .css('padding', '20')
        .css('width', '450')
        .css('color', 'WHITE');
    $('#amarillo').css('background', 'YELLOW')
        .css('padding', '20')
        .css('width', '450');
    $('.morado').css('background', 'PURPLE')
        .css('padding', '20')
        .css('width', '450')
        .css('color', 'WHITE');

    // Selectores de clases
    $('.sin-borde').click(function () {
        var that = $(this); // guardando this en na variable optimizamos el codigo evitando solicitudes al DOM de manera constante
        if (that.hasClass('zebra')) {
            that.removeClass('zebra')
        } else {
            that.addClass('zebra'); // This al elemento que le esta danco click
        }
    });

    // Selectores de etiqueta
    $('.sin-borde').css('cursor', 'pointer');

    // Selectores de atributos
    $('[title="google"]').css('background','#ccc');
    $('[title="facebook"]').css('background','#123')

    // Otros
    var busqueda = $('#caja').find('.resaltado');
    console.log(busqueda);


});

