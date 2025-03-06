
import React from 'react';
import { FeatureCard } from '@/components/FeatureCard';
import { HeartPulse, Brain, Activity, FlaskConical, LineChart, Users, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <HeartPulse size={24} className="text-health-primary" />,
      title: "Early Disease Detection",
      description: "Our AI identifies health risks before symptoms appear, enabling timely intervention and prevention strategies."
    },
    {
      icon: <Brain size={24} className="text-health-primary" />,
      title: "Multi-Omics Integration",
      description: "We analyze genomics, epigenetics, and proteomics to create deeply personalized treatment approaches."
    },
    {
      icon: <Activity size={24} className="text-health-primary" />,
      title: "Continuous Monitoring",
      description: "Real-time adaptation of care based on wearable data and biomarker changes for optimal health outcomes."
    },
    {
      icon: <FlaskConical size={24} className="text-health-primary" />,
      title: "Digital Twin Technology",
      description: "Virtual simulations of your body predict therapy responses before application, reducing risks and improving results."
    },
    {
      icon: <LineChart size={24} className="text-health-primary" />,
      title: "Predictive Analytics",
      description: "Advanced algorithms analyze trends to forecast health changes and recommend preventive measures."
    },
    {
      icon: <Users size={24} className="text-health-primary" />,
      title: "Personalized Medicine",
      description: "Treatments tailored to your unique genetic makeup, lifestyle factors, and health history."
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-health-light/50 to-white pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-health-light/50 to-white pointer-events-none"></div>
      
      {/* Background elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-health-primary/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-health-secondary/5 rounded-full blur-2xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 fade-up-1">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium gap-2">
            <Sparkles size={16} />
            <span>Our Solutions</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
            Advanced AI-Powered Features
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our platform leverages the latest advancements in artificial intelligence, digital twin technology, and multi-omics analysis to provide unprecedented precision in healthcare.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={cn(
              "bg-white rounded-xl p-6 shadow-card border border-health-primary/10 hover:border-health-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
              `fade-up-${Math.min(index % 5 + 2, 5)}`
            )}>
              <div className="w-12 h-12 rounded-lg bg-health-primary/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-health-dark mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { FeaturesSection };
