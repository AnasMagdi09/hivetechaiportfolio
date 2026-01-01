// Real Estate Management System - Interactive JavaScript

// Properties Data
const properties = [
    {
        id: 1,
        title: 'فيلا فاخرة في الرياض',
        type: 'للبيع',
        location: 'حي النرجس، الرياض',
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80',
        bedrooms: 5,
        bathrooms: 4,
        area: 450,
        badge: 'مميز'
    },
    {
        id: 2,
        title: 'شقة عصرية في جدة',
        type: 'للإيجار',
        location: 'حي الروضة، جدة',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
        bedrooms: 3,
        bathrooms: 2,
        area: 180,
        badge: 'جديد'
    },
    {
        id: 3,
        title: 'مكتب تجاري راقي',
        type: 'للبيع',
        location: 'برج المملكة، الرياض',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
        bedrooms: null,
        bathrooms: 2,
        area: 250,
        badge: 'فرصة'
    },
    {
        id: 4,
        title: 'دوبلكس فاخر',
        type: 'للبيع',
        location: 'حي الياسمين، الرياض',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
        bedrooms: 4,
        bathrooms: 3,
        area: 320,
        badge: 'مميز'
    },
    {
        id: 5,
        title: 'شاليه على البحر',
        type: 'للإيجار',
        location: 'كورنيش جدة',
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80',
        bedrooms: 3,
        bathrooms: 2,
        area: 200,
        badge: 'جديد'
    },
    {
        id: 6,
        title: 'محل تجاري',
        type: 'للإيجار',
        location: 'شارع التحلية، الرياض',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
        bedrooms: null,
        bathrooms: 1,
        area: 120,
        badge: 'فرصة'
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProperties();
    setupEventListeners();
    initAnimations();
    setupConsultationModal();
});

// Setup Consultation Modal
function setupConsultationModal() {
    const bookBtn = document.getElementById('bookConsultationBtn');
    const modal = document.getElementById('consultationModal');
    const closeBtn = document.getElementById('closeModal');
    const overlay = document.getElementById('modalOverlay');
    const form = document.getElementById('consultationForm');
    
    // Open modal
    bookBtn.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Close modal
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };
    
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    
    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('تم إرسال طلبك بنجاح! سنتواصل معك قريباً 🎉', 'success');
        form.reset();
        closeModal();
    });
}

// Render Properties
function renderProperties() {
    const grid = document.getElementById('propertiesGrid');
    
    grid.innerHTML = properties.map(property => `
        <div class="property-card" data-id="${property.id}">
            <div class="property-image">
                <img src="${property.image}" alt="${property.title}" loading="lazy">
                ${property.badge ? `<span class="property-badge">${property.badge}</span>` : ''}
            </div>
            <div class="property-info">
                <div class="property-type">${property.type}</div>
                <h3 class="property-title">${property.title}</h3>
                <div class="property-location">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>${property.location}</span>
                </div>
                <div class="property-features">
                    ${property.bedrooms ? `
                        <div class="property-feature">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            </svg>
                            <span>${property.bedrooms} غرف</span>
                        </div>
                    ` : ''}
                    <div class="property-feature">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 11H3v10h6V11zM21 11h-6v10h6V11zM12 3v18"></path>
                        </svg>
                        <span>${property.bathrooms} حمام</span>
                    </div>
                    <div class="property-feature">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        </svg>
                        <span>${property.area} م²</span>
                    </div>
                </div>
                <div class="property-footer">
                    <button class="btn btn-primary" onclick="showPropertyDetails(${property.id})">
                        <span>التفاصيل</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Show Property Details
function showPropertyDetails(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    showNotification(`عرض تفاصيل: ${property.title}`, 'info');
}

// Event Listeners
function setupEventListeners() {
    // Smooth scroll for nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            if (target.startsWith('#')) {
                document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('شكراً لتواصلك معنا! سنرد عليك قريباً', 'success');
        contactForm.reset();
    });
    
    // Header scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        const header = document.querySelector('.header');
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 30px rgba(30, 58, 138, 0.2)';
        } else {
            header.style.boxShadow = '0 4px 30px rgba(30, 58, 138, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
}

// Notification System
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    
    const colors = {
        success: 'linear-gradient(135deg, #10b981, #059669)',
        error: 'linear-gradient(135deg, #ef4444, #dc2626)',
        info: 'linear-gradient(135deg, #1e3a8a, #3b82f6)'
    };
    
    const icons = {
        success: '✓',
        error: '✗',
        info: 'ℹ'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${colors[type]};
        color: white;
        padding: 1.2rem 2rem;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 3000;
        animation: slideIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        display: flex;
        align-items: center;
        gap: 1rem;
        font-weight: 600;
        min-width: 300px;
    `;
    
    notification.innerHTML = `
        <span style="font-size: 1.5rem; width: 30px; height: 30px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">${icons[type]}</span>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.4s ease';
        setTimeout(() => notification.remove(), 400);
    }, 3000);
}

// Animations
function initAnimations() {
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.service-card, .property-card, .feature-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
