// Mostrar el header al hacer scroll
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});




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

// Animación de pulso para el botón principal
const mainBtn = document.querySelector('.hero .btn');
setInterval(() => {
    mainBtn.style.animation = 'pulse 3s ease infinite';
}, 3000);


// ===============================
// 📌 GALERÍA: solo una activa a la vez + cerrar al tocar fuera
// ===============================
const galleryItems = document.querySelectorAll('.gallery-item');

// Activar solo una imagen a la vez
galleryItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation(); // evita que se dispare el "click fuera"
        galleryItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });    
});    

// Cerrar todas si se hace click fuera de la galería
document.addEventListener('click', (e) => {
    if (!e.target.closest('.gallery-item')) {
        galleryItems.forEach(i => i.classList.remove('active'));
    }    
});    




