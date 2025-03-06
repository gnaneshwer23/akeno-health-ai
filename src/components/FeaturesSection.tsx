
import React from 'react';
import { FeatureCard } from '@/components/FeatureCard';
import { HeartPulse, Brain, Activity, FlaskConical, LineChart, Users } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <HeartPulse size={24} />,
      title: "Early Disease Detection",
      description: "Our AI identifies health risks before symptoms appear, enabling timely intervention and prevention strategies."
    },
    {
      icon: <Brain size={24} />,
      title: "Multi-Omics Integration",
      description: "We analyze genomics, epigenetics, and proteomics to create deeply personalized treatment approaches."
    },
    {
      icon: <Activity size={24} />,
      title: "Continuous Monitoring",
      description: "Real-time adaptation of care based on wearable data and biomarker changes for optimal health outcomes."
    },
    {
      icon: <FlaskConical size={24} />,
      title: "Digital Twin Technology",
      description: "Virtual simulations of your body predict therapy responses before application, reducing risks and improving results."
    },
    {
      icon: <LineChart size={24} />,
      title: "Predictive Analytics",
      description: "Advanced algorithms analyze trends to forecast health changes and recommend preventive measures."
    },
    {
      icon: <Users size={24} />,
      title: "Personalized Medicine",
      description: "Treatments tailored to your unique genetic makeup, lifestyle factors, and health history."
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-health-light/50 to-white pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-health-light/50 to-white pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 fade-up-1">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium">
            Our Solutions
          </div>
          
          <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
            Advanced AI-Powered Features
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our platform leverages the latest advancements in artificial intelligence, digital twin technology, and multi-omics analysis to provide unprecedented precision in healthcare.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { FeaturesSection };
