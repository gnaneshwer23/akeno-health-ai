
import React from 'react';
import { FeatureCard } from '@/components/FeatureCard';
import { Hospital, Brain, TrendingDown, ArrowRight } from 'lucide-react';

const SolutionsOverview = () => {
  const solutions = [
    {
      icon: <Hospital size={24} />,
      title: "AI-Powered Hospital Integration",
      description: "Seamless integration with hospital systems, EHRs, and clinical workflows, providing scalable AI infrastructure to enhance patient care."
    },
    {
      icon: <Brain size={24} />,
      title: "AI-Driven Decision Support",
      description: "Real-time AI insights help doctors and administrators make faster, more informed decisions, enhancing diagnostic accuracy and patient safety."
    },
    {
      icon: <TrendingDown size={24} />,
      title: "Cost Savings Through AI Automation",
      description: "Reduce administrative costs, optimize hospital resources, and minimize waste with AI-powered workflow automation and predictive resource allocation."
    }
  ];

  return (
    <section className="py-16 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
            The Future of AI-Enhanced Hospital Operations
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Optimize workflows, automate routine tasks, and deliver precision-driven patient care within a seamlessly connected AI-powered healthcare ecosystem.
          </p>
        </div>
        
        {/* Solutions Process Flow */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-14 max-w-3xl mx-auto">
          <div className="flex flex-col items-center p-4">
            <div className="w-16 h-16 rounded-full bg-health-primary/10 flex items-center justify-center mb-2">
              <Hospital size={28} className="text-health-primary" />
            </div>
            <span className="text-sm font-medium text-health-dark">Integrate</span>
          </div>
          <ArrowRight size={24} className="hidden md:block text-health-primary/30 mx-2" />
          <div className="w-0.5 h-6 bg-health-primary/30 md:hidden my-2"></div>
          <div className="flex flex-col items-center p-4">
            <div className="w-16 h-16 rounded-full bg-health-primary/10 flex items-center justify-center mb-2">
              <Brain size={28} className="text-health-primary" />
            </div>
            <span className="text-sm font-medium text-health-dark">Enhance</span>
          </div>
          <ArrowRight size={24} className="hidden md:block text-health-primary/30 mx-2" />
          <div className="w-0.5 h-6 bg-health-primary/30 md:hidden my-2"></div>
          <div className="flex flex-col items-center p-4">
            <div className="w-16 h-16 rounded-full bg-health-primary/10 flex items-center justify-center mb-2">
              <TrendingDown size={28} className="text-health-primary" />
            </div>
            <span className="text-sm font-medium text-health-dark">Optimize</span>
          </div>
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
