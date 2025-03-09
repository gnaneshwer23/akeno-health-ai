
import React from 'react';
import { Button } from '@/components/Button';
import { ArrowRight, CheckCircle, Users, Brain, Database, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToActionSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-gradient-to-tl from-purple-500/20 to-pink-500/10 blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Akeno Health is the <span className="text-indigo-300">Future of Healthcare</span>
          </h2>
          
          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-400 to-purple-400"></div>
          </div>
          
          <p className="text-lg text-indigo-100/90 max-w-3xl mx-auto">
            Experience the world's first fully AI-powered, self-learning healthcare ecosystem
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-indigo-300 flex-shrink-0 mt-0.5" />
                <p className="text-indigo-100">
                  <span className="font-semibold">The world's first fully AI-powered</span>, self-learning healthcare ecosystem
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-indigo-300 flex-shrink-0 mt-0.5" />
                <p className="text-indigo-100">
                  <span className="font-semibold">Early disease detection</span> & real-time predictive diagnostics
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-indigo-300 flex-shrink-0 mt-0.5" />
                <p className="text-indigo-100">
                  <span className="font-semibold">AI-driven precision medicine</span> & Quantum-powered drug discovery
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-indigo-300 flex-shrink-0 mt-0.5" />
                <p className="text-indigo-100">
                  <span className="font-semibold">Seamless doctor-patient-pharma connectivity</span> for optimized care
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-indigo-300 flex-shrink-0 mt-0.5" />
                <p className="text-indigo-100">
                  <span className="font-semibold">Blockchain-secured, patient-controlled</span> health data with quantum encryption
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-indigo-300 flex-shrink-0 mt-0.5" />
                <p className="text-indigo-100">
                  <span className="font-semibold">AI-automated clinical trials</span> & research acceleration for better treatments
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Experience the Future of AI Healthcare – Get Started Today!
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                  <Users size={20} className="text-indigo-300" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">For Patients</h4>
                  <p className="text-indigo-200/70 text-sm">Get personalised, AI-powered health monitoring & early detection</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                  <Brain size={20} className="text-indigo-300" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">For Doctors & Hospitals</h4>
                  <p className="text-indigo-200/70 text-sm">Enhance decision-making with AI-driven diagnostics & real-time insights</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                  <Database size={20} className="text-indigo-300" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">For Pharma & Researchers</h4>
                  <p className="text-indigo-200/70 text-sm">Accelerate drug discovery, clinical trials, and personalised medicine</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                  <Zap size={20} className="text-indigo-300" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">For Investors & Partners</h4>
                  <p className="text-indigo-200/70 text-sm">Be part of the world's most advanced healthcare AI ecosystem</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
            <Button 
              variant="primary" 
              size="lg"
              as="Link"
              to="/contact"
              className="group bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 w-full md:w-auto"
              icon={<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
            >
              Contact Us Today
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              as="Link"
              to="/patient-solutions"
              className="border-indigo-300 text-indigo-100 hover:bg-indigo-500/10 w-full md:w-auto"
              icon={<Shield size={16} />}
            >
              Learn About Our Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
