
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, HeartPulse, Activity, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToActionSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-gradient-to-br from-indigo-300/20 to-purple-300/20 blur-2xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-gradient-to-br from-purple-300/20 to-pink-300/20 blur-2xl -z-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-blue-300/10 to-cyan-300/10 blur-3xl -z-10"></div>
      
      {/* Decorative dots pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzgzNGZmZiIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2dyaWQpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-60 -z-10"></div>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-purple-600 font-medium border border-purple-200 shadow-sm">
            <Sparkles size={16} className="text-purple-500" />
            <span>Start Your Journey</span>
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6 tracking-tight">
            Embracing the Future of <span className="bg-gradient-to-br from-indigo-600 to-purple-600 bg-clip-text text-transparent">AI-Powered</span> Healthcare
          </h2>
          
          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-md border border-indigo-200 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-md mx-auto mb-4">
              <Brain className="w-9 h-9" />
            </div>
            <h3 className="font-medium mb-2 text-indigo-900">Proactive Care</h3>
            <p className="text-sm text-indigo-700/70">Detect and address health issues before they become serious</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-md border border-purple-200 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-md mx-auto mb-4">
              <HeartPulse className="w-9 h-9" />
            </div>
            <h3 className="font-medium mb-2 text-purple-900">Personalized Medicine</h3>
            <p className="text-sm text-purple-700/70">Treatments tailored to your unique biological profile</p>
          </div>
          
          <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl p-6 shadow-md border border-pink-200 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-md mx-auto mb-4">
              <Activity className="w-9 h-9" />
            </div>
            <h3 className="font-medium mb-2 text-pink-900">Continuous Optimization</h3>
            <p className="text-sm text-pink-700/70">Real-time adjustments to maximize treatment effectiveness</p>
          </div>
        </div>
        
        <div className="p-6 mb-10 rounded-xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-200 text-center shadow-md">
          <p className="text-health-dark font-medium bg-gradient-to-br from-indigo-700 to-purple-700 bg-clip-text text-transparent">
            Join us in shaping the future of medicine—where AI-driven precision healthcare transforms lives.
          </p>
        </div>
        
        <div className="flex justify-center">
          <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-md hover:shadow-lg transition-all duration-300 text-white border-none py-6" asChild>
            <Link to="/contact" className="flex items-center">
              <span>Start your AI health journey</span>
              <ArrowRight size={16} className="ml-2 animate-pulse" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
