function copyEmail() {
    const email = "izanmg2706@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        const message = document.getElementById("copy-message");
        message.classList.remove("hidden");
        message.classList.add("visible");

        setTimeout(() => {
            message.classList.remove("visible");
            message.classList.add("hidden");
        }, 2000);
    });
}

// Obtener todos los enlaces de la navegación
const enlaces = document.querySelectorAll('.ref');

// Agregar un event listener a cada enlace para evitar el comportamiento por defecto
enlaces.forEach(enlace => {
    enlace.addEventListener('click', function(event) {
        // Prevenir el comportamiento por defecto del enlace (cargar la página)
        event.preventDefault();

        // Obtener el id de la sección correspondiente
        const seccionId = this.getAttribute('href');

        // Hacer scroll hacia la sección de manera suave
        document.querySelector(seccionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


