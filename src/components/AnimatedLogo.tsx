
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { User, Brain, Activity, Cpu, Atom, HeartPulse, Dna } from 'lucide-react';

interface AnimatedLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'simple' | 'static';
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ 
  className,
  size = 'md',
  variant = 'default'
}) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24"
  };
  
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameId = useRef<number | null>(null);
  
  // Neural network animation effect for the logo
  useEffect(() => {
    if (variant === 'static' || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const width = canvas.width;
    const height = canvas.height;
    
    // Particles configuration
    const particlesArray: Particle[] = [];
    const numberOfParticles = 40;
    const colors = ['#6366f1', '#8b5cf6', '#0ea5e9']; // health-primary, health-secondary, health-accent
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
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
      particlesArray.push(new Particle());
    }
    
    // Connect particles with lines if they're close enough
    function connect() {
      const maxDistance = 80;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            ctx!.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.5})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx!.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx!.stroke();
          }
        }
      }
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      // Connect particles with lines
      connect();
      
      // Request next frame
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup on unmount
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [variant]);
  
  // Determine which logo variant to render
  const renderLogo = () => {
    if (variant === 'simple') {
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-health-primary to-health-secondary opacity-20"></div>
          <div className="relative w-2/3 h-2/3 flex items-center justify-center">
            <div className="relative">
              {/* Human silhouette */}
              <User className="w-full h-full text-health-primary" strokeWidth={1.5} />
              {/* Health data nodes */}
              <div className="absolute top-0 left-0 w-3 h-3 bg-health-secondary rounded-full animate-pulse" />
              <div className="absolute top-0 right-0 w-3 h-3 bg-health-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-0 left-0 w-3 h-3 bg-health-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-health-secondary rounded-full animate-pulse" style={{ animationDelay: '0.7s' }} />
            </div>
          </div>
        </div>
      );
    }
    
    if (variant === 'static') {
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-health-primary via-health-secondary to-health-accent opacity-80"></div>
          <div className="absolute inset-0 rounded-full border-2 border-white opacity-30"></div>
          <div className="absolute inset-[15%] rounded-full bg-white opacity-90"></div>
          <div className="relative w-1/2 h-1/2 text-health-primary flex items-center justify-center">
            <User className="w-full h-full" strokeWidth={2} />
            
            {/* Connecting lines */}
            <div className="absolute inset-0 z-10">
              <div className="absolute top-0 right-1/4 h-[40%] w-px bg-health-primary/40" />
              <div className="absolute top-0 left-1/4 h-[40%] w-px bg-health-secondary/40" />
              <div className="absolute bottom-0 right-1/4 h-[40%] w-px bg-health-accent/40" />
              <div className="absolute bottom-0 left-1/4 h-[40%] w-px bg-health-primary/40" />
            </div>
          </div>
        </div>
      );
    }
    
    // Default animated version
    return (
      <>
        <canvas 
          ref={canvasRef} 
          width={120} 
          height={120} 
          className="absolute inset-0 w-full h-full rounded-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-tr from-health-primary via-health-secondary to-health-accent opacity-70 animate-pulse-slow"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2/3 h-2/3 rounded-full border-t-2 border-l-2 border-white opacity-60 animate-rotate-slow"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1/2 h-1/2 rounded-full bg-white opacity-90 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2/5 h-2/5 flex items-center justify-center relative">
            {/* Human at center */}
            <User className="w-full h-full text-health-primary z-10" strokeWidth={1.5} />
            
            {/* Health data and AI nodes surrounding the human */}
            <div className="absolute inset-0">
              {/* Animated connections between human and health/AI elements */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
                <Brain size={12} className="text-health-secondary" />
                <div className="absolute h-5 w-px bg-health-secondary/60 bottom-full left-1/2 transform -translate-x-1/2"></div>
              </div>
              
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                <Activity size={12} className="text-health-primary" />
                <div className="absolute h-5 w-px bg-health-primary/60 top-full left-1/2 transform -translate-x-1/2"></div>
              </div>
              
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full">
                <HeartPulse size={12} className="text-health-accent" />
                <div className="absolute w-5 h-px bg-health-accent/60 right-full top-1/2 transform -translate-y-1/2"></div>
              </div>
              
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full">
                <Atom size={12} className="text-health-secondary" />
                <div className="absolute w-5 h-px bg-health-secondary/60 left-full top-1/2 transform -translate-y-1/2"></div>
              </div>
              
              <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                <Cpu size={12} className="text-health-primary" />
                <div className="absolute h-4 w-px bg-health-primary/60 rotate-45 bottom-full right-1/2"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2">
                <Dna size={12} className="text-health-accent" />
                <div className="absolute h-4 w-px bg-health-accent/60 rotate-45 top-full left-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className={cn("relative", sizes[size], className)}>
      {renderLogo()}
    </div>
  );
};

export { AnimatedLogo };
