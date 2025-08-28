// Animación de scroll del header
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Animación al hacer scroll
function checkScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (elementPosition < screenPosition) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// Smooth scrolling para enlaces de navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Galería: permitir tap en móviles para activar overlay
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        // Si querés que se pueda activar/desactivar individualmente:
        item.classList.toggle('active');
    });
});





// Animación de pulso para el botón principal
const mainBtn = document.querySelector('.hero .btn');
setInterval(() => {
    mainBtn.style.animation = 'pulse 3s ease infinite';
}, 3000);

