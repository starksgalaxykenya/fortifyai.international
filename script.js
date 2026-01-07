// script.js - Enhanced Version
document.addEventListener('DOMContentLoaded', () => {
    // 1. Set Current Year in Footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // 2. Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.querySelector('.nav');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            navToggle.innerHTML = nav.classList.contains('active') ? '✕' : '☰';
        });
    }

    // 3. Scroll Animation
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with data-animation attribute
    document.querySelectorAll('[data-animation="fade-in"]').forEach(element => {
        observer.observe(element);
    });

    // 4. Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Skip if it's a contact option button with special handling
            if (this.classList.contains('contact-option-btn')) return;
            
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (nav && nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    if (navToggle) navToggle.innerHTML = '☰';
                }
            }
        });
    });

    // 5. Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const message = formData.get('message');
            
            // Determine which contact option is selected
            const selectedOption = document.querySelector('input[name="contact-option"]:checked');
            
            if (selectedOption) {
                const option = selectedOption.value;
                
                if (option === 'whatsapp') {
                    // Format message for WhatsApp
                    const whatsappMessage = `Hello, my name is ${name}. ${message} Contact me at: Email: ${email}, Phone: ${phone}`;
                    const encodedMessage = encodeURIComponent(whatsappMessage);
                    window.open(`https://wa.me/254793312993?text=${encodedMessage}`, '_blank');
                } 
                else if (option === 'email') {
                    // Format email
                    const subject = encodeURIComponent(`Contact from ${name} - Fortify AI Website`);
                    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`);
                    window.open(`mailto:contact@fortifyai.international?subject=${subject}&body=${body}`, '_blank');
                } 
                else if (option === 'call') {
                    // Call functionality
                    window.open('tel:+254793312993', '_blank');
                }
            } else {
                alert('Please select a contact method');
            }
        });
    }

    // 6. Video Demo Modal
    const demoButtons = document.querySelectorAll('.demo-btn');
    const modal = document.getElementById('demo-modal');
    const modalVideo = document.getElementById('modal-video');
    const closeModal = document.querySelector('.close-modal');
    
    if (demoButtons.length > 0 && modal) {
        demoButtons.forEach(button => {
            button.addEventListener('click', function() {
                const videoSrc = this.getAttribute('data-video-src');
                if (videoSrc && modalVideo) {
                    modalVideo.src = videoSrc;
                    modal.style.display = 'flex';
                }
            });
        });
        
        if (closeModal) {
            closeModal.addEventListener('click', () => {
                if (modalVideo) modalVideo.src = '';
                modal.style.display = 'none';
            });
        }
        
        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                if (modalVideo) modalVideo.src = '';
                modal.style.display = 'none';
            }
        });
    }

    // 7. Form validation
    const formInputs = document.querySelectorAll('.form-input, .form-textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() !== '') {
                this.classList.add('filled');
            } else {
                this.classList.remove('filled');
            }
        });
    });
});
