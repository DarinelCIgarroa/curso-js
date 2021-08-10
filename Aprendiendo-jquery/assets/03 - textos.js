$(document).ready(function(){
    
    reloadLinks();

    $('#agregar-enlace').click(function(){
        $('#menu').append('<li><a href="'+$("#enlace").val()+'"</a></li>');
        $('#enlace').val('');
        reloadLinks();
    });

    function reloadLinks() {
        $('a').each(function(){
            that = $(this);
            var enlaces = (that.attr('href'));

            //agregar atributo
            that.attr('target','_blank')
            // Elimar atributos
            that.removeAttr('target')

            that.text(enlaces)
        });
    }

});