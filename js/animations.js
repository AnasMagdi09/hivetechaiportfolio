// Animations Manager
class AnimationsManager {
  constructor() {
    this.init();
  }

  init() {
    this.setupScrollAnimations();
    this.setupParallaxEffect();
    this.setupPageLoadAnimations();
  }

  // Scroll Animations using Intersection Observer
  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with 'reveal' class
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
  }

  // Parallax Effect for Hero Section
  setupParallaxEffect() {
    const heroBackground = document.querySelector('.hero-background');
    if (!heroBackground) return;

    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxSpeed = 0.5;
      heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    });
  }

  // Page Load Animations
  setupPageLoadAnimations() {
    window.addEventListener('load', () => {
      const heroTitle = document.querySelector('.hero-title');
      const heroSubtitle = document.querySelector('.hero-subtitle');
      const heroBtn = document.querySelector('.hero .btn');

      if (heroTitle) {
        setTimeout(() => heroTitle.classList.add('entrance-1'), 100);
      }
      if (heroSubtitle) {
        setTimeout(() => heroSubtitle.classList.add('entrance-2'), 200);
      }
      if (heroBtn) {
        setTimeout(() => heroBtn.classList.add('entrance-4'), 300);
      }
    });
  }

  // Stagger Animation for Project Cards
  staggerAnimation(elements, delay = 100) {
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate-slide-up');
      }, index * delay);
    });
  }

  // Filter Animation
  filterAnimation(elements, show = true) {
    elements.forEach((el, index) => {
      setTimeout(() => {
        if (show) {
          el.style.display = '';
          el.style.opacity = '0';
          el.style.transform = 'scale(0.9)';
          setTimeout(() => {
            el.classList.remove('filter-fade-out');
            el.classList.add('filter-fade-in');
            el.style.opacity = '1';
            el.style.transform = 'scale(1)';
          }, 10);
        } else {
          el.classList.remove('filter-fade-in');
          el.classList.add('filter-fade-out');
          el.style.opacity = '0';
          el.style.transform = 'scale(0.9)';
          setTimeout(() => {
            el.style.display = 'none';
          }, 300);
        }
      }, index * 50);
    });
  }

  // Smooth Scroll to Section
  smoothScrollTo(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }
}

// Initialize animations manager
const animationsManager = new AnimationsManager();

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      if (targetId !== '#') {
        animationsManager.smoothScrollTo(targetId);
      }
    });
  });
});
