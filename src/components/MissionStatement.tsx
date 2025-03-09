
import React from 'react';
import { Button } from './Button';
import { ActivitySquare, Brain, FlaskConical, Database, Award, ArrowRight, HeartPulse, Shield, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <ActivitySquare className="h-10 w-10 text-white" />,
    title: "Continuous Health Monitoring",
    description: "AI-powered wearables and real-time biomarkers detect early disease signals before symptoms appear."
  },
  {
    icon: <Brain className="h-10 w-10 text-white" />,
    title: "AI-Powered Diagnostics & Clinical Decision Support",
    description: "AI-enhanced tools empower doctors with real-time, evidence-based recommendations, reducing diagnostic errors and treatment delays."
  },
  {
    icon: <Award className="h-10 w-10 text-white" />,
    title: "Precision Medicine & Digital Twin Technology",
    description: "Hyper-personalised treatments tailored to genetics, microbiome, and disease progression for optimised health outcomes."
  },
  {
    icon: <HeartPulse className="h-10 w-10 text-white" />,
    title: "AI-Integrated Mental & Cognitive Health Monitoring",
    description: "Advanced AI-driven assessments detect early signs of cognitive decline, stress, and mental health conditions, enabling proactive and personalised interventions."
  },
  {
    icon: <FlaskConical className="h-10 w-10 text-white" />,
    title: "AI-Driven Clinical Trials & Drug Discovery",
    description: "Advanced AI matches patients to clinical trials and accelerates drug discovery using quantum computing."
  },
  {
    icon: <Database className="h-10 w-10 text-white" />,
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
      
      {/* Healthcare-specific decorative elements */}
      <div className="absolute left-10 top-1/3 opacity-10">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 16C6 19.3137 8.68629 22 12 22C15.3137 22 18 19.3137 18 16C18 12.6863 15.3137 10 12 10C8.68629 10 6 12.6863 6 16Z" stroke="currentColor" strokeWidth="2" className="text-health-primary"/>
          <path d="M2 8.5C3.38071 8.5 4.5 7.38071 4.5 6C4.5 7.38071 5.61929 8.5 7 8.5C5.61929 8.5 4.5 9.61929 4.5 11C4.5 9.61929 3.38071 8.5 2 8.5Z" stroke="currentColor" strokeWidth="2" className="text-health-secondary"/>
          <path d="M17 6.5C18.3807 6.5 19.5 5.38071 19.5 4C19.5 5.38071 20.6193 6.5 22 6.5C20.6193 6.5 19.5 7.61929 19.5 9C19.5 7.61929 18.3807 6.5 17 6.5Z" stroke="currentColor" strokeWidth="2" className="text-health-accent"/>
          <path d="M12 2V8" stroke="currentColor" strokeWidth="2" className="text-health-primary"/>
          <path d="M10 4H14" stroke="currentColor" strokeWidth="2" className="text-health-primary"/>
        </svg>
      </div>
      
      <div className="absolute right-10 bottom-1/3 opacity-10">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" className="text-health-primary"/>
          <path d="M12 8V16" stroke="currentColor" strokeWidth="2" className="text-health-primary"/>
          <path d="M16 12H8" stroke="currentColor" strokeWidth="2" className="text-health-primary"/>
          <path d="M4 4L20 20" stroke="currentColor" strokeWidth="2" className="text-health-secondary"/>
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-5 py-1.5 rounded-full bg-gradient-to-r from-health-primary/10 to-health-secondary/10 text-health-primary text-sm font-medium mb-5">
            <Sparkles size={16} className="mr-2" />
            AI-Powered Healthcare, Redefined
          </div>
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-health-dark to-health-primary bg-clip-text text-transparent mb-6">What We Do</h3>
          <div className="w-24 h-1.5 bg-gradient-to-r from-health-primary to-health-secondary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-health-dark/70 max-w-3xl mx-auto">
            Akeno Health integrates cutting-edge AI, real-time health analytics, and blockchain security to revolutionise healthcare. Our platform provides:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="relative overflow-hidden p-6 rounded-2xl bg-white shadow-sm border border-health-primary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-health-primary/80 to-health-secondary rounded-bl-[100px] -translate-y-1/2 translate-x-1/2 group-hover:rotate-12 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex justify-center items-center w-16 h-16 rounded-2xl bg-gradient-to-br from-health-primary to-health-secondary mb-5 mx-auto shadow-md transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold text-health-dark text-center mb-3">{service.title}</h4>
                <p className="text-health-dark/70 text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="mb-8 p-6 bg-gradient-to-r from-health-primary/5 to-health-secondary/5 backdrop-blur-sm border border-health-primary/10 rounded-xl max-w-4xl mx-auto shadow-sm">
            <p className="text-xl font-medium bg-gradient-to-r from-health-dark to-health-primary bg-clip-text text-transparent">
              Join the Akeno Health revolution – bridging healthcare, AI, and patient-centric innovation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              as="Link"
              to="/how-it-works"
              className="group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Learn More
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-health-primary to-health-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              as="Link"
              to="/contact"
              className="border-health-primary/30 hover:border-health-primary/60"
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
