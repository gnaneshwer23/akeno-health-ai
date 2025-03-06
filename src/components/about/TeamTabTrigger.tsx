
import React from 'react';
import { TabsTrigger } from '@/components/ui/tabs';

interface TeamTabTriggerProps {
  id: string;
  icon: React.ReactNode;
  title: string;
}

export const TeamTabTrigger: React.FC<TeamTabTriggerProps> = ({ id, icon, title }) => {
  return (
    <TabsTrigger 
      value={id}
      className="flex flex-col gap-2 p-4 data-[state=active]:bg-health-primary/10 data-[state=active]:text-health-primary rounded-xl transition-all duration-200 shadow-sm border border-transparent data-[state=active]:border-health-primary/20 min-h-[100px]"
    >
      <div className="text-current bg-white/80 p-3 rounded-full">
        {icon}
      </div>
      <span className="text-xs md:text-sm font-medium">{title}</span>
    </TabsTrigger>
  );
};
