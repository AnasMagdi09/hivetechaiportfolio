// Category Page JavaScript

// Smartphones Products Data
const smartphonesProducts = [
    {
        id: 1,
        name: 'iPhone 15 Pro Max',
        brand: 'Apple',
        image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&q=80',
        oldPrice: 5999,
        price: 5499,
        specs: ['256GB', 'تيتانيوم', 'A17 Pro'],
        rating: 5,
        reviews: 234,
        badge: 'جديد',
        badgeType: 'new'
    },
    {
        id: 2,
        name: 'Samsung Galaxy S24 Ultra',
        brand: 'Samsung',
        image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&q=80',
        oldPrice: 5499,
        price: 4999,
        specs: ['512GB', 'S Pen', '200MP'],
        rating: 5,
        reviews: 189,
        badge: 'الأكثر مبيعاً',
        badgeType: 'bestseller'
    },
    {
        id: 3,
        name: 'iPhone 15',
        brand: 'Apple',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&q=80',
        oldPrice: 3999,
        price: 3699,
        specs: ['128GB', 'Dynamic Island', 'USB-C'],
        rating: 4,
        reviews: 156,
        badge: '-8%',
        badgeType: 'sale'
    },
    {
        id: 4,
        name: 'Samsung Galaxy Z Fold 5',
        brand: 'Samsung',
        image: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=500&q=80',
        oldPrice: 7999,
        price: 6999,
        specs: ['قابل للطي', '256GB', 'Snapdragon 8'],
        rating: 5,
        reviews: 98,
        badge: '-12%',
        badgeType: 'sale'
    },
    {
        id: 5,
        name: 'Xiaomi 14 Ultra',
        brand: 'Xiaomi',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80',
        oldPrice: 4299,
        price: 3799,
        specs: ['Leica Camera', '512GB', '5G'],
        rating: 4,
        reviews: 87,
        badge: 'جديد',
        badgeType: 'new'
    },
    {
        id: 6,
        name: 'Huawei Mate 60 Pro',
        brand: 'Huawei',
        image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500&q=80',
        oldPrice: 4599,
        price: 4199,
        specs: ['256GB', 'Satellite Call', 'Kirin 9000'],
        rating: 4,
        reviews: 65,
        badge: '-9%',
        badgeType: 'sale'
    },
    {
        id: 7,
        name: 'Google Pixel 8 Pro',
        brand: 'Google',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80',
        oldPrice: 3999,
        price: 3499,
        specs: ['AI Camera', '256GB', 'Tensor G3'],
        rating: 5,
        reviews: 112,
        badge: 'الأكثر مبيعاً',
        badgeType: 'bestseller'
    },
    {
        id: 8,
        name: 'OnePlus 12',
        brand: 'OnePlus',
        image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=500&q=80',
        oldPrice: 3499,
        price: 2999,
        specs: ['Hasselblad', '256GB', '100W شحن'],
        rating: 4,
        reviews: 78,
        badge: '-14%',
        badgeType: 'sale'
    },
    {
        id: 9,
        name: 'Samsung Galaxy A54',
        brand: 'Samsung',
        image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&q=80',
        oldPrice: 1799,
        price: 1499,
        specs: ['128GB', 'Super AMOLED', '5000mAh'],
        rating: 4,
        reviews: 203,
        badge: '-17%',
        badgeType: 'sale'
    },
    {
        id: 10,
        name: 'Xiaomi Redmi Note 13 Pro',
        brand: 'Xiaomi',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80',
        oldPrice: 1299,
        price: 999,
        specs: ['256GB', '200MP', '67W شحن'],
        rating: 4,
        reviews: 167,
        badge: '-23%',
        badgeType: 'sale'
    },
    {
        id: 11,
        name: 'iPhone 14',
        brand: 'Apple',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&q=80',
        oldPrice: 3299,
        price: 2899,
        specs: ['128GB', 'A15 Bionic', 'Ceramic Shield'],
        rating: 5,
        reviews: 289,
        badge: '-12%',
        badgeType: 'sale'
    },
    {
        id: 12,
        name: 'Huawei Nova 12',
        brand: 'Huawei',
        image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500&q=80',
        oldPrice: 1899,
        price: 1599,
        specs: ['256GB', '60MP Selfie', '66W شحن'],
        rating: 4,
        reviews: 54,
        badge: 'جديد',
        badgeType: 'new'
    }
];

