
import React from 'react';
import { Button } from './Button';
import { ActivitySquare, Brain, FlaskConical, Database, Award, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <ActivitySquare className="h-10 w-10 text-health-primary" />,
    title: "Continuous Health Monitoring",
    description: "AI-powered wearables and real-time biomarkers detect early disease signals before symptoms appear."
  },
  {
    icon: <Brain className="h-10 w-10 text-health-primary" />,
    title: "AI-Powered Diagnostics & Clinical Decision Support",
    description: "AI-enhanced tools empower doctors with real-time, evidence-based recommendations, reducing diagnostic errors and treatment delays."
  },
  {
    icon: <Award className="h-10 w-10 text-health-primary" />,
    title: "Precision Medicine & Digital Twin Technology",
    description: "Hyper-personalised treatments tailored to genetics, microbiome, and disease progression for optimised health outcomes."
  },
  {
    icon: <FlaskConical className="h-10 w-10 text-health-primary" />,
    title: "AI-Driven Clinical Trials & Drug Discovery",
    description: "Advanced AI matches patients to clinical trials and accelerates drug discovery using quantum computing."
  },
  {
    icon: <Database className="h-10 w-10 text-health-primary" />,
    title: "Blockchain-Powered Universal Health Records (UHRs)",
    description: "A secure, decentralised health data system, ensuring patient ownership and real-time access to medical history."
  }
];

const MissionStatement: React.FC = () => {
  return (
    <section id="mission" className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient and decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-health-light/20"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-health-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-health-secondary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="inline-flex items-center px-5 py-1.5 rounded-full bg-gradient-to-r from-health-primary/10 to-health-secondary/10 text-health-primary text-sm font-medium mb-5">
            AI-Powered Healthcare, Redefined
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">What We Do</h3>
          <div className="w-24 h-1.5 bg-gradient-to-r from-health-primary to-health-secondary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-health-dark/70 max-w-3xl mx-auto">
            Akeno Health integrates cutting-edge AI, real-time health analytics, and blockchain security to revolutionise healthcare. Our platform provides:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="relative p-6 rounded-2xl bg-white border border-health-primary/10 shadow-sm hover:shadow-md transition-shadow group">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-health-primary/5 to-health-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="flex justify-center items-center w-16 h-16 rounded-full bg-health-primary/10 mb-5 mx-auto">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold text-health-dark text-center mb-3">{service.title}</h4>
                <p className="text-health-dark/70 text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-lg font-medium text-health-dark mb-8">
            Join the Akeno Health revolution – bridging healthcare, AI, and patient-centric innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              as="Link"
              to="/how-it-works"
              className="group"
            >
              Learn More
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              as="Link"
              to="/contact"
            >
              Join the Future of Healthcare
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { MissionStatement };
