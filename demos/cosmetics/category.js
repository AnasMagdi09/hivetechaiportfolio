// Glamour Cosmetics - Category Page JavaScript

// Skincare Products Data (10-15 products)
const skincareProducts = [
    {
        id: 1,
        name: 'كريم مرطب La Mer',
        brand: 'La Mer',
        image: 'https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=500&q=80',
        oldPrice: 1299,
        price: 1099,
        specs: ['50ml', 'مرطب', 'للبشرة الجافة'],
        rating: 5,
        reviews: 234,
        badge: 'الأكثر مبيعاً',
        badgeType: 'bestseller'
    },
    {
        id: 2,
        name: 'سيروم فيتامين سي',
        brand: 'Dior',
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80',
        oldPrice: 899,
        price: 749,
        specs: ['30ml', 'مضاد للأكسدة', 'تفتيح'],
        rating: 5,
        reviews: 189,
        badge: '-17%',
        badgeType: 'sale'
    },
    {
        id: 3,
        name: 'غسول منظف للوجه',
        brand: 'Chanel',
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&q=80',
        oldPrice: 450,
        price: 399,
        specs: ['150ml', 'منظف', 'لجميع أنواع البشرة'],
        rating: 4,
        reviews: 156,
        badge: 'جديد',
        badgeType: 'new'
    },
    {
        id: 4,
        name: 'كريم العين المضاد للتجاعيد',
        brand: 'Estée Lauder',
        image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=500&q=80',
        oldPrice: 650,
        price: 550,
        specs: ['15ml', 'مضاد للتجاعيد', 'منطقة العين'],
        rating: 5,
        reviews: 98,
        badge: '-15%',
        badgeType: 'sale'
    },
    {
        id: 5,
        name: 'ماسك الوجه بالذهب',
        brand: 'La Mer',
        image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500&q=80',
        oldPrice: 799,
        price: 699,
        specs: ['6 قطع', 'ترطيب عميق', 'نضارة'],
        rating: 4,
        reviews: 87,
        badge: '-12%',
        badgeType: 'sale'
    },
    {
        id: 6,
        name: 'تونر منعش للبشرة',
        brand: 'Lancôme',
        image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&q=80',
        oldPrice: 320,
        price: 280,
        specs: ['200ml', 'منعش', 'موازن'],
        rating: 4,
        reviews: 145,
        badge: null,
        badgeType: null
    },
    {
        id: 7,
        name: 'كريم الليل المجدد',
        brand: 'Dior',
        image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&q=80',
        oldPrice: 950,
        price: 850,
        specs: ['50ml', 'تجديد', 'ليلي'],
        rating: 5,
        reviews: 167,
        badge: 'الأكثر مبيعاً',
        badgeType: 'bestseller'
    },
    {
        id: 8,
        name: 'سيروم حمض الهيالورونيك',
        brand: "L'Oréal",
        image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=500&q=80',
        oldPrice: 280,
        price: 220,
        specs: ['30ml', 'ترطيب', 'نفاذ عميق'],
        rating: 4,
        reviews: 234,
        badge: '-21%',
        badgeType: 'sale'
    },
    {
        id: 9,
        name: 'واقي شمس SPF 50',
        brand: 'Chanel',
        image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&q=80',
        oldPrice: 380,
        price: 340,
        specs: ['50ml', 'حماية', 'SPF 50'],
        rating: 5,
        reviews: 312,
        badge: 'جديد',
        badgeType: 'new'
    },
    {
        id: 10,
        name: 'زيت الوجه المغذي',
        brand: 'Estée Lauder',
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&q=80',
        oldPrice: 520,
        price: 450,
        specs: ['30ml', 'مغذي', 'طبيعي'],
        rating: 4,
        reviews: 78,
        badge: '-13%',
        badgeType: 'sale'
    },
    {
        id: 11,
        name: 'مقشر الوجه اللطيف',
        brand: 'Lancôme',
        image: 'https://images.unsplash.com/photo-1556228841-a3c527ebefe5?w=500&q=80',
        oldPrice: 290,
        price: 250,
        specs: ['100ml', 'تقشير', 'لطيف'],
        rating: 4,
        reviews: 123,
        badge: null,
        badgeType: null
    },
    {
        id: 12,
        name: 'كريم اليدين الفاخر',
        brand: 'Dior',
        image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=500&q=80',
        oldPrice: 180,
        price: 150,
        specs: ['75ml', 'ترطيب', 'عطري'],
        rating: 5,
        reviews: 456,
        badge: '-17%',
        badgeType: 'sale'
    }
];


