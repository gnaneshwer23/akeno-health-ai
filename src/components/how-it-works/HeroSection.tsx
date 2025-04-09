
import React from 'react';
import { motion } from 'framer-motion';
import { Database, Brain, Activity, Shield, Zap, ArrowRight } from 'lucide-react';
import { CustomButton } from '@/components/ui/custom-button';
import { toast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const handleDemo = () => {
    toast({
      title: "Demo Request Received",
      description: "Thank you for your interest. A team member will contact you shortly to schedule a demo.",
    });
  };

  const handleGetStarted = () => {
    toast({
      title: "Getting Started",
      description: "Welcome to Akeno Health! We're excited to have you join our healthcare revolution.",
    });
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-indigo-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 -right-20 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSIjNmY3MmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2dyaWQpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative">
        {/* Floating elements */}
        <div className="hidden lg:block">
          <motion.div 
            className="absolute top-10 left-0 w-16 h-16 bg-indigo-100 rounded-lg p-3 shadow-md"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Database className="w-full h-full text-indigo-600" />
          </motion.div>
          
          <motion.div 
            className="absolute top-36 right-20 w-20 h-20 bg-purple-100 rounded-lg p-4 shadow-md"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Brain className="w-full h-full text-purple-600" />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-20 left-24 w-16 h-16 bg-blue-100 rounded-lg p-3 shadow-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Activity className="w-full h-full text-blue-600" />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-40 right-0 w-16 h-16 bg-emerald-100 rounded-lg p-3 shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Shield className="w-full h-full text-emerald-600" />
          </motion.div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Hero badge */}
          <motion.div 
            className="inline-flex items-center px-5 py-2 rounded-full bg-indigo-100 text-indigo-800 font-medium gap-2 mb-6 border border-indigo-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Zap size={18} />
            <span>The Future of AI-Powered Healthcare</span>
          </motion.div>
          
          {/* Hero title */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-health-primary via-health-secondary to-purple-600 bg-clip-text text-transparent">
              How Akeno Health Works
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-semibold text-health-dark">
              The Future of Precision Medicine, Built on AI & Quantum Computing
            </p>
          </motion.div>
          
          {/* Hero subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From Real-Time Health Data to Predictive, Personalised, and Ethical AI-Driven Care
          </motion.p>
          
          {/* Hero description */}
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Discover how our advanced AI platform integrates with your daily life to predict, prevent, and personalize healthcare like never before, all while keeping your data secure and private.
          </motion.p>
          
          {/* Hero buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CustomButton 
              size="lg" 
              variant="primary"
              as={Link}
              to="/patient-solutions"
              onClick={handleGetStarted}
              className="shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
              rightIcon={<ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />}
            >
              Get Started Today
            </CustomButton>
            
            <CustomButton 
              size="lg" 
              variant="outline"
              onClick={handleDemo}
              className="border-health-primary text-health-primary hover:bg-health-primary/5 w-full sm:w-auto"
            >
              Book a Demo
            </CustomButton>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span className="text-sm text-muted-foreground mb-2">Explore</span>
          <div className="w-6 h-9 border-2 border-muted-foreground rounded-full flex items-start justify-center p-1">
            <motion.div 
              className="w-1.5 h-1.5 bg-health-primary rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
