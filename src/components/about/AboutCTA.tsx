
import React from 'react';
import { Handshake } from 'lucide-react';
import { ActionButtons } from './cta/ActionButtons';

export const AboutCTA = () => {
  return (
    <section className="px-6 py-20 relative overflow-hidden" id="partners">
      {/* Enhanced background with patterns and gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-health-light/30 to-white -z-10"></div>
      
      {/* Pattern background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCA0MCIgc3Ryb2tlPSIjNmY3MmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2dyaWQpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-30 -z-10"></div>
      
      {/* Decorative blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-5 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-500/10 to-sky-500/10 font-medium gap-2 border border-blue-500/10 shadow-lg shadow-indigo-500/5">
            <Handshake size={16} className="text-blue-500 animate-pulse" />
            <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
              Ready to Work with Us?
            </span>
          </div>
          
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
            Join Our Mission for a Healthier Future
          </h2>
          
          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full"></div>
          </div>
          
          <p className="text-health-dark/70 max-w-3xl mx-auto mb-8">
            Whether you're a healthcare provider, researcher, or patient, Akeno Health offers cutting-edge AI solutions to transform healthcare experiences and outcomes.
          </p>
        </div>
        
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
