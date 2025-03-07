
import React from 'react';
import { TabsTrigger } from '@/components/ui/tabs';

interface TeamTabTriggerProps {
  id: string;
  icon: React.ReactNode;
  title: string;
}

export const TeamTabTrigger: React.FC<TeamTabTriggerProps> = ({ id, icon, title }) => {
  const getGradientByType = (type: string) => {
    switch(type) {
      case 'leadership':
        return 'bg-gradient-to-br from-purple-500 to-indigo-600';
      case 'research':
        return 'bg-gradient-to-br from-blue-500 to-sky-600';
      case 'clinical':
        return 'bg-gradient-to-br from-emerald-500 to-teal-600';
      case 'tech':
        return 'bg-gradient-to-br from-fuchsia-500 to-pink-600';
      default:
        return 'bg-gradient-to-br from-indigo-500 to-purple-600';
    }
  };

  return (
    <TabsTrigger 
      value={id}
      className="flex flex-col gap-2 p-4 data-[state=active]:bg-gradient-to-br data-[state=active]:from-health-primary/10 data-[state=active]:to-health-secondary/10 data-[state=active]:text-health-primary rounded-xl transition-all duration-200 shadow-sm border border-transparent data-[state=active]:border-health-primary/20 min-h-[100px]"
    >
      <div className={`text-white ${getGradientByType(id)} p-3 rounded-full shadow-md transition-transform transform group-hover:scale-110`}>
        {icon}
      </div>
      <span className="text-xs md:text-sm font-medium">{title}</span>
    </TabsTrigger>
  );
};
