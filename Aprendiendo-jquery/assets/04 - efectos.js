$(document).ready(function () {
    // Mostrar y ocultar
    // fast, slow, normal - slideUp, fadeIn, fadeOut
    let caja = $('#caja');

    $('#mostrar').click(function(){
        $(this).hide();
        $('#ocultar').show();
        caja.fadeTo('slow',0.5);
    });

    $('#ocultar').click(function() {
        $(this).hide();
        $('#mostrar').show();
        caja.fadeTo('slow',0.2);
    });


    $('#toggle').click(function(){
        caja.toggle('');
    });

})