// Makeup Products Data (10-15 products)
const makeupProducts = [
    {
        id: 1,
        name: 'أحمر شفاه مات',
        brand: 'MAC',
        image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&q=80',
        oldPrice: 180,
        price: 150,
        specs: ['3.5g', 'مات', '12 ساعة ثبات'],
        rating: 5,
        reviews: 567,
        badge: 'الأكثر مبيعاً',
        badgeType: 'bestseller'
    },
    {
        id: 2,
        name: 'كريم أساس فاخر',
        brand: 'Dior',
        image: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=500&q=80',
        oldPrice: 450,
        price: 399,
        specs: ['30ml', 'تغطية كاملة', 'SPF 15'],
        rating: 5,
        reviews: 345,
        badge: '-11%',
        badgeType: 'sale'
    },
    {
        id: 3,
        name: 'باليت ظلال العيون',
        brand: 'Urban Decay',
        image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&q=80',
        oldPrice: 380,
        price: 320,
        specs: ['12 لون', 'شيمر ومات', 'عالي الصبغة'],
        rating: 5,
        reviews: 289,
        badge: '-16%',
        badgeType: 'sale'
    },
    {
        id: 4,
        name: 'ماسكارا تكثيف الرموش',
        brand: 'Lancôme',
        image: 'https://images.unsplash.com/photo-1631214540553-ff044a3ff1d4?w=500&q=80',
        oldPrice: 220,
        price: 189,
        specs: ['10ml', 'تكثيف', 'مقاومة للماء'],
        rating: 4,
        reviews: 456,
        badge: 'جديد',
        badgeType: 'new'
    },
    {
        id: 5,
        name: 'بودرة مضغوطة',
        brand: 'Chanel',
        image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=500&q=80',
        oldPrice: 350,
        price: 299,
        specs: ['12g', 'تثبيت', 'لمسة ناعمة'],
        rating: 5,
        reviews: 178,
        badge: '-15%',
        badgeType: 'sale'
    },
    {
        id: 6,
        name: 'محدد العيون السائل',
        brand: 'MAC',
        image: 'https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=500&q=80',
        oldPrice: 150,
        price: 130,
        specs: ['1ml', 'أسود', 'دقيق'],
        rating: 4,
        reviews: 234,
        badge: null,
        badgeType: null
    },
    {
        id: 7,
        name: 'أحمر خدود كريمي',
        brand: 'NARS',
        image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=500&q=80',
        oldPrice: 280,
        price: 240,
        specs: ['4.5g', 'كريمي', 'طبيعي'],
        rating: 5,
        reviews: 167,
        badge: '-14%',
        badgeType: 'sale'
    },
    {
        id: 8,
        name: 'برايمر للوجه',
        brand: 'Estée Lauder',
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&q=80',
        oldPrice: 320,
        price: 280,
        specs: ['30ml', 'تمهيد', 'إشراق'],
        rating: 4,
        reviews: 145,
        badge: 'جديد',
        badgeType: 'new'
    },
    {
        id: 9,
        name: 'قلم حواجب',
        brand: 'Benefit',
        image: 'https://images.unsplash.com/photo-1597225244660-1cd128c64284?w=500&q=80',
        oldPrice: 180,
        price: 155,
        specs: ['0.08g', 'دقيق', 'طويل الأمد'],
        rating: 4,
        reviews: 312,
        badge: '-14%',
        badgeType: 'sale'
    },
    {
        id: 10,
        name: 'ملمع شفاه',
        brand: 'Dior',
        image: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=500&q=80',
        oldPrice: 220,
        price: 189,
        specs: ['6ml', 'لامع', 'مرطب'],
        rating: 5,
        reviews: 234,
        badge: '-14%',
        badgeType: 'sale'
    },
    {
        id: 11,
        name: 'كونتور وهايلايتر',
        brand: 'Charlotte Tilbury',
        image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&q=80',
        oldPrice: 420,
        price: 360,
        specs: ['دوو', 'نحت', 'إضاءة'],
        rating: 5,
        reviews: 189,
        badge: 'الأكثر مبيعاً',
        badgeType: 'bestseller'
    },
    {
        id: 12,
        name: 'سبراي تثبيت المكياج',
        brand: 'Urban Decay',
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&q=80',
        oldPrice: 250,
        price: 210,
        specs: ['118ml', 'تثبيت', '16 ساعة'],
        rating: 4,
        reviews: 567,
        badge: '-16%',
        badgeType: 'sale'
    }
];


