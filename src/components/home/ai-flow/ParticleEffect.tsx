
import React, { useEffect, useRef } from 'react';

interface ParticleEffectProps {
  selector: string;
}

const ParticleEffect: React.FC<ParticleEffectProps> = ({ selector }) => {
  const effectRef = useRef<{ [key: string]: NodeJS.Timeout }>({});

  useEffect(() => {
    const nodes = document.querySelectorAll(selector);
    
    if (nodes) {
      nodes.forEach((node, index) => {
        const typedNode = node as HTMLElement;
        typedNode.style.animationDelay = `${index * 0.1}s`;

        // Add particle effects
        const interval = setInterval(() => {
          if (Math.random() < 0.3) { // 30% chance to create a particle
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random position along the bottom of the node
            const x = Math.random() * typedNode.offsetWidth;
            particle.style.left = `${x}px`;
            particle.style.bottom = '0';
            
            // Random duration between 2-4 seconds
            const duration = 2 + Math.random() * 2;
            particle.style.animationDuration = `${duration}s`;
            
            typedNode.appendChild(particle);
            setTimeout(() => particle.remove(), duration * 1000);
          }
        }, 500);

        effectRef.current[index] = interval;
      });
    }

    return () => {
      Object.values(effectRef.current).forEach(interval => {
        clearInterval(interval);
      });
    };
  }, [selector]);

  return null;
};

export default ParticleEffect;
