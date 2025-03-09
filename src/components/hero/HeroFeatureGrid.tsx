
import React from 'react';
import { features } from './HeroIcons';

export const HeroFeatureGrid: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-3 max-w-4xl mx-auto mb-10 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-health-primary/5 to-health-secondary/5 rounded-2xl -z-10 blur-xl"></div>
      
      {features.map((feature, index) => (
        <div key={index} className="flex items-start gap-3 text-left bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/80 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
          <div className="mt-0.5 flex-shrink-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-health-primary/20 to-health-secondary/20 text-health-primary">
              {feature.icon}
            </div>
          </div>
          <span className="text-health-dark font-medium">{feature.text}</span>
        </div>
      ))}
    </div>
  );
};
