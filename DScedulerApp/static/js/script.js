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
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                nav.classList.remove('active'); // Fermer le menu après le clic
            }
        });
    });
});
