// Accessories Collection Products
const accessoriesProducts = [
    {
        id: 401,
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
        id: 402,
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
        id: 403,
        name: 'محفظة جلدية أنيقة',
        desc: 'محفظة عملية بتصميم راقي',
        price: 299,
        category: 'accessories',
        badge: 'جديد',
        image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&q=80',
        colors: ['أسود', 'بني', 'أزرق'],
        colorCodes: ['#000', '#8b4513', '#1e40af'],
        sizes: ['واحد'],
        rating: 5
    },
    {
        id: 404,
        name: 'حزام جلد فاخر',
        desc: 'حزام جلد طبيعي بإبزيم معدني',
        price: 249,
        category: 'accessories',
        badge: 'الأكثر مبيعاً',
        image: 'https://images.unsplash.com/photo-1624222247344-550fb60583bb?w=400&q=80',
        colors: ['أسود', 'بني'],
        colorCodes: ['#000', '#8b4513'],
        sizes: ['S', 'M', 'L', 'XL'],
        rating: 5
    },
    {
        id: 405,
        name: 'نظارة شمسية عصرية',
        desc: 'نظارة بحماية UV كاملة',
        price: 399,
        category: 'accessories',
        badge: 'جديد',
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80',
        colors: ['أسود', 'بني', 'ذهبي'],
        colorCodes: ['#000', '#8b4513', '#d4a574'],
        sizes: ['واحد'],
        rating: 5
    },
    {
        id: 406,
        name: 'ساعة يد كلاسيكية',
        desc: 'ساعة أنيقة بتصميم عصري',
        price: 899,
        category: 'accessories',
        badge: 'تخفيضات',
        image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&q=80',
        colors: ['فضي', 'ذهبي', 'أسود'],
        colorCodes: ['#c0c0c0', '#d4a574', '#000'],
        sizes: ['واحد'],
        rating: 5
    },
    {
        id: 407,
        name: 'شنطة ظهر عملية',
        desc: 'شنطة واسعة للاستخدام اليومي',
        price: 449,
        category: 'accessories',
        badge: 'الأكثر مبيعاً',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80',
        colors: ['أسود', 'رمادي', 'أزرق'],
        colorCodes: ['#000', '#6b7280', '#3b82f6'],
        sizes: ['واحد'],
        rating: 4
    },
    {
        id: 408,
        name: 'قبعة صيفية أنيقة',
        desc: 'قبعة واقية من الشمس',
        price: 149,
        category: 'accessories',
        badge: 'جديد',
        image: 'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?w=400&q=80',
        colors: ['بيج', 'أسود', 'أبيض'],
        colorCodes: ['#d4a574', '#000', '#fff'],
        sizes: ['S', 'M', 'L'],
        rating: 4
    },
    {
        id: 409,
        name: 'وشاح حريري فاخر',
        desc: 'وشاح ناعم بتصميم راقي',
        price: 199,
        category: 'accessories',
        badge: 'الأكثر مبيعاً',
        image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&q=80',
        colors: ['وردي', 'أزرق', 'بيج'],
        colorCodes: ['#ff6b9d', '#3b82f6', '#d4a574'],
        sizes: ['واحد'],
        rating: 5
    },
    {
        id: 410,
        name: 'حذاء رسمي أنيق',
        desc: 'حذاء جلد للمناسبات الرسمية',
        price: 699,
        category: 'accessories',
        badge: 'جديد',
        image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400&q=80',
        colors: ['أسود', 'بني'],
        colorCodes: ['#000', '#8b4513'],
        sizes: ['39', '40', '41', '42', '43', '44'],
        rating: 5
    },
    {
        id: 411,
        name: 'حقيبة كروس صغيرة',
        desc: 'حقيبة عملية للاستخدام اليومي',
        price: 349,
        category: 'accessories',
        badge: 'تخفيضات',
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80',
        colors: ['أسود', 'بيج', 'أحمر'],
        colorCodes: ['#000', '#d4a574', '#ef4444'],
        sizes: ['واحد'],
        rating: 4
    },
    {
        id: 412,
        name: 'قفازات جلدية فاخرة',
        desc: 'قفازات دافئة بتصميم أنيق',
        price: 179,
        category: 'accessories',
        badge: 'الأكثر مبيعاً',
        image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&q=80',
        colors: ['أسود', 'بني', 'رمادي'],
        colorCodes: ['#000', '#8b4513', '#6b7280'],
        sizes: ['S', 'M', 'L'],
        rating: 5
    }
];

let cart = [];
let wishlist = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadFromStorage();
    renderProducts();
    setupEventListeners();
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
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    
    grid.innerHTML = accessoriesProducts.map(product => `
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
    const product = accessoriesProducts.find(p => p.id === productId);
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
    const product = accessoriesProducts.find(p => p.id === productId);
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
    renderProducts();
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
    const product = accessoriesProducts.find(p => p.id === productId);
    const modal = document.getElementById('quickViewModal');
    const modalBody = document.getElementById('modalBody');
    
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
    
    window.currentProductOptions = {
        productId: product.id,
        color: selectedColor,
        size: selectedSize
    };
}


// Add to Cart with Options
function addToCartWithOptions(productId) {
    const product = accessoriesProducts.find(p => p.id === productId);
    const options = window.currentProductOptions || {};
    
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
    
    const closeModal = document.getElementById('closeModal');
    const modalOverlay = document.getElementById('modalOverlay');
    
    closeModal.addEventListener('click', closeQuickView);
    modalOverlay.addEventListener('click', closeQuickView);
    
    overlay.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        wishlistSidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
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
