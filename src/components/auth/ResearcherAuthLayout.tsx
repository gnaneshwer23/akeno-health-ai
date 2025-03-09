
import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import AuthCard from './AuthCard';
import { Database, Microscope, Server, Sparkles, Flask, ShieldCheck, Dna } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface ResearcherAuthLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const ResearcherAuthLayout = ({ 
  children, 
  title = "Researcher Portal", 
  description = "Access AI-powered drug discovery and clinical trial tools" 
}: ResearcherAuthLayoutProps) => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  const isRegister = location.pathname === '/register';

  const pageTitle = isRegister 
    ? "Create Researcher Account" 
    : title;
  const pageDescription = isRegister 
    ? "Join Akeno Health's AI platform for biotech and pharmaceutical research" 
    : description;
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-10 px-6 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-indigo-300/10 blur-3xl"
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.05, 1],
          }} 
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 left-[10%] w-72 h-72 rounded-full bg-purple-300/10 blur-3xl"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }} 
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
        
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-8 lg:gap-16 relative z-10">
          {/* Left side content */}
          <motion.div 
            className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0 px-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600/10 mb-6">
              <Flask className="h-8 w-8 text-indigo-600" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {pageTitle}
            </h1>
            
            <p className="text-muted-foreground max-w-md mb-8">
              {pageDescription}
            </p>
            
            <div className="space-y-4 w-full max-w-md">
              <motion.div 
                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-indigo-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Microscope className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-sm">AI-Driven Drug Discovery</h3>
                  <p className="text-xs text-muted-foreground">Access quantum-powered molecular simulations and AI compound screening</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-indigo-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Database className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-sm">Clinical Trial Optimization</h3>
                  <p className="text-xs text-muted-foreground">Enhance patient recruitment with AI matching and predictive analytics</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-indigo-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Dna className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-sm">Precision Medicine Platform</h3>
                  <p className="text-xs text-muted-foreground">Utilize AI for genomics analysis and personalized therapeutic development</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right side form */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <AuthCard 
                title={isRegister ? "Researcher Sign Up" : "Researcher Sign In"}
                description={isRegister ? "Create your account to access Akeno's biotech research platform" : "Access your AI-powered drug discovery dashboard"}
                className="border-indigo-200"
              >
                {children}
              </AuthCard>
              
              <motion.div 
                className="absolute -z-10 -top-6 -right-6 h-32 w-32 bg-indigo-400/20 rounded-full blur-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
              <motion.div 
                className="absolute -z-10 -bottom-6 -left-6 h-32 w-32 bg-purple-400/20 rounded-full blur-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </div>
          </motion.div>
        </div>
      </main>
      
      <motion.div 
        className="w-full max-w-3xl mx-auto text-center px-6 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <ShieldCheck className="h-4 w-4 text-indigo-600" />
          <h3 className="text-sm font-medium">Secure Research Environment</h3>
        </div>
        <p className="text-xs text-muted-foreground max-w-lg mx-auto">
          Our platform uses blockchain technology for secure data sharing and complies with 21 CFR Part 11, GDPR and HIPAA requirements for pharmaceutical research.
        </p>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default ResearcherAuthLayout;
