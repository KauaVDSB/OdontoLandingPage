const openButton = document.querySelector('.menu-toggle.open');
const closeButton = document.querySelector('.menu-toggle.close');
const navbar = document.querySelector('.navbar');

const isMobile = window.matchMedia("(max-width: 768px)").matches;

if (isMobile && openButton && closeButton && navbar) {
    // Torna navbar lateral visível
    openButton.addEventListener('click', () => {
        navbar.classList.add('active');
    });

    // Esconde navbar lateral
    closeButton.addEventListener('click', () => {
        navbar.classList.remove('active');
    });

    // Fecha a navbar lateral em outras ocasiões
    document.addEventListener('click', (event) => {
        const clickedInsideNavbar = navbar.contains(event.target);
        const clickedOpenButton = openButton.contains(event.target);

        if (!clickedInsideNavbar && !clickedOpenButton) {
            navbar.classList.remove('active');
        }
    });
}
