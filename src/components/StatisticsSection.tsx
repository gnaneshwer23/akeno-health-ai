
import React from 'react';
import { Users, LineChart, Clock, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatisticProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  className?: string;
}

const Statistic: React.FC<StatisticProps> = ({ icon, value, label, className }) => {
  return (
    <div className={cn("flex flex-col items-center p-6", className)}>
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-health-primary/10 text-health-primary mb-4">
        {icon}
      </div>
      <h3 className="text-3xl md:text-4xl font-bold text-health-dark mb-2">{value}</h3>
      <p className="text-muted-foreground text-center">{label}</p>
    </div>
  );
};

export const StatisticsSection: React.FC = () => {
  const stats = [
    {
      icon: <Users size={24} />,
      value: "200,000+",
      label: "Patients Supported"
    },
    {
      icon: <LineChart size={24} />,
      value: "98.7%",
      label: "Diagnostic Accuracy"
    },
    {
      icon: <Clock size={24} />,
      value: "67%",
      label: "Earlier Detection Rate"
    },
    {
      icon: <Award size={24} />,
      value: "12+",
      label: "Research Awards"
    }
  ];

  return (
    <section className="py-16 px-6 relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Statistic
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              className={`fade-up-${Math.min(index + 1, 5)}`}
            />
          ))}
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-health-primary/20 to-transparent"></div>
    </section>
  );
};
