// Products Data
const products = [
    {
        id: 1,
        name: 'iPhone 15 Pro Max',
        desc: 'أحدث هاتف من Apple',
        price: 5499,
        category: 'smartphones',
        badge: 'جديد',
        image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80',
        specs: ['256GB', '5G', 'A17 Pro'],
        rating: 5
    },
    {
        id: 2,
        name: 'MacBook Pro 16"',
        desc: 'قوة أداء استثنائية',
        price: 12999,
        category: 'laptops',
        badge: 'الأكثر مبيعاً',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80',
        specs: ['M3 Max', '32GB RAM', '1TB SSD'],
        rating: 5
    },
    {
        id: 3,
        name: 'Samsung Galaxy S24 Ultra',
        desc: 'تصوير احترافي',
        price: 4799,
        category: 'smartphones',
        badge: 'الأكثر مبيعاً',
        image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&q=80',
        specs: ['512GB', '200MP', 'S Pen'],
        rating: 5
    },
    {
        id: 4,
        name: 'iPad Pro 12.9"',
        desc: 'شاشة Liquid Retina XDR',
        price: 4299,
        category: 'tablets',
        badge: 'عرض',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80',
        specs: ['M2 Chip', '256GB', '5G'],
        rating: 5
    },
    {
        id: 5,
        name: 'Dell XPS 15',
        desc: 'لابتوب للمحترفين',
        price: 8999,
        category: 'laptops',
        badge: 'جديد',
        image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&q=80',
        specs: ['i9-13900H', '32GB', 'RTX 4060'],
        rating: 4
    },
    {
        id: 6,
        name: 'AirPods Pro 2',
        desc: 'إلغاء ضوضاء متقدم',
        price: 999,
        category: 'accessories',
        badge: 'الأكثر مبيعاً',
        image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&q=80',
        specs: ['USB-C', 'H2 Chip', 'MagSafe'],
        rating: 5
    },
    {
        id: 7,
        name: 'Sony WH-1000XM5',
        desc: 'سماعات لاسلكية فاخرة',
        price: 1499,
        category: 'accessories',
        badge: 'عرض',
        image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&q=80',
        specs: ['30h Battery', 'ANC', 'LDAC'],
        rating: 5
    },
    {
        id: 8,
        name: 'Samsung Galaxy Tab S9',
        desc: 'تابلت أندرويد متطور',
        price: 3299,
        category: 'tablets',
        badge: 'جديد',
        image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&q=80',
        specs: ['11"', 'Snapdragon 8', 'S Pen'],
        rating: 4
    }
];

let cart = [];
let compareList = [];
let currentFilter = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderDeals();
    setupEventListeners();
    startCountdown();
    initAnimations();
    loadFromStorage();
});

// Load from localStorage
function loadFromStorage() {
    const savedCompare = localStorage.getItem('compareList');
    if (savedCompare) {
        compareList = JSON.parse(savedCompare);
        updateCompare();
    }
    
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

// Render Products
function renderProducts(filter = 'all') {
    const grid = document.getElementById('productsGrid');
    let filteredProducts = products;
    
    if (filter !== 'all') {
        filteredProducts = products.filter(p => {
            if (filter === 'new') return p.badge === 'جديد';
            if (filter === 'bestseller') return p.badge === 'الأكثر مبيعاً';
            if (filter === 'sale') return p.badge === 'عرض';
            return true;
        });
    }
    
    grid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-id="${product.id}">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-actions">
                    <button class="product-action-btn add-to-cart" data-id="${product.id}">
                        أضف للسلة
                    </button>
                    <button class="product-action-btn compare-btn add-to-compare" data-id="${product.id}">
                        قارن
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-desc">${product.desc}</p>
                <div class="product-specs">
                    ${product.specs.map(spec => `<span class="spec-tag">${spec}</span>`).join('')}
                </div>
                <div class="product-footer">
                    <span class="product-price">${product.price} ر.س</span>
                    <div class="product-rating">
                        ${'⭐'.repeat(product.rating)}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add event listeners
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            addToCart(id);
        });
    });
    
    document.querySelectorAll('.add-to-compare').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            addToCompare(id);
        });
    });
}

// Render Deals
function renderDeals() {
    const dealsGrid = document.getElementById('dealsGrid');
    if (!dealsGrid) return;
    
    const deals = products.filter(p => p.badge === 'عرض');
    
    dealsGrid.innerHTML = deals.map(product => `
        <div class="deal-card">
            <div class="deal-badge">خصم ${Math.round((1 - product.price / (product.price * 1.3)) * 100)}%</div>
            <img src="${product.image}" alt="${product.name}" class="deal-image">
            <div class="deal-info">
                <h3 class="deal-name">${product.name}</h3>
                <div class="deal-prices">
                    <span class="deal-old-price">${Math.round(product.price * 1.3)} ر.س</span>
                    <span class="deal-new-price">${product.price} ر.س</span>
                </div>
                <button class="btn btn-primary btn-block" onclick="addToCart(${product.id})">
                    أضف للسلة
                </button>
            </div>
        </div>
    `).join('');
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    showNotification('تم إضافة المنتج للسلة', 'success');
}

// Add to Compare
function addToCompare(productId) {
    const product = products.find(p => p.id === productId);
    
    if (compareList.length >= 4) {
        showNotification('يمكنك مقارنة 4 منتجات كحد أقصى', 'error');
        return;
    }
    
    if (compareList.find(item => item.id === productId)) {
        showNotification('المنتج موجود بالفعل في المقارنة', 'error');
        return;
    }
    
    compareList.push(product);
    localStorage.setItem('compareList', JSON.stringify(compareList));
    updateCompare();
    showNotification('تم إضافة المنتج للمقارنة', 'success');
}

