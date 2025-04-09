
import React from 'react';

interface ConnectedDeviceItemProps {
  icon: React.ReactNode;
  name: string;
  className?: string;
}

const ConnectedDeviceItem = ({ icon, name, className = "" }: ConnectedDeviceItemProps) => (
  <div className={`flex flex-col items-center ${className}`}>
    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-health-primary/20 via-health-secondary/20 to-health-accent/20 flex items-center justify-center mb-3 transition-all duration-300 hover:shadow-lg hover:scale-110 group relative">
      <div className="absolute inset-0 rounded-full bg-white/30 animate-pulse opacity-0 group-hover:opacity-100"></div>
      <div className="text-health-primary group-hover:text-health-secondary transition-colors duration-300 relative z-10">
        {icon}
      </div>
    </div>
    <span className="text-xs font-medium text-health-dark/80 bg-gradient-to-r from-white/90 to-health-light/90 px-3 py-1 rounded-full shadow-sm border border-health-primary/5 group-hover:border-health-primary/20 transition-all whitespace-nowrap">{name}</span>
  </div>
);

export default ConnectedDeviceItem;
