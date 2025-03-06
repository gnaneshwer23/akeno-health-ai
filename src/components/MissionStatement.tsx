
import React from 'react';
import { Shield, Heart, Sparkles, Atom, Brain, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const Value: React.FC<ValueProps> = ({ icon, title, description, className }) => {
  return (
    <div className={cn("flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-1", className)}>
      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-health-primary/10 text-health-primary mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-health-dark mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export const MissionStatement: React.FC = () => {
  const values = [
    {
      icon: <Shield size={28} />,
      title: "Preventive Healthcare",
      description: "Our AI predicts health risks before they manifest, enabling proactive intervention and disease prevention through multi-omics analysis."
    },
    {
      icon: <Atom size={28} />,
      title: "Quantum-Powered Medicine",
      description: "We leverage quantum computing to accelerate drug discovery, optimize treatments, and enhance clinical research outcomes."
    },
    {
      icon: <Brain size={28} />,
      title: "AI-Driven Insights",
      description: "Advanced machine learning analyzes genetic, epigenetic, environmental, and lifestyle factors to deliver personalized health strategies."
    },
    {
      icon: <Heart size={28} />,
      title: "Patient-Centered Care",
      description: "Everything we do prioritizes improving patient outcomes, making healthcare more efficient, cost-effective, and accessible for everyone."
    }
  ];

  return (
    <section id="mission" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-health-light/30 to-60%"></div>
      
      {/* Enhanced background elements */}
      <div className="absolute top-1/4 -right-32 w-80 h-80 bg-health-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -top-10 left-1/4 w-20 h-20 bg-health-primary/10 rounded-full blur-lg"></div>
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-health-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-1/4 w-20 h-20 bg-health-secondary/10 rounded-full blur-lg"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium gap-2">
            <Rocket size={16} />
            <span>Our Mission</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
            Revolutionizing Healthcare with AI, Quantum Computing & Multi-Omics
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At Akeno Health AI, we're transforming healthcare by integrating cutting-edge AI diagnostics, multi-omics analysis, quantum computing, and digital twin simulations—shifting from reactive treatments to proactive, precision-driven solutions that ensure early disease detection and personalized care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {values.map((value, index) => (
            <Value
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              className={`fade-up-${index + 2}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
