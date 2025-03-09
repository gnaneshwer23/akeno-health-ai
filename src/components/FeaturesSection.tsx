
import React from 'react';
import { FeatureCard } from './FeatureCard';
import { Button } from './Button';
import { ShieldCheck, Brain, Database, Stethoscope, Flask, Network } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <ActivitySquare className="w-12 h-12 text-health-primary" />,
      title: "First-of-Its-Kind AI-Driven Continuous Health Monitoring",
      description: "Our AI system continuously monitors your health markers, detecting diseases before symptoms appear and enabling truly preventative care."
    },
    {
      icon: <Brain className="w-12 h-12 text-health-primary" />,
      title: "AI-Powered Precision Medicine & Digital Twin Technology",
      description: "Hyper-personalised treatments based on your genetics, lifestyle and health data, using cutting-edge digital twin modelling."
    },
    {
      icon: <Database className="w-12 h-12 text-health-primary" />,
      title: "Seamless EHR & Blockchain-Powered Universal Health Records",
      description: "Secure, patient-owned universal health records providing complete, real-time access to all your medical data across providers."
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-health-primary" />,
      title: "AI-Driven Clinical Decision Support",
      description: "Our AI provides healthcare professionals with real-time, evidence-based recommendations for faster, more accurate diagnoses."
    },
    {
      icon: <Flask className="w-12 h-12 text-health-primary" />,
      title: "Accelerated Drug Discovery & Clinical Trial Matching",
      description: "Quantum computing and advanced AI algorithms accelerate pharmaceutical research and match patients to appropriate clinical trials."
    },
    {
      icon: <Network className="w-12 h-12 text-health-primary" />,
      title: "Federated Learning & Edge AI for Healthcare Intelligence",
      description: "Secure, decentralised healthcare intelligence that preserves privacy while advancing medical knowledge."
    }
  ];

  return (
    <section className="py-24 px-6" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-5 py-1.5 rounded-full bg-gradient-to-r from-health-primary/10 to-health-secondary/10 text-health-primary text-sm font-medium mb-5">
            The Gold Standard in AI Healthcare
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">Why Akeno Health?</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-health-primary to-health-secondary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-health-dark/70 max-w-3xl mx-auto">
            Akeno Health is the first AI-driven ecosystem that integrates real-time disease forecasting, AI-powered diagnostics, hyper-personalised treatments, and clinical research acceleration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl font-medium text-health-dark mb-8">
            Akeno Health is not just improving healthcare – we are redefining it.
          </p>
          <Button
            variant="primary"
            size="lg"
            as="Link"
            to="/contact"
            className="px-8"
          >
            Experience the Future of AI Healthcare Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export { FeaturesSection };
