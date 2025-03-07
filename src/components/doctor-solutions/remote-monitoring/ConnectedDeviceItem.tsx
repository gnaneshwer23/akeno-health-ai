
import React from 'react';

interface ConnectedDeviceItemProps {
  icon: React.ReactNode;
  name: string;
  className?: string;
}

const ConnectedDeviceItem = ({ icon, name, className = "" }: ConnectedDeviceItemProps) => (
  <div className={`flex flex-col items-center ${className}`}>
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-health-primary/20 to-health-secondary/20 flex items-center justify-center mb-2 transition-all duration-300 hover:shadow-md hover:scale-110 group">
      <div className="text-health-primary group-hover:text-health-secondary transition-colors duration-300">
        {icon}
      </div>
    </div>
    <span className="text-xs font-medium text-health-dark/80 bg-white/80 px-2 py-0.5 rounded-full shadow-sm">{name}</span>
  </div>
);

export default ConnectedDeviceItem;
