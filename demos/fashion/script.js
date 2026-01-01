// Fashion Store - Interactive JavaScript

// Products Data
const products = [
    {
        id: 1,
        name: 'فستان سهرة أنيق',
        desc: 'فستان طويل بتصميم عصري',
        price: 899,
        category: 'women',
        badge: 'جديد',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80',
        colors: ['أسود', 'أحمر', 'أزرق'],
        colorCodes: ['#000', '#ef4444', '#3b82f6'],
        sizes: ['S', 'M', 'L', 'XL'],
        rating: 5
    },
    {
        id: 2,
        name: 'بلوزة حريرية فاخرة',
        desc: 'بلوزة ناعمة بتصميم راقي',
        price: 349,
        category: 'women',
        badge: 'الأكثر مبيعاً',
        image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80',
        colors: ['أبيض', 'وردي', 'بيج'],
        colorCodes: ['#fff', '#ff6b9d', '#d4a574'],
        sizes: ['XS', 'S', 'M', 'L'],
        rating: 5
    },
    {
        id: 3,
        name: 'جاكيت جلد عصري',
        desc: 'جاكيت جلد طبيعي بتصميم كلاسيكي',
        price: 1299,
        category: 'women',
        badge: 'تخفيضات',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80',
        colors: ['أسود', 'بني'],
        colorCodes: ['#000', '#8b4513'],
        sizes: ['S', 'M', 'L'],
        rating: 5
    },
    {
        id: 4,
        name: 'بنطلون جينز كلاسيكي',
        desc: 'جينز عالي الجودة بقصة مريحة',
        price: 449,
        category: 'women',
        badge: 'الأكثر مبيعاً',
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80',
        colors: ['أزرق', 'أسود'],
        colorCodes: ['#3b82f6', '#000'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        rating: 4
    },
    {
        id: 5,
        name: 'قميص رجالي أنيق',
        desc: 'قميص قطني بتصميم عصري',
        price: 299,
        category: 'men',
        badge: 'جديد',
        image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80',
        colors: ['أبيض', 'أزرق', 'أسود'],
        colorCodes: ['#fff', '#3b82f6', '#000'],
        sizes: ['M', 'L', 'XL', 'XXL'],
        rating: 5
    },
    {
        id: 6,
        name: 'بدلة رجالية فاخرة',
        desc: 'بدلة كاملة بتصميم احترافي',
        price: 1899,
        category: 'men',
        badge: 'تخفيضات',
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80',
        colors: ['أسود', 'رمادي', 'أزرق'],
        colorCodes: ['#000', '#6b7280', '#1e40af'],
        sizes: ['M', 'L', 'XL'],
        rating: 5
    },
    {
        id: 7,
        name: 'فستان أطفال مزخرف',
        desc: 'فستان قطني بطبعات جميلة',
        price: 199,
        category: 'kids',
        badge: 'جديد',
        image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&q=80',
        colors: ['وردي', 'أزرق', 'أصفر'],
        colorCodes: ['#ff6b9d', '#3b82f6', '#f8b500'],
        sizes: ['2-3', '4-5', '6-7', '8-9'],
        rating: 5
    },
    {
        id: 8,
        name: 'حقيبة يد فاخرة',
        desc: 'حقيبة جلد طبيعي بتصميم عصري',
        price: 799,
        category: 'accessories',
        badge: 'الأكثر مبيعاً',
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80',
        colors: ['أسود', 'بني', 'بيج'],
        colorCodes: ['#000', '#8b4513', '#d4a574'],
        sizes: ['واحد'],
        rating: 5
    },
    {
        id: 9,
        name: 'حذاء رياضي عصري',
        desc: 'حذاء مريح للاستخدام اليومي',
        price: 549,
        category: 'accessories',
        badge: 'تخفيضات',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',
        colors: ['أبيض', 'أسود', 'أحمر'],
        colorCodes: ['#fff', '#000', '#ef4444'],
        sizes: ['38', '39', '40', '41', '42', '43'],
        rating: 4
    },
    {
        id: 10,
        name: 'تنورة كلاسيكية',
        desc: 'تنورة أنيقة بقصة عصرية',
        price: 329,
        category: 'women',
        badge: 'جديد',
        image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&q=80',
        colors: ['أسود', 'بيج', 'أحمر'],
        colorCodes: ['#000', '#d4a574', '#ef4444'],
        sizes: ['XS', 'S', 'M', 'L'],
        rating: 5
    }
];

let cart = [];
let wishlist = [];
let currentFilter = 'all';
let selectedSizes = [];
let selectedColors = [];
let maxPrice = 2000;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupEventListeners();
    startCountdown();
    initAnimations();
    loadFromStorage();
});

