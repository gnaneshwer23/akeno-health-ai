
import React from 'react';
import { Brain, FlaskConical, Activity, Sparkles, Shield, Database, Link } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-indigo-50 via-violet-50 to-white relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-purple-300 to-indigo-300 opacity-20 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-gradient-to-bl from-blue-300 to-cyan-300 opacity-20 blur-3xl -z-10"></div>
      <div className="absolute top-1/3 right-10 w-32 h-32 rounded-full bg-gradient-to-tl from-amber-300 to-yellow-300 opacity-20 blur-xl -z-10"></div>
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSIjNmY3MmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2dyaWQpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-30 -z-10"></div>
      
      <motion.div 
        className="max-w-5xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.span 
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-700 font-medium border border-indigo-200 shadow-sm"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Sparkles size={16} className="text-indigo-600" />
          <span>Our Technology</span>
        </motion.span>
        
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-health-dark mb-6 tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <span className="bg-gradient-to-br from-indigo-700 to-purple-700 bg-clip-text text-transparent">How Akeno Health Works</span> 
          <span className="block md:inline"> – Your AI-Powered Healthcare Journey</span>
        </motion.h1>
        
        <div className="flex justify-center mb-6">
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
        </div>
        
        <p className="text-lg text-health-dark/70 max-w-3xl mx-auto mb-10 leading-relaxed">
          Transforming Healthcare with AI, Quantum Computing, and Blockchain for a Smarter, More Personalised Future
        </p>
        
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-indigo-200 shadow-md mb-10 max-w-3xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-health-dark/80">
            Akeno Health is a <span className="font-semibold text-indigo-700">seamless, AI-powered healthcare ecosystem</span> that continuously <span className="font-semibold text-indigo-700">monitors, detects, predicts, and optimises</span> patient health through advanced <span className="font-semibold text-indigo-700">machine learning, quantum-powered diagnostics, and blockchain-secured data management.</span>
          </p>
          <p className="mt-4 text-health-dark/80">
            This <span className="font-semibold text-indigo-700">intelligent, self-learning system</span> integrates <span className="font-semibold text-indigo-700">real-time health data, precision medicine, and automated clinical decision support</span>, revolutionising the way <span className="font-semibold text-indigo-700">patients, doctors, researchers, and pharma companies</span> collaborate in the healthcare landscape.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          <motion.div 
            className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl border border-indigo-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-md mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-indigo-900">AI-Powered Detection</h3>
            <p className="text-sm text-indigo-700/70">Identify disease risks years before symptoms appear</p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-md mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <FlaskConical className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-purple-900">Precision Medicine</h3>
            <p className="text-sm text-purple-700/70">Treatments tailored to your unique biological profile</p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl border border-pink-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-pink-600 to-pink-700 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-md mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-pink-900">Blockchain Security</h3>
            <p className="text-sm text-pink-700/70">Patient-controlled health data with quantum encryption</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
