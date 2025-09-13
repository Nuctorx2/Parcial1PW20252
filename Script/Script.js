document.addEventListener('DOMContentLoaded', function() {

    // --- 1. FUNCIONALIDAD DE LA BARRA DE BÚSQUEDA (GLOBAL) ---
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

    // --- 4. FUNCIONALIDAD FORMULARIO DE REGISTRO (signup.html) ---
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
});