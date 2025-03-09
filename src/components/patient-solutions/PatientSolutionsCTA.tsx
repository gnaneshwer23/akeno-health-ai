
import React from 'react';
import { Button } from '@/components/Button';
import { ArrowRight, Activity, Brain, Shield, ClipboardCheck } from 'lucide-react';
import { Zap } from 'lucide-react';

const PatientSolutionsCTA = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-600 to-blue-700 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-pattern-grid opacity-10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join the Akeno Health Network
        </h2>
        
        <p className="text-xl font-light max-w-3xl mx-auto mb-10 text-blue-100">
          Imagine a world where healthcare is proactive, personalized, and fully optimized for YOU. Akeno Health is making this a reality.
        </p>
        
        <div className="grid md:grid-cols-5 gap-4 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center">
            <Activity size={28} className="text-blue-200 mb-3" />
            <p className="text-sm">Continuous AI Health Monitoring</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center">
            <Brain size={28} className="text-blue-200 mb-3" />
            <p className="text-sm">Personalized Treatment Plans</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center">
            <Zap size={28} className="text-blue-200 mb-3" />
            <p className="text-sm">Faster, More Accurate Diagnoses</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center">
            <Shield size={28} className="text-blue-200 mb-3" />
            <p className="text-sm">Blockchain-Protected Records</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center">
            <ClipboardCheck size={28} className="text-blue-200 mb-3" />
            <p className="text-sm">Access to Clinical Trials</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button 
            variant="primary" 
            size="lg" 
            as="Link" 
            to="/register" 
            className="bg-white text-indigo-700 hover:bg-blue-50"
          >
            Sign Up Now
            <ArrowRight size={16} />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            as="Link" 
            to="/contact" 
            className="border-white text-white hover:bg-white/10"
          >
            Request a Consultation
          </Button>
          
          <Button 
            variant="ghost" 
            size="lg" 
            as="Link" 
            to="/how-it-works" 
            className="text-white hover:bg-white/10"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PatientSolutionsCTA;
