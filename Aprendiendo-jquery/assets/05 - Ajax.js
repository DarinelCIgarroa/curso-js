$(document).ready(function () {
    // El metodo load trae todos los datos de la página

    // $('#load').load('https://reqres.in/');

    // Metodo GET
    $.get("https://reqres.in/api/users", { page: 2 }, function (response) {
        response.data.forEach(element => {
            var list = "<p>" + element.first_name + " " + element.last_name + "</p>";
            $('#get').append(list);
        });
    })

    // Metodo POST
    $('#formulario').submit(function (e) {
        e.preventDefault();

        var usuario = {
            name: $('input[name = "name"]').val(),
            last_name: $('input[name = "last_name"]').val()
        }

        // $.post($(this).attr('action'), {usuario}, function(response){
        //     $('input[name = "name"]').val('');
        //     $('input[name = "last_name"]').val('');
        //     console.log(response)
        // });

        // Metodo AJAX
        $.ajax({
            url: $(this).attr('action'),
            type: 'POST',
            data: usuario,
            beforeSend:function(){
                console.log('Enviando datos....')
            },
            success: function(response) {
                console.log(response);
            },

            error: function() {
                alert('upps! Ocurrio un problema')
            },
            timeout: 2000
        });

    });


});


