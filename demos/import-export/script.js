// Import Export System - Interactive Features

// Modal Functions
function openDemoModal() {
    document.getElementById('demoModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeDemoModal() {
    document.getElementById('demoModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('demoModal');
    if (event.target == modal) {
        closeDemoModal();
    }
}

// Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.demo-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('شكراً لاهتمامك! سنتواصل معك قريباً.');
            closeDemoModal();
            form.reset();
        });
    }

    // Smooth Scroll
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

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards
    document.querySelectorAll('.stat-card, .feature-card, .service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });

    // Header Scroll Effect
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });

    // Add hover effects to cards
    const cards = document.querySelectorAll('.feature-card, .service-card, .stat-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });

    // Animate numbers on scroll
    const statNumbers = document.querySelectorAll('.stat-number');
    const animateNumbers = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                const suffix = text.replace(/[0-9,+]/g, '');
                
                if (!isNaN(number)) {
                    let current = 0;
                    const increment = number / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= number) {
                            target.textContent = number.toLocaleString() + suffix;
                            clearInterval(timer);
                        } else {
                            target.textContent = Math.floor(current).toLocaleString() + suffix;
                        }
                    }, 30);
                }
                
                observer.unobserve(target);
            }
        });
    };

    const numberObserver = new IntersectionObserver(animateNumbers, {
        threshold: 0.5
    });

    statNumbers.forEach(number => {
        numberObserver.observe(number);
    });
});
