document.addEventListener('DOMContentLoaded', () => {
    // Menú de navegación
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Carrusel de imágenes
    const carousel = document.querySelector('.carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    let index = 0;

    function showNextItem() {
        index = (index + 1) % items.length;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(showNextItem, 3000); // Cambia de imagen cada 3 segundos

    // Validación del formulario de contacto
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            alert('Por favor, rellena todos los campos.');
        } else {
            alert('Formulario enviado correctamente');
            form.reset();
        }
    });

    // Tema Oscuro/Claro
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
});
