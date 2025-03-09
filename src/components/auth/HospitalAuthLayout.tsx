
import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import AuthCard from './AuthCard';
import { Building2, Activity, ClipboardList, Stethoscope, ShieldCheck, Users } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface HospitalAuthLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const HospitalAuthLayout = ({ 
  children, 
  title = "Hospital Portal", 
  description = "Access AI-powered healthcare management tools" 
}: HospitalAuthLayoutProps) => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  const isRegister = location.pathname === '/register';

  const pageTitle = isRegister 
    ? "Create Hospital Account" 
    : title;
  const pageDescription = isRegister 
    ? "Join Akeno Health's AI platform for healthcare institutions" 
    : description;
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-teal-50 to-emerald-50">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-10 px-6 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-teal-300/10 blur-3xl"
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
          className="absolute bottom-20 left-[10%] w-72 h-72 rounded-full bg-emerald-300/10 blur-3xl"
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
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-600/10 mb-6">
              <Building2 className="h-8 w-8 text-teal-600" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {pageTitle}
            </h1>
            
            <p className="text-muted-foreground max-w-md mb-8">
              {pageDescription}
            </p>
            
            <div className="space-y-4 w-full max-w-md">
              <motion.div 
                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-teal-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Activity className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-sm">Resource Optimization</h3>
                  <p className="text-xs text-muted-foreground">AI-powered scheduling and resource allocation to reduce wait times</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-teal-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <ClipboardList className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-sm">Patient Risk Monitoring</h3>
                  <p className="text-xs text-muted-foreground">Identify high-risk patients with predictive analytics and early warning systems</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-teal-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Stethoscope className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-sm">Clinical Decision Support</h3>
                  <p className="text-xs text-muted-foreground">Evidence-based recommendations for treatment plans and care protocols</p>
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
                title={isRegister ? "Hospital Sign Up" : "Hospital Sign In"}
                description={isRegister ? "Create your account to access Akeno's healthcare management platform" : "Access your AI-powered hospital dashboard"}
                className="border-teal-200"
              >
                {children}
              </AuthCard>
              
              <motion.div 
                className="absolute -z-10 -top-6 -right-6 h-32 w-32 bg-teal-400/20 rounded-full blur-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
              <motion.div 
                className="absolute -z-10 -bottom-6 -left-6 h-32 w-32 bg-emerald-400/20 rounded-full blur-xl"
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
          <ShieldCheck className="h-4 w-4 text-teal-600" />
          <h3 className="text-sm font-medium">Enterprise-Grade Security</h3>
        </div>
        <p className="text-xs text-muted-foreground max-w-lg mx-auto">
          Our platform uses advanced encryption and complies with HIPAA, GDPR, and other regulatory requirements for secure healthcare data management.
        </p>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default HospitalAuthLayout;
