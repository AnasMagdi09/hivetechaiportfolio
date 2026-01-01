// Restaurant Management System - Interactive Features

// Modal Functions
function openBookingModal() {
    document.getElementById('bookingModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
    document.getElementById('bookingModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('bookingModal');
    if (event.target == modal) {
        closeBookingModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeBookingModal();
    }
});

// Live Counter Animation
function animateLiveCounters() {
    const counters = document.querySelectorAll('.live-counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current).toLocaleString('ar-SA');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString('ar-SA');
            }
        };
        
        updateCounter();
    });
}

// Simulate Real-Time Updates
function simulateRealTimeUpdates() {
    setInterval(() => {
        const counters = document.querySelectorAll('.live-counter');
        counters.forEach(counter => {
            counter.classList.add('updating');
            setTimeout(() => {
                counter.classList.remove('updating');
            }, 500);
        });
    }, 30000); // Every 30 seconds
}

// Animate Progress Bars
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// Animate Bar Chart
function animateBarChart() {
    const bars = document.querySelectorAll('.bar-fill');
    bars.forEach((bar, index) => {
        const height = bar.style.height;
        bar.style.height = '0';
        setTimeout(() => {
            bar.style.height = height;
        }, 300 + (index * 200));
    });
}

// Add ripple effect to buttons
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple-effect');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Simulate new order notification
function simulateNewOrder() {
    setInterval(() => {
        const newOrderCards = document.querySelectorAll('.order-card.new');
        if (newOrderCards.length > 0) {
            const randomCard = newOrderCards[Math.floor(Math.random() * newOrderCards.length)];
            randomCard.style.animation = 'none';
            setTimeout(() => {
                randomCard.style.animation = 'slideInUp 0.6s ease-out, pulse 1s ease-in-out 3';
            }, 10);
            
            // Play notification sound effect (visual feedback)
            showNotification('🔔 طلب جديد وصل!');
        }
    }, 45000); // Every 45 seconds
}

// Animate order status changes
function animateStatusChange(orderCard, newStatus) {
    const statusBadge = orderCard.querySelector('.order-status');
    statusBadge.style.transform = 'scale(0)';
    
    setTimeout(() => {
        statusBadge.className = `order-status ${newStatus}`;
        statusBadge.style.transform = 'scale(1)';
        
        if (newStatus === 'ready') {
            statusBadge.textContent = 'جاهز';
            showNotification('✅ الطلب جاهز للتقديم!');
        } else if (newStatus === 'preparing') {
            statusBadge.textContent = 'قيد التحضير';
        }
    }, 300);
}

// Form Submission
document.addEventListener('DOMContentLoaded', function() {
    // Animate counters on load
    animateLiveCounters();
    
    // Start real-time simulation
    simulateRealTimeUpdates();
    
    // Animate progress bars
    animateProgressBars();
    
    // Animate bar chart
    setTimeout(animateBarChart, 500);
    
    // Start new order simulation
    simulateNewOrder();
    
    // Add ripple effect to all action buttons
    const actionButtons = document.querySelectorAll('.btn-action');
    actionButtons.forEach(button => {
        button.addEventListener('click', createRipple);
    });
    
    // Handle accept button clicks
    document.querySelectorAll('.btn-action.accept').forEach(btn => {
        btn.addEventListener('click', function() {
            const orderCard = this.closest('.order-card');
            orderCard.classList.remove('new');
            orderCard.classList.add('preparing');
            animateStatusChange(orderCard, 'preparing');
            
            // Hide action buttons and show progress
            const actions = orderCard.querySelector('.order-actions');
            actions.style.display = 'none';
            
            // Add progress bar
            const progressHTML = `
                <div class="order-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 0%"></div>
                    </div>
                    <span>0% مكتمل</span>
                </div>
            `;
            orderCard.querySelector('.order-details').insertAdjacentHTML('afterend', progressHTML);
            
            // Animate progress
            setTimeout(() => {
                const progressFill = orderCard.querySelector('.progress-fill');
                progressFill.style.width = '35%';
            }, 100);
            
            showNotification('✅ تم قبول الطلب وإرساله للمطبخ');
        });
    });
    
    // Handle reject button clicks
    document.querySelectorAll('.btn-action.reject').forEach(btn => {
        btn.addEventListener('click', function() {
            const orderCard = this.closest('.order-card');
            orderCard.style.animation = 'fadeOutScale 0.5s ease-out';
            
            setTimeout(() => {
                orderCard.remove();
                showNotification('❌ تم رفض الطلب');
            }, 500);
        });
    });
    
    // Handle deliver button clicks
    document.querySelectorAll('.btn-action.deliver').forEach(btn => {
        btn.addEventListener('click', function() {
            const orderCard = this.closest('.order-card');
            orderCard.style.animation = 'fadeOutScale 0.5s ease-out';
            
            setTimeout(() => {
                orderCard.remove();
                showNotification('✅ تم تقديم الطلب للعميل');
            }, 500);
        });
    });
    
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
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
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
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(card);
    });

    // Header Scroll Effect
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.4)';
            header.style.padding = '15px 0';
        } else {
            header.style.boxShadow = 'none';
            header.style.padding = '20px 0';
        }
        
        lastScroll = currentScroll;
    });

    // Feature Cards Hover Effect
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });

    // Parallax effect for shapes
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.shape, .cta-shape');
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.1;
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Add CSS for new animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
                box-shadow: 0 0 0 0 rgba(255, 107, 53, 0.7);
            }
            50% {
                transform: scale(1.02);
                box-shadow: 0 0 0 10px rgba(255, 107, 53, 0);
            }
        }
        
        @keyframes fadeOutScale {
            to {
                opacity: 0;
                transform: scale(0.8);
            }
        }
        
        .ripple-effect {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, #ff6b35, #f7931e);
            color: white;
            padding: 15px 25px;
            border-radius: 50px;
            box-shadow: 0 10px 30px rgba(255, 107, 53, 0.4);
            z-index: 3000;
            animation: slideInRight 0.5s ease, slideOutRight 0.5s ease 2.5s;
            font-weight: 600;
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
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
});

// Show notification function
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add stagger animation to feature cards
window.addEventListener('load', function() {
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});
