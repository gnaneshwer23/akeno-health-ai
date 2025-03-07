
import React from 'react';
import { Brain, FlaskConical, Activity, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-purple-200 to-indigo-200 opacity-40 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-gradient-to-bl from-blue-200 to-cyan-200 opacity-40 blur-3xl -z-10"></div>
      <div className="absolute top-1/3 right-10 w-32 h-32 rounded-full bg-gradient-to-tl from-amber-200 to-yellow-200 opacity-30 blur-xl -z-10"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-600 font-medium border border-indigo-200 shadow-sm">
          <Sparkles size={16} className="text-indigo-500" />
          <span>Our Technology</span>
        </span>
        
        <h1 className="text-4xl md:text-5xl font-bold text-health-dark mb-6 tracking-tight">
          Transforming Healthcare with <span className="bg-gradient-to-br from-indigo-600 to-purple-600 bg-clip-text text-transparent">AI</span> & <span className="bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent">Precision Medicine</span>
        </h1>
        
        <div className="flex justify-center mb-6">
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
        </div>
        
        <p className="text-lg text-health-dark/70 max-w-3xl mx-auto mb-10 leading-relaxed">
          Harnessing AI-driven diagnostics, multi-omics analysis, and real-time digital twin simulations for personalized, data-driven healthcare.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="bg-gradient-to-br from-indigo-50 to-white p-5 rounded-xl border border-indigo-200 w-full md:w-[30%] shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-md mx-auto mb-3">
              <Brain className="w-8 h-8" />
            </div>
            <h3 className="font-medium text-lg mb-1 text-indigo-900">Early Detection</h3>
            <p className="text-sm text-indigo-700/70">Identify disease risks years before symptoms appear</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-white p-5 rounded-xl border border-purple-200 w-full md:w-[30%] shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-md mx-auto mb-3">
              <FlaskConical className="w-8 h-8" />
            </div>
            <h3 className="font-medium text-lg mb-1 text-purple-900">Precision Therapy</h3>
            <p className="text-sm text-purple-700/70">Treatments tailored to your unique biological profile</p>
          </div>
          
          <div className="bg-gradient-to-br from-pink-50 to-white p-5 rounded-xl border border-pink-200 w-full md:w-[30%] shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-md mx-auto mb-3">
              <Activity className="w-8 h-8" />
            </div>
            <h3 className="font-medium text-lg mb-1 text-pink-900">Continuous Monitoring</h3>
            <p className="text-sm text-pink-700/70">Real-time adjustments to optimize your health outcomes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
