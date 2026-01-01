// Products Data
const products = [
    {
        id: 1,
        name: 'سيروم فيتامين C',
        desc: 'للبشرة المشرقة والنضرة',
        price: 299,
        category: 'skincare',
        badge: 'جديد',
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80',
        rating: 5
    },
    {
        id: 2,
        name: 'أحمر شفاه مات',
        desc: 'ثبات يدوم طوال اليوم',
        price: 149,
        category: 'makeup',
        badge: 'الأكثر مبيعاً',
        image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&q=80',
        rating: 5
    },
    {
        id: 3,
        name: 'شامبو بالكيراتين',
        desc: 'لشعر قوي ولامع',
        price: 179,
        category: 'haircare',
        badge: '',
        image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400&q=80',
        rating: 4
    },
    {
        id: 4,
        name: 'عطر فلورال',
        desc: 'رائحة منعشة تدوم طويلاً',
        price: 399,
        category: 'fragrance',
        badge: 'عرض',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&q=80',
        rating: 5
    },
    {
        id: 5,
        name: 'كريم الأساس',
        desc: 'تغطية كاملة وطبيعية',
        price: 249,
        category: 'makeup',
        badge: 'الأكثر مبيعاً',
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&q=80',
        rating: 5
    },
    {
        id: 6,
        name: 'ماسك الوجه',
        desc: 'ترطيب عميق للبشرة',
        price: 129,
        category: 'skincare',
        badge: 'جديد',
        image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&q=80',
        rating: 4
    },
    {
        id: 7,
        name: 'بلسم الشعر',
        desc: 'نعومة فائقة',
        price: 159,
        category: 'haircare',
        badge: '',
        image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&q=80',
        rating: 4
    },
    {
        id: 8,
        name: 'باليت ظلال العيون',
        desc: '12 لون متنوع',
        price: 279,
        category: 'makeup',
        badge: 'عرض',
        image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&q=80',
        rating: 5
    }
];

let cart = [];
let currentFilter = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupEventListeners();
    startCountdown();
});

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
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-desc">${product.desc}</p>
                <div class="product-footer">
                    <span class="product-price">${product.price} ر.س</span>
                    <div class="product-rating">
                        ${'⭐'.repeat(product.rating)}
                    </div>
                </div>
            </div>
            <div class="product-actions">
                <button class="product-action-btn add-to-cart" data-id="${product.id}">
                    أضف للسلة
                </button>
            </div>
        </div>
    `).join('');

    // Add to cart listeners
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            addToCart(id);
        });
    });
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

    updateCart();
    showNotification('تم إضافة المنتج للسلة');
}

// Update Cart
function updateCart() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart"><p>سلة التسوق فارغة</p></div>';
        cartTotal.textContent = '0 ر.س';
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `${total} ر.س`;

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item" style="padding: 1rem; border-bottom: 1px solid var(--secondary); display: flex; gap: 1rem; align-items: center;">
            <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
            <div style="flex: 1;">
                <h4 style="margin-bottom: 0.5rem; font-size: 0.95rem;">${item.name}</h4>
                <p style="color: var(--gray); font-size: 0.9rem;">${item.price} ر.س × ${item.quantity}</p>
            </div>
            <button onclick="removeFromCart(${item.id})" style="background: none; border: none; color: var(--gray); cursor: pointer; font-size: 1.5rem; padding: 0.5rem;">×</button>
        </div>
    `).join('');
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
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

    overlay.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                const categoryMap = {
                    'skincare': 'all',
                    'makeup': 'all',
                    'haircare': 'all',
                    'fragrance': 'all'
                };
                renderProducts('all');
            }, 500);
        });
    });

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        if (email) {
            showNotification('شكراً لاشتراكك في نشرتنا البريدية!');
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
}

// Countdown Timer
function startCountdown() {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 3);
    endDate.setHours(23, 59, 59);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance < 0) {
            document.getElementById('countdown').innerHTML = '<p>انتهى العرض!</p>';
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

// Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--primary);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);