// Laptops Products Data
const laptopsProducts = [
    {
        id: 1,
        name: 'MacBook Pro 16" M3 Max',
        brand: 'Apple',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80',
        oldPrice: 14999,
        price: 13999,
        specs: ['M3 Max', '36GB RAM', '1TB SSD'],
        rating: 5,
        reviews: 156,
        badge: 'جديد',
        badgeType: 'new'
    },
    {
        id: 2,
        name: 'Dell XPS 15',
        brand: 'Dell',
        image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500&q=80',
        oldPrice: 7999,
        price: 6999,
        specs: ['i7-13700H', '32GB RAM', 'RTX 4060'],
        rating: 5,
        reviews: 98,
        badge: 'الأكثر مبيعاً',
        badgeType: 'bestseller'
    },
    {
        id: 3,
        name: 'ASUS ROG Strix G16',
        brand: 'ASUS',
        image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80',
        oldPrice: 6499,
        price: 5499,
        specs: ['i9-13980HX', 'RTX 4070', '240Hz'],
        rating: 5,
        reviews: 87,
        badge: '-15%',
        badgeType: 'sale'
    },
    {
        id: 4,
        name: 'HP Spectre x360',
        brand: 'HP',
        image: 'https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=500&q=80',
        oldPrice: 5999,
        price: 5299,
        specs: ['i7-1365U', '16GB RAM', 'OLED'],
        rating: 4,
        reviews: 76,
        badge: '-12%',
        badgeType: 'sale'
    },
    {
        id: 5,
        name: 'Lenovo ThinkPad X1 Carbon',
        brand: 'Lenovo',
        image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&q=80',
        oldPrice: 8499,
        price: 7499,
        specs: ['i7-1365U', '32GB RAM', '2K Display'],
        rating: 5,
        reviews: 134,
        badge: 'الأكثر مبيعاً',
        badgeType: 'bestseller'
    },
    {
        id: 6,
        name: 'MacBook Air 15" M3',
        brand: 'Apple',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80',
        oldPrice: 5999,
        price: 5499,
        specs: ['M3 Chip', '16GB RAM', '512GB SSD'],
        rating: 5,
        reviews: 201,
        badge: 'جديد',
        badgeType: 'new'
    },
    {
        id: 7,
        name: 'MSI Raider GE78',
        brand: 'MSI',
        image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80',
        oldPrice: 9999,
        price: 8499,
        specs: ['i9-14900HX', 'RTX 4090', '17.3"'],
        rating: 5,
        reviews: 45,
        badge: '-15%',
        badgeType: 'sale'
    },
    {
        id: 8,
        name: 'Lenovo IdeaPad Gaming 3',
        brand: 'Lenovo',
        image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&q=80',
        oldPrice: 3499,
        price: 2799,
        specs: ['Ryzen 7', 'RTX 3050', '144Hz'],
        rating: 4,
        reviews: 167,
        badge: '-20%',
        badgeType: 'sale'
    },
    {
        id: 9,
        name: 'ASUS ZenBook 14',
        brand: 'ASUS',
        image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500&q=80',
        oldPrice: 4299,
        price: 3699,
        specs: ['i5-1340P', '16GB RAM', 'OLED'],
        rating: 4,
        reviews: 89,
        badge: '-14%',
        badgeType: 'sale'
    },
    {
        id: 10,
        name: 'HP Pavilion 15',
        brand: 'HP',
        image: 'https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=500&q=80',
        oldPrice: 2799,
        price: 2299,
        specs: ['i5-1335U', '8GB RAM', '512GB SSD'],
        rating: 4,
        reviews: 234,
        badge: '-18%',
        badgeType: 'sale'
    }
];

