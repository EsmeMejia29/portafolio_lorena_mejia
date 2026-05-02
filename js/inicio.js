document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.2
    };

    const revealCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const elements = entry.target.querySelectorAll('.reveal');
                elements.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('active');
                    }, index * 200);
                });
            }
        });
    };

    const observer = new IntersectionObserver(revealCallback, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    document.querySelectorAll('.nav-links a, .dropdown-content a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});