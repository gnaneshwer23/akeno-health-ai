
import React from 'react';
import { TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';

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
      case 'medical':
        return 'bg-gradient-to-br from-sky-500 to-blue-600';
      case 'advisors':
        return 'bg-gradient-to-br from-amber-500 to-orange-600';
      default:
        return 'bg-gradient-to-br from-indigo-500 to-purple-600';
    }
  };
  
  const glowColor = (type: string) => {
    switch(type) {
      case 'leadership':
        return 'shadow-purple-500/25';
      case 'research':
        return 'shadow-blue-500/25';
      case 'clinical':
        return 'shadow-emerald-500/25';
      case 'tech':
        return 'shadow-fuchsia-500/25';
      case 'medical':
        return 'shadow-sky-500/25';
      case 'advisors':
        return 'shadow-amber-500/25';
      default:
        return 'shadow-indigo-500/25';
    }
  };

  return (
    <TabsTrigger 
      value={id}
      className="flex flex-col gap-2 p-4 data-[state=active]:bg-gradient-to-br data-[state=active]:from-health-primary/10 data-[state=active]:to-health-secondary/10 data-[state=active]:text-health-primary rounded-xl transition-all duration-300 shadow-sm border border-transparent data-[state=active]:border-health-primary/20 min-h-[100px] hover:bg-white/50"
    >
      <motion.div 
        className={`text-white ${getGradientByType(id)} p-3 rounded-full shadow-lg ${glowColor(id)} transition-all duration-300`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        {icon}
      </motion.div>
      <span className="text-xs md:text-sm font-medium">{title}</span>
    </TabsTrigger>
  );
};
