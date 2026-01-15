// Initialize Comparison Sliders for Before/After
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
        
        // Mouse events
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
        
        // Touch events
        slider.addEventListener('touchstart', (e) => {
            isDragging = true;
            e.preventDefault();
        });
        
        document.addEventListener('touchmove', (e) => {
            if (isDragging && e.touches[0]) {
                updateSlider(e.touches[0].clientX);
            }
        });
        
        document.addEventListener('touchend', () => {
            isDragging = false;
        });
        
        // Hover effect - move slider on mouse move
        container.addEventListener('mousemove', (e) => {
            if (!isDragging) {
                updateSlider(e.clientX);
            }
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initComparisonSliders();
});
