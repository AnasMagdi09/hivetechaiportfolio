// Kids Collection Products
const kidsProducts = [
    {
        id: 301,
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
        id: 302,
        name: 'تيشيرت أطفال كاجوال',
        desc: 'تيشيرت قطني مريح للأطفال',
        price: 89,
        category: 'kids',
        badge: 'الأكثر مبيعاً',
        image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&q=80',
        colors: ['أحمر', 'أزرق', 'أخضر'],
        colorCodes: ['#ef4444', '#3b82f6', '#10b981'],
        sizes: ['2-3', '4-5', '6-7', '8-9', '10-11'],
        rating: 5
    },
    {
        id: 303,
        name: 'جاكيت أطفال دافئ',
        desc: 'جاكيت شتوي مريح للأطفال',
        price: 299,
        category: 'kids',
        badge: 'تخفيضات',
        image: 'https://images.unsplash.com/photo-1514090458221-65bb69cf63e4?w=400&q=80',
        colors: ['أزرق', 'أحمر', 'أسود'],
        colorCodes: ['#3b82f6', '#ef4444', '#000'],
        sizes: ['4-5', '6-7', '8-9', '10-11'],
        rating: 5
    },
    {
        id: 304,
        name: 'بنطلون جينز أطفال',
        desc: 'جينز مريح للاستخدام اليومي',
        price: 149,
        category: 'kids',
        badge: 'جديد',
        image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&q=80',
        colors: ['أزرق', 'أسود'],
        colorCodes: ['#3b82f6', '#000'],
        sizes: ['2-3', '4-5', '6-7', '8-9'],
        rating: 4
    },
    {
        id: 305,
        name: 'فستان حفلات للبنات',
        desc: 'فستان أنيق للمناسبات الخاصة',
        price: 349,
        category: 'kids',
        badge: 'الأكثر مبيعاً',
        image: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=400&q=80',
        colors: ['وردي', 'أبيض', 'أحمر'],
        colorCodes: ['#ff6b9d', '#fff', '#ef4444'],
        sizes: ['4-5', '6-7', '8-9'],
        rating: 5
    },
    {
        id: 306,
        name: 'قميص أطفال كلاسيكي',
        desc: 'قميص أنيق للمناسبات',
        price: 129,
        category: 'kids',
        badge: 'جديد',
        image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400&q=80',
        colors: ['أبيض', 'أزرق', 'أسود'],
        colorCodes: ['#fff', '#3b82f6', '#000'],
        sizes: ['4-5', '6-7', '8-9', '10-11'],
        rating: 5
    },
    {
        id: 307,
        name: 'هودي أطفال رياضي',
        desc: 'هودي مريح بتصميم عصري',
        price: 179,
        category: 'kids',
        badge: 'الأكثر مبيعاً',
        image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&q=80',
        colors: ['رمادي', 'أسود', 'أزرق'],
        colorCodes: ['#6b7280', '#000', '#3b82f6'],
        sizes: ['6-7', '8-9', '10-11', '12-13'],
        rating: 4
    },
    {
        id: 308,
        name: 'شورت أطفال صيفي',
        desc: 'شورت خفيف للصيف',
        price: 99,
        category: 'kids',
        badge: 'تخفيضات',
        image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&q=80',
        colors: ['أزرق', 'أخضر', 'أحمر'],
        colorCodes: ['#3b82f6', '#10b981', '#ef4444'],
        sizes: ['2-3', '4-5', '6-7', '8-9'],
        rating: 4
    },
    {
        id: 309,
        name: 'فستان كاجوال للبنات',
        desc: 'فستان مريح للاستخدام اليومي',
        price: 169,
        category: 'kids',
        badge: 'جديد',
        image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&q=80',
        colors: ['وردي', 'أصفر', 'أزرق'],
        colorCodes: ['#ff6b9d', '#f8b500', '#3b82f6'],
        sizes: ['2-3', '4-5', '6-7', '8-9'],
        rating: 5
    },
    {
        id: 310,
        name: 'بدلة رياضية للأطفال',
        desc: 'طقم رياضي كامل مريح',
        price: 249,
        category: 'kids',
        badge: 'الأكثر مبيعاً',
        image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&q=80',
        colors: ['أسود', 'أزرق', 'رمادي'],
        colorCodes: ['#000', '#3b82f6', '#6b7280'],
        sizes: ['4-5', '6-7', '8-9', '10-11'],
        rating: 5
    },
    {
        id: 311,
        name: 'سترة أطفال أنيقة',
        desc: 'سترة دافئة بتصميم جميل',
        price: 219,
        category: 'kids',
        badge: 'جديد',
        image: 'https://images.unsplash.com/photo-1514090458221-65bb69cf63e4?w=400&q=80',
        colors: ['بيج', 'رمادي', 'أزرق'],
        colorCodes: ['#d4a574', '#6b7280', '#3b82f6'],
        sizes: ['4-5', '6-7', '8-9'],
        rating: 4
    },
    {
        id: 312,
        name: 'بيجامة أطفال مريحة',
        desc: 'بيجامة قطنية ناعمة',
        price: 139,
        category: 'kids',
        badge: 'الأكثر مبيعاً',
        image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&q=80',
        colors: ['وردي', 'أزرق', 'أصفر'],
        colorCodes: ['#ff6b9d', '#3b82f6', '#f8b500'],
        sizes: ['2-3', '4-5', '6-7', '8-9', '10-11'],
        rating: 5
    }
];

// Render Kids Products
function renderKidsProducts() {
    const grid = document.getElementById('kidsProductsGrid');
    
    grid.innerHTML = kidsProducts.map(product => `
        <div class="product-card" data-id="${product.id}">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <button class="product-wishlist" data-id="${product.id}">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
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
}
