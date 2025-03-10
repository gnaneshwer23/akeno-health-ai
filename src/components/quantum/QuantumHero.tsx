
import React from 'react';
import { Atom, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export const QuantumHero = () => {
  return (
    <section className="relative mb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 text-purple-700 font-medium"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Atom size={18} className="text-purple-600 animate-pulse" />
            <span>Next-Generation Technology</span>
            <Sparkles size={16} className="text-blue-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </motion.span>
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-purple-700 via-blue-600 to-indigo-700 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Quantum Computing & AI – The Future of Healthcare Innovation
          </motion.h1>
          
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </motion.div>
          
          <motion.p 
            className="text-lg sm:text-xl text-health-dark/80 max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Revolutionising Medicine, Drug Discovery, and Personalised Healthcare through unprecedented computational power to solve the most complex challenges in healthcare.
          </motion.p>
            
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 font-medium">
              <Zap size={16} className="text-blue-500" />
              <span>Exponential Computing Power</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 font-medium">
              <Sparkles size={16} className="text-purple-500" />
              <span>Revolutionary AI Integration</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced background effects */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
      <div className="absolute top-40 left-1/4 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
    </section>
  );
};