// Tablets Products Data
const tabletsProducts = [
    {
        id: 1,
        name: 'iPad Pro 12.9" M2',
        brand: 'Apple',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80',
        oldPrice: 5499,
        price: 4999,
        specs: ['M2 Chip', '256GB', 'Liquid Retina XDR'],
        rating: 5,
        reviews: 178,
        badge: 'الأكثر مبيعاً',
        badgeType: 'bestseller'
    },
    {
        id: 2,
        name: 'Samsung Galaxy Tab S9 Ultra',
        brand: 'Samsung',
        image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&q=80',
        oldPrice: 4999,
        price: 4499,
        specs: ['14.6"', 'S Pen', 'Snapdragon 8 Gen 2'],
        rating: 5,
        reviews: 134,
        badge: '-10%',
        badgeType: 'sale'
    },
    {
        id: 3,
        name: 'iPad Air M1',
        brand: 'Apple',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80',
        oldPrice: 2999,
        price: 2699,
        specs: ['M1 Chip', '64GB', '10.9"'],
        rating: 5,
        reviews: 256,
        badge: '-10%',
        badgeType: 'sale'
    },
    {
        id: 4,
        name: 'Huawei MatePad Pro 13.2',
        brand: 'Huawei',
        image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&q=80',
        oldPrice: 4299,
        price: 3799,
        specs: ['OLED', 'M-Pencil', 'HarmonyOS'],
        rating: 4,
        reviews: 67,
        badge: 'جديد',
        badgeType: 'new'
    },
    {
        id: 5,
        name: 'Samsung Galaxy Tab S9',
        brand: 'Samsung',
        image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&q=80',
        oldPrice: 3499,
        price: 2999,
        specs: ['11"', '128GB', 'S Pen'],
        rating: 4,
        reviews: 145,
        badge: '-14%',
        badgeType: 'sale'
    },
    {
        id: 6,
        name: 'iPad 10th Gen',
        brand: 'Apple',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80',
        oldPrice: 1999,
        price: 1799,
        specs: ['A14 Bionic', '64GB', '10.9"'],
        rating: 4,
        reviews: 312,
        badge: '-10%',
        badgeType: 'sale'
    },
    {
        id: 7,
        name: 'Lenovo Tab P12 Pro',
        brand: 'Lenovo',
        image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&q=80',
        oldPrice: 2799,
        price: 2299,
        specs: ['12.6" AMOLED', '256GB', 'Snapdragon 870'],
        rating: 4,
        reviews: 78,
        badge: '-18%',
        badgeType: 'sale'
    },
    {
        id: 8,
        name: 'Xiaomi Pad 6 Pro',
        brand: 'Xiaomi',
        image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&q=80',
        oldPrice: 1999,
        price: 1599,
        specs: ['11"', '256GB', '144Hz'],
        rating: 4,
        reviews: 189,
        badge: '-20%',
        badgeType: 'sale'
    },
    {
        id: 9,
        name: 'iPad Mini 6',
        brand: 'Apple',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80',
        oldPrice: 2499,
        price: 2199,
        specs: ['A15 Bionic', '64GB', '8.3"'],
        rating: 5,
        reviews: 167,
        badge: '-12%',
        badgeType: 'sale'
    },
    {
        id: 10,
        name: 'Samsung Galaxy Tab A9+',
        brand: 'Samsung',
        image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&q=80',
        oldPrice: 1299,
        price: 999,
        specs: ['11"', '64GB', '7040mAh'],
        rating: 4,
        reviews: 234,
        badge: '-23%',
        badgeType: 'sale'
    }
];

