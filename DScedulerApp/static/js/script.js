document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector('.nav');
    const toggle = document.createElement('div');
    toggle.classList.add('menu-toggle');
    toggle.innerHTML = '&#9776;';
    document.querySelector('.header .container').appendChild(toggle);

    toggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('nav a, .btn-demo');

    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === "{% url 'demo' %}") {
                // Permet la redirection normale pour le lien "Demandez une démo"
                return 0;
            }
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    nav.classList.remove('active'); // Fermer le menu après le clic
                }
            } else {
                nav.classList.remove('active');
            }
        });
    });
});
