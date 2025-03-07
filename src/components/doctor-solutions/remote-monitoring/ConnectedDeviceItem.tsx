
import React from 'react';

interface ConnectedDeviceItemProps {
  icon: React.ReactNode;
  name: string;
}

const ConnectedDeviceItem = ({ icon, name }: ConnectedDeviceItemProps) => (
  <div className="flex flex-col items-center">
    <div className="w-10 h-10 rounded-full bg-health-primary/10 flex items-center justify-center mb-1">
      {icon}
    </div>
    <span className="text-xs">{name}</span>
  </div>
);

export default ConnectedDeviceItem;
