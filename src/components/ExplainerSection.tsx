import React from 'react';
import { Button } from './Button';
import { Brain, Database, Activity, Lock, Cpu, FlaskConical } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExplainerSectionProps {
  className?: string;
}

const ExplainerSection: React.FC<ExplainerSectionProps> = ({ className }) => {
  const steps = [
    {
      icon: <Database size={24} />,
      title: "AI-Driven Data Collection",
      description: "Our platform continuously gathers real-time health metrics from wearable sensors, EHRs, genetic sequencing reports, and environmental influences."
    },
    {
      icon: <Brain size={24} />,
      title: "Multi-Omics Analysis",
      description: "AI analyses vast amounts of genomics, epigenetics, and metabolomics data to identify hidden disease risks and patterns before symptoms manifest."
    },
    {
      icon: <Cpu size={24} />,
      title: "Predictive Digital Twin Modelling",
      description: "AI-powered digital twins simulate how different treatments will interact with your unique physiology for highly personalized therapy regimens."
    },
    {
      icon: <Activity size={24} />,
      title: "Continuous Monitoring & Adaptive Therapy",
      description: "As your health data evolves, AI dynamically adjusts treatment strategies and provides early warnings based on real-time changes."
    },
    {
      icon: <FlaskConical size={24} />,
      title: "Personalized Treatment Plans",
      description: "We provide tailored treatment recommendations, lifestyle optimizations, and drug suggestions aligned with your genetic profile."
    },
    {
      icon: <Lock size={24} />,
      title: "Secure, Privacy-Centric Data Management",
      description: "Utilizing blockchain technology and federated learning, we ensure patient data remains private, secure, and fully compliant with regulations."
    }
  ];

  return (
    <section className={cn("py-20 px-6 relative overflow-hidden", className)}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-health-light/30"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-health-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-health-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 fade-up-1">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium">
            How It Works
          </div>
          
          <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
            The Future of Precision Medicine, Built on AI
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At Akeno Health AI, we integrate cutting-edge artificial intelligence with multi-omics analysis and digital twin simulations to deliver truly personalized, data-driven healthcare. Here's how it works:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className={`bg-white/80 p-6 rounded-2xl border border-white/20 shadow-card fade-up-${Math.min(index % 5 + 2, 5)}`}>
              <div className="relative mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-health-primary/10 text-health-primary">
                  {step.icon}
                </div>
                <div className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 rounded-full bg-health-primary text-white text-sm font-medium">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-medium text-health-dark mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center fade-up-5">
          <p className="text-lg text-health-dark font-medium mb-6">
            Akeno Health AI is more than a healthcare platform—it's a revolution in precision medicine, transforming how diseases are detected, managed, and treated!
          </p>
          
          <Button size="lg" variant="secondary">
            Explore More
          </Button>
        </div>
      </div>
    </section>
  );
};

export { ExplainerSection };
