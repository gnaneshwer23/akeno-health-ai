
import React from 'react';
import { Button } from '@/components/ui/button';
import { Atom, ArrowRight, Brain, Shield, Activity, Sparkles, Zap, MicroscopeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const QuantumCTA = () => {
  return (
    <section className="mb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-lg border border-purple-200/30"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl z-0 animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl z-0 animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full border-2 border-dashed border-purple-300/20 z-0 animate-spin" style={{ animationDuration: '40s' }}></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:max-w-xl">
                <motion.div 
                  className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-500/20 text-purple-700 text-sm font-medium mb-5"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Atom size={16} className="text-purple-600 mr-2 animate-pulse" />
                  <span>Quantum Computing in Healthcare</span>
                  <Sparkles size={14} className="ml-2 text-blue-500" />
                </motion.div>
                
                <motion.h2 
                  className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Join the Quantum AI Revolution in Healthcare
                </motion.h2>
                
                <motion.p 
                  className="text-health-dark/80 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Be part of the next breakthrough in AI-driven medicine. Partner with Akeno Health to build the future of 
                  AI-powered, quantum-accelerated, and blockchain-secured healthcare that will transform patient outcomes worldwide.
                </motion.p>
                
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, staggerChildren: 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm border border-purple-300/40 hover:shadow-md transition-all"
                    whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <Brain size={18} className="text-purple-600" />
                    <span className="text-sm font-medium">Enhanced AI Diagnostics</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm border border-purple-300/40 hover:shadow-md transition-all"
                    whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <MicroscopeIcon size={18} className="text-blue-600" />
                    <span className="text-sm font-medium">Drug Discovery</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm border border-purple-300/40 hover:shadow-md transition-all"
                    whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <Shield size={18} className="text-indigo-600" />
                    <span className="text-sm font-medium">Secure Health Data</span>
                  </motion.div>
                </motion.div>
              </div>
              
              <motion.div 
                className="flex flex-col md:w-auto w-full gap-3"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Button 
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all group"
                  size="lg"
                >
                  <Link to="/register" className="flex items-center">
                    Join the Network
                    <Zap size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <Button 
                  variant="outline"
                  asChild 
                  className="border-purple-300 text-purple-700 hover:bg-purple-50 shadow-sm"
                >
                  <Link to="/quantum-computing" className="flex items-center">
                    Learn More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
