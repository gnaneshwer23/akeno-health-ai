
import React from 'react';
import { Shield, Heart, Sparkles, Atom, Brain, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  color: string;
}

const Value: React.FC<ValueProps> = ({ icon, title, description, className, color }) => {
  return (
    <div className={cn("flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-1", className)}>
      <div className={`flex items-center justify-center w-16 h-16 rounded-xl ${color} mb-5 shadow-md`}>
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
      icon: <Shield size={28} className="text-white" />,
      title: "Preventive Healthcare",
      description: "Our AI predicts health risks before they manifest, enabling proactive intervention and disease prevention through multi-omics analysis.",
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: <Atom size={28} className="text-white" />,
      title: "Quantum-Powered Medicine",
      description: "We leverage quantum computing to accelerate drug discovery, optimize treatments, and enhance clinical research outcomes.",
      color: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      icon: <Brain size={28} className="text-white" />,
      title: "AI-Driven Insights",
      description: "Advanced machine learning analyzes genetic, epigenetic, environmental, and lifestyle factors to deliver personalized health strategies.",
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600"
    },
    {
      icon: <Heart size={28} className="text-white" />,
      title: "Patient-Centered Care",
      description: "Everything we do prioritizes improving patient outcomes, making healthcare more efficient, cost-effective, and accessible for everyone.",
      color: "bg-gradient-to-br from-pink-500 to-pink-600"
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
      
      {/* Decorative pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMzAgMzAgTDYwIDMwIE02MCAzMCBMNjAgNjAiIHN0cm9rZT0iI2VlZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIi8+Cjwvc3ZnPg==')] opacity-10 -z-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-5 py-2 mb-6 rounded-full bg-gradient-to-r from-health-primary/10 to-health-secondary/10 font-medium gap-2 border border-health-primary/10 shadow-sm">
            <Rocket size={16} className="text-health-primary" />
            <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">Our Mission</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
            Revolutionizing Healthcare with AI, Quantum Computing & Multi-Omics
          </h2>
          
          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-health-primary to-health-secondary"></div>
          </div>
          
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
              color={value.color}
              className={`fade-up-${index + 2}`}
            />
          ))}
        </div>
        
        {/* Circular accents */}
        <div className="absolute top-20 right-20 w-6 h-6 rounded-full bg-health-primary/20"></div>
        <div className="absolute top-40 right-40 w-3 h-3 rounded-full bg-health-secondary/30"></div>
        <div className="absolute bottom-20 left-20 w-6 h-6 rounded-full bg-health-secondary/20"></div>
        <div className="absolute bottom-40 left-40 w-3 h-3 rounded-full bg-health-primary/30"></div>
      </div>
    </section>
  );
};
