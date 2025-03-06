
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  index?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  className,
  index = 0 
}) => {
  const delayClass = `fade-up-${Math.min(index + 1, 5)}`;
  
  return (
    <div className={cn(
      "group p-6 rounded-2xl backdrop-blur-sm border border-white/20 bg-white/80 shadow-card transition-all duration-300 hover:shadow-lg hover:bg-white/90 hover:border-health-primary/20 card-hover",
      delayClass,
      className
    )}>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-health-primary/10 text-health-primary group-hover:bg-health-primary/20 transition-colors">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-medium text-health-dark">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export { FeatureCard };
