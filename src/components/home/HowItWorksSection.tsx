
import React, { useState } from 'react';
import { Activity, Brain, FlaskConical, Lock, Target } from 'lucide-react';

interface FeaturePointProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

const FeaturePoint: React.FC<FeaturePointProps> = ({ icon, title, description, isActive, onClick }) => {
  return (
    <div 
      className={`relative flex flex-col items-center text-center p-4 rounded-xl transition-all duration-300 cursor-pointer
        ${isActive ? 'bg-white shadow-lg border border-health-primary/20' : 'hover:bg-white/50'}`}
      onClick={onClick}
    >
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300
        ${isActive ? 'bg-health-primary text-white' : 'bg-health-primary/10 text-health-primary'}`}>
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      {isActive && (
        <p className="text-muted-foreground text-sm animate-fade-in">{description}</p>
      )}
    </div>
  );
};

export const HowItWorksSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  
  const features = [
    {
      icon: <Target size={32} />,
      title: "Real-Time Health Monitoring",
      description: "Capture 24/7 vitals, lifestyle, and clinical data from your devices, enabling continuous health tracking and early detection."
    },
    {
      icon: <Brain size={32} />,
      title: "Predictive AI",
      description: "Advanced machine learning anticipates illness before symptoms appear, giving you precious time for early intervention."
    },
    {
      icon: <Activity size={32} />,
      title: "Precision Treatment",
      description: "Your care plan adapts to your genes, microbiome, and health trends, ensuring personalized medicine tailored specifically to you."
    },
    {
      icon: <FlaskConical size={32} />,
      title: "Drug Discovery",
      description: "AI and quantum models find and optimize treatments faster than ever, accelerating the development of life-saving medications."
    },
    {
      icon: <Lock size={32} />,
      title: "Blockchain Security",
      description: "Your health data, your control – always encrypted and consent-driven, ensuring privacy and security at every step."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-health-light/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-health-primary/10 text-health-primary font-medium mb-4">
            <Brain size={16} className="mr-2" />
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
            Akeno's Core in 5 Smart Points
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Simplifying complex medical technology into intelligent healthcare that works for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <FeaturePoint
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              isActive={activeFeature === index}
              onClick={() => setActiveFeature(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
