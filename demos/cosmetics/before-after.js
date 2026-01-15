// Before & After Gallery JavaScript

// Gallery Data
const beforeAfterData = [
    {
        id: 1,
        beforeImage: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=600&q=80',
        afterImage: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80',
        productName: 'سيروم فيتامين سي',
        category: 'العناية بالبشرة',
        testimonial: 'بعد استخدام السيروم لمدة شهر، لاحظت فرقاً كبيراً في إشراقة بشرتي وتوحيد لونها.',
        userName: 'سارة أحمد',
        duration: 'بعد 4 أسابيع'
    },
    {
        id: 2,
        beforeImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
        afterImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80',
        productName: 'زيت الأرغان للشعر',
        category: 'العناية بالشعر',
        testimonial: 'شعري أصبح أكثر لمعاناً ونعومة بعد استخدام الزيت بانتظام.',
        userName: 'نورة محمد',
        duration: 'بعد 6 أسابيع'
    },
    {
        id: 3,
        beforeImage: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&q=80',
        afterImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80',
        productName: 'كريم أساس Dior',
        category: 'المكياج',
        testimonial: 'تغطية مثالية وطبيعية تدوم طوال اليوم دون أن تبدو ثقيلة.',
        userName: 'ريم خالد',
        duration: 'نتيجة فورية'
    },
    {
        id: 4,
        beforeImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80',
        afterImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80',
        productName: 'كريم مرطب La Mer',
        category: 'العناية بالبشرة',
        testimonial: 'بشرتي الجافة تحولت إلى بشرة ناعمة ومرطبة بشكل مذهل.',
        userName: 'هند عبدالله',
        duration: 'بعد 3 أسابيع'
    },
    {
        id: 5,
        beforeImage: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=600&q=80',
        afterImage: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=600&q=80',
        productName: 'علاج Olaplex للشعر',
        category: 'العناية بالشعر',
        testimonial: 'شعري التالف من الصبغات عاد إلى حيويته وقوته.',
        userName: 'لمى سعود',
        duration: 'بعد 8 أسابيع'
    },
    {
        id: 6,
        beforeImage: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80',
        afterImage: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=600&q=80',
        productName: 'ماسك الوجه بالذهب',
        category: 'العناية بالبشرة',
        testimonial: 'نضارة فورية وترطيب عميق، أصبح جزءاً أساسياً من روتيني الأسبوعي.',
        userName: 'دانة فهد',
        duration: 'نتيجة فورية'
    }
];

// Initialize Gallery
function initGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;
    
    grid.innerHTML = beforeAfterData.map(item => `
        <div class="gallery-item" onclick="openGalleryModal(${item.id})">
            <div class="comparison-container" data-id="${item.id}">
                <img src="${item.beforeImage}" alt="قبل" class="comparison-image before">
                <img src="${item.afterImage}" alt="بعد" class="comparison-image after">
                <div class="comparison-slider"></div>
                <div class="comparison-labels">
                    <span class="comparison-label before-label">قبل</span>
                    <span class="comparison-label after-label">بعد</span>
                </div>
            </div>
            <div class="gallery-info">
                <h3 class="gallery-product">${item.productName}</h3>
                <span class="gallery-category">${item.category}</span>
                <p class="gallery-testimonial">"${item.testimonial}"</p>
                <div class="gallery-user">
                    <div class="user-avatar">${item.userName.charAt(0)}</div>
                    <div class="user-info">
                        <div class="user-name">${item.userName}</div>
                        <div class="user-duration">${item.duration}</div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Initialize sliders
    initComparisonSliders();
}

// Initialize Comparison Sliders
function initComparisonSliders() {
    document.querySelectorAll('.comparison-container').forEach(container => {
        const slider = container.querySelector('.comparison-slider');
        const afterImage = container.querySelector('.comparison-image.after');
        let isDragging = false;
        
        const updateSlider = (x) => {
            const rect = container.getBoundingClientRect();
            let percentage = ((x - rect.left) / rect.width) * 100;
            percentage = Math.max(0, Math.min(100, percentage));
            
            slider.style.left = `${percentage}%`;
            afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
        };
        
        slider.addEventListener('mousedown', (e) => {
            isDragging = true;
            e.preventDefault();
        });
        
        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                updateSlider(e.clientX);
            }
        });
        
        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
        
        // Touch support
        slider.addEventListener('touchstart', (e) => {
            isDragging = true;
        });
        
        document.addEventListener('touchmove', (e) => {
            if (isDragging) {
                updateSlider(e.touches[0].clientX);
            }
        });
        
        document.addEventListener('touchend', () => {
            isDragging = false;
        });
        
        // Hover effect
        container.addEventListener('mousemove', (e) => {
            if (!isDragging) {
                updateSlider(e.clientX);
            }
        });
    });
}

// Open Gallery Modal
function openGalleryModal(id) {
    const item = beforeAfterData.find(i => i.id === id);
    if (!item) return;
    
    // Create modal if not exists
    if (!document.getElementById('galleryModal')) {
        createGalleryModal();
    }
    
    const modal = document.getElementById('galleryModal');
    const modalBody = modal.querySelector('.modal-body');
    
    modalBody.innerHTML = `
        <div class="modal-comparison" data-id="${item.id}">
            <img src="${item.beforeImage}" alt="قبل" class="comparison-image before">
            <img src="${item.afterImage}" alt="بعد" class="comparison-image after">
            <div class="comparison-slider"></div>
            <div class="comparison-labels">
                <span class="comparison-label before-label">قبل</span>
                <span class="comparison-label after-label">بعد</span>
            </div>
        </div>
        <div class="modal-info">
            <h3 class="gallery-product">${item.productName}</h3>
            <span class="gallery-category">${item.category}</span>
            <p class="gallery-testimonial">"${item.testimonial}"</p>
            <div class="gallery-user" style="justify-content: center;">
                <div class="user-avatar">${item.userName.charAt(0)}</div>
                <div class="user-info">
                    <div class="user-name">${item.userName}</div>
                    <div class="user-duration">${item.duration}</div>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Initialize modal slider
    setTimeout(() => {
        initModalSlider();
    }, 100);
}

// Create Gallery Modal
function createGalleryModal() {
    const modalHTML = `
        <div class="gallery-modal-overlay" id="galleryModal">
            <div class="gallery-modal">
                <div class="modal-header">
                    <h3>تفاصيل النتيجة</h3>
                    <button class="modal-close" onclick="closeGalleryModal()">×</button>
                </div>
                <div class="modal-body"></div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Initialize Modal Slider
function initModalSlider() {
    const container = document.querySelector('.modal-comparison');
    if (!container) return;
    
    const slider = container.querySelector('.comparison-slider');
    const afterImage = container.querySelector('.comparison-image.after');
    let isDragging = false;
    
    const updateSlider = (x) => {
        const rect = container.getBoundingClientRect();
        let percentage = ((x - rect.left) / rect.width) * 100;
        percentage = Math.max(0, Math.min(100, percentage));
        
        slider.style.left = `${percentage}%`;
        afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    };
    
    container.addEventListener('mousemove', (e) => {
        updateSlider(e.clientX);
    });
    
    container.addEventListener('touchmove', (e) => {
        updateSlider(e.touches[0].clientX);
    });
}

// Close Gallery Modal
function closeGalleryModal() {
    const modal = document.getElementById('galleryModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close on escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeGalleryModal();
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', initGallery);