// Haircare Products Data (10-15 products)
const haircareProducts = [
    {
        id: 1,
        name: 'شامبو مغذي بالأرغان',
        brand: 'Kérastase',
        image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500&q=80',
        oldPrice: 280,
        price: 240,
        specs: ['250ml', 'مغذي', 'للشعر الجاف'],
        rating: 5,
        reviews: 345,
        badge: 'الأكثر مبيعاً',
        badgeType: 'bestseller'
    },
    {
        id: 2,
        name: 'بلسم إصلاح الشعر',
        brand: 'Olaplex',
        image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=500&q=80',
        oldPrice: 350,
        price: 299,
        specs: ['250ml', 'إصلاح', 'للشعر التالف'],
        rating: 5,
        reviews: 456,
        badge: '-15%',
        badgeType: 'sale'
    },
    {
        id: 3,
        name: 'زيت الشعر الفاخر',
        brand: 'Moroccanoil',
        image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&q=80',
        oldPrice: 220,
        price: 189,
        specs: ['100ml', 'لمعان', 'حماية'],
        rating: 5,
        reviews: 567,
        badge: 'الأكثر مبيعاً',
        badgeType: 'bestseller'
    },
    {
        id: 4,
        name: 'ماسك الشعر العميق',
        brand: 'Kérastase',
        image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=500&q=80',
        oldPrice: 380,
        price: 320,
        specs: ['200ml', 'ترطيب عميق', 'أسبوعي'],
        rating: 4,
        reviews: 234,
        badge: '-16%',
        badgeType: 'sale'
    },
    {
        id: 5,
        name: 'سيروم حماية الحرارة',
        brand: 'GHD',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80',
        oldPrice: 180,
        price: 155,
        specs: ['120ml', 'حماية', 'حتى 230°'],
        rating: 4,
        reviews: 189,
        badge: 'جديد',
        badgeType: 'new'
    },
    {
        id: 6,
        name: 'شامبو ضد القشرة',
        brand: 'Vichy',
        image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500&q=80',
        oldPrice: 150,
        price: 130,
        specs: ['200ml', 'علاجي', 'لفروة الرأس'],
        rating: 4,
        reviews: 312,
        badge: '-13%',
        badgeType: 'sale'
    },
    {
        id: 7,
        name: 'بخاخ تكثيف الشعر',
        brand: 'Oribe',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80',
        oldPrice: 320,
        price: 280,
        specs: ['175ml', 'تكثيف', 'حجم'],
        rating: 5,
        reviews: 145,
        badge: '-12%',
        badgeType: 'sale'
    },
    {
        id: 8,
        name: 'كريم تصفيف الشعر',
        brand: 'Moroccanoil',
        image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&q=80',
        oldPrice: 180,
        price: 155,
        specs: ['300ml', 'تصفيف', 'مرونة'],
        rating: 4,
        reviews: 234,
        badge: null,
        badgeType: null
    },
    {
        id: 9,
        name: 'شامبو للشعر المصبوغ',
        brand: 'Kérastase',
        image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500&q=80',
        oldPrice: 260,
        price: 220,
        specs: ['250ml', 'حماية اللون', 'لمعان'],
        rating: 5,
        reviews: 178,
        badge: '-15%',
        badgeType: 'sale'
    },
    {
        id: 10,
        name: 'سيروم أطراف الشعر',
        brand: 'Olaplex',
        image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=500&q=80',
        oldPrice: 280,
        price: 240,
        specs: ['30ml', 'إصلاح', 'للأطراف'],
        rating: 5,
        reviews: 289,
        badge: 'جديد',
        badgeType: 'new'
    },
    {
        id: 11,
        name: 'بلسم بدون شطف',
        brand: 'Oribe',
        image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=500&q=80',
        oldPrice: 250,
        price: 210,
        specs: ['150ml', 'ترطيب', 'يومي'],
        rating: 4,
        reviews: 167,
        badge: '-16%',
        badgeType: 'sale'
    }
];


