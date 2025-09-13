document.addEventListener('DOMContentLoaded', function() {

    // Barra de Navegación
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const searchTerm = document.getElementById('searchInput').value;
            console.log('El usuario buscó:', searchTerm);
            alert('Revisa la consola (F12) para ver tu búsqueda.');
        });
    }

    // Lógica para la página de Misión
    const textoMision = document.getElementById('textoMision');
    if (textoMision) {
        const btnTamano = document.getElementById('btnCambiarTamano');
        const btnColor = document.getElementById('btnCambiarColor');
        let tamanoOriginal = true;
        let colorOriginal = true;

        btnTamano.addEventListener('click', function() {
            if (tamanoOriginal) {
                textoMision.style.fontSize = '1.25rem';
            } else {
                textoMision.style.fontSize = '1rem';
            }
            tamanoOriginal = !tamanoOriginal;
        });

        btnColor.addEventListener('click', function() {
            if (colorOriginal) {
                textoMision.style.color = '#0d6efd';
            } else {
                textoMision.style.color = '#212529';
            }
            colorOriginal = !colorOriginal;
        });
    }

    // Lógica para la página de Visión
    const textoVision = document.getElementById('textoVision');
    if (textoVision) {
        const btnTamano = document.getElementById('btnCambiarTamano');
        const btnColor = document.getElementById('btnCambiarColor');
        let tamanoOriginal = true;
        let colorOriginal = true;

        btnTamano.addEventListener('click', function() {
            if (tamanoOriginal) {
                textoVision.style.fontSize = '1.25rem';
            } else {
                textoVision.style.fontSize = '1rem';
            }
            tamanoOriginal = !tamanoOriginal;
        });

        btnColor.addEventListener('click', function() {
            if (colorOriginal) {
                textoVision.style.color = '#198754';
            } else {
                textoVision.style.color = '#212529';
            }
            colorOriginal = !colorOriginal;
        });
    }

    // Funcionalidad del Login
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const usuario = document.getElementById('usuarioInput').value;

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(usuario)) {
                alert('Error: Debes ingresar un correo electrónico válido en el campo de usuario.');
                return;
            }

            const password = document.getElementById('passwordInput').value;

            if (password == "") {
                alert('Error: Debes ingresar una contraseña.');
                return;
            }

            console.log('--- Intento de Inicio de Sesión (Válido) ---');
            console.log('Usuario:', usuario);
            console.log('Contraseña:', password);

            alert('Correo válido. Datos enviados a la consola (F12).');
        });
    }

    // Registro del Formulario
    const signupForm = document.getElementById('signupForm');

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nombres = document.getElementById('nombres').value.trim();
            const apellidos = document.getElementById('apellidos').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            const estrato = document.getElementById('estrato').value;
            const fechaNacimiento = document.getElementById('fechaNacimiento').value;
            const grupoSanguineo = document.getElementById('grupoSanguineo').value;
            const generoSeleccionado = document.querySelector('input[name="genero"]:checked');
            const actividadesChecks = document.querySelectorAll('input[type="checkbox"]:checked');
            
            const soloLetrasRegex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const telefonoRegex = /^\d{7,10}$/;

            if (!soloLetrasRegex.test(nombres)) {
                alert('Error: El campo "Nombres" solo puede contener letras y espacios.');
                return;
            }
            if (!soloLetrasRegex.test(apellidos)) {
                alert('Error: El campo "Apellidos" solo puede contener letras y espacios.');
                return;
            }
            if (!emailRegex.test(email)) {
                alert('Error: Por favor, ingresa un correo electrónico válido.');
                return;
            }
            if (!telefonoRegex.test(telefono)) {
                alert('Error: Por favor, ingresa un teléfono válido (de 7 a 10 dígitos).');
                return;
            }
            if (!estrato) {
                alert('Error: Debes seleccionar un estrato.');
                return;
            }
            if (!fechaNacimiento) {
                alert('Error: Debes ingresar tu fecha de nacimiento.');
                return;
            }
            if (!grupoSanguineo) {
                alert('Error: Debes seleccionar un grupo sanguíneo.');
                return;
            }
            if (!generoSeleccionado) {
                alert('Error: Debes seleccionar un género.');
                return;
            }
            if (actividadesChecks.length === 0) {
                alert('Error: Debes seleccionar al menos una actividad favorita.');
                return;
            }

            const genero = generoSeleccionado.value;
            let actividades = [];
            actividadesChecks.forEach(check => actividades.push(check.value));

            const infoCompleta = `
                ¡REGISTRO EXITOSO!
                ---------------------------------
                Nombres: ${nombres}
                Apellidos: ${apellidos}
                Email: ${email}
                Teléfono: ${telefono}
                Estrato: ${estrato}
                Fecha de Nacimiento: ${fechaNacimiento}
                Grupo Sanguíneo: ${grupoSanguineo}
                Género: ${genero}
                Actividades: ${actividades.join(', ')}
            `;

            alert(infoCompleta);
            signupForm.reset();
        });
    }

document.addEventListener('DOMContentLoaded', function() {


    const noticias = [
        {
            titulo: "La NASA descubre un nuevo planeta similar a la Tierra",
            img: "/Images/img3.png",
            texto: "En un descubrimiento histórico, los astrónomos de la NASA han confirmado la existencia de Kepler-186f, un planeta del tamaño de la Tierra que orbita una estrella distante en la zona habitable. Este hallazgo aumenta las esperanzas de encontrar vida más allá de nuestro sistema solar. El planeta se encuentra a unos 500 años luz de distancia y es el primer planeta validado de tamaño terrestre que orbita otra estrella en la zona donde podría existir agua líquida en la superficie."
        },
        {
            titulo: "Avances en la inteligencia artificial generativa",
            img: "/Images/img1.png", 
            texto: "Un nuevo modelo de inteligencia artificial llamado 'Synapse-7' ha demostrado capacidades sin precedentes para generar texto, imágenes y música coherentes y de alta calidad. Los investigadores creen que esta tecnología podría revolucionar industrias creativas y científicas, aunque también plantean importantes debates éticos sobre su uso y regulación. El modelo fue entrenado con una base de datos masiva que abarca siglos de conocimiento humano."
        },
        {
            titulo: "Campeón mundial de ajedrez retiene su título",
            img: "/Images/img2.png",
            texto: "El gran maestro Magnus Carlsen ha defendido con éxito su título de campeón mundial de ajedrez en un emocionante desempate a partidas rápidas contra su rival, Ian Nepomniachtchi. El encuentro, que duró varias semanas, culminó con una demostración de brillantez táctica por parte de Carlsen, quien aseguró su quinto campeonato mundial consecutivo, consolidando su legado como uno de los mejores jugadores de todos los tiempos."
        }
    ];

    const botonesNoticia = document.querySelectorAll('.btn-leer-noticia');

    
    botonesNoticia.forEach((boton, index) => {
        boton.addEventListener('click', function(event) {
            event.preventDefault();

            const noticia = noticias[index];

            const tituloCodificado = encodeURIComponent(noticia.titulo);
            const imgCodificada = encodeURIComponent(noticia.img);
            const textoCodificado = encodeURIComponent(noticia.texto);
            
            window.location.href = `noticia-detalle.html?titulo=${tituloCodificado}&img=${imgCodificada}&texto=${textoCodificado}`;
        });
    });
});
});