// Update Cart
function updateCart() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <p>سلة التسوق فارغة</p>
            </div>
        `;
        cartTotal.textContent = '0 ر.س';
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `${total} ر.س`;
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item" style="padding: 1rem; border-bottom: 1px solid rgba(37, 99, 235, 0.1); display: flex; gap: 1rem; align-items: center;">
            <img src="${item.image}" alt="${item.name}" style="width: 70px; height: 70px; object-fit: cover; border-radius: 10px;">
            <div style="flex: 1;">
                <h4 style="margin-bottom: 0.5rem; font-size: 1rem; color: var(--light);">${item.name}</h4>
                <p style="color: var(--gray); font-size: 0.9rem;">${item.price} ر.س × ${item.quantity}</p>
            </div>
            <button onclick="removeFromCart(${item.id})" style="background: rgba(239, 68, 68, 0.1); border: 1px solid #ef4444; color: #ef4444; cursor: pointer; font-size: 1.2rem; padding: 0.5rem; border-radius: 8px; width: 35px; height: 35px; display: flex; align-items: center; justify-content: center;">×</button>
        </div>
    `).join('');
}

// Update Compare
function updateCompare() {
    const compareCount = document.querySelector('.compare-count');
    compareCount.textContent = compareList.length;
    
    const compareItems = document.getElementById('compareItems');
    
    if (compareList.length === 0) {
        compareItems.innerHTML = `
            <div class="empty-compare">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                <p>لم تضف منتجات للمقارنة</p>
            </div>
        `;
        return;
    }
    
    compareItems.innerHTML = compareList.map(item => `
        <div class="compare-item" style="padding: 1rem; border-bottom: 1px solid rgba(37, 99, 235, 0.1); display: flex; gap: 1rem; align-items: center;">
            <img src="${item.image}" alt="${item.name}" style="width: 70px; height: 70px; object-fit: cover; border-radius: 10px;">
            <div style="flex: 1;">
                <h4 style="margin-bottom: 0.5rem; font-size: 1rem; color: var(--light);">${item.name}</h4>
                <p style="color: var(--primary); font-size: 1.1rem; font-weight: 700;">${item.price} ر.س</p>
            </div>
            <button onclick="removeFromCompare(${item.id})" style="background: rgba(239, 68, 68, 0.1); border: 1px solid #ef4444; color: #ef4444; cursor: pointer; font-size: 1.2rem; padding: 0.5rem; border-radius: 8px; width: 35px; height: 35px; display: flex; align-items: center; justify-content: center;">×</button>
        </div>
    `).join('');
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    showNotification('تم إزالة المنتج من السلة', 'info');
}

// Remove from Compare
function removeFromCompare(productId) {
    compareList = compareList.filter(item => item.id !== productId);
    localStorage.setItem('compareList', JSON.stringify(compareList));
    updateCompare();
    showNotification('تم إزالة المنتج من المقارنة', 'info');
}

// Event Listeners
function setupEventListeners() {
    // Filter tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const filter = tab.dataset.filter;
            renderProducts(filter);
        });
    });
    
    // Cart toggle
    const cartBtn = document.querySelector('.cart-btn');
    const cartSidebar = document.getElementById('cartSidebar');
    const closeCart = document.getElementById('closeCart');
    const overlay = document.getElementById('overlay');
    
    cartBtn.addEventListener('click', () => {
        cartSidebar.classList.add('active');
        overlay.classList.add('active');
    });
    
    closeCart.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
    
    // Compare toggle
    const compareBtn = document.querySelector('.compare-btn');
    const compareSidebar = document.getElementById('compareSidebar');
    const closeCompare = document.getElementById('closeCompare');
    
    compareBtn.addEventListener('click', () => {
        compareSidebar.classList.add('active');
        overlay.classList.add('active');
    });
    
    closeCompare.addEventListener('click', () => {
        compareSidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
    
    overlay.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        compareSidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
    
    // Category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        if (email) {
            showNotification('شكراً لاشتراكك في نشرتنا البريدية!', 'success');
            newsletterForm.reset();
        }
    });
    
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
    
    // Start Compare
    const startCompareBtn = document.getElementById('startCompare');
    startCompareBtn.addEventListener('click', () => {
        if (compareList.length < 2) {
            showNotification('يجب إضافة منتجين على الأقل للمقارنة', 'error');
            return;
        }
        localStorage.setItem('compareList', JSON.stringify(compareList));
        window.location.href = 'compare.html';
    });
}

// Countdown Timer
function startCountdown() {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 5);
    endDate.setHours(23, 59, 59);
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endDate - now;
        
        if (distance < 0) {
            document.getElementById('countdown').innerHTML = '<p style="font-size: 2rem;">انتهى العرض!</p>';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Notification System
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    
    const colors = {
        success: 'linear-gradient(135deg, #10b981, #059669)',
        error: 'linear-gradient(135deg, #ef4444, #dc2626)',
        info: 'linear-gradient(135deg, #3b82f6, #2563eb)'
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
    document.querySelectorAll('.category-card, .product-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
    
    // Header scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        const header = document.querySelector('.header');
        
        if (currentScroll > 100) {
            header.style.background = 'rgba(10, 15, 30, 0.98)';
            header.style.boxShadow = '0 4px 30px rgba(37, 99, 235, 0.2)';
        } else {
            header.style.background = 'rgba(10, 15, 30, 0.95)';
            header.style.boxShadow = '0 4px 30px rgba(37, 99, 235, 0.1)';
        }
        
        lastScroll = currentScroll;
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
