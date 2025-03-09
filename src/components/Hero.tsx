
import React, { useRef } from 'react';
import { HeroBackgroundElements } from './hero/HeroBackgroundElements';
import { HeroContent } from './hero/HeroContent';
import { HeroFooterElements } from './hero/HeroFooterElements';
import { useParallaxEffect } from './hero/useParallaxEffect';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Apply the parallax effect
  useParallaxEffect(heroRef);
  
  return (
    <section 
      ref={heroRef} 
      className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center relative overflow-hidden"
    >
      <HeroBackgroundElements heroRef={heroRef} />
      <HeroContent />
      <HeroFooterElements />
    </section>
  );
};

export { Hero };
