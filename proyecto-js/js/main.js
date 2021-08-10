$(document).ready(function () {

    // bxslider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1000,
        auto: true,
    });

    // Posts
    var posts = [
        {
            name: 'Titulo del articulo 1',
            date: moment().format('LL'),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eos. Voluptatem temporibus mollitia dolore assumenda similique beatae consectetur, quasi, quos dignissimos error blanditiis? Deleniti quas magni, iure nobis eveniet voluptate Omnis consectetur labore illo natus." + '<br>' + "accusantium pariatur, deleniti nesciunt amet error aliquid quia necessitatibus, officiis qui ipsa est quasi laborum reiciendis iure veniam. Accusantium, porro adipisci incidunt ipsum quis debitis. Blanditiis, quia ab quos harum rem itaque voluptas eligendi eius maiores repellendus odit consequuntur tempore illo cupiditate pariatur minima alias? Repudiandae quia labore possimus placeat recusandae consectetur inventore accusantium amet!" + '<br>' + "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit laborum, obcaecati explicabo voluptates perferendis eaque aut pariatur iure soluta optio quisquam debitis esse aspernatur ullam nemo? Sunt, asperiores sed! Soluta!."
        },
        {
            name: 'Titulo del articulo 2',
            date: moment().format('LL'),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eos. Voluptatem temporibus mollitia dolore assumenda similique beatae consectetur, quasi, quos dignissimos error blanditiis? Deleniti quas magni, iure nobis eveniet voluptate Omnis consectetur labore illo natus." + '<br>' + "accusantium pariatur, deleniti nesciunt amet error aliquid quia necessitatibus, officiis qui ipsa est quasi laborum reiciendis iure veniam. Accusantium, porro adipisci incidunt ipsum quis debitis. Blanditiis, quia ab quos harum rem itaque voluptas eligendi eius maiores repellendus odit consequuntur tempore illo cupiditate pariatur minima alias? Repudiandae quia labore possimus placeat recusandae consectetur inventore accusantium amet!" + '<br>' + "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit laborum, obcaecati explicabo voluptates perferendis eaque aut pariatur iure soluta optio quisquam debitis esse aspernatur ullam nemo? Sunt, asperiores sed! Soluta!."
        },
        {
            name: 'Titulo del articulo 3',
            date: moment().format('LL'),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eos. Voluptatem temporibus mollitia dolore assumenda similique beatae consectetur, quasi, quos dignissimos error blanditiis? Deleniti quas magni, iure nobis eveniet voluptate Omnis consectetur labore illo natus." + '<br>' + "accusantium pariatur, deleniti nesciunt amet error aliquid quia necessitatibus, officiis qui ipsa est quasi laborum reiciendis iure veniam. Accusantium, porro adipisci incidunt ipsum quis debitis. Blanditiis, quia ab quos harum rem itaque voluptas eligendi eius maiores repellendus odit consequuntur tempore illo cupiditate pariatur minima alias? Repudiandae quia labore possimus placeat recusandae consectetur inventore accusantium amet!" + '<br>' + "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit laborum, obcaecati explicabo voluptates perferendis eaque aut pariatur iure soluta optio quisquam debitis esse aspernatur ullam nemo? Sunt, asperiores sed! Soluta!."
        }
    ];

    // Plantilla para mostrar los posts
    posts.forEach(post => {
        let publicacion = `
        <div class="post">
            <h1>${post.name}</h1>
            <span>${post.date}</span>
            <p>${post.content}</p>
            <a class="button-more" href="#">Leer más</a>
        </div>
        <hr>
        `;
        $('.post-public').append(publicacion);
    });

    // CAMBIAR DE TEMA

    var theme = $('#style-theme');

    if (localStorage.getItem('colorTema')) {
        var temaActivo = localStorage.getItem('colorTema');
        theme.attr('href', temaActivo);
    } else {
        console.log('no existe')
    }

    function cambiar_tema() {
        localStorage.removeItem('colorTema');
        var url = $('#style-theme').attr('href');
        localStorage.setItem('colorTema', url);
    }


    $('.to-green').click(function () {
        theme.attr("href", "css/green.css")
        cambiar_tema();
    });
    $('.to-red').click(function () {
        theme.attr("href", "css/red.css")
        cambiar_tema();
    });
    $('.to-blue').click(function () {
        theme.attr("href", "css/blue.css")
        cambiar_tema();
    });

    // Subir hasta arriba de la página web
    $('#subir').click(function () {

        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    // control de localStorage persistencia

    function mostrar_bienvenida() {
        $('#login').hide();
        $('#logout').show();
        var user = localStorage.getItem('nombre');
        $('#welcome-text').append('<h1> Bienvenido: </h1>' + user + '<br>');
    }

    if (localStorage.getItem('nombre') && localStorage.getItem('correo') && localStorage.getItem('password') != undefined) {
        mostrar_bienvenida();
    }

    // Login falso
    $('#login form').submit(function (e) {

        e.preventDefault(); // Hace que no redireccione a otra pagina

        // capturamos todos los datos ingresados en los input
        var name = $('input[name=nombre]').val();
        var correo = $('input[name=correo]').val();
        var password = $('input[name=password]').val();

        // Evaluamos si los datos ingresados son correctos y guardamos en localStorage
        if (name.trim() == 0 || name.trim().length == 0) {
            $('#nombre').css('border', 'solid 2px red');
        } else {
            $('#nombre').css('border', 'solid 2px green');
            localStorage.setItem('nombre', name);
        } if (correo.trim() == 0 || correo.trim().length == 0) {
            $('#correo').css('border', 'solid 2px red');
        } else {
            $('#correo').css('border', 'solid 2px green');
            localStorage.setItem('correo', correo);
        }
        if (password.trim() == 0 || password.trim().length == 0) {
            $('#contasena').css('border', 'solid 2px red');
        } else {
            $('#contasena').css('border', 'solid 2px green');
            localStorage.setItem('password', password);
        }

        // Evaluamos si todo es correcto para mostrar la bienvenida
        if (name.trim() == 0 || name.trim().length == 0 || correo.trim() == 0 || correo.trim().length == 0 || password.trim() == 0 || password.trim().length == 0) {
            return false;
        } else {
            mostrar_bienvenida();
        }
    });

    // Cerrar sesión
    $('#logout').click(function (evt) {

        evt.preventDefault();

        localStorage.clear();
        location.reload();

        return false;
    });



    if (window.location.href.indexOf('about') > -1) {
        // Acordeon con jquery Ui
        $("#accordion").accordion();

        // Reloj con momentJs
        setInterval(function () {
            var reloj = moment().format('MMMM Do YYYY, h:mm:ss a');
            $('#reloj').html(reloj);
        }, 1000);
    }

    if (window.location.href.indexOf('contact') > -1) {
        $('#formContact').validate({
            rules:{
                name:{
                    required: true,
                },
                lastname:{
                    required: true
                },
                date:{
                    required: true,
                    date: true
                },
                description:{
                    required: true,
                    minlength: 10
                }

            },
            meessages:{
                name:{
                    required: "El nombre es obligatorio"
                },
                lastname:{
                    required: "El apellido es obligatorio"
                },
                date:{
                    required: "La fecha de nacimiento es obligatoria"
                },
                description:{
                    required: "La descripción es obligatoria",
                    minlength: "La descripción debe terner al menos 10 caracteres"
                }
            }
        });
    }

});