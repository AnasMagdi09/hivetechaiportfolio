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

// Special Offers Data
const specialOffers = [
    {
        id: 101,
        name: 'طقم بدلة رجالية فاخرة',
        desc: 'بدلة كاملة من أجود الأقمشة الإيطالية',
        category: 'رجالي',
        oldPrice: 2499,
        newPrice: 1499,
        discount: 40,
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80',
        endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) // 2 days
    },
    {
        id: 102,
        name: 'فستان سهرة راقي',
        desc: 'فستان طويل بتصميم عصري وأنيق',
        category: 'نسائي',
        oldPrice: 1899,
        newPrice: 949,
        discount: 50,
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80',
        endTime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000) // 1 day
    },
    {
        id: 103,
        name: 'حقيبة يد جلدية فاخرة',
        desc: 'حقيبة من الجلد الطبيعي 100%',
        category: 'إكسسوارات',
        oldPrice: 1299,
        newPrice: 779,
        discount: 40,
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80',
        endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) // 3 days
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
    renderOffers();
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

// Render Special Offers
function renderOffers() {
    const grid = document.getElementById('offersGrid');
    if (!grid) return;
    
    grid.innerHTML = specialOffers.map(offer => {
        const savings = offer.oldPrice - offer.newPrice;
        return `
            <div class="offer-card" data-id="${offer.id}">
                <span class="offer-discount">-${offer.discount}%</span>
                <div class="offer-image">
                    <img src="${offer.image}" alt="${offer.name}" loading="lazy">
                    <div class="offer-timer" data-end="${offer.endTime.getTime()}">
                        <div class="timer-item">
                            <span class="timer-value days">00</span>
                            <span class="timer-label">يوم</span>
                        </div>
                        <div class="timer-item">
                            <span class="timer-value hours">00</span>
                            <span class="timer-label">ساعة</span>
                        </div>
                        <div class="timer-item">
                            <span class="timer-value minutes">00</span>
                            <span class="timer-label">دقيقة</span>
                        </div>
                    </div>
                </div>
                <div class="offer-info">
                    <span class="offer-category">${offer.category}</span>
                    <h3 class="offer-name">${offer.name}</h3>
                    <p class="offer-desc">${offer.desc}</p>
                    <div class="offer-prices">
                        <span class="offer-old-price">${offer.oldPrice} ر.س</span>
                        <span class="offer-new-price">${offer.newPrice} ر.س</span>
                        <span class="offer-savings">وفر ${savings} ر.س</span>
                    </div>
                    <div class="offer-actions">
                        <button class="offer-add-btn" onclick="addOfferToCart(${offer.id})">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                            <span>أضف للسلة</span>
                        </button>
                        <button class="offer-wishlist-btn ${wishlist.find(w => w.id === offer.id) ? 'active' : ''}" onclick="toggleOfferWishlist(${offer.id})">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="${wishlist.find(w => w.id === offer.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // Start timers
    updateOfferTimers();
    setInterval(updateOfferTimers, 1000);
}

// Update Offer Timers
function updateOfferTimers() {
    document.querySelectorAll('.offer-timer').forEach(timer => {
        const endTime = parseInt(timer.dataset.end);
        const now = new Date().getTime();
        const distance = endTime - now;
        
        if (distance < 0) {
            timer.innerHTML = '<span style="color: white; font-weight: 700;">انتهى العرض</span>';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        
        timer.querySelector('.days').textContent = String(days).padStart(2, '0');
        timer.querySelector('.hours').textContent = String(hours).padStart(2, '0');
        timer.querySelector('.minutes').textContent = String(minutes).padStart(2, '0');
    });
}

// Add Offer to Cart
function addOfferToCart(offerId) {
    const offer = specialOffers.find(o => o.id === offerId);
    if (!offer) return;
    
    const cartItem = {
        id: offer.id,
        name: offer.name,
        price: offer.newPrice,
        image: offer.image,
        quantity: 1
    };
    
    const existingItem = cart.find(item => item.id === offerId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push(cartItem);
    }
    
    localStorage.setItem('fashionCart', JSON.stringify(cart));
    updateCart();
    showNotification('تم إضافة العرض للسلة ✓', 'success');
}

// Toggle Offer Wishlist
function toggleOfferWishlist(offerId) {
    const offer = specialOffers.find(o => o.id === offerId);
    if (!offer) return;
    
    const existingIndex = wishlist.findIndex(item => item.id === offerId);
    
    if (existingIndex > -1) {
        wishlist.splice(existingIndex, 1);
        showNotification('تم إزالة العرض من المفضلة', 'info');
    } else {
        wishlist.push({
            id: offer.id,
            name: offer.name,
            price: offer.newPrice,
            image: offer.image
        });
        showNotification('تم إضافة العرض للمفضلة ♥', 'success');
    }
    
    localStorage.setItem('fashionWishlist', JSON.stringify(wishlist));
    updateWishlist();
    renderOffers();
}

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
                ${item.selectedColor && item.selectedSize ? `<p style="color: var(--gray); font-size: 0.85rem; margin-bottom: 0.3rem;">اللون: ${item.selectedColor} | المقاس: ${item.selectedSize}</p>` : ''}
                <p style="color: var(--gray); font-size: 0.9rem; margin-bottom: 0.5rem;">${item.price} ر.س × ${item.quantity}</p>
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                    <button onclick="decreaseQuantity(${item.id}, '${item.selectedColor}', '${item.selectedSize}')" style="width: 30px; height: 30px; border: 2px solid var(--primary); background: transparent; color: var(--primary); border-radius: 8px; cursor: pointer; font-weight: 700;">-</button>
                    <span style="font-weight: 700; min-width: 30px; text-align: center;">${item.quantity}</span>
                    <button onclick="increaseQuantity(${item.id}, '${item.selectedColor}', '${item.selectedSize}')" style="width: 30px; height: 30px; border: none; background: var(--gradient); color: white; border-radius: 8px; cursor: pointer; font-weight: 700;">+</button>
                </div>
            </div>
            <button onclick="removeFromCart(${item.id}, '${item.selectedColor}', '${item.selectedSize}')" style="background: rgba(239, 68, 68, 0.1); border: 1px solid #ef4444; color: #ef4444; cursor: pointer; font-size: 1.2rem; padding: 0.5rem; border-radius: 8px; width: 35px; height: 35px; display: flex; align-items: center; justify-content: center;">×</button>
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
function increaseQuantity(productId, color, size) {
    const item = cart.find(i => i.id === productId && i.selectedColor === color && i.selectedSize === size);
    if (item) {
        item.quantity++;
        localStorage.setItem('fashionCart', JSON.stringify(cart));
        updateCart();
    }
}

function decreaseQuantity(productId, color, size) {
    const item = cart.find(i => i.id === productId && i.selectedColor === color && i.selectedSize === size);
    if (item && item.quantity > 1) {
        item.quantity--;
        localStorage.setItem('fashionCart', JSON.stringify(cart));
        updateCart();
    }
}

function removeFromCart(productId, color, size) {
    cart = cart.filter(item => !(item.id === productId && item.selectedColor === color && item.selectedSize === size));
    localStorage.setItem('fashionCart', JSON.stringify(cart));
    updateCart();
    showNotification('تم إزالة المنتج من السلة', 'info');
}

// Quick View Modal
function showQuickView(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('quickViewModal');
    const modalBody = document.getElementById('modalBody');
    
    // Initialize selected options
    let selectedColor = product.colors[0];
    let selectedSize = product.sizes[0];
    
    modalBody.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem;">
            <div>
                <img src="${product.image}" alt="${product.name}" style="width: 100%; border-radius: 20px; object-fit: cover;">
            </div>
            <div>
                ${product.badge ? `<span style="display: inline-block; background: var(--gradient); color: white; padding: 0.5rem 1.2rem; border-radius: 50px; font-size: 0.85rem; font-weight: 700; margin-bottom: 1rem;">${product.badge}</span>` : ''}
                <h2 style="font-family: 'Cairo', sans-serif; font-size: 2.5rem; font-weight: 700; color: var(--dark); margin-bottom: 1rem;">${product.name}</h2>
                <p style="color: var(--gray); font-size: 1.1rem; margin-bottom: 1.5rem;">${product.desc}</p>
                <div style="font-size: 2.5rem; font-weight: 700; background: var(--gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 2rem;">${product.price} ر.س</div>
                
                <div style="margin-bottom: 2rem;">
                    <h4 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 1rem;">الألوان المتاحة:</h4>
                    <div style="display: flex; gap: 1rem;" id="colorOptions">
                        ${product.colorCodes.map((color, i) => `
                            <button class="color-option ${i === 0 ? 'selected' : ''}" data-color="${product.colors[i]}" style="width: 45px; height: 45px; border: 3px solid ${i === 0 ? 'var(--primary)' : 'transparent'}; border-radius: 50%; background: ${color}; cursor: pointer; transition: all 0.3s ease; ${color === '#fff' ? 'box-shadow: inset 0 0 0 1px #ddd;' : ''}" title="${product.colors[i]}"></button>
                        `).join('')}
                    </div>
                </div>
                
                <div style="margin-bottom: 2rem;">
                    <h4 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 1rem;">المقاسات المتاحة:</h4>
                    <div style="display: flex; gap: 0.8rem; flex-wrap: wrap;" id="sizeOptions">
                        ${product.sizes.map((size, i) => `
                            <button class="size-option ${i === 0 ? 'selected' : ''}" data-size="${size}" style="padding: 0.8rem 1.5rem; border: 2px solid ${i === 0 ? 'transparent' : 'var(--primary)'}; background: ${i === 0 ? 'var(--gradient)' : 'transparent'}; color: ${i === 0 ? 'white' : 'var(--primary)'}; border-radius: 12px; font-weight: 700; cursor: pointer; font-family: 'Cairo', sans-serif; transition: all 0.3s ease;">${size}</button>
                        `).join('')}
                    </div>
                </div>
                
                <div style="display: flex; gap: 1rem;">
                    <button onclick="addToCartWithOptions(${product.id})" style="flex: 1; padding: 1.2rem; background: var(--gradient); color: white; border: none; border-radius: 50px; font-family: 'Cairo', sans-serif; font-size: 1.1rem; font-weight: 700; cursor: pointer;">
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
    
    // Add event listeners for color selection
    document.querySelectorAll('.color-option').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.color-option').forEach(b => {
                b.style.borderColor = 'transparent';
                b.classList.remove('selected');
            });
            this.style.borderColor = 'var(--primary)';
            this.classList.add('selected');
            selectedColor = this.dataset.color;
        });
    });
    
    // Add event listeners for size selection
    document.querySelectorAll('.size-option').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.size-option').forEach(b => {
                b.style.background = 'transparent';
                b.style.color = 'var(--primary)';
                b.style.borderColor = 'var(--primary)';
                b.classList.remove('selected');
            });
            this.style.background = 'var(--gradient)';
            this.style.color = 'white';
            this.style.borderColor = 'transparent';
            this.classList.add('selected');
            selectedSize = this.dataset.size;
        });
    });
    
    // Store selected options globally for addToCartWithOptions
    window.currentProductOptions = {
        productId: product.id,
        color: selectedColor,
        size: selectedSize
    };
}

// Add to Cart with Options
function addToCartWithOptions(productId) {
    const product = products.find(p => p.id === productId);
    const options = window.currentProductOptions || {};
    
    // Update options if they were changed
    const selectedColorBtn = document.querySelector('.color-option.selected');
    const selectedSizeBtn = document.querySelector('.size-option.selected');
    
    if (selectedColorBtn) options.color = selectedColorBtn.dataset.color;
    if (selectedSizeBtn) options.size = selectedSizeBtn.dataset.size;
    
    const cartItem = {
        ...product,
        selectedColor: options.color,
        selectedSize: options.size,
        quantity: 1
    };
    
    // Check if same product with same options exists
    const existingItem = cart.find(item => 
        item.id === productId && 
        item.selectedColor === options.color && 
        item.selectedSize === options.size
    );
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push(cartItem);
    }
    
    localStorage.setItem('fashionCart', JSON.stringify(cart));
    updateCart();
    closeQuickView();
    showNotification(`تم إضافة ${product.name} (${options.color} - ${options.size}) للسلة ✓`, 'success');
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
    document.querySelectorAll('.collection-card, .product-card').forEach(el => {
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

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

function showSlide(index) {
    // Remove active class from all slides
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Add active class to current slide
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Auto slide every 3 seconds
let autoSlideInterval = setInterval(nextSlide, 3000);

// Next/Prev buttons
document.querySelector('.slider-control.next').addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    nextSlide();
    autoSlideInterval = setInterval(nextSlide, 3000);
});

document.querySelector('.slider-control.prev').addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    prevSlide();
    autoSlideInterval = setInterval(nextSlide, 3000);
});

// Indicators
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        currentSlide = index;
        showSlide(currentSlide);
        autoSlideInterval = setInterval(nextSlide, 3000);
    });
});

// Pause on hover
document.querySelector('.hero').addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

document.querySelector('.hero').addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(nextSlide, 3000);
});


// ==========================================
// AI Chatbot Functionality
// ==========================================

class AIChatbot {
    constructor() {
        this.toggle = document.getElementById('chatbotToggle');
        this.window = document.getElementById('chatbotWindow');
        this.messages = document.getElementById('chatbotMessages');
        this.input = document.getElementById('chatbotInput');
        this.sendBtn = document.getElementById('sendBtn');
        this.quickReplies = document.querySelectorAll('.quick-reply');
        
        // Conversation state
        this.conversationState = null;
        this.userData = {};
        
        this.responses = {
            'مقاس': 'بكل سرور! سأساعدك في اختيار المقاس المناسب 📏\n\nمن فضلك أخبرني:\n• كم طولك بالسنتيمتر؟ (مثال: 170)',
            'دفع': 'نوفر طرق دفع متعددة:\n• الدفع عند الاستلام 💵\n• بطاقات الائتمان 💳\n• المحافظ الإلكترونية 📱\nجميع المعاملات آمنة ومشفرة 🔒',
            'توصيل': 'مدة التوصيل:\n• داخل المدينة: 2-3 أيام 🚚\n• خارج المدينة: 4-7 أيام 📦\n• الشحن مجاني للطلبات فوق 500 ريال ✨',
            'إرجاع': 'سياسة الإرجاع:\n• يمكنك إرجاع المنتج خلال 30 يوم 📅\n• المنتج يجب أن يكون بحالته الأصلية\n• استرداد كامل المبلغ أو استبدال 💯',
            'عملاء': 'يمكنك التواصل مع خدمة العملاء:\n📞 الهاتف: 920000000\n📧 البريد: support@fashionhub.com\n⏰ من السبت للخميس: 9 صباحاً - 9 مساءً',
            'default': 'شكراً لتواصلك! 😊\nفريق خدمة العملاء سيساعدك قريباً.\nأو يمكنك استخدام الأزرار السريعة أدناه للحصول على إجابات فورية.'
        };
        
        this.init();
    }
    
    init() {
        this.toggle.addEventListener('click', () => this.toggleWindow());
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
        
        this.quickReplies.forEach(btn => {
            btn.addEventListener('click', () => {
                const message = btn.getAttribute('data-message');
                this.sendMessage(message);
            });
        });
    }
    
    toggleWindow() {
        this.toggle.classList.toggle('active');
        this.window.classList.toggle('active');
    }
    
    sendMessage(text = null) {
        const message = text || this.input.value.trim();
        if (!message) return;
        
        // Add user message
        this.addMessage(message, 'user');
        this.input.value = '';
        
        // Simulate typing
        setTimeout(() => {
            const response = this.getResponse(message);
            this.addMessage(response, 'bot');
        }, 1000);
    }
    
    addMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.textContent = type === 'bot' ? '🤖' : '👤';
        
        const content = document.createElement('div');
        content.className = 'message-content';
        
        // Handle line breaks
        const lines = text.split('\n');
        lines.forEach(line => {
            const p = document.createElement('p');
            p.textContent = line;
            content.appendChild(p);
        });
        
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(content);
        
        this.messages.appendChild(messageDiv);
        this.messages.scrollTop = this.messages.scrollHeight;
    }
    
    getResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Handle size finder conversation flow
        if (this.conversationState === 'waiting_height') {
            return this.handleHeightInput(message);
        } else if (this.conversationState === 'waiting_weight') {
            return this.handleWeightInput(message);
        }
        
        // Initial responses
        if (lowerMessage.includes('مقاس') || lowerMessage.includes('قياس')) {
            this.conversationState = 'waiting_height';
            this.userData = {};
            return this.responses['مقاس'];
        } else if (lowerMessage.includes('دفع') || lowerMessage.includes('الدفع')) {
            return this.responses['دفع'];
        } else if (lowerMessage.includes('توصيل') || lowerMessage.includes('شحن')) {
            return this.responses['توصيل'];
        } else if (lowerMessage.includes('إرجاع') || lowerMessage.includes('استرجاع')) {
            return this.responses['إرجاع'];
        } else if (lowerMessage.includes('عملاء') || lowerMessage.includes('تواصل')) {
            return this.responses['عملاء'];
        } else {
            return this.responses['default'];
        }
    }
    
    handleHeightInput(message) {
        const height = parseInt(message);
        
        if (isNaN(height) || height < 100 || height > 250) {
            return 'من فضلك أدخل طولك بشكل صحيح (مثال: 170) 📏';
        }
        
        this.userData.height = height;
        this.conversationState = 'waiting_weight';
        
        return `رائع! طولك ${height} سم ✅\n\nالآن، كم وزنك بالكيلوجرام؟ (مثال: 70)`;
    }
    
    handleWeightInput(message) {
        const weight = parseInt(message);
        
        if (isNaN(weight) || weight < 30 || weight > 200) {
            return 'من فضلك أدخل وزنك بشكل صحيح (مثال: 70) ⚖️';
        }
        
        this.userData.weight = weight;
        this.conversationState = null;
        
        // Calculate recommended size
        const size = this.calculateSize(this.userData.height, this.userData.weight);
        
        return this.getSizeRecommendation(size, this.userData.height, this.userData.weight);
    }
    
    calculateSize(height, weight) {
        // Calculate BMI
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        
        // Size logic based on height and BMI
        if (height < 160) {
            if (bmi < 18.5) return 'XS';
            if (bmi < 22) return 'S';
            if (bmi < 26) return 'M';
            if (bmi < 30) return 'L';
            return 'XL';
        } else if (height < 170) {
            if (bmi < 18.5) return 'S';
            if (bmi < 22) return 'M';
            if (bmi < 26) return 'L';
            if (bmi < 30) return 'XL';
            return 'XXL';
        } else if (height < 180) {
            if (bmi < 18.5) return 'S';
            if (bmi < 22) return 'M';
            if (bmi < 25) return 'L';
            if (bmi < 29) return 'XL';
            return 'XXL';
        } else {
            if (bmi < 20) return 'M';
            if (bmi < 24) return 'L';
            if (bmi < 28) return 'XL';
            return 'XXL';
        }
    }
    
    getSizeRecommendation(size, height, weight) {
        const sizeEmojis = {
            'XS': '🔹',
            'S': '🔸',
            'M': '⭐',
            'L': '🌟',
            'XL': '✨',
            'XXL': '💫'
        };
        
        const emoji = sizeEmojis[size] || '⭐';
        
        return `تحليل ذكي مكتمل! 🤖✨\n\n` +
               `بناءً على مقاساتك:\n` +
               `📏 الطول: ${height} سم\n` +
               `⚖️ الوزن: ${weight} كجم\n\n` +
               `${emoji} المقاس المقترح: ${size}\n\n` +
               `💡 نصيحة: إذا كنت تفضل الملابس الواسعة، اختر مقاس أكبر.\n` +
               `إذا كنت تفضل الملابس الضيقة، اختر مقاس أصغر.\n\n` +
               `هل تحتاج مساعدة في شيء آخر؟ 😊`;
    }
}

// Initialize chatbot when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new AIChatbot();
});
