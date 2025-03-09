
import React from 'react';
import { Clock, Users, Clipboard } from 'lucide-react';

const ResourceOptimizationCard = () => (
  <div className="p-4 border border-gray-200 rounded-lg">
    <h4 className="text-sm font-medium mb-3">AI-Optimized Resource Allocation</h4>
    <div className="space-y-3">
      <OptimizationItem 
        icon={<Clock size={14} className="text-health-primary" />}
        title="Administrative Hours Saved"
        value="4,230"
        unit="hrs/month"
        improvement="+68%"
      />
      
      <OptimizationItem 
        icon={<Users size={14} className="text-health-primary" />}
        title="Staff Allocation Efficiency"
        value="93%"
        unit="optimized"
        improvement="+22%"
      />
      
      <OptimizationItem 
        icon={<Clipboard size={14} className="text-health-primary" />}
        title="Documentation Automation"
        value="76%"
        unit="automated"
        improvement="+45%"
      />
    </div>
  </div>
);

interface OptimizationItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  unit: string;
  improvement: string;
}

const OptimizationItem = ({ icon, title, value, unit, improvement }: OptimizationItemProps) => (
  <div className="flex items-center">
    <div className="mr-2">{icon}</div>
    <div className="flex-1">
      <div className="text-xs">{title}</div>
      <div className="flex items-center">
        <span className="text-sm font-medium">{value}</span>
        <span className="text-xs text-gray-500 ml-1">{unit}</span>
        <span className="text-xs text-green-600 ml-auto">{improvement}</span>
      </div>
    </div>
  </div>
);

export default ResourceOptimizationCard;
