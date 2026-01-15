// Beauty Blog JavaScript

// Blog Posts Data
const blogPosts = [
    {
        id: 1,
        title: '10 خطوات للحصول على بشرة مشرقة',
        excerpt: 'اكتشفي الروتين اليومي المثالي للعناية بالبشرة والحصول على إشراقة طبيعية تدوم طوال اليوم.',
        content: `
            <p>العناية بالبشرة ليست مجرد روتين، بل هي استثمار في جمالك وصحتك. في هذا المقال، سنشاركك 10 خطوات أساسية للحصول على بشرة مشرقة وصحية.</p>
            
            <h2>1. التنظيف المزدوج</h2>
            <p>ابدئي بمنظف زيتي لإزالة المكياج والأوساخ، ثم استخدمي غسول مائي لتنظيف عميق. هذه الطريقة تضمن نظافة البشرة دون تجريدها من زيوتها الطبيعية.</p>
            
            <h2>2. التونر</h2>
            <p>التونر يساعد على موازنة درجة حموضة البشرة وتحضيرها لامتصاص المنتجات التالية بشكل أفضل.</p>
            
            <h2>3. السيروم</h2>
            <p>اختاري سيروم يناسب احتياجات بشرتك - فيتامين سي للإشراق، أو حمض الهيالورونيك للترطيب.</p>
            
            <h2>4. كريم العين</h2>
            <p>منطقة العين حساسة وتحتاج عناية خاصة. استخدمي كريم عين مرطب ومضاد للتجاعيد.</p>
            
            <h2>5. المرطب</h2>
            <p>الترطيب أساسي لجميع أنواع البشرة. اختاري مرطباً يناسب نوع بشرتك.</p>
        `,
        featuredImage: 'https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=800&q=80',
        category: 'نصائح العناية بالبشرة',
        categorySlug: 'skincare-tips',
        date: '15 ديسمبر 2024',
        author: 'د. سارة الأحمد',
        readTime: '5 دقائق'
    },
    {
        id: 2,
        title: 'دليلك الشامل لمكياج السهرات',
        excerpt: 'تعلمي أسرار المكياج الاحترافي للمناسبات الخاصة مع نصائح من خبراء التجميل.',
        content: `
            <p>المكياج فن يمكن لأي شخص إتقانه مع الممارسة والمعرفة الصحيحة. إليك دليلك الشامل لمكياج سهرات مثالي.</p>
            
            <h2>التحضير</h2>
            <p>البشرة المرطبة والممهدة هي أساس أي مكياج ناجح. استخدمي برايمر مناسب لنوع بشرتك.</p>
            
            <h2>كريم الأساس</h2>
            <p>اختاري درجة تطابق لون بشرتك تماماً. للسهرات، يمكنك استخدام كريم أساس بتغطية متوسطة إلى كاملة.</p>
            
            <h2>الكونتور والهايلايت</h2>
            <p>النحت يضيف بعداً لوجهك. استخدمي الكونتور لتحديد ملامحك والهايلايت لإبراز النقاط العالية.</p>
        `,
        featuredImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80',
        category: 'دروس المكياج',
        categorySlug: 'makeup-tutorials',
        date: '12 ديسمبر 2024',
        author: 'ليلى حسن',
        readTime: '7 دقائق'
    },
    {
        id: 3,
        title: 'أسرار الشعر الصحي واللامع',
        excerpt: 'اكتشفي العادات اليومية والمنتجات المثالية للحصول على شعر قوي ولامع.',
        content: `
            <p>الشعر الصحي يبدأ من فروة الرأس. تعرفي على أهم النصائح للعناية بشعرك.</p>
            
            <h2>التغذية السليمة</h2>
            <p>الشعر يحتاج للبروتين والفيتامينات. تأكدي من تناول غذاء متوازن غني بالحديد والزنك وفيتامين B.</p>
            
            <h2>الترطيب العميق</h2>
            <p>استخدمي ماسك مرطب مرة أسبوعياً على الأقل. زيت الأرغان وزيت جوز الهند من أفضل الخيارات.</p>
            
            <h2>الحماية من الحرارة</h2>
            <p>قبل استخدام أي أداة حرارية، ضعي سيروم حماية لتجنب تلف الشعر.</p>
        `,
        featuredImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
        category: 'العناية بالشعر',
        categorySlug: 'haircare',
        date: '10 ديسمبر 2024',
        author: 'نورة العتيبي',
        readTime: '4 دقائق'
    },
    {
        id: 4,
        title: 'كيف تختارين العطر المناسب لك',
        excerpt: 'دليل شامل لفهم عائلات العطور واختيار الرائحة التي تعكس شخصيتك.',
        content: `
            <p>العطر هو توقيعك الشخصي. تعلمي كيف تختارين العطر المثالي الذي يعكس شخصيتك.</p>
            
            <h2>عائلات العطور</h2>
            <p>العطور تنقسم إلى عائلات: الزهرية، الشرقية، الخشبية، والمنعشة. كل عائلة لها طابعها الخاص.</p>
            
            <h2>اختبار العطر</h2>
            <p>جربي العطر على بشرتك وانتظري ساعة على الأقل. العطر يتفاعل مع كيمياء جسمك ويتغير مع الوقت.</p>
            
            <h2>المناسبة</h2>
            <p>اختاري عطوراً خفيفة للنهار وعطوراً أقوى للمساء والمناسبات الخاصة.</p>
        `,
        featuredImage: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80',
        category: 'العطور',
        categorySlug: 'fragrance',
        date: '8 ديسمبر 2024',
        author: 'هند الشمري',
        readTime: '6 دقائق'
    },
    {
        id: 5,
        title: 'روتين العناية الليلية المثالي',
        excerpt: 'استفيدي من ساعات النوم لتجديد بشرتك مع روتين ليلي فعال.',
        content: `
            <p>الليل هو الوقت المثالي لإصلاح وتجديد البشرة. إليك الروتين الليلي المثالي.</p>
            
            <h2>إزالة المكياج</h2>
            <p>لا تنامي أبداً بالمكياج! استخدمي مزيل مكياج لطيف ثم اغسلي وجهك جيداً.</p>
            
            <h2>العلاجات المركزة</h2>
            <p>الليل هو الوقت المثالي لاستخدام الريتينول والأحماض. هذه المكونات تعمل بشكل أفضل في الظلام.</p>
            
            <h2>الترطيب المكثف</h2>
            <p>استخدمي كريم ليلي غني لترطيب عميق أثناء النوم.</p>
        `,
        featuredImage: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
        category: 'نصائح العناية بالبشرة',
        categorySlug: 'skincare-tips',
        date: '5 ديسمبر 2024',
        author: 'د. سارة الأحمد',
        readTime: '5 دقائق'
    },
    {
        id: 6,
        title: 'ألوان المكياج المناسبة لكل بشرة',
        excerpt: 'تعرفي على الألوان التي تبرز جمالك الطبيعي حسب لون بشرتك.',
        content: `
            <p>اختيار الألوان المناسبة يمكن أن يحدث فرقاً كبيراً في إطلالتك. تعرفي على الألوان المثالية لبشرتك.</p>
            
            <h2>البشرة الفاتحة</h2>
            <p>الألوان الوردية والخوخية تناسبك. تجنبي الألوان الداكنة جداً التي قد تبدو قاسية.</p>
            
            <h2>البشرة المتوسطة</h2>
            <p>أنت محظوظة! معظم الألوان تناسبك. جربي البرونزي والمرجاني والبني الدافئ.</p>
            
            <h2>البشرة الداكنة</h2>
            <p>الألوان الجريئة مثل البرتقالي والأحمر والذهبي تبرز جمالك بشكل رائع.</p>
        `,
        featuredImage: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=800&q=80',
        category: 'دروس المكياج',
        categorySlug: 'makeup-tutorials',
        date: '3 ديسمبر 2024',
        author: 'ليلى حسن',
        readTime: '6 دقائق'
    }
];

