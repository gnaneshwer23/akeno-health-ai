
import React from 'react';
import { Handshake, ArrowRight, Heart, Globe } from 'lucide-react';
import { ActionButtons } from './cta/ActionButtons';
import { motion } from 'framer-motion';

export const AboutCTA = () => {
  return (
    <section className="px-6 py-20 relative overflow-hidden" id="partners">
      {/* Enhanced background with patterns and gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-health-light/30 to-white -z-10"></div>
      
      {/* Pattern background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCA0MCIgc3Ryb2tlPSIjNmY3MmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2dyaWQpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-30 -z-10"></div>
      
      {/* Decorative blurs */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -z-10"
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10"
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10"
        animate={{ opacity: [0.6, 0.9, 0.6], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      ></motion.div>
      
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-5 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-500/10 to-sky-500/10 font-medium gap-2 border border-blue-500/10 shadow-lg shadow-indigo-500/5">
            <Handshake size={16} className="text-blue-500 animate-pulse" />
            <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
              Ready to Work with Us?
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
            Join Our Mission for a Healthier Future
          </h2>
          
          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full"></div>
          </div>
          
          <p className="text-health-dark/70 max-w-3xl mx-auto mb-8">
            Whether you're a healthcare provider, researcher, or patient, Akeno Health offers cutting-edge AI solutions to transform healthcare experiences and outcomes.
          </p>
        </motion.div>
        
        {/* Value proposition icons */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/50 border border-indigo-50 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mb-4">
              <Heart size={24} className="text-indigo-500" />
            </div>
            <h3 className="font-medium text-lg text-health-dark mb-2">Personalized Care</h3>
            <p className="text-health-dark/70 text-sm">AI-driven solutions tailored to individual health needs</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/50 border border-indigo-50 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center mb-4">
              <Globe size={24} className="text-purple-500" />
            </div>
            <h3 className="font-medium text-lg text-health-dark mb-2">Global Impact</h3>
            <p className="text-health-dark/70 text-sm">Healthcare solutions designed to reach underserved communities worldwide</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/50 border border-indigo-50 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center mb-4">
              <ArrowRight size={24} className="text-sky-500" />
            </div>
            <h3 className="font-medium text-lg text-health-dark mb-2">Innovative Future</h3>
            <p className="text-health-dark/70 text-sm">Pioneering next-generation healthcare technology and research</p>
          </div>
        </motion.div>
        
        <div className="text-center mt-16">
          <p className="text-xl font-medium text-health-dark mb-8">
            Be Part of the Healthcare Revolution
          </p>
          
          <ActionButtons />
          
          <p className="text-base text-health-dark/60 mt-12">
            Akeno Health – Pioneering AI-Driven Personalised Medicine for a Healthier Tomorrow.
          </p>
        </div>
      </div>
      
      {/* Enhanced floating elements with animations */}
      <div className="absolute top-1/4 left-10 w-8 h-8 rounded-full bg-purple-500/20 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-3/4 right-10 w-10 h-10 rounded-full bg-indigo-500/20 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-2/5 right-1/4 w-6 h-6 rounded-full bg-blue-500/20 animate-float" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full bg-fuchsia-500/20 animate-float" style={{animationDelay: '4s'}}></div>
    </section>
  );
};
