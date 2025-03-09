
import React from 'react';

interface MissionServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export const MissionServiceCard: React.FC<MissionServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  index 
}) => {
  return (
    <div className="relative overflow-hidden p-6 rounded-2xl bg-white shadow-sm border border-health-primary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-health-primary/80 to-health-secondary rounded-bl-[100px] -translate-y-1/2 translate-x-1/2 group-hover:rotate-12 transition-transform duration-500"></div>
      
      <div className="relative z-10">
        <div className="flex justify-center items-center w-16 h-16 rounded-2xl bg-gradient-to-br from-health-primary to-health-secondary mb-5 mx-auto shadow-md transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
          {icon}
        </div>
        <h4 className="text-xl font-semibold text-health-dark text-center mb-3">{title}</h4>
        <p className="text-health-dark/70 text-center">{description}</p>
      </div>
    </div>
  );
};