// Load from localStorage
function loadFromStorage() {
    const savedCart = localStorage.getItem('fashionCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
    
    const savedWishlist = localStorage.getItem('fashionWishlist');
    if (savedWishlist) {
        wishlist = JSON.parse(savedWishlist);
        updateWishlist();
    }
}

// Render Products
function renderProducts(filter = 'all') {
    const grid = document.getElementById('productsGrid');
    let filteredProducts = products;
    
    // Filter by badge
    if (filter !== 'all') {
        filteredProducts = products.filter(p => {
            if (filter === 'new') return p.badge === 'جديد';
            if (filter === 'bestseller') return p.badge === 'الأكثر مبيعاً';
            if (filter === 'sale') return p.badge === 'تخفيضات';
            return true;
        });
    }
    
    // Filter by size
    if (selectedSizes.length > 0) {
        filteredProducts = filteredProducts.filter(p => 
            p.sizes.some(size => selectedSizes.includes(size))
        );
    }
    
    // Filter by color
    if (selectedColors.length > 0) {
        filteredProducts = filteredProducts.filter(p => 
            p.colors.some(color => selectedColors.includes(color))
        );
    }
    
    // Filter by price
    filteredProducts = filteredProducts.filter(p => p.price <= maxPrice);
    
    grid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-id="${product.id}">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <button class="product-wishlist ${wishlist.find(w => w.id === product.id) ? 'active' : ''}" data-id="${product.id}">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="${wishlist.find(w => w.id === product.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </button>
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-actions">
                    <button class="product-action-btn add-to-cart" data-id="${product.id}">
                        أضف للسلة
                    </button>
                    <button class="product-action-btn quick-view" data-id="${product.id}">
                        عرض سريع
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-desc">${product.desc}</p>
                <div class="product-colors">
                    ${product.colorCodes.map((color, i) => `
                        <span class="color-dot" style="background: ${color}; ${color === '#fff' ? 'border: 1px solid #ddd;' : ''}" title="${product.colors[i]}"></span>
                    `).join('')}
                </div>
                <div class="product-sizes">
                    ${product.sizes.slice(0, 4).map(size => `<span class="size-tag">${size}</span>`).join('')}
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
    attachProductListeners();
}

function attachProductListeners() {
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            addToCart(id);
        });
    });
    
    document.querySelectorAll('.product-wishlist').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            toggleWishlist(id);
        });
    });
    
    document.querySelectorAll('.quick-view').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            showQuickView(id);
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
    
    localStorage.setItem('fashionCart', JSON.stringify(cart));
    updateCart();
    showNotification('تم إضافة المنتج للسلة ✓', 'success');
}

