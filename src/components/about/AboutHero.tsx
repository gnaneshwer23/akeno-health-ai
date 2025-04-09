
import React from 'react';
import { HeroBackground } from './hero/HeroBackground';
import { HeroAnimatedElements } from './hero/HeroAnimatedElements';
import { HeroConnectedDots } from './hero/HeroConnectedDots';
import { HeroHeader } from './hero/HeroHeader';
import { HeroFeatureIcons } from './hero/HeroFeatureIcons';
import { HeroDiscoverButton } from './hero/HeroDiscoverButton';

export const AboutHero = () => {
  return (
    <section className="relative mb-16 px-6 pt-28 pb-16 overflow-hidden">
      {/* Background elements */}
      <HeroBackground />
      
      {/* Animated floating elements */}
      <HeroAnimatedElements />
      
      {/* Connected dots network */}
      <HeroConnectedDots />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          {/* Hero header with title and description */}
          <HeroHeader />
          
          {/* Feature icons */}
          <HeroFeatureIcons />
          
          {/* Discover more button */}
          <HeroDiscoverButton />
        </div>
      </div>
    </section>
  );
};
