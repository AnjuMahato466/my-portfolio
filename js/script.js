
// =====================================
// 1. SCROLL REVEAL ANIMATION
// =====================================

const revealElements = document.querySelectorAll(
    '.section-heading, .about-content, .skill-card, .education-card, .project-card, .contact-details'
);

// Check browser support before adding hidden animation styles
if ('IntersectionObserver' in window) {

    revealElements.forEach(element => {
        element.classList.add('reveal');
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.15
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}


// =====================================
// 2. ACTIVE NAVIGATION
// =====================================

const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('.nav-links a');

if ('IntersectionObserver' in window) {

    const navObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const currentId = entry.target.id;

                navLinks.forEach(link => {

                    link.classList.toggle(
                        'active',
                        link.getAttribute('href') === `#${currentId}`
                    );

                });

            }

        });

    }, {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    });

    sections.forEach(section => {
        navObserver.observe(section);
    });
}


// =====================================
// 3. CURRENT YEAR IN FOOTER
// =====================================

const footerText = document.querySelector('footer p');

if (footerText) {
    footerText.textContent =
        `© ${new Date().getFullYear()} Anju. Designed and developed with care.`;
}
