document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    // 1. Menú Móvil con rotación de icono
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            
            // Animación de intercambio de icono
            if (navLinks.classList.contains('active')) {
                icon.style.transform = 'rotate(90deg)';
                setTimeout(() => {
                    icon.classList.replace('fa-bars-staggered', 'fa-xmark');
                }, 150);
            } else {
                icon.style.transform = 'rotate(0deg)';
                setTimeout(() => {
                    icon.classList.replace('fa-xmark', 'fa-bars-staggered');
                }, 150);
            }
        });
    }

    // 2. Navbar cambia de estilo al hacer scroll
    window.addEventListener('scroll', () => {
        const container = document.querySelector('.container');
        // Si usas el contenedor con scroll, detectamos su scrollTop
        if (container.scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Intersection Observer mejorado para móviles
    const revealCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    };

    const observer = new IntersectionObserver(revealCallback, {
        threshold: 0.1 // Menor umbral para que dispare antes en móvil
    });

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
});