// Blog Categories
const blogCategories = [
    { slug: 'all', name: 'الكل' },
    { slug: 'skincare-tips', name: 'نصائح العناية بالبشرة' },
    { slug: 'makeup-tutorials', name: 'دروس المكياج' },
    { slug: 'haircare', name: 'العناية بالشعر' },
    { slug: 'fragrance', name: 'العطور' }
];

let currentCategory = 'all';

// Initialize Blog
function initBlog() {
    renderCategories();
    renderPosts(blogPosts);
}

// Render Categories
function renderCategories() {
    const container = document.getElementById('blogFilters');
    if (!container) return;
    
    container.innerHTML = blogCategories.map(cat => `
        <button class="filter-btn ${cat.slug === 'all' ? 'active' : ''}" 
                data-category="${cat.slug}"
                onclick="filterByCategory('${cat.slug}')">
            ${cat.name}
        </button>
    `).join('');
}

// Filter by Category
function filterByCategory(category) {
    currentCategory = category;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
    
    // Filter posts
    const filtered = category === 'all' 
        ? blogPosts 
        : blogPosts.filter(post => post.categorySlug === category);
    
    renderPosts(filtered);
}

// Render Posts
function renderPosts(posts) {
    const grid = document.getElementById('blogGrid');
    if (!grid) return;
    
    if (posts.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem;">
                <p style="color: #888; font-size: 1.2rem;">لا توجد مقالات في هذه الفئة</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = posts.map(post => `
        <article class="blog-card" onclick="openArticle(${post.id})">
            <div class="blog-image">
                <img src="${post.featuredImage}" alt="${post.title}" loading="lazy">
                <span class="blog-category-tag">${post.category}</span>
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        ${post.date}
                    </span>
                    <span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        ${post.readTime}
                    </span>
                </div>
                <h2 class="blog-title">${post.title}</h2>
                <p class="blog-excerpt">${post.excerpt}</p>
                <span class="blog-read-more">
                    اقرأي المزيد
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                    </svg>
                </span>
            </div>
        </article>
    `).join('');
    
    // Add animation
    const cards = grid.querySelectorAll('.blog-card');
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

// Open Article Modal
function openArticle(id) {
    const post = blogPosts.find(p => p.id === id);
    if (!post) return;
    
    // Create modal if not exists
    if (!document.getElementById('articleModal')) {
        createArticleModal();
    }
    
    const modal = document.getElementById('articleModal');
    const modalContent = modal.querySelector('.article-modal');
    
    modalContent.innerHTML = `
        <div class="article-modal-header">
            <img src="${post.featuredImage}" alt="${post.title}">
            <button class="article-modal-close" onclick="closeArticle()">×</button>
        </div>
        <div class="article-modal-body">
            <span class="article-category">${post.category}</span>
            <h1 class="article-title" style="font-family: 'Playfair Display', serif; font-size: 2rem; color: var(--light); margin-bottom: 1rem;">${post.title}</h1>
            <div class="article-meta" style="display: flex; gap: 2rem; margin-bottom: 2rem; color: #888; font-family: 'Cairo', sans-serif;">
                <span>${post.date}</span>
                <span>${post.author}</span>
                <span>${post.readTime} قراءة</span>
            </div>
            <div class="article-content">
                ${post.content}
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Create Article Modal
function createArticleModal() {
    const modalHTML = `
        <div class="article-modal-overlay" id="articleModal">
            <div class="article-modal"></div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Close on overlay click
    document.getElementById('articleModal').addEventListener('click', (e) => {
        if (e.target.classList.contains('article-modal-overlay')) {
            closeArticle();
        }
    });
}

// Close Article Modal
function closeArticle() {
    const modal = document.getElementById('articleModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close on escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeArticle();
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', initBlog);
