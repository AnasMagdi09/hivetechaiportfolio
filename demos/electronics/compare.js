// Get compare list from localStorage
let compareList = JSON.parse(localStorage.getItem('compareList') || '[]');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderComparison();
});

// Render Comparison
function renderComparison() {
    const content = document.getElementById('compareContent');

    if (compareList.length === 0) {
        content.innerHTML = `
            <div class="empty-compare-page">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                <h2>لم تضف منتجات للمقارنة</h2>
                <p>قم بإضافة منتجات من الصفحة الرئيسية لبدء المقارنة</p>
                <a href="index.html#products" class="btn btn-primary">
                    <span>تصفح المنتجات</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </a>
            </div>
        `;
        return;
    }

    // Find best value (highest rating, lowest price ratio)
    const bestProduct = findBestProduct();

    // Check if mobile
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        // Mobile: Card layout
        content.innerHTML = `
            <div class="compare-cards-container">
                ${compareList.map((product) => {
            const value = calculateValue(product);
            const recommendation = getRecommendation(product);
            const isBest = product.id === bestProduct.id;

            return `
                        <div class="compare-card ${isBest ? 'best-product' : ''}">
                            ${isBest ? '<div class="winner-badge-card">🏆 الأفضل</div>' : ''}
                            <div class="compare-card-header">
                                <img src="${product.image}" alt="${product.name}" class="compare-card-image">
                                <div class="compare-card-title">
                                    <h3>${product.name}</h3>
                                    <div class="compare-card-price">${product.price} ر.س</div>
                                </div>
                            </div>
                            <div class="compare-card-body">
                                <div class="compare-row">
                                    <span class="compare-label">التقييم</span>
                                    <span class="compare-value">${'⭐'.repeat(product.rating)}</span>
                                </div>
                                <div class="compare-row">
                                    <span class="compare-label">الفئة</span>
                                    <span class="compare-value">${getCategoryName(product.category)}</span>
                                </div>
                                <div class="compare-row">
                                    <span class="compare-label">المواصفات</span>
                                    <span class="compare-value specs-value">
                                        ${product.specs.map(spec => `<span class="spec-badge-small">${spec}</span>`).join('')}
                                    </span>
                                </div>
                                <div class="compare-row">
                                    <span class="compare-label">الحالة</span>
                                    <span class="compare-value"><span class="spec-badge-small">${product.badge || 'متوفر'}</span></span>
                                </div>
                                <div class="compare-row">
                                    <span class="compare-label">القيمة</span>
                                    <span class="compare-value">${value}/10</span>
                                </div>
                                <div class="compare-row">
                                    <span class="compare-label">التوصية</span>
                                    <span class="compare-value">
                                        <span class="recommendation-badge" style="background: ${recommendation.color};">${recommendation.text}</span>
                                    </span>
                                </div>
                            </div>
                            <div class="compare-card-footer">
                                <button class="btn btn-primary" onclick="addToCart(${product.id})">
                                    أضف للسلة
                                </button>
                                <button class="btn btn-outline-danger" onclick="removeFromCompare(${product.id})">
                                    إزالة
                                </button>
                            </div>
                        </div>
                    `;
        }).join('')}
            </div>
        `;
    } else {
        // Desktop: Table layout
        content.innerHTML = `
            <div class="compare-table-wrapper">
                <table class="compare-table">
                    <thead>
                        <tr>
                            <th>المواصفات</th>
                            ${compareList.map((product, index) => `
                                <th class="product-col">
                                    ${product.id === bestProduct.id ? '<span class="winner-badge">🏆 الأفضل</span>' : ''}
                                    <img src="${product.image}" alt="${product.name}" class="product-image-compare">
                                    <div class="product-name-compare">${product.name}</div>
                                </th>
                            `).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>السعر</td>
                            ${compareList.map(product => `
                                <td><div class="product-price-compare">${product.price} ر.س</div></td>
                            `).join('')}
                        </tr>
                        <tr>
                            <td>التقييم</td>
                            ${compareList.map(product => `
                                <td><div class="rating-compare">${'⭐'.repeat(product.rating)}</div></td>
                            `).join('')}
                        </tr>
                        <tr>
                            <td>الفئة</td>
                            ${compareList.map(product => `
                                <td><span class="spec-value">${getCategoryName(product.category)}</span></td>
                            `).join('')}
                        </tr>
                        <tr>
                            <td>المواصفات</td>
                            ${compareList.map(product => `
                                <td>
                                    ${product.specs.map(spec => `<span class="spec-badge">${spec}</span>`).join('')}
                                </td>
                            `).join('')}
                        </tr>
                        <tr>
                            <td>الحالة</td>
                            ${compareList.map(product => `
                                <td><span class="spec-badge">${product.badge || 'متوفر'}</span></td>
                            `).join('')}
                        </tr>
                        <tr>
                            <td>القيمة مقابل السعر</td>
                            ${compareList.map(product => {
            const value = calculateValue(product);
            return `<td><span class="spec-value">${value}/10</span></td>`;
        }).join('')}
                        </tr>
                        <tr>
                            <td>التوصية</td>
                            ${compareList.map(product => {
            const recommendation = getRecommendation(product);
            return `<td><span class="spec-badge" style="background: ${recommendation.color}; border-color: ${recommendation.color}; color: white;">${recommendation.text}</span></td>`;
        }).join('')}
                        </tr>
                        <tr>
                            <td>الإجراء</td>
                            ${compareList.map(product => `
                                <td>
                                    <button class="btn btn-primary" style="padding: 0.7rem 1.5rem; font-size: 0.9rem;" onclick="addToCart(${product.id})">
                                        أضف للسلة
                                    </button>
                                </td>
                            `).join('')}
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }
}

// Remove from Compare
function removeFromCompare(productId) {
    compareList = compareList.filter(item => item.id !== productId);
    localStorage.setItem('compareList', JSON.stringify(compareList));
    renderComparison();
    showNotification('تم إزالة المنتج من المقارنة', 'info');
}

// Re-render on resize
window.addEventListener('resize', () => {
    renderComparison();
});

// Find Best Product
function findBestProduct() {
    return compareList.reduce((best, current) => {
        const bestValue = calculateValue(best);
        const currentValue = calculateValue(current);
        return currentValue > bestValue ? current : best;
    });
}

// Calculate Value Score
function calculateValue(product) {
    // Rating weight: 40%, Price weight: 30%, Specs count: 30%
    const ratingScore = (product.rating / 5) * 4;
    const priceScore = (1 - (product.price / 15000)) * 3; // Normalized to max price
    const specsScore = (product.specs.length / 5) * 3;
    return Math.round((ratingScore + priceScore + specsScore) * 10) / 10;
}

// Get Recommendation
function getRecommendation(product) {
    const value = calculateValue(product);
    if (value >= 8) {
        return { text: 'ممتاز جداً', color: '#10b981' };
    } else if (value >= 6) {
        return { text: 'جيد جداً', color: '#3b82f6' };
    } else if (value >= 4) {
        return { text: 'جيد', color: '#f59e0b' };
    } else {
        return { text: 'مقبول', color: '#6b7280' };
    }
}

// Get Category Name
function getCategoryName(category) {
    const names = {
        'smartphones': 'هواتف ذكية',
        'laptops': 'لابتوبات',
        'tablets': 'تابلت',
        'accessories': 'إكسسوارات'
    };
    return names[category] || category;
}

// Add to Cart
function addToCart(productId) {
    const product = compareList.find(p => p.id === productId);
    if (!product) return;

    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    showNotification('تم إضافة المنتج للسلة', 'success');
}

// Clear Comparison
function clearComparison() {
    if (confirm('هل أنت متأكد من مسح جميع المنتجات من المقارنة؟')) {
        localStorage.removeItem('compareList');
        compareList = [];
        renderComparison();
        showNotification('تم مسح المقارنة', 'info');
    }
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
