
import React from 'react';
import { Shield, Heart, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const Value: React.FC<ValueProps> = ({ icon, title, description, className }) => {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-health-primary/10 text-health-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-health-dark mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export const MissionStatement: React.FC = () => {
  const values = [
    {
      icon: <Shield size={28} />,
      title: "Preventive Care",
      description: "Our AI predicts health risks before they manifest, enabling proactive intervention and disease prevention."
    },
    {
      icon: <Sparkles size={28} />,
      title: "Precision Medicine",
      description: "We analyze your unique biological profile to create personalized treatment plans that work with your body."
    },
    {
      icon: <Heart size={28} />,
      title: "Patient-Centered",
      description: "Everything we do prioritizes improving patient outcomes, experiences, and quality of life."
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-health-light/30 to-60%"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium">
            Our Mission
          </div>
          
          <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
            Leading the Future of Precision Healthcare
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At Akeno Health AI, we're revolutionizing healthcare by combining cutting-edge AI with multi-omics data to predict, prevent, and personalize treatment—transforming reactive healthcare into a proactive, precision-based approach.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
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
      
      {/* Background elements */}
      <div className="absolute top-1/4 -right-32 w-64 h-64 bg-health-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-health-secondary/5 rounded-full blur-3xl"></div>
    </section>
  );
};
