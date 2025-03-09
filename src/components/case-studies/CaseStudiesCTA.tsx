
import React from 'react';
import { Button } from '@/components/Button';
import { ArrowRight, Mail, MessageSquare, Phone } from 'lucide-react';

const CaseStudiesCTA = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-gradient-to-tl from-purple-500/20 to-pink-500/10 blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              variant="primary" 
              size="lg" 
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 border-none shadow-lg shadow-indigo-900/30 group"
              as="Link"
              to="/register"
            >
              Join Our Network
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-indigo-300 text-white hover:bg-white/10"
              as="Link"
              to="/how-it-works"
            >
              Explore Our Technology
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-xl hover:shadow-indigo-800/30 hover:translate-y-[-5px] transition-all duration-300">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-indigo-600 text-white mb-4 shadow-lg shadow-indigo-900/20">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-indigo-200 mb-4">Reach out with your inquiries and a member of our team will respond within 24 hours.</p>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-indigo-200 hover:text-white hover:bg-white/10 group"
              as="a"
              href="mailto:contact@akenohealthai.com"
            >
              contact@akenohealthai.com
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-xl hover:shadow-indigo-800/30 hover:translate-y-[-5px] transition-all duration-300">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-600 text-white mb-4 shadow-lg shadow-purple-900/20">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-indigo-200 mb-4">Speak directly with our healthcare and technology consultants for immediate assistance.</p>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-indigo-200 hover:text-white hover:bg-white/10 group"
              as="a"
              href="tel:+18005551234"
            >
              +1 (800) 555-1234
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-xl hover:shadow-indigo-800/30 hover:translate-y-[-5px] transition-all duration-300">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-pink-500 to-pink-600 text-white mb-4 shadow-lg shadow-pink-900/20">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
            <p className="text-indigo-200 mb-4">Chat with our AI assistant or request to connect with a human specialist.</p>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-indigo-200 hover:text-white hover:bg-white/10 group"
              as="Link"
              to="/contact#chat"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesCTA;
