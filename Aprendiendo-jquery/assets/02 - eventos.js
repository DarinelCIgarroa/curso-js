$(document).ready(function () {

    $('#caja').mouseover(function () {
        $(this)
            .css('background', 'black')
            .css('color', 'white')
    });

    $('#caja').mouseout(function () {
        $(this)
            .css('background', '#1FECDB')
            .css('color', 'black')
    });

    // HOVER

    function over() {
        var that = $(this);
        that.css('background', '#0D9A28')
            .css('color', '#000');
    }

    function out() {
        $(this).css('background', "#1472D8")
            .css('color', '#000');
    }

    $('#caja').hover(over, out);

    // Eventos click y doble click
    $('#caja').click(function () {
        $(this).css('background', '#EE0B19');
    });
    $('#caja').dblclick(function () {
        $(this).css('background', '#810BEE');
    });

    // Eventos focus y blur

    var name = $('#name');
    var info = $('.info');

    name.focus(function () {
        $(this).css('border', 'green solid 5px');
    });

    name.blur(function () {
        info.text($(this).val()).show();
    });

    // Eventos del ratón mousedown, mouseup, mousemove
    info.mousedown(function () {
        $(this).css('background', 'red');
    }); // se ejecuta el evento mientas mantienes el click apretado

    info.mouseup(function () {
        $(this).css('background', 'blue');
    }); // se ejecuta el evento cuando se suelta el click

    $(document).mousemove(function (event) {

        $('#sigueme').css('left', event.clientX)
            .css('top', event.clientY);
        }); // Se ejecuta el evento cuando se mueve el mouses

});