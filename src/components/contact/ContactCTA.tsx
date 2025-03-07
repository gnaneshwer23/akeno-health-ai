
import React from 'react';
import { Button } from '@/components/Button';
import { Phone, Mail, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-health-primary via-health-secondary to-health-accent"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-white/10 blur-xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white/10 blur-xl animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-white/5 blur-lg animate-float" style={{animationDelay: '1.5s'}}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10 text-white">
        <div className="inline-block mb-10 p-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg transform transition-transform hover:scale-105 duration-300">
          <div className="flex space-x-6 p-3">
            <div className="bg-gradient-to-br from-white/20 to-white/10 p-4 rounded-full transform hover:scale-110 transition-transform hover:bg-white/30 group relative">
              <div className="absolute inset-0 rounded-full bg-white/5 animate-pulse"></div>
              <Phone className="h-7 w-7 group-hover:text-health-light transition-colors relative z-10" />
              <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300"></div>
            </div>
            <div className="bg-gradient-to-br from-white/20 to-white/10 p-4 rounded-full transform hover:scale-110 transition-transform hover:bg-white/30 group relative">
              <div className="absolute inset-0 rounded-full bg-white/5 animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <Mail className="h-7 w-7 group-hover:text-health-light transition-colors relative z-10" />
              <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300"></div>
            </div>
            <div className="bg-gradient-to-br from-white/20 to-white/10 p-4 rounded-full transform hover:scale-110 transition-transform hover:bg-white/30 group relative">
              <div className="absolute inset-0 rounded-full bg-white/5 animate-pulse" style={{animationDelay: '1s'}}></div>
              <MessageCircle className="h-7 w-7 group-hover:text-health-light transition-colors relative z-10" />
              <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300"></div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-health-primary/0 via-white/30 to-health-primary/0 blur-sm"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 drop-shadow-lg relative">
            Ready to <span className="text-health-light underline decoration-wavy decoration-2 underline-offset-8">Get Started</span>?
            <Sparkles className="absolute -top-2 -right-4 h-5 w-5 text-yellow-200 animate-pulse" />
          </h2>
        </div>
        
        <div className="mb-12 max-w-2xl mx-auto transform hover:translate-y-[-5px] transition-all duration-500">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-health-light/20 to-white/20 rounded-xl blur opacity-75"></div>
            <p className="text-xl md:text-2xl backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg bg-white/5 relative">
              Our team is here to help you harness the power of AI for better health outcomes
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <Button 
            className="bg-white text-health-primary hover:bg-gray-100 shadow-lg transform transition-transform hover:-translate-y-1 border-2 border-transparent hover:border-white/20 group backdrop-blur-sm relative overflow-hidden" 
            icon={<Phone className="h-5 w-5 group-hover:animate-pulse" />}
            as="a"
            href="tel:+18001234567"
          >
            <span className="relative z-10">Call Us</span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/0 via-health-light/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Button>
          <Button 
            className="bg-white text-health-primary hover:bg-gray-100 shadow-lg transform transition-transform hover:-translate-y-1 border-2 border-transparent hover:border-white/20 group backdrop-blur-sm relative overflow-hidden" 
            icon={<Mail className="h-5 w-5 group-hover:animate-pulse" />}
            as="a"
            href="mailto:support@akenohealth.ai"
          >
            <span className="relative z-10">Email Support</span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/0 via-health-light/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Button>
          <Button 
            className="bg-white text-health-primary hover:bg-gray-100 shadow-lg transform transition-transform hover:-translate-y-1 border-2 border-transparent hover:border-white/20 group backdrop-blur-sm relative overflow-hidden" 
            icon={<MessageCircle className="h-5 w-5 group-hover:animate-pulse" />}
            as="a"
            href="#contact-form"
          >
            <span className="relative z-10">Live Chat</span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/0 via-health-light/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Button>
        </div>
        
        <div className="relative inline-block group">
          <div className="absolute -inset-1 bg-gradient-to-r from-health-light/20 via-white/30 to-health-light/20 rounded-xl blur opacity-70 group-hover:opacity-100 transition-opacity"></div>
          <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-center md:text-left bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/10 shadow-lg relative">
            <div className="flex items-center justify-center bg-gradient-to-br from-white/30 to-white/10 rounded-full p-3 group-hover:animate-pulse">
              <ArrowRight className="h-6 w-6" />
            </div>
            <p className="text-lg">
              Don't see what you need? <span className="font-semibold underline decoration-wavy decoration-2 decoration-white/30 underline-offset-4 group-hover:decoration-white/60 transition-all">Our team is ready to help with custom solutions</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