// Toggle Wishlist
function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    const existingIndex = wishlist.findIndex(item => item.id === productId);
    
    if (existingIndex > -1) {
        wishlist.splice(existingIndex, 1);
        showNotification('تم إزالة المنتج من المفضلة', 'info');
    } else {
        wishlist.push(product);
        showNotification('تم إضافة المنتج للمفضلة ♥', 'success');
    }
    
    localStorage.setItem('fashionWishlist', JSON.stringify(wishlist));
    updateWishlist();
    renderProducts(currentFilter);
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
        <div class="cart-item" style="padding: 1rem; border-bottom: 1px solid var(--cream); display: flex; gap: 1rem; align-items: center;">
            <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 15px;">
            <div style="flex: 1;">
                <h4 style="margin-bottom: 0.5rem; font-size: 1rem; color: var(--dark);">${item.name}</h4>
                <p style="color: var(--gray); font-size: 0.9rem; margin-bottom: 0.5rem;">${item.price} ر.س × ${item.quantity}</p>
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                    <button onclick="decreaseQuantity(${item.id})" style="width: 30px; height: 30px; border: 2px solid var(--primary); background: transparent; color: var(--primary); border-radius: 8px; cursor: pointer; font-weight: 700;">-</button>
                    <span style="font-weight: 700; min-width: 30px; text-align: center;">${item.quantity}</span>
                    <button onclick="increaseQuantity(${item.id})" style="width: 30px; height: 30px; border: none; background: var(--gradient); color: white; border-radius: 8px; cursor: pointer; font-weight: 700;">+</button>
                </div>
            </div>
            <button onclick="removeFromCart(${item.id})" style="background: rgba(239, 68, 68, 0.1); border: 1px solid #ef4444; color: #ef4444; cursor: pointer; font-size: 1.2rem; padding: 0.5rem; border-radius: 8px; width: 35px; height: 35px; display: flex; align-items: center; justify-content: center;">×</button>
        </div>
    `).join('');
}

// Update Wishlist
function updateWishlist() {
    const wishlistCount = document.querySelector('.wishlist-count');
    wishlistCount.textContent = wishlist.length;
    
    const wishlistItems = document.getElementById('wishlistItems');
    
    if (wishlist.length === 0) {
        wishlistItems.innerHTML = `
            <div class="empty-wishlist">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <p>لا توجد منتجات في المفضلة</p>
            </div>
        `;
        return;
    }
    
    wishlistItems.innerHTML = wishlist.map(item => `
        <div class="wishlist-item" style="padding: 1rem; border-bottom: 1px solid var(--cream); display: flex; gap: 1rem; align-items: center;">
            <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 15px;">
            <div style="flex: 1;">
                <h4 style="margin-bottom: 0.5rem; font-size: 1rem; color: var(--dark);">${item.name}</h4>
                <p style="color: var(--primary); font-size: 1.1rem; font-weight: 700;">${item.price} ر.س</p>
            </div>
            <button onclick="addToCart(${item.id})" style="background: var(--gradient); border: none; color: white; cursor: pointer; padding: 0.6rem 1.2rem; border-radius: 10px; font-weight: 700; font-size: 0.9rem;">أضف للسلة</button>
            <button onclick="toggleWishlist(${item.id})" style="background: rgba(239, 68, 68, 0.1); border: 1px solid #ef4444; color: #ef4444; cursor: pointer; font-size: 1.2rem; padding: 0.5rem; border-radius: 8px; width: 35px; height: 35px; display: flex; align-items: center; justify-content: center;">×</button>
        </div>
    `).join('');
}

// Cart quantity functions
function increaseQuantity(productId) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity++;
        localStorage.setItem('fashionCart', JSON.stringify(cart));
        updateCart();
    }
}

function decreaseQuantity(productId) {
    const item = cart.find(i => i.id === productId);
    if (item && item.quantity > 1) {
        item.quantity--;
        localStorage.setItem('fashionCart', JSON.stringify(cart));
        updateCart();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('fashionCart', JSON.stringify(cart));
    updateCart();
    showNotification('تم إزالة المنتج من السلة', 'info');
}

// Quick View Modal
function showQuickView(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('quickViewModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem;">
            <div>
                <img src="${product.image}" alt="${product.name}" style="width: 100%; border-radius: 20px; object-fit: cover;">
            </div>
            <div>
                ${product.badge ? `<span style="display: inline-block; background: var(--gradient); color: white; padding: 0.5rem 1.2rem; border-radius: 50px; font-size: 0.85rem; font-weight: 700; margin-bottom: 1rem;">${product.badge}</span>` : ''}
                <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 700; color: var(--dark); margin-bottom: 1rem;">${product.name}</h2>
                <p style="color: var(--gray); font-size: 1.1rem; margin-bottom: 1.5rem;">${product.desc}</p>
                <div style="font-size: 2.5rem; font-weight: 700; background: var(--gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 2rem;">${product.price} ر.س</div>
                
                <div style="margin-bottom: 2rem;">
                    <h4 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 1rem;">الألوان المتاحة:</h4>
                    <div style="display: flex; gap: 1rem;">
                        ${product.colorCodes.map((color, i) => `
                            <button style="width: 40px; height: 40px; border: 3px solid transparent; border-radius: 50%; background: ${color}; cursor: pointer; ${color === '#fff' ? 'border: 1px solid #ddd;' : ''}" title="${product.colors[i]}"></button>
                        `).join('')}
                    </div>
                </div>
                
                <div style="margin-bottom: 2rem;">
                    <h4 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 1rem;">المقاسات المتاحة:</h4>
                    <div style="display: flex; gap: 0.8rem; flex-wrap: wrap;">
                        ${product.sizes.map(size => `
                            <button style="padding: 0.8rem 1.5rem; border: 2px solid var(--primary); background: transparent; color: var(--primary); border-radius: 12px; font-weight: 700; cursor: pointer;">${size}</button>
                        `).join('')}
                    </div>
                </div>
                
                <div style="display: flex; gap: 1rem;">
                    <button onclick="addToCart(${product.id}); closeQuickView();" style="flex: 1; padding: 1.2rem; background: var(--gradient); color: white; border: none; border-radius: 50px; font-family: 'Cairo', sans-serif; font-size: 1.1rem; font-weight: 700; cursor: pointer;">
                        أضف للسلة
                    </button>
                    <button onclick="toggleWishlist(${product.id}); closeQuickView();" style="width: 60px; height: 60px; background: ${wishlist.find(w => w.id === product.id) ? 'var(--gradient)' : 'var(--gradient-soft)'}; color: ${wishlist.find(w => w.id === product.id) ? 'white' : 'var(--primary)'}; border: none; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="${wishlist.find(w => w.id === product.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeQuickView() {
    document.getElementById('quickViewModal').classList.remove('active');
}

// Event Listeners
function setupEventListeners() {
    // Filter tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentFilter = tab.dataset.filter;
            renderProducts(currentFilter);
        });
    });
    
    // Advanced filters toggle
    const filterBtn = document.getElementById('filterBtn');
    const filtersPanel = document.getElementById('filtersPanel');
    
    filterBtn.addEventListener('click', () => {
        filtersPanel.classList.toggle('active');
    });
    
    // Size filters
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            const size = btn.dataset.size;
            if (selectedSizes.includes(size)) {
                selectedSizes = selectedSizes.filter(s => s !== size);
            } else {
                selectedSizes.push(size);
            }
            renderProducts(currentFilter);
        });
    });
    
    // Color filters
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            const color = btn.dataset.color;
            if (selectedColors.includes(color)) {
                selectedColors = selectedColors.filter(c => c !== color);
            } else {
                selectedColors.push(color);
            }
            renderProducts(currentFilter);
        });
    });
    
    // Price range
    const priceRange = document.getElementById('priceRange');
    const maxPriceLabel = document.getElementById('maxPrice');
    
    priceRange.addEventListener('input', (e) => {
        maxPrice = parseInt(e.target.value);
        maxPriceLabel.textContent = `${maxPrice} ر.س`;
        renderProducts(currentFilter);
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
    
    // Wishlist toggle
    const wishlistBtn = document.querySelector('.wishlist-btn');
    const wishlistSidebar = document.getElementById('wishlistSidebar');
    const closeWishlist = document.getElementById('closeWishlist');
    
    wishlistBtn.addEventListener('click', () => {
        wishlistSidebar.classList.add('active');
        overlay.classList.add('active');
    });
    
    closeWishlist.addEventListener('click', () => {
        wishlistSidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
    
    // Modal close
    const closeModal = document.getElementById('closeModal');
    const modalOverlay = document.getElementById('modalOverlay');
    
    closeModal.addEventListener('click', closeQuickView);
    modalOverlay.addEventListener('click', closeQuickView);
    
    overlay.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        wishlistSidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
    
    // Collection cards
    document.querySelectorAll('.collection-card').forEach(card => {
        card.addEventListener('click', () => {
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        if (email) {
            showNotification('شكراً لاشتراكك في نشرتنا البريدية! 💌', 'success');
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
    endDate.setDate(endDate.getDate() + 7);
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
        info: 'linear-gradient(135deg, #ff6b9d, #c44569)'
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
    document.querySelectorAll('.collection-card, .product-card, .trend-card').forEach(el => {
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
            header.style.boxShadow = '0 4px 30px rgba(255, 107, 157, 0.2)';
        } else {
            header.style.boxShadow = '0 4px 30px rgba(255, 107, 157, 0.1)';
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
