// Virtual Try-On JavaScript

// Shade Colors Data
const lipstickShades = [
    { id: 1, name: 'أحمر كلاسيكي', color: '#c41e3a' },
    { id: 2, name: 'وردي ناعم', color: '#e8a0a0' },
    { id: 3, name: 'برتقالي مرجاني', color: '#ff6b6b' },
    { id: 4, name: 'بيري', color: '#8b4557' },
    { id: 5, name: 'نود', color: '#c9a0a0' },
    { id: 6, name: 'فوشيا', color: '#ff1493' },
    { id: 7, name: 'بني محمر', color: '#8b0000' },
    { id: 8, name: 'وردي فاتح', color: '#ffb6c1' }
];

const blushShades = [
    { id: 1, name: 'خوخي', color: '#ffcba4' },
    { id: 2, name: 'وردي', color: '#ffb6c1' },
    { id: 3, name: 'مرجاني', color: '#ff7f7f' },
    { id: 4, name: 'برونزي', color: '#cd853f' },
    { id: 5, name: 'بيري', color: '#c9a0dc' },
    { id: 6, name: 'طبيعي', color: '#deb887' }
];

const eyeshadowShades = [
    { id: 1, name: 'ذهبي', color: '#ffd700' },
    { id: 2, name: 'برونزي', color: '#cd7f32' },
    { id: 3, name: 'بني', color: '#8b4513' },
    { id: 4, name: 'وردي', color: '#dda0dd' },
    { id: 5, name: 'بنفسجي', color: '#9370db' },
    { id: 6, name: 'أخضر', color: '#2e8b57' },
    { id: 7, name: 'أزرق', color: '#4169e1' },
    { id: 8, name: 'فضي', color: '#c0c0c0' }
];

// Virtual Try-On State
let tryOnState = {
    isOpen: false,
    stream: null,
    selectedType: 'lipstick',
    selectedShade: null,
    intensity: 70
};

