// AI Brain Scan Effect for About Page
class AIBrain {
    constructor() {
        this.container = null;
        this.canvas = null;
        this.ctx = null;
        this.centerX = 0;
        this.centerY = 0;
        this.waves = [];
        this.techWords = [
            'Websites',
            'Chatbots',
            'Customized Solutions',
            'ERP Systems',
            'AI Agents'
        ];
        this.visibleWords = [];
        this.scrollProgress = 0;
        this.pulsePhase = 0;
        this.init();
    }

    init() {
        // Don't initialize on mobile
        if (window.innerWidth <= 768) {
            return;
        }
        
        this.createContainer();
        this.createCanvas();
        this.setupEventListeners();
        this.animate();
    }

    createContainer() {
        // Adjust position based on screen width
        const screenWidth = window.innerWidth;
        let leftPosition = '60px';
        let containerSize = '300px';
        
        // On medium screens, move closer to edge and make smaller
        if (screenWidth >= 1024 && screenWidth <= 1440) {
            leftPosition = '30px';
            containerSize = '250px';
        }
        
        this.container = document.createElement('div');
        this.container.id = 'ai-brain-container';
        this.container.style.cssText = `
            position: fixed;
            left: ${leftPosition};
            top: 50%;
            transform: translateY(-50%);
            width: ${containerSize};
            height: ${containerSize};
            z-index: 50;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.5s ease;
        `;
        document.body.appendChild(this.container);
    }

    createCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.width = 300;
        this.canvas.height = 300;
        this.canvas.style.cssText = `
            width: 100%;
            height: 100%;
        `;
        this.container.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.centerX = this.canvas.width / 2;
        this.centerY = this.canvas.height / 2;
    }

    setupEventListeners() {
        window.addEventListener('scroll', () => this.handleScroll());
        this.handleScroll();
    }

    handleScroll() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        this.scrollProgress = Math.min(scrollTop / docHeight, 1);

        // Show/hide based on scroll
        if (scrollTop > 100) {
            this.container.style.opacity = '1';
        } else {
            this.container.style.opacity = '0';
        }

        // Update visible words based on scroll
        const wordsToShow = Math.floor(this.scrollProgress * this.techWords.length) + 1;
        this.visibleWords = this.techWords.slice(0, Math.min(wordsToShow, this.techWords.length));
    }

    drawBrain() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw pulsing waves
        const numWaves = 5;
        const maxRadius = 120;
        const baseRadius = 30;

        for (let i = 0; i < numWaves; i++) {
            const waveOffset = (this.pulsePhase + i * 0.5) % 3;
            const radius = baseRadius + (waveOffset / 3) * (maxRadius - baseRadius);
            const alpha = 1 - (waveOffset / 3);

            // Wave circle
            this.ctx.beginPath();
            this.ctx.arc(this.centerX, this.centerY, radius, 0, Math.PI * 2);
            
            const gradient = this.ctx.createRadialGradient(
                this.centerX, this.centerY, radius - 10,
                this.centerX, this.centerY, radius + 10
            );
            gradient.addColorStop(0, `rgba(99, 102, 241, 0)`);
            gradient.addColorStop(0.5, `rgba(139, 92, 246, ${alpha * 0.6})`);
            gradient.addColorStop(1, `rgba(236, 72, 153, 0)`);
            
            this.ctx.strokeStyle = gradient;
            this.ctx.lineWidth = 3;
            this.ctx.stroke();
        }

        // Draw center brain icon
        this.drawCenterBrain();

        // Draw tech words
        this.drawTechWords();

        // Update pulse phase based on scroll
        this.pulsePhase += 0.03 + (this.scrollProgress * 0.05);
    }

    drawCenterBrain() {
        const pulse = Math.sin(this.pulsePhase * 2) * 5;
        const radius = 25 + pulse;

        // Glow effect
        const glowGradient = this.ctx.createRadialGradient(
            this.centerX, this.centerY, 0,
            this.centerX, this.centerY, radius + 20
        );
        glowGradient.addColorStop(0, 'rgba(139, 92, 246, 0.8)');
        glowGradient.addColorStop(0.5, 'rgba(99, 102, 241, 0.4)');
        glowGradient.addColorStop(1, 'rgba(99, 102, 241, 0)');

        this.ctx.beginPath();
        this.ctx.arc(this.centerX, this.centerY, radius + 15, 0, Math.PI * 2);
        this.ctx.fillStyle = glowGradient;
        this.ctx.fill();

        // Main circle
        const mainGradient = this.ctx.createLinearGradient(
            this.centerX - radius, this.centerY - radius,
            this.centerX + radius, this.centerY + radius
        );
        mainGradient.addColorStop(0, '#6366f1');
        mainGradient.addColorStop(0.5, '#8b5cf6');
        mainGradient.addColorStop(1, '#ec4899');

        this.ctx.beginPath();
        this.ctx.arc(this.centerX, this.centerY, radius, 0, Math.PI * 2);
        this.ctx.fillStyle = mainGradient;
        this.ctx.fill();

        // Brain icon (simplified)
        this.ctx.fillStyle = '#ffffff';
        this.ctx.font = `${20 + pulse/2}px Arial`;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText('🧠', this.centerX, this.centerY);
    }

    drawTechWords() {
        const orbitRadius = 130;
        const wordCount = this.visibleWords.length;

        this.visibleWords.forEach((word, index) => {
            const angle = (index / this.techWords.length) * Math.PI * 2 - Math.PI / 2;
            const wobble = Math.sin(this.pulsePhase + index) * 5;
            
            const x = this.centerX + Math.cos(angle) * (orbitRadius + wobble);
            const y = this.centerY + Math.sin(angle) * (orbitRadius + wobble);

            // Word background
            this.ctx.font = '11px Cairo, sans-serif';
            const textWidth = this.ctx.measureText(word).width;
            
            // Glow behind text
            this.ctx.shadowColor = 'rgba(139, 92, 246, 0.8)';
            this.ctx.shadowBlur = 10;
            
            // Text
            this.ctx.fillStyle = '#a78bfa';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(word, x, y);
            
            this.ctx.shadowBlur = 0;

            // Connection line to center
            this.ctx.beginPath();
            this.ctx.moveTo(this.centerX + Math.cos(angle) * 40, this.centerY + Math.sin(angle) * 40);
            this.ctx.lineTo(x - Math.cos(angle) * (textWidth/2 + 10), y - Math.sin(angle) * 10);
            this.ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 + Math.sin(this.pulsePhase + index) * 0.1})`;
            this.ctx.lineWidth = 1;
            this.ctx.stroke();

            // Small dot at connection point
            this.ctx.beginPath();
            this.ctx.arc(
                this.centerX + Math.cos(angle) * 40,
                this.centerY + Math.sin(angle) * 40,
                3,
                0,
                Math.PI * 2
            );
            this.ctx.fillStyle = '#8b5cf6';
            this.ctx.fill();
        });
    }

    animate() {
        this.drawBrain();
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    // Only initialize on about page
    if (window.location.pathname.includes('about') || document.title.includes('من نحن') || document.title.includes('About')) {
        new AIBrain();
    }
});
