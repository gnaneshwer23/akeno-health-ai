
import React from 'react';
import { Button } from '@/components/Button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const PatientSolutionsCTA = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-indigo-50/50 relative overflow-hidden text-center">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white via-white/80 to-transparent"></div>
      <div className="absolute -top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 left-10 w-72 h-72 bg-gradient-to-tr from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto relative">
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-200">
            <Sparkles className="h-8 w-8 text-indigo-500" />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-medium bg-gradient-to-br from-indigo-800 to-purple-600 text-transparent bg-clip-text mb-6">
          Experience the Power of AI in Healthcare Today
        </h2>
        
        <div className="flex justify-center mb-6">
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full"></div>
        </div>
        
        <p className="text-lg text-indigo-900/70 mb-10 leading-relaxed">
          With Akeno Health AI, patients experience the future of healthcare—where AI transforms personal health monitoring, digital twin simulations revolutionize disease prediction, and real-time AI feedback enhances everyday well-being. By integrating advanced AI technology, predictive analytics, and real-time biometric monitoring, we empower individuals to make informed health decisions, optimize therapy outcomes, and improve long-term well-being.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="primary" 
            as="Link" 
            to="/contact"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all"
          >
            Get Started Now
            <ArrowRight size={16} />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            as="Link" 
            to="/contact"
            className="border-indigo-300 text-indigo-700 hover:bg-indigo-50"
          >
            Schedule a Demo
          </Button>
        </div>
        
        <div className="mt-12 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-indigo-100">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500"></div>
              </div>
              <span className="text-indigo-900 font-medium">Secure & Private</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center">
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-green-500 to-teal-500"></div>
              </div>
              <span className="text-indigo-900 font-medium">Personalized Care</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
              </div>
              <span className="text-indigo-900 font-medium">Continuous Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientSolutionsCTA;