// Create Modal HTML
function createTryOnModal() {
    const modalHTML = `
        <div class="tryon-modal-overlay" id="tryonModal">
            <div class="tryon-modal">
                <div class="tryon-header">
                    <h2>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                            <circle cx="12" cy="13" r="3"/>
                        </svg>
                        التجربة الافتراضية
                    </h2>
                    <button class="tryon-close" onclick="closeTryOn()">×</button>
                </div>
                <div class="tryon-body">
                    <div class="tryon-camera-section" id="cameraSection">
                        <div class="camera-placeholder" id="cameraPlaceholder">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                                <circle cx="12" cy="13" r="3"/>
                            </svg>
                            <p>اضغطي لتفعيل الكاميرا وتجربة المنتجات</p>
                            <button class="btn" onclick="startCamera()">تفعيل الكاميرا</button>
                        </div>
                        <video id="tryonVideo" class="tryon-video" autoplay playsinline style="display: none;"></video>
                        <canvas id="tryonCanvas" class="tryon-canvas" style="display: none;"></canvas>
                    </div>
                    <div class="tryon-controls">
                        <div class="control-section">
                            <h3>نوع المنتج</h3>
                            <div class="product-types">
                                <button class="product-type-btn active" data-type="lipstick" onclick="selectProductType('lipstick')">أحمر شفاه</button>
                                <button class="product-type-btn" data-type="blush" onclick="selectProductType('blush')">بلاشر</button>
                                <button class="product-type-btn" data-type="eyeshadow" onclick="selectProductType('eyeshadow')">ظلال عيون</button>
                            </div>
                        </div>
                        <div class="control-section">
                            <h3>اختاري اللون</h3>
                            <div class="shade-grid" id="shadeGrid"></div>
                        </div>
                        <div class="control-section">
                            <h3>شدة اللون</h3>
                            <div class="intensity-slider">
                                <input type="range" min="20" max="100" value="70" id="intensitySlider" oninput="updateIntensity(this.value)">
                                <div class="intensity-label">
                                    <span>خفيف</span>
                                    <span>قوي</span>
                                </div>
                            </div>
                        </div>
                        <div class="tryon-actions">
                            <button class="tryon-btn capture" onclick="capturePhoto()">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <circle cx="12" cy="12" r="3"/>
                                </svg>
                                التقاط صورة
                            </button>
                            <button class="tryon-btn reset" onclick="resetTryOn()">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                                    <path d="M3 3v5h5"/>
                                </svg>
                                إعادة تعيين
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    renderShades('lipstick');
}

// Open Try-On Modal
function openTryOn(productId) {
    if (!document.getElementById('tryonModal')) {
        createTryOnModal();
    }
    
    const modal = document.getElementById('tryonModal');
    modal.classList.add('active');
    tryOnState.isOpen = true;
    document.body.style.overflow = 'hidden';
}

// Close Try-On Modal
function closeTryOn() {
    const modal = document.getElementById('tryonModal');
    modal.classList.remove('active');
    tryOnState.isOpen = false;
    document.body.style.overflow = '';
    
    // Stop camera
    if (tryOnState.stream) {
        tryOnState.stream.getTracks().forEach(track => track.stop());
        tryOnState.stream = null;
    }
}

// Start Camera
async function startCamera() {
    const placeholder = document.getElementById('cameraPlaceholder');
    const video = document.getElementById('tryonVideo');
    const canvas = document.getElementById('tryonCanvas');
    
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'user', width: 640, height: 480 }
        });
        
        tryOnState.stream = stream;
        video.srcObject = stream;
        
        placeholder.style.display = 'none';
        video.style.display = 'block';
        canvas.style.display = 'block';
        
        // Start rendering loop
        video.onloadedmetadata = () => {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            renderLoop();
        };
        
    } catch (error) {
        console.error('Camera error:', error);
        placeholder.innerHTML = `
            <div class="camera-error">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
                <p>لم نتمكن من الوصول للكاميرا</p>
                <p style="font-size: 0.85rem; opacity: 0.7;">يرجى السماح بالوصول للكاميرا من إعدادات المتصفح</p>
            </div>
        `;
    }
}

// Render Loop for Canvas Effects
function renderLoop() {
    if (!tryOnState.isOpen || !tryOnState.stream) return;
    
    const video = document.getElementById('tryonVideo');
    const canvas = document.getElementById('tryonCanvas');
    const ctx = canvas.getContext('2d');
    
    // Draw video frame (mirrored)
    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(video, -canvas.width, 0, canvas.width, canvas.height);
    ctx.restore();
    
    // Apply color overlay if shade selected
    if (tryOnState.selectedShade) {
        applyColorEffect(ctx, canvas);
    }
    
    requestAnimationFrame(renderLoop);
}

// Apply Color Effect (Simplified simulation)
function applyColorEffect(ctx, canvas) {
    const shade = tryOnState.selectedShade;
    const intensity = tryOnState.intensity / 100;
    
    // Create a semi-transparent overlay
    ctx.globalCompositeOperation = 'multiply';
    ctx.globalAlpha = intensity * 0.3;
    
    // Different effect areas based on product type
    if (tryOnState.selectedType === 'lipstick') {
        // Lip area simulation (center-bottom of face)
        const lipX = canvas.width * 0.35;
        const lipY = canvas.height * 0.65;
        const lipW = canvas.width * 0.3;
        const lipH = canvas.height * 0.08;
        
        ctx.fillStyle = shade.color;
        ctx.beginPath();
        ctx.ellipse(lipX + lipW/2, lipY, lipW/2, lipH/2, 0, 0, Math.PI * 2);
        ctx.fill();
    } else if (tryOnState.selectedType === 'blush') {
        // Cheek areas
        ctx.fillStyle = shade.color;
        // Left cheek
        ctx.beginPath();
        ctx.ellipse(canvas.width * 0.25, canvas.height * 0.45, 40, 30, 0, 0, Math.PI * 2);
        ctx.fill();
        // Right cheek
        ctx.beginPath();
        ctx.ellipse(canvas.width * 0.75, canvas.height * 0.45, 40, 30, 0, 0, Math.PI * 2);
        ctx.fill();
    } else if (tryOnState.selectedType === 'eyeshadow') {
        // Eye areas
        ctx.fillStyle = shade.color;
        // Left eye
        ctx.beginPath();
        ctx.ellipse(canvas.width * 0.35, canvas.height * 0.35, 35, 15, 0, 0, Math.PI * 2);
        ctx.fill();
        // Right eye
        ctx.beginPath();
        ctx.ellipse(canvas.width * 0.65, canvas.height * 0.35, 35, 15, 0, 0, Math.PI * 2);
        ctx.fill();
    }
    
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
}

// Select Product Type
function selectProductType(type) {
    tryOnState.selectedType = type;
    tryOnState.selectedShade = null;
    
    // Update buttons
    document.querySelectorAll('.product-type-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.type === type);
    });
    
    renderShades(type);
}

// Render Shade Options
function renderShades(type) {
    const grid = document.getElementById('shadeGrid');
    let shades;
    
    switch(type) {
        case 'lipstick': shades = lipstickShades; break;
        case 'blush': shades = blushShades; break;
        case 'eyeshadow': shades = eyeshadowShades; break;
        default: shades = lipstickShades;
    }
    
    grid.innerHTML = shades.map(shade => `
        <button class="shade-btn" 
                style="background: ${shade.color};" 
                title="${shade.name}"
                onclick="selectShade(${shade.id}, '${shade.color}', '${shade.name}')">
        </button>
    `).join('');
}

// Select Shade
function selectShade(id, color, name) {
    tryOnState.selectedShade = { id, color, name };
    
    // Update UI
    document.querySelectorAll('.shade-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    showNotification(`تم اختيار: ${name}`);
}

// Update Intensity
function updateIntensity(value) {
    tryOnState.intensity = parseInt(value);
}

// Capture Photo
function capturePhoto() {
    const canvas = document.getElementById('tryonCanvas');
    
    if (!tryOnState.stream) {
        showNotification('يرجى تفعيل الكاميرا أولاً');
        return;
    }
    
    // Create download link
    const link = document.createElement('a');
    link.download = `glamour-tryon-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    
    showNotification('تم حفظ الصورة بنجاح!');
}

// Reset Try-On
function resetTryOn() {
    tryOnState.selectedShade = null;
    tryOnState.intensity = 70;
    
    document.getElementById('intensitySlider').value = 70;
    document.querySelectorAll('.shade-btn').forEach(btn => btn.classList.remove('active'));
    
    showNotification('تم إعادة التعيين');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add link to CSS if not already added
    if (!document.querySelector('link[href="virtual-tryon.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'virtual-tryon.css';
        document.head.appendChild(link);
    }
});

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && tryOnState.isOpen) {
        closeTryOn();
    }
});
