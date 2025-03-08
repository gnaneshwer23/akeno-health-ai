
import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import AuthCard from './AuthCard';

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-16 px-6 bg-gradient-to-br from-white via-health-light/20 to-health-primary/10">
        <div className="w-full max-w-md">
          <AuthCard 
            title="Welcome"
          >
            {children}
          </AuthCard>
          
          <motion.div 
            className="mt-8 text-center text-sm text-muted-foreground bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-health-primary/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p>For demo purposes, you can create an account with any email and password</p>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AuthLayout;
