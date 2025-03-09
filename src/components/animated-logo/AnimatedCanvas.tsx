
import React, { useEffect, useRef } from 'react';

interface AnimatedCanvasProps {
  width: number;
  height: number;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const AnimatedCanvas: React.FC<AnimatedCanvasProps> = ({ width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameId = useRef<number | null>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Particles configuration - reduced count for better performance
    const particlesArray: Particle[] = [];
    const numberOfParticles = 20; // Reduced from 40
    const colors = ['#6366f1', '#8b5cf6', '#0ea5e9']; // health-primary, health-secondary, health-accent
    
    class ParticleClass implements Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1; // Slightly smaller particles
        this.speedX = Math.random() * 0.3 - 0.15; // Slower movement
        this.speedY = Math.random() * 0.3 - 0.15; // Slower movement
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > width) this.x = 0;
        else if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        else if (this.y < 0) this.y = height;
      }
      
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Create particles
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new ParticleClass());
    }
    
    // Connect particles with lines if they're close enough - with optimization
    function connect() {
      const maxDistance = 60; // Reduced connection distance
      // Use a less intensive loop by checking fewer pairs
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) { // Start from a+1 to avoid duplicates
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = dx * dx + dy * dy; // No need for expensive square root
          
          if (distance < maxDistance * maxDistance) { // Square the distance check
            const opacity = 1 - (distance / (maxDistance * maxDistance));
            ctx!.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.4})`; // Reduced opacity
            ctx!.lineWidth = 0.8; // Thinner lines
            ctx!.beginPath();
            ctx!.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx!.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx!.stroke();
          }
        }
      }
    }
    
    // Animation loop with frame rate control
    let lastTime = 0;
    const fps = 30; // Target 30 fps instead of 60
    const frameInterval = 1000 / fps;
    
    const animate = (timeStamp: number) => {
      const deltaTime = timeStamp - lastTime;
      
      if (deltaTime >= frameInterval) {
        lastTime = timeStamp - (deltaTime % frameInterval);
        
        ctx.clearRect(0, 0, width, height);
        
        // Update and draw particles
        for (let i = 0; i < particlesArray.length; i++) {
          const particle = particlesArray[i] as any;
          particle.update();
          particle.draw();
        }
        
        // Connect particles with lines
        connect();
      }
      
      // Request next frame
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationFrameId.current = requestAnimationFrame(animate);
    
    // Cleanup on unmount
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [width, height]);
  
  return (
    <canvas 
      ref={canvasRef} 
      width={width} 
      height={height} 
      className="absolute inset-0 w-full h-full rounded-full"
    />
  );
};

export { AnimatedCanvas };
