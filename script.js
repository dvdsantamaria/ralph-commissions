// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Consult Form Handling
const consultForm = document.getElementById('consultForm');
const successMessage = document.getElementById('successMessage');

if (consultForm) {
    consultForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate form submission
        consultForm.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Reset form after 3 seconds (optional)
        setTimeout(() => {
            consultForm.reset();
        }, 3000);
    });
}

// Subscribe Form Handling
const subscribeForm = document.getElementById('subscribeForm');

if (subscribeForm) {
    subscribeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show success message
        const button = subscribeForm.querySelector('button');
        const originalText = button.textContent;
        button.textContent = 'Thank You!';
        button.disabled = true;
        
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            subscribeForm.reset();
        }, 3000);
    });
}

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

// Initial check
revealOnScroll();

// Check on scroll
window.addEventListener('scroll', revealOnScroll);

// Add reveal class to elements on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add staggered animation delays to step cards
    const stepCards = document.querySelectorAll('.step-card');
    stepCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    // Add staggered animation delays to installation cards
    const installationCards = document.querySelectorAll('.installation-card');
    installationCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
});

// Navbar scroll effect (if we add a navbar later)
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow to sections on scroll
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (currentScroll > 100) {
            section.style.position = 'relative';
        }
    });
    
    lastScroll = currentScroll;
});

// Parallax effect for hero image
window.addEventListener('scroll', () => {
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.05;
        heroImage.style.transform = `translateY(${rate}px)`;
    }
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Form validation enhancement
const formInputs = document.querySelectorAll('input, select');

formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.checkValidity()) {
            this.style.borderColor = 'var(--accent)';
        } else if (this.value !== '') {
            this.style.borderColor = '#ff4444';
        }
    });
    
    input.addEventListener('focus', function() {
        this.style.borderColor = 'var(--accent)';
    });
});

// Console greeting
console.log('%cRalph Kerle Art Commissions', 'font-size: 24px; font-weight: bold; color: #c9a962;');
console.log('%cBook your free on-site consult today!', 'font-size: 14px; color: #a0a0a0;');
