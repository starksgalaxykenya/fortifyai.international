document.addEventListener('DOMContentLoaded', () => {
    // 1. Set the Current Year in the Footer
    const currentYearSpan = document.getElementById('current-year');
    currentYearSpan.textContent = new Date().getFullYear();

    // 2. Scroll Animation (Abstract Minimalism)
    // Applies a fade-in/slide-up effect to elements as they enter the viewport.

    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the item is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    // Select all elements tagged for animation
    const animatedElements = document.querySelectorAll('[data-animation="fade-in"]');

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // 3. Smooth Scrolling for Navigation
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
