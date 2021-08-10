$(document).ready(function(){
    // Mover elementos por la página
    $('.elemento').draggable();

    // Redimesionar elementos
    $('.elemento').resizable();

    // Seleccionar elementos agregar un ui-selected a los elementos clickeados
    // $('.listaSelect').selectable();

    // Ordenar los elementos
    $('.listaSelect').sortable({
        update:function(event, ui){
            console.log('Se han cambiado los elementos')
        }
    });

    // Droppable detecta elementos en el area
    $('#item-move').draggable();
    $('#area').droppable({
        drop: function(){
            alert('Estas dentro!')
        }
    });

    // Efectos
    // fade,explode,blind,slide,drop,fold,puff,scale,shake,
    $('#toggle').click(function(){
        $('#area').toggle("explode", 1000);
    });

    // Tooltip
    $(document).tooltip();

    // Dialog
    $('#disparar').click(function(){
        $('.dialog').dialog();
    });

    // Datepicker
    $('#date').datepicker();

    // Tads
    $('#pestanas').tabs();
    

});
