
import React from 'react';
import { Button } from './Button';
import { Brain, Database, Activity, Lock, Cpu, FlaskConical, Atom, LineChart, Sparkles, Globe, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

interface ExplainerSectionProps {
  className?: string;
}

const ExplainerSection: React.FC<ExplainerSectionProps> = ({ className }) => {
  const features = [
    {
      icon: <Database size={24} />,
      title: "AI-Driven Data Collection",
      description: "Our platform continuously gathers real-time health metrics from wearable sensors, EHRs, genetic sequencing reports, and environmental influences.",
      color: "bg-blue-500"
    },
    {
      icon: <Brain size={24} />,
      title: "Multi-Omics Analysis",
      description: "AI analyzes genomics, epigenetics, transcriptomics, proteomics, and metabolomics data to identify hidden disease risks before symptoms manifest.",
      color: "bg-indigo-500"
    },
    {
      icon: <Atom size={24} />,
      title: "Quantum-Powered Drug Discovery",
      description: "Quantum AI accelerates molecular simulations, biomarker discovery, and drug repurposing for faster and more precise treatment recommendations.",
      color: "bg-purple-500"
    },
    {
      icon: <Cpu size={24} />,
      title: "Predictive Digital Twin Modelling",
      description: "AI-powered digital twins simulate how different treatments will interact with your unique physiology for highly personalized therapy regimens.",
      color: "bg-violet-500"
    },
    {
      icon: <Activity size={24} />,
      title: "Continuous Monitoring & Adaptive Therapy",
      description: "As your health data evolves, AI dynamically adjusts treatment strategies and provides early warnings based on real-time biomarker changes.",
      color: "bg-pink-500"
    },
    {
      icon: <FlaskConical size={24} />,
      title: "Hyper-Personalized Treatment Plans",
      description: "We provide tailored treatment recommendations, drug optimization strategies, and lifestyle interventions based on your unique biology.",
      color: "bg-rose-500"
    },
    {
      icon: <Lock size={24} />,
      title: "Quantum Encryption & Privacy",
      description: "Utilizing blockchain technology and federated learning with quantum encryption, we ensure patient data remains private, secure, and fully compliant.",
      color: "bg-cyan-500"
    },
    {
      icon: <Globe size={24} />,
      title: "Global Health Network Integration",
      description: "Our platform connects with international research databases and healthcare systems to provide the most comprehensive and up-to-date treatment options.",
      color: "bg-teal-500"
    },
    {
      icon: <Search size={24} />,
      title: "Advanced Biomarker Discovery",
      description: "AI continuously analyzes your biodata to discover novel health indicators and potential intervention points that traditional medicine might miss.",
      color: "bg-emerald-500"
    }
  ];

  const handleFeatureClick = (title: string) => {
    toast({
      title: `${title} Selected`,
      description: "Learn more about this feature in our documentation.",
    });
  };

  return (
    <section id="how-it-works" className={cn("py-24 px-6 relative overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-b from-white to-health-light/40"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-health-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-health-secondary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-health-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-health-primary/10 rounded-full blur-xl"></div>
      
      {/* Diagonal lines background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSIjNmY3MmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2dyaWQpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-30 -z-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 fade-up-1">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-health-primary/10 to-health-secondary/10 text-health-primary font-medium gap-2 border border-health-primary/10 shadow-sm">
            <Sparkles size={16} />
            <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">How It Works</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-health-dark mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            The Future of Precision Medicine,<br className="hidden md:block" /> Built on AI & Quantum Computing
          </h2>
          
          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-health-primary to-health-secondary"></div>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At Akeno Health AI, we integrate cutting-edge artificial intelligence, quantum computing, multi-omics analysis, and digital twin simulations to deliver truly personalized, data-driven healthcare.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              onClick={() => handleFeatureClick(feature.title)}
              className={`bg-white rounded-2xl border border-white shadow-lg 
                transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer
                hover:border-health-primary/20 fade-up-${Math.min(index % 5 + 2, 5)}`}>
              <div className="relative h-3 w-full overflow-hidden rounded-t-2xl bg-gradient-to-r from-health-primary to-health-secondary">
                <div className="absolute inset-0 bg-white/20"></div>
              </div>
              <div className="p-7">
                <div className="mb-5 -mt-10">
                  <div className={`flex items-center justify-center w-14 h-14 rounded-xl ${feature.color} text-white shadow-lg`}>
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-health-dark mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-3xl p-10 mb-12 shadow-lg border border-indigo-200 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzZmNzJmZiIgZmlsbC1vcGFjaXR5PSIwLjIiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IGZpbGw9InVybCgjZ3JpZCkiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48L3N2Zz4=')] opacity-50"></div>
          
          <div className="text-center fade-up-5 max-w-3xl mx-auto relative">
            <p className="text-xl text-health-dark font-bold mb-6 bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
              Akeno Health AI is more than a healthcare platform—it's a revolution in precision medicine, transforming how diseases are detected, managed, and treated!
            </p>
            
            <Button 
              size="lg" 
              variant="secondary"
              as={Link}
              to="/contact"
              onClick={() => {
                toast({
                  title: "Contact Request Initiated",
                  description: "We'll help you learn more about our precision medicine platform.",
                });
              }}
              className="group bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span className="flex items-center gap-2">
                Contact Us Today
                <LineChart size={18} className="transition-transform group-hover:scale-110" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ExplainerSection };
