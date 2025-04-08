
import React from 'react';
import { Watch, Activity, Brain, Stethoscope, HeartPulse } from 'lucide-react';

export const HeroDataFlow: React.FC = () => {
  return (
    <div className="relative w-full max-w-3xl mx-auto py-8 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-health-primary/50 via-health-secondary/50 to-health-accent/50"></div>
      
      {/* Data Flow Nodes */}
      <div className="flex justify-between items-center relative">
        {/* Smartwatch */}
        <div className="relative group z-20">
          <div className="bg-white p-3 rounded-full shadow-md border border-health-primary/20 group-hover:border-health-primary transition-all duration-300">
            <Watch size={24} className="text-health-primary" />
          </div>
          <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-health-primary text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Wearable Data
          </div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mt-[-8px] bg-health-primary/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            ECG detected anomaly
          </div>
        </div>
        
        {/* Arrow 1 */}
        <div className="w-8 h-8 flex items-center justify-center">
          <div className="w-4 h-4 border-t-2 border-r-2 border-health-primary transform rotate-45"></div>
        </div>
        
        {/* AI Engine */}
        <div className="relative group z-20">
          <div className="bg-white p-3 rounded-full shadow-md border border-health-primary/20 group-hover:border-health-primary transition-all duration-300">
            <Brain size={24} className="text-health-secondary" />
          </div>
          <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-health-secondary text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Akeno AI Engine
          </div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mt-[-8px] bg-health-secondary/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Risk prediction model
          </div>
        </div>
        
        {/* Arrow 2 */}
        <div className="w-8 h-8 flex items-center justify-center">
          <div className="w-4 h-4 border-t-2 border-r-2 border-health-secondary transform rotate-45"></div>
        </div>
        
        {/* Digital Twin */}
        <div className="relative group z-20">
          <div className="bg-white p-3 rounded-full shadow-md border border-health-primary/20 group-hover:border-health-primary transition-all duration-300">
            <Activity size={24} className="text-health-accent" />
          </div>
          <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-health-accent text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Digital Twin
          </div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mt-[-8px] bg-health-accent/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Digital twin recalculated dose
          </div>
        </div>
        
        {/* Arrow 3 */}
        <div className="w-8 h-8 flex items-center justify-center">
          <div className="w-4 h-4 border-t-2 border-r-2 border-health-accent transform rotate-45"></div>
        </div>
        
        {/* Doctor Dashboard */}
        <div className="relative group z-20">
          <div className="bg-white p-3 rounded-full shadow-md border border-health-primary/20 group-hover:border-health-primary transition-all duration-300">
            <Stethoscope size={24} className="text-blue-500" />
          </div>
          <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Doctor Dashboard
          </div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mt-[-8px] bg-blue-500/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Treatment optimization
          </div>
        </div>
        
        {/* Arrow 4 */}
        <div className="w-8 h-8 flex items-center justify-center">
          <div className="w-4 h-4 border-t-2 border-r-2 border-blue-500 transform rotate-45"></div>
        </div>
        
        {/* Health Outcome */}
        <div className="relative group z-20">
          <div className="bg-white p-3 rounded-full shadow-md border border-health-primary/20 group-hover:border-health-primary transition-all duration-300">
            <HeartPulse size={24} className="text-green-500" />
          </div>
          <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Health Outcome
          </div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mt-[-8px] bg-green-500/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Health Outcome Change
          </div>
        </div>
      </div>
      
      {/* Animated Data Dots */}
      <div className="absolute top-1/2 left-0 w-4 h-4 rounded-full bg-health-primary animate-ping opacity-75" style={{animationDuration: '3s', animationDelay: '0s'}}></div>
      <div className="absolute top-1/2 left-0 w-3 h-3 rounded-full bg-health-secondary animate-ping opacity-75" style={{animationDuration: '3s', animationDelay: '0.5s'}}></div>
      <div className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-health-accent animate-ping opacity-75" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
    </div>
  );
};