// Accessories Products Data
const accessoriesProducts = [
    {
        id: 1,
        name: 'AirPods Pro 2nd Gen',
        brand: 'Apple',
        image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&q=80',
        oldPrice: 1099,
        price: 949,
        specs: ['ANC', 'USB-C', 'Spatial Audio'],
        rating: 5,
        reviews: 456,
        badge: 'الأكثر مبيعاً',
        badgeType: 'bestseller'
    },
    {
        id: 2,
        name: 'Samsung Galaxy Buds2 Pro',
        brand: 'Samsung',
        image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80',
        oldPrice: 799,
        price: 599,
        specs: ['ANC', '360 Audio', 'IPX7'],
        rating: 4,
        reviews: 234,
        badge: '-25%',
        badgeType: 'sale'
    },
    {
        id: 3,
        name: 'Sony WH-1000XM5',
        brand: 'Sony',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
        oldPrice: 1599,
        price: 1299,
        specs: ['ANC', '30hr Battery', 'LDAC'],
        rating: 5,
        reviews: 312,
        badge: '-19%',
        badgeType: 'sale'
    },
    {
        id: 4,
        name: 'Apple Watch Ultra 2',
        brand: 'Apple',
        image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500&q=80',
        oldPrice: 3699,
        price: 3399,
        specs: ['49mm', 'GPS+Cellular', 'Titanium'],
        rating: 5,
        reviews: 189,
        badge: 'جديد',
        badgeType: 'new'
    },
    {
        id: 5,
        name: 'MagSafe Charger',
        brand: 'Apple',
        image: 'https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?w=500&q=80',
        oldPrice: 199,
        price: 169,
        specs: ['15W', 'Magnetic', 'iPhone 12+'],
        rating: 4,
        reviews: 567,
        badge: '-15%',
        badgeType: 'sale'
    },
    {
        id: 6,
        name: 'Samsung 45W Charger',
        brand: 'Samsung',
        image: 'https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?w=500&q=80',
        oldPrice: 179,
        price: 129,
        specs: ['45W', 'USB-C', 'PPS'],
        rating: 4,
        reviews: 345,
        badge: '-28%',
        badgeType: 'sale'
    },
    {
        id: 7,
        name: 'Anker PowerCore 26800',
        brand: 'Anker',
        image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80',
        oldPrice: 299,
        price: 229,
        specs: ['26800mAh', 'PD 45W', '3 Ports'],
        rating: 5,
        reviews: 678,
        badge: 'الأكثر مبيعاً',
        badgeType: 'bestseller'
    },
    {
        id: 8,
        name: 'Apple Pencil 2nd Gen',
        brand: 'Apple',
        image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=500&q=80',
        oldPrice: 549,
        price: 499,
        specs: ['Magnetic', 'Wireless Charge', 'Double Tap'],
        rating: 5,
        reviews: 234,
        badge: '-9%',
        badgeType: 'sale'
    },
    {
        id: 9,
        name: 'Logitech MX Master 3S',
        brand: 'Logitech',
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80',
        oldPrice: 449,
        price: 379,
        specs: ['8K DPI', 'Quiet Clicks', 'USB-C'],
        rating: 5,
        reviews: 456,
        badge: '-16%',
        badgeType: 'sale'
    },
    {
        id: 10,
        name: 'Samsung Galaxy Watch 6',
        brand: 'Samsung',
        image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500&q=80',
        oldPrice: 1499,
        price: 1199,
        specs: ['44mm', 'BioActive', 'Wear OS'],
        rating: 4,
        reviews: 178,
        badge: '-20%',
        badgeType: 'sale'
    },
    {
        id: 11,
        name: 'JBL Flip 6',
        brand: 'JBL',
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80',
        oldPrice: 549,
        price: 449,
        specs: ['IP67', '12hr Battery', 'PartyBoost'],
        rating: 4,
        reviews: 567,
        badge: '-18%',
        badgeType: 'sale'
    },
    {
        id: 12,
        name: 'Belkin 3-in-1 Charger',
        brand: 'Belkin',
        image: 'https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?w=500&q=80',
        oldPrice: 599,
        price: 499,
        specs: ['MagSafe', 'Apple Watch', 'AirPods'],
        rating: 5,
        reviews: 234,
        badge: '-17%',
        badgeType: 'sale'
    }
];


// Initialize Category Page
function initCategory(categoryName, products) {
    const productsGrid = document.getElementById('productsGrid');
    
    // Show loading
    productsGrid.innerHTML = `
        <div class="loading-spinner" style="grid-column: 1/-1;">
            <div class="spinner"></div>
        </div>
    `;
    
    // Simulate loading delay
    setTimeout(() => {
        renderProducts(products);
        setupFilters(products);
    }, 500);
}

