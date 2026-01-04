// Background Neural Network Particles
class BackgroundParticles {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.animationId = null;
    
    this.config = {
      particleCount: 50,
      maxDistance: 150,
      particleSpeed: 0.3,
      colors: {
        primary: 'rgba(99, 102, 241, ',
        secondary: 'rgba(139, 92, 246, ',
        accent: 'rgba(236, 72, 153, ',
        cyan: 'rgba(6, 182, 212, '
      }
    };
    
    this.init();
  }

  init() {
    this.createCanvas();
    this.createParticles();
    this.setupEventListeners();
    this.animate();
  }

  createCanvas() {
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'particlesCanvas';
    this.canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
      opacity: 0.5;
    `;
    document.body.appendChild(this.canvas);
    
    this.ctx = this.canvas.getContext('2d');
    this.resizeCanvas();
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.config.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * this.config.particleSpeed,
        vy: (Math.random() - 0.5) * this.config.particleSpeed,
        radius: Math.random() * 2 + 1,
        color: this.getRandomColor(),
        pulsePhase: Math.random() * Math.PI * 2
      });
    }
  }

  getRandomColor() {
    const colors = Object.values(this.config.colors);
    return colors[Math.floor(Math.random() * colors.length)];
  }

  setupEventListeners() {
    window.addEventListener('resize', () => this.resizeCanvas());
  }

  updateParticles() {
    this.particles.forEach(particle => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Bounce off edges
      if (particle.x < 0 || particle.x > this.canvas.width) {
        particle.vx *= -1;
      }
      if (particle.y < 0 || particle.y > this.canvas.height) {
        particle.vy *= -1;
      }

      // Keep particles in bounds
      particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
      particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));

      // Update pulse phase
      particle.pulsePhase += 0.05;
    });
  }

  drawParticles() {
    this.particles.forEach(particle => {
      const pulse = Math.sin(particle.pulsePhase) * 0.5 + 0.5;
      const alpha = 0.3 + pulse * 0.3;
      
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = particle.color + alpha + ')';
      this.ctx.fill();
      
      // Glow effect
      this.ctx.shadowBlur = 8 + pulse * 8;
      this.ctx.shadowColor = particle.color + alpha + ')';
    });
    
    this.ctx.shadowBlur = 0;
  }

  drawConnections() {
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.config.maxDistance) {
          const alpha = (1 - distance / this.config.maxDistance) * 0.2;
          
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.strokeStyle = this.config.colors.primary + alpha + ')';
          this.ctx.lineWidth = 1;
          this.ctx.stroke();
        }
      }
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.updateParticles();
    this.drawConnections();
    this.drawParticles();
    
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  new BackgroundParticles();
});
