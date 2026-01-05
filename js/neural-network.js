// Simple Snake Track Animation
class SnakeTrackAnimation {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.ball = null;
    this.trackPoints = [];
    this.totalPathLength = 0;
    this.animationId = null;
    
    this.config = {
      ballRadius: 16,
      trackWidth: 35
    };
    
    this.init();
  }

  init() {
    // Don't initialize on mobile
    if (window.innerWidth <= 768) {
      return;
    }
    
    this.createCanvas();
    this.buildTrackPath();
    this.createBall();
    this.setupEventListeners();
    this.animate();
  }

  createCanvas() {
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'snakeTrackCanvas';
    this.canvas.style.cssText = `
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 999;
    `;
    document.body.appendChild(this.canvas);
    
    this.ctx = this.canvas.getContext('2d');
    this.resizeCanvas();
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.buildTrackPath();
  }

  buildTrackPath() {
    this.trackPoints = [];
    
    // Adjust position based on screen width
    const screenWidth = this.canvas.width;
    let rightOffset = 40;
    let trackWidth = 80;
    
    // On medium screens (1024-1366px), move track further right
    if (screenWidth >= 1024 && screenWidth <= 1440) {
      rightOffset = 20;
      trackWidth = 60;
    }
    
    // Move track more to the right (away from content)
    const rightX = this.canvas.width - rightOffset;
    const leftX = this.canvas.width - (rightOffset + trackWidth);
    const startY = 100;
    
    // Calculate end based on document height, not viewport
    const docHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    const viewportHeight = window.innerHeight;
    const scrollableHeight = docHeight - viewportHeight;
    
    // Track should span the scrollable area
    const endY = Math.min(viewportHeight - 100, scrollableHeight * 0.8);
    const segmentHeight = (endY - startY) / 4;
    
    // Path from top to bottom
    
    // 1. Start point (top right)
    this.trackPoints.push({ x: rightX, y: startY });
    
    // 2. First curve down-left
    this.addCurve(rightX, startY, leftX, startY + segmentHeight, 'down-left');
    
    // 3. Second curve down-right  
    this.addCurve(leftX, startY + segmentHeight, rightX, startY + segmentHeight * 2, 'down-right');
    
    // 4. Third curve down-left
    this.addCurve(rightX, startY + segmentHeight * 2, leftX, startY + segmentHeight * 3, 'down-left');
    
    // 5. Fourth curve down-right (ends at bottom)
    this.addCurve(leftX, startY + segmentHeight * 3, rightX, endY, 'down-right');
    
    this.calculateTotalLength();
  }

  addCurve(x1, y1, x2, y2, direction) {
    const segments = 25;
    const controlOffset = 60;
    
    for (let i = 1; i <= segments; i++) {
      const t = i / segments;
      
      // Bezier curve
      let cx1, cy1, cx2, cy2;
      
      if (direction === 'down-left') {
        cx1 = x1;
        cy1 = y1 + (y2 - y1) * 0.5;
        cx2 = x2;
        cy2 = y1 + (y2 - y1) * 0.5;
      } else {
        cx1 = x1;
        cy1 = y1 + (y2 - y1) * 0.5;
        cx2 = x2;
        cy2 = y1 + (y2 - y1) * 0.5;
      }
      
      // Cubic bezier
      const x = Math.pow(1-t, 3) * x1 + 
                3 * Math.pow(1-t, 2) * t * cx1 + 
                3 * (1-t) * Math.pow(t, 2) * cx2 + 
                Math.pow(t, 3) * x2;
                
      const y = Math.pow(1-t, 3) * y1 + 
                3 * Math.pow(1-t, 2) * t * cy1 + 
                3 * (1-t) * Math.pow(t, 2) * cy2 + 
                Math.pow(t, 3) * y2;
      
      this.trackPoints.push({ x, y });
    }
  }

  calculateTotalLength() {
    this.totalPathLength = 0;
    for (let i = 1; i < this.trackPoints.length; i++) {
      const dx = this.trackPoints[i].x - this.trackPoints[i-1].x;
      const dy = this.trackPoints[i].y - this.trackPoints[i-1].y;
      this.totalPathLength += Math.sqrt(dx * dx + dy * dy);
    }
  }

  getPointAtProgress(progress) {
    if (this.trackPoints.length < 2) return { x: 0, y: 0 };
    
    const targetLength = progress * this.totalPathLength;
    let currentLength = 0;
    
    for (let i = 1; i < this.trackPoints.length; i++) {
      const dx = this.trackPoints[i].x - this.trackPoints[i-1].x;
      const dy = this.trackPoints[i].y - this.trackPoints[i-1].y;
      const segmentLength = Math.sqrt(dx * dx + dy * dy);
      
      if (currentLength + segmentLength >= targetLength) {
        const t = (targetLength - currentLength) / segmentLength;
        return {
          x: this.trackPoints[i-1].x + dx * t,
          y: this.trackPoints[i-1].y + dy * t
        };
      }
      currentLength += segmentLength;
    }
    
    return this.trackPoints[this.trackPoints.length - 1];
  }

  createBall() {
    const startPoint = this.trackPoints[0] || { x: 0, y: 0 };
    
    this.ball = {
      x: startPoint.x,
      y: startPoint.y,
      targetX: startPoint.x,
      targetY: startPoint.y,
      radius: this.config.ballRadius,
      rotation: 0,
      glowPhase: 0
    };
  }

  setupEventListeners() {
    window.addEventListener('resize', () => {
      this.resizeCanvas();
    });
    
    window.addEventListener('scroll', () => {
      this.updateBallPosition();
    });
  }

  updateBallPosition() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    // Calculate exact scroll progress (0 to 1)
    const scrollProgress = scrollHeight > 0 ? Math.min(Math.max(scrollTop / scrollHeight, 0), 1) : 0;
    
    const targetPoint = this.getPointAtProgress(scrollProgress);
    this.ball.targetX = targetPoint.x;
    this.ball.targetY = targetPoint.y;
  }

  drawTrack() {
    if (this.trackPoints.length < 2) return;
    
    const ctx = this.ctx;
    
    // Gradient
    const gradient = ctx.createLinearGradient(
      this.canvas.width - 200, 100,
      this.canvas.width - 60, this.canvas.height / 2
    );
    gradient.addColorStop(0, '#06b6d4');
    gradient.addColorStop(0.5, '#8b5cf6');
    gradient.addColorStop(1, '#ec4899');
    
    // Outer glow
    ctx.save();
    ctx.shadowBlur = 25;
    ctx.shadowColor = 'rgba(139, 92, 246, 0.4)';
    
    // Draw track
    ctx.beginPath();
    ctx.moveTo(this.trackPoints[0].x, this.trackPoints[0].y);
    
    for (let i = 1; i < this.trackPoints.length; i++) {
      ctx.lineTo(this.trackPoints[i].x, this.trackPoints[i].y);
    }
    
    ctx.strokeStyle = gradient;
    ctx.lineWidth = this.config.trackWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();
    ctx.restore();
    
    // Inner dark
    ctx.beginPath();
    ctx.moveTo(this.trackPoints[0].x, this.trackPoints[0].y);
    
    for (let i = 1; i < this.trackPoints.length; i++) {
      ctx.lineTo(this.trackPoints[i].x, this.trackPoints[i].y);
    }
    
    ctx.strokeStyle = 'rgba(10, 10, 30, 0.7)';
    ctx.lineWidth = this.config.trackWidth - 12;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();
  }

  drawBall() {
    if (!this.ball) return;
    
    // Faster, more responsive movement
    const ease = 0.2;
    this.ball.x += (this.ball.targetX - this.ball.x) * ease;
    this.ball.y += (this.ball.targetY - this.ball.y) * ease;
    
    // Rotation
    const dx = this.ball.targetX - this.ball.x;
    const dy = this.ball.targetY - this.ball.y;
    this.ball.rotation += Math.sqrt(dx * dx + dy * dy) * 0.02;
    
    // Glow pulse
    this.ball.glowPhase += 0.04;
    
    const ctx = this.ctx;
    ctx.save();
    ctx.translate(this.ball.x, this.ball.y);
    ctx.rotate(this.ball.rotation);
    
    // Glow
    ctx.shadowBlur = 30;
    ctx.shadowColor = '#c084fc';
    
    // Outer glow
    ctx.beginPath();
    ctx.arc(0, 0, this.ball.radius + 10, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(192, 132, 252, 0.2)';
    ctx.fill();
    
    // Ball gradient
    ctx.beginPath();
    ctx.arc(0, 0, this.ball.radius, 0, Math.PI * 2);
    
    const ballGradient = ctx.createRadialGradient(-4, -4, 0, 0, 0, this.ball.radius);
    ballGradient.addColorStop(0, '#ffffff');
    ballGradient.addColorStop(0.3, '#f0abfc');
    ballGradient.addColorStop(0.7, '#c084fc');
    ballGradient.addColorStop(1, '#7c3aed');
    
    ctx.fillStyle = ballGradient;
    ctx.fill();
    
    // Shine
    ctx.beginPath();
    ctx.arc(-5, -5, this.ball.radius / 3.5, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fill();
    
    ctx.restore();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.drawTrack();
    this.drawBall();
    
    this.animationId = requestAnimationFrame(() => this.animate());
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    new SnakeTrackAnimation();
  }, 500);
});
