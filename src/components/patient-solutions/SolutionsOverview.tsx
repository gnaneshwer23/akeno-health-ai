
import React from 'react';
import { FeatureCard } from '@/components/FeatureCard';
import { Activity, Brain, Smartphone } from 'lucide-react';

const SolutionsOverview = () => {
  const solutions = [
    {
      icon: <Activity size={24} />,
      title: "AI-Powered Health Monitoring",
      description: "Continuous tracking of biometrics, genetics, and lifestyle factors to provide actionable health insights and proactive healthcare recommendations."
    },
    {
      icon: <Brain size={24} />,
      title: "Digital Twin Technology",
      description: "AI-generated virtual replicas that simulate how biological changes, diseases, and treatments interact over time for personalized medicine."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Health App",
      description: "Real-time health monitoring, customized wellness insights, and AI-driven treatment recommendations in the palm of your hand."
    }
  ];

  return (
    <section className="py-16 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
            Comprehensive Patient Solutions
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our platform integrates AI-powered diagnostics, continuous health monitoring, and predictive analytics to create a smarter, more personalized healthcare experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <FeatureCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;
