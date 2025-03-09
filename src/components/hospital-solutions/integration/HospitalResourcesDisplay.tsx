
import React from 'react';
import { Users, Stethoscope, Bed, Syringe } from 'lucide-react';

const HospitalResourcesDisplay = () => (
  <div className="p-4 bg-health-light/20 rounded-lg">
    <h4 className="text-sm font-medium mb-3">Hospital Resources - AI Optimized</h4>
    <div className="grid grid-cols-4 gap-3">
      <ResourceItem 
        icon={<Users size={16} className="text-health-primary" />} 
        name="Staff" 
        usage={86} 
      />
      <ResourceItem 
        icon={<Bed size={16} className="text-health-primary" />} 
        name="Beds" 
        usage={92} 
      />
      <ResourceItem 
        icon={<Stethoscope size={16} className="text-health-primary" />} 
        name="Equipment" 
        usage={78} 
      />
      <ResourceItem 
        icon={<Syringe size={16} className="text-health-primary" />} 
        name="Supplies" 
        usage={83} 
      />
    </div>
  </div>
);

interface ResourceItemProps {
  icon: React.ReactNode;
  name: string;
  usage: number;
}

const ResourceItem = ({ icon, name, usage }: ResourceItemProps) => {
  const bgColor = usage > 90 
    ? "bg-yellow-500" 
    : usage > 75 
      ? "bg-green-500" 
      : "bg-blue-500";

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white mb-1">
        {icon}
      </div>
      <div className="text-xs font-medium">{name}</div>
      <div className="w-full h-1.5 bg-gray-200 rounded-full mt-1 overflow-hidden">
        <div 
          className={`h-full ${bgColor} rounded-full`} 
          style={{ width: `${usage}%` }}
        ></div>
      </div>
      <div className="text-xs mt-1">{usage}%</div>
    </div>
  );
};

export default HospitalResourcesDisplay;
