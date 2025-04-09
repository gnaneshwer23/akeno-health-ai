
import React from 'react';
import { Button } from './Button';
import { Brain, Database, Activity, Lock, Cpu, FlaskConical, Atom, LineChart, Sparkles, Globe, Search, ArrowRight, LightbulbIcon, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { CustomButton } from './ui/custom-button';

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

  const handleContactClick = () => {
    toast({
      title: "Contact Request Initiated",
      description: "We'll help you learn more about our precision medicine platform.",
    });
  };
  
  const handleLearnMoreClick = () => {
    toast({
      title: "Learning Resources",
      description: "Accessing comprehensive resources about our precision medicine technology.",
    });
  };

  return (
    <section id="how-it-works" className={cn("py-24 px-6 relative overflow-hidden", className)}>
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-health-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-health-secondary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-health-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-health-primary/10 rounded-full blur-xl"></div>
      
      {/* Diagonal lines background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSIjNmY3MmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2dyaWQpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-30 -z-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Redesigned Header Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-health-primary/10 to-health-secondary/10 text-health-primary font-medium gap-2 border border-health-primary/10 shadow-sm">
              <Sparkles size={16} />
              <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">Revolutionary Technology</span>
            </div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold mb-6 max-w-4xl"
            >
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                The Future of Precision Medicine,<br className="hidden md:block" /> Built on AI & Quantum Computing
              </span>
            </motion.h2>
            
            <div className="flex justify-center mb-6">
              <div className="h-1 w-24 bg-gradient-to-r from-health-primary to-health-secondary"></div>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              At Akeno Health AI, we integrate cutting-edge artificial intelligence, quantum computing, multi-omics analysis, 
              and digital twin simulations to deliver truly personalized, data-driven healthcare.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <CustomButton 
                size="lg" 
                variant="primary"
                onClick={handleLearnMoreClick}
                className="group shadow-md hover:shadow-lg"
                rightIcon={<Zap size={16} className="transition-transform group-hover:scale-110" />}
              >
                Learn More
              </CustomButton>
              
              <CustomButton 
                size="lg" 
                variant="outline"
                as={Link}
                to="/contact"
                onClick={handleContactClick}
                className="group border-health-primary/20"
              >
                Schedule a Consultation
              </CustomButton>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Redesigned Feature Cards */}
        <div className="grid md:grid-cols-3 gap-7 mb-16">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              onClick={() => handleFeatureClick(feature.title)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`bg-white rounded-2xl border border-white shadow-lg 
                transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer
                hover:border-health-primary/20`}
            >
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
            </motion.div>
          ))}
        </div>
        
        {/* Enhanced CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-10 mb-12 shadow-xl relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjIiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IGZpbGw9InVybCgjZ3JpZCkiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48L3N2Zz4=')] opacity-50"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
            <div className="text-white md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Akeno Health AI is more than a healthcare platform—it's a revolution in precision medicine
              </h3>
              <p className="text-indigo-100 mb-0">
                We're transforming how diseases are detected, managed, and treated with our AI and quantum computing technology.
                Join us at the forefront of healthcare innovation.
              </p>
            </div>
            
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <CustomButton 
                size="lg" 
                variant="secondary"
                as={Link}
                to="/contact"
                onClick={handleContactClick}
                className="group bg-white text-indigo-700 hover:bg-indigo-50 transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
              >
                <span className="flex items-center gap-2">
                  Contact Us Today
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </span>
              </CustomButton>
            </div>
          </div>
        </motion.div>
        
        {/* New Feature Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 shadow-lg border border-health-primary/10"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-purple-100 text-purple-700 font-medium text-sm">
                <LightbulbIcon size={14} className="mr-1" />
                Featured Innovation
              </div>
              
              <h3 className="text-2xl font-bold text-health-dark mb-4">Quantum-Enhanced Personalized Medicine</h3>
              
              <p className="text-muted-foreground mb-6">
                Our quantum computing algorithms analyze vast datasets of genetic information, clinical records, and biomarker data
                to identify patterns and correlations invisible to conventional methods, delivering unprecedented precision in
                treatment recommendations.
              </p>
              
              <ul className="space-y-3 mb-6">
                {[
                  "100x faster processing of multi-omic datasets",
                  "Quantum simulation of drug-target interactions",
                  "AI-driven biomarker discovery and validation",
                  "Digital twin modeling for treatment response prediction"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="mt-1 text-indigo-600">
                      <div className="h-4 w-4 rounded-full bg-indigo-100 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              
              <CustomButton 
                variant="primary"
                size="lg" 
                onClick={() => {
                  toast({
                    title: "Quantum Technology Resources",
                    description: "Accessing detailed information about our quantum computing applications.",
                  });
                }}
                className="group"
              >
                Explore Quantum Technology
                <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
              </CustomButton>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-xl bg-white/90 flex items-center justify-center p-8">
                  {/* Replace with an actual image when available */}
                  <div className="relative w-full h-full rounded-lg overflow-hidden bg-gradient-to-r from-indigo-100 to-purple-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Atom size={80} className="mx-auto text-indigo-500 mb-4" />
                        <div className="text-indigo-800 font-semibold">Quantum Computing Visualization</div>
                        <div className="text-xs text-muted-foreground mt-1">Interactive model available in dashboard</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 h-12 w-12 rounded-full bg-health-secondary/20 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 h-16 w-16 rounded-full bg-health-primary/20 blur-xl"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { ExplainerSection };