// Render Products
function renderProducts(products) {
    const productsGrid = document.getElementById('productsGrid');
    
    if (products.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem;">
                <p style="color: var(--gray); font-size: 1.2rem;">لا توجد منتجات مطابقة للبحث</p>
            </div>
        `;
        return;
    }
    
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card" data-id="${product.id}">
            ${product.badge ? `<span class="product-badge ${product.badgeType}">${product.badge}</span>` : ''}
            <div class="product-image-wrapper">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-actions-bar">
                <button class="action-btn wishlist-btn" onclick="addToWishlist(${product.id})" title="أضف للمفضلة">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
                <button class="action-btn cart-btn-main" onclick="addToCart(${product.id})">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    أضف للسلة
                </button>
                <button class="action-btn compare-btn" onclick="addToCompare(${product.id})" title="قارن">
                    قارن
                </button>
            </div>
            <div class="product-details">
                <span class="product-brand">${product.brand}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-specs">
                    ${product.specs.map(spec => `<span class="spec-tag">${spec}</span>`).join('')}
                </div>
                <div class="product-footer">
                    <div class="price-wrapper">
                        ${product.oldPrice ? `<span class="old-price">${product.oldPrice.toLocaleString()} ر.س</span>` : ''}
                        <span class="current-price">${product.price.toLocaleString()} ر.س</span>
                    </div>
                    <div class="product-rating">
                        <span class="stars">${'★'.repeat(product.rating)}${'☆'.repeat(5-product.rating)}</span>
                        <span class="rating-count">(${product.reviews})</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add animation
    const cards = productsGrid.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Setup Filters
function setupFilters(allProducts) {
    const brandFilter = document.getElementById('brandFilter');
    const priceFilter = document.getElementById('priceFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    function applyFilters() {
        let filtered = [...allProducts];
        
        // Brand filter
        const brand = brandFilter.value;
        if (brand !== 'all') {
            filtered = filtered.filter(p => p.brand.toLowerCase() === brand);
        }
        
        // Price filter
        const price = priceFilter.value;
        if (price !== 'all') {
            const [min, max] = price.split('-').map(v => v === '+' ? Infinity : parseInt(v));
            if (max) {
                filtered = filtered.filter(p => p.price >= min && p.price <= max);
            } else {
                filtered = filtered.filter(p => p.price >= parseInt(price.replace('+', '')));
            }
        }
        
        // Sort
        const sort = sortFilter.value;
        switch(sort) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
                filtered.sort((a, b) => b.id - a.id);
                break;
        }
        
        renderProducts(filtered);
    }
    
    brandFilter.addEventListener('change', applyFilters);
    priceFilter.addEventListener('change', applyFilters);
    sortFilter.addEventListener('change', applyFilters);
}

// Cart Functions
let cart = JSON.parse(localStorage.getItem('techzone_cart')) || [];

function addToCart(productId) {
    const allProducts = [...smartphonesProducts, ...laptopsProducts, ...tabletsProducts, ...accessoriesProducts];
    const product = allProducts.find(p => p.id === productId);
    
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('techzone_cart', JSON.stringify(cart));
        updateCartCount();
        showNotification('تمت الإضافة للسلة بنجاح!');
    }
}

function addToWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('techzone_wishlist')) || [];
    const allProducts = [...smartphonesProducts, ...laptopsProducts, ...tabletsProducts, ...accessoriesProducts];
    const product = allProducts.find(p => p.id === productId);
    
    if (product) {
        const exists = wishlist.find(item => item.id === productId);
        if (!exists) {
            wishlist.push(product);
            localStorage.setItem('techzone_wishlist', JSON.stringify(wishlist));
            updateWishlistCount();
            showNotification('تمت الإضافة للمفضلة!');
        } else {
            showNotification('المنتج موجود بالفعل في المفضلة');
        }
    }
}

function addToCompare(productId) {
    let compareList = JSON.parse(localStorage.getItem('techzone_compare')) || [];
    const allProducts = [...smartphonesProducts, ...laptopsProducts, ...tabletsProducts, ...accessoriesProducts];
    const product = allProducts.find(p => p.id === productId);
    
    if (product) {
        if (compareList.length >= 4) {
            showNotification('يمكنك مقارنة 4 منتجات كحد أقصى');
            return;
        }
        const exists = compareList.find(item => item.id === productId);
        if (!exists) {
            compareList.push(product);
            localStorage.setItem('techzone_compare', JSON.stringify(compareList));
            updateCompareCount();
            showNotification('تمت الإضافة للمقارنة!');
        } else {
            showNotification('المنتج موجود بالفعل في المقارنة');
        }
    }
}

function updateWishlistCount() {
    const wishlistCount = document.querySelector('.wishlist-count');
    if (wishlistCount) {
        const wishlist = JSON.parse(localStorage.getItem('techzone_wishlist')) || [];
        wishlistCount.textContent = wishlist.length;
    }
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const total = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = total;
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        ${message}
    `;
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: linear-gradient(135deg, #10b981, #059669);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        display: flex;
        align-items: center;
        gap: 0.8rem;
        font-weight: 600;
        box-shadow: 0 10px 40px rgba(16, 185, 129, 0.4);
        z-index: 9999;
        transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(-50%) translateY(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(-50%) translateY(100px)';
        setTimeout(() => notification.remove(), 400);
    }, 2500);
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    updateWishlistCount();
    updateCompareCount();
});

function updateCompareCount() {
    const compareCount = document.querySelector('.compare-count');
    if (compareCount) {
        const compareList = JSON.parse(localStorage.getItem('techzone_compare')) || [];
        compareCount.textContent = compareList.length;
    }
}
