
import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import AuthCard from './AuthCard';
import { Shield, Lock, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface AuthLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const AuthLayout = ({ 
  children, 
  title = "Welcome Back", 
  description = "Sign in to your account to access your AI-powered healthcare dashboard" 
}: AuthLayoutProps) => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  const isRegister = location.pathname === '/register';

  const pageTitle = isRegister ? "Create Your Account" : title;
  const pageDescription = isRegister 
    ? "Join Akeno Health to access personalized AI healthcare insights" 
    : description;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-10 px-6 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-health-light/20 to-health-primary/10 z-0"></div>
        
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-health-primary/5 blur-3xl"
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
          className="absolute bottom-20 left-[10%] w-72 h-72 rounded-full bg-health-secondary/5 blur-3xl"
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
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-health-primary/10 mb-6">
              <Shield className="h-8 w-8 text-health-primary" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-health-dark mb-4">
              {pageTitle}
            </h1>
            
            <p className="text-muted-foreground max-w-md mb-8">
              {pageDescription}
            </p>
            
            <div className="space-y-4 w-full max-w-md">
              <motion.div 
                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-health-primary/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <CheckCircle2 className="h-5 w-5 text-health-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-sm">Secure & Private</h3>
                  <p className="text-xs text-muted-foreground">Advanced encryption and HIPAA-compliant data handling</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-health-primary/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Sparkles className="h-5 w-5 text-health-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-sm">Personalized AI Insights</h3>
                  <p className="text-xs text-muted-foreground">Get tailored health recommendations based on your profile</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-health-primary/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <ArrowRight className="h-5 w-5 text-health-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-sm">Simple Onboarding</h3>
                  <p className="text-xs text-muted-foreground">{isRegister ? "Create your account in less than 2 minutes" : "Sign in to access your dashboard instantly"}</p>
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
                title={isRegister ? "Sign Up" : "Sign In"}
                description={isRegister ? "Fill in your details to create your account" : "Enter your credentials to access your account"}
              >
                {children}
              </AuthCard>
              
              <motion.div 
                className="absolute -z-10 -top-6 -right-6 h-32 w-32 bg-health-primary/20 rounded-full blur-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
              <motion.div 
                className="absolute -z-10 -bottom-6 -left-6 h-32 w-32 bg-health-secondary/20 rounded-full blur-xl"
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
          <Lock className="h-4 w-4 text-health-primary" />
          <h3 className="text-sm font-medium">Enhanced Security & Compliance</h3>
        </div>
        <p className="text-xs text-muted-foreground max-w-lg mx-auto">
          This system uses role-based access control and advanced encryption to ensure your data remains secure and compliant with healthcare regulations.
        </p>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default AuthLayout;
