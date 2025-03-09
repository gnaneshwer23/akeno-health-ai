
import React from 'react';

interface FeatureGridItemProps {
  icon: React.ReactNode;
  text: string;
}

export const FeatureGridItem: React.FC<FeatureGridItemProps> = ({ icon, text }) => {
  return (
    <div className="flex items-start gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-health-primary/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-health-primary to-health-secondary flex items-center justify-center text-white">
        {icon}
      </div>
      <p className="text-health-dark/80 font-medium group-hover:text-health-primary transition-colors">{text}</p>
    </div>
  );
};
