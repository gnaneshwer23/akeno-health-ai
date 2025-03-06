
import React from 'react';
import { FeatureCard } from '@/components/FeatureCard';
import { Activity, Brain, Smartphone, Shield, Users, HeartPulse } from 'lucide-react';

const SolutionsOverview = () => {
  const mainSolutions = [
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

  const additionalBenefits = [
    {
      icon: <Shield size={24} className="text-health-primary" />,
      title: "Privacy & Security",
      description: "Your health data is protected with hospital-grade encryption and advanced security protocols that exceed HIPAA requirements."
    },
    {
      icon: <Users size={24} className="text-health-primary" />,
      title: "Connected Care Teams",
      description: "Seamlessly share your health data with healthcare providers for coordinated care and improved treatment outcomes."
    },
    {
      icon: <HeartPulse size={24} className="text-health-primary" />,
      title: "Preventive Health Focus",
      description: "Our AI identifies health risks early, enabling preventive interventions that can delay or prevent disease progression."
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
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainSolutions.map((solution, index) => (
            <FeatureCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              index={index}
            />
          ))}
        </div>
        
        <div className="bg-health-light/10 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-medium text-health-dark mb-4">Additional Benefits</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive approach to patient care extends beyond our core solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {additionalBenefits.map((benefit, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
                <div className="h-12 w-12 rounded-full bg-health-primary/10 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-medium text-health-dark mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;