// Fragrance Products Data (10-15 products)
const fragranceProducts = [
    {
        id: 1,
        name: 'عطر Miss Dior',
        brand: 'Dior',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&q=80',
        oldPrice: 650,
        price: 550,
        specs: ['100ml', 'أو دو بارفان', 'زهري'],
        rating: 5,
        reviews: 678,
        badge: 'الأكثر مبيعاً',
        badgeType: 'bestseller'
    },
    {
        id: 2,
        name: 'عطر Coco Mademoiselle',
        brand: 'Chanel',
        image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=500&q=80',
        oldPrice: 720,
        price: 650,
        specs: ['100ml', 'أو دو بارفان', 'شرقي'],
        rating: 5,
        reviews: 567,
        badge: '-10%',
        badgeType: 'sale'
    },
    {
        id: 3,
        name: 'عطر La Vie Est Belle',
        brand: 'Lancôme',
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&q=80',
        oldPrice: 580,
        price: 499,
        specs: ['75ml', 'أو دو بارفان', 'حلو'],
        rating: 5,
        reviews: 456,
        badge: '-14%',
        badgeType: 'sale'
    },
    {
        id: 4,
        name: 'عطر Black Opium',
        brand: 'YSL',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&q=80',
        oldPrice: 620,
        price: 540,
        specs: ['90ml', 'أو دو بارفان', 'قهوة وفانيلا'],
        rating: 5,
        reviews: 389,
        badge: 'الأكثر مبيعاً',
        badgeType: 'bestseller'
    },
    {
        id: 5,
        name: 'عطر Good Girl',
        brand: 'Carolina Herrera',
        image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=500&q=80',
        oldPrice: 550,
        price: 480,
        specs: ['80ml', 'أو دو بارفان', 'جريء'],
        rating: 4,
        reviews: 234,
        badge: '-13%',
        badgeType: 'sale'
    },
    {
        id: 6,
        name: 'عطر J\'adore',
        brand: 'Dior',
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&q=80',
        oldPrice: 680,
        price: 599,
        specs: ['100ml', 'أو دو بارفان', 'زهري فاخر'],
        rating: 5,
        reviews: 512,
        badge: '-12%',
        badgeType: 'sale'
    },
    {
        id: 7,
        name: 'عطر Chance',
        brand: 'Chanel',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&q=80',
        oldPrice: 590,
        price: 520,
        specs: ['100ml', 'أو دو تواليت', 'منعش'],
        rating: 4,
        reviews: 289,
        badge: 'جديد',
        badgeType: 'new'
    },
    {
        id: 8,
        name: 'عطر Flowerbomb',
        brand: 'Viktor & Rolf',
        image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=500&q=80',
        oldPrice: 520,
        price: 450,
        specs: ['100ml', 'أو دو بارفان', 'زهري حلو'],
        rating: 5,
        reviews: 345,
        badge: '-13%',
        badgeType: 'sale'
    },
    {
        id: 9,
        name: 'عطر Libre',
        brand: 'YSL',
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&q=80',
        oldPrice: 580,
        price: 499,
        specs: ['90ml', 'أو دو بارفان', 'لافندر'],
        rating: 4,
        reviews: 178,
        badge: 'جديد',
        badgeType: 'new'
    },
    {
        id: 10,
        name: 'عطر Idôle',
        brand: 'Lancôme',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&q=80',
        oldPrice: 480,
        price: 420,
        specs: ['75ml', 'أو دو بارفان', 'ورد'],
        rating: 4,
        reviews: 234,
        badge: '-12%',
        badgeType: 'sale'
    },
    {
        id: 11,
        name: 'عطر Mon Paris',
        brand: 'YSL',
        image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=500&q=80',
        oldPrice: 540,
        price: 470,
        specs: ['90ml', 'أو دو بارفان', 'رومانسي'],
        rating: 5,
        reviews: 312,
        badge: '-13%',
        badgeType: 'sale'
    },
    {
        id: 12,
        name: 'عطر Alien',
        brand: 'Mugler',
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&q=80',
        oldPrice: 450,
        price: 390,
        specs: ['60ml', 'أو دو بارفان', 'خشبي'],
        rating: 4,
        reviews: 189,
        badge: '-13%',
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
            <div class="empty-state">
                <p>لا توجد منتجات مطابقة للبحث</p>
                <button class="btn" onclick="resetFilters()">إعادة تعيين الفلاتر</button>
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
                <button class="action-btn tryon-btn" onclick="openTryOn(${product.id})" title="جربي">
                    جربي
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

// Current products reference for filtering
let currentProducts = [];

// Setup Filters
function setupFilters(allProducts) {
    currentProducts = allProducts;
    const brandFilter = document.getElementById('brandFilter');
    const priceFilter = document.getElementById('priceFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    function applyFilters() {
        let filtered = [...currentProducts];
        
        // Brand filter
        const brand = brandFilter.value;
        if (brand !== 'all') {
            filtered = filtered.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
        }
        
        // Price filter
        const price = priceFilter.value;
        if (price !== 'all') {
            if (price.includes('+')) {
                const min = parseInt(price.replace('+', ''));
                filtered = filtered.filter(p => p.price >= min);
            } else {
                const [min, max] = price.split('-').map(v => parseInt(v));
                filtered = filtered.filter(p => p.price >= min && p.price <= max);
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
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
                break;
        }
        
        renderProducts(filtered);
    }
    
    brandFilter.addEventListener('change', applyFilters);
    priceFilter.addEventListener('change', applyFilters);
    sortFilter.addEventListener('change', applyFilters);
}

// Reset Filters
function resetFilters() {
    document.getElementById('brandFilter').value = 'all';
    document.getElementById('priceFilter').value = 'all';
    document.getElementById('sortFilter').value = 'featured';
    renderProducts(currentProducts);
}


// Cart Functions
let cart = JSON.parse(localStorage.getItem('glamour_cart')) || [];

function addToCart(productId) {
    const allProducts = [...skincareProducts, ...makeupProducts, ...haircareProducts, ...fragranceProducts];
    const product = allProducts.find(p => p.id === productId);
    
    if (product) {
        const existingItem = cart.find(item => item.id === productId && item.name === product.name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('glamour_cart', JSON.stringify(cart));
        updateCartCount();
        showNotification('تمت الإضافة للسلة بنجاح!');
    }
}

function addToWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('glamour_wishlist')) || [];
    const allProducts = [...skincareProducts, ...makeupProducts, ...haircareProducts, ...fragranceProducts];
    const product = allProducts.find(p => p.id === productId);
    
    if (product) {
        const exists = wishlist.find(item => item.id === productId && item.name === product.name);
        if (!exists) {
            wishlist.push(product);
            localStorage.setItem('glamour_wishlist', JSON.stringify(wishlist));
            updateWishlistCount();
            showNotification('تمت الإضافة للمفضلة!');
        } else {
            showNotification('المنتج موجود بالفعل في المفضلة');
        }
    }
}

function openTryOn(productId) {
    // Will be implemented in virtual-tryon.js
    showNotification('ميزة التجربة الافتراضية قريباً!');
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const total = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = total;
    }
}

function updateWishlistCount() {
    const wishlistCount = document.querySelector('.wishlist-count');
    if (wishlistCount) {
        const wishlist = JSON.parse(localStorage.getItem('glamour_wishlist')) || [];
        wishlistCount.textContent = wishlist.length;
    }
}

function showNotification(message) {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        ${message}
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 400);
    }, 2500);
}

// Initialize counts on page load
document.addEventListener('DOMContentLoaded', () => {
    cart = JSON.parse(localStorage.getItem('glamour_cart')) || [];
    updateCartCount();
    updateWishlistCount();
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        skincareProducts,
        makeupProducts,
        haircareProducts,
        fragranceProducts,
        initCategory,
        renderProducts,
        setupFilters,
        resetFilters
    };
}
