
import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import AuthCard from './AuthCard';
import { Shield, Lock } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const AuthLayout = ({ children, title = "Welcome Back", description = "Sign in to your account to access your AI-powered healthcare dashboard" }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-16 px-6 bg-gradient-to-br from-white via-health-light/20 to-health-primary/10">
        <div className="w-full max-w-md">
          <motion.div 
            className="mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-health-primary/10 mb-4">
              <Shield className="h-6 w-6 text-health-primary" />
            </div>
            <h1 className="text-2xl font-bold text-health-dark">{title}</h1>
            <p className="text-muted-foreground mt-2">{description}</p>
          </motion.div>
          
          <div className="relative">
            <AuthCard 
              title="Secure Login"
              description="Enter your credentials to access your personalized dashboard"
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
          
          <motion.div 
            className="mt-8 text-center p-4 rounded-lg border border-health-primary/10 bg-white/80 backdrop-blur-sm shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Lock className="h-4 w-4 text-health-primary" />
              <h3 className="text-sm font-medium">Enhanced Security</h3>
            </div>
            <p className="text-xs text-muted-foreground">
              This system uses role-based access control and two-factor authentication to ensure your data remains secure and compliant with healthcare regulations.
            </p>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AuthLayout;
