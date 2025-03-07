
import React from 'react';
import { Button } from '@/components/Button';
import { Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-health-primary via-health-secondary to-health-accent"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10 text-white">
        <div className="inline-block mb-10 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
          <div className="flex space-x-6 p-1">
            <div className="bg-white/20 p-4 rounded-full transform hover:scale-110 transition-transform hover:bg-white/30">
              <Phone className="h-7 w-7" />
            </div>
            <div className="bg-white/20 p-4 rounded-full transform hover:scale-110 transition-transform hover:bg-white/30">
              <Mail className="h-7 w-7" />
            </div>
            <div className="bg-white/20 p-4 rounded-full transform hover:scale-110 transition-transform hover:bg-white/30">
              <MessageCircle className="h-7 w-7" />
            </div>
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-8 drop-shadow-lg">
          Ready to Get Started?
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg">
          Our team is here to help you harness the power of AI for better health outcomes
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <Button 
            className="bg-white text-health-primary hover:bg-gray-100 shadow-lg transform transition-transform hover:-translate-y-1 border-2 border-transparent hover:border-white/20 group" 
            icon={<Phone className="h-5 w-5 group-hover:animate-pulse" />}
            as="a"
            href="tel:+18001234567"
          >
            Call Us
          </Button>
          <Button 
            className="bg-white text-health-primary hover:bg-gray-100 shadow-lg transform transition-transform hover:-translate-y-1 border-2 border-transparent hover:border-white/20 group" 
            icon={<Mail className="h-5 w-5 group-hover:animate-pulse" />}
            as="a"
            href="mailto:support@akenohealth.ai"
          >
            Email Support
          </Button>
          <Button 
            className="bg-white text-health-primary hover:bg-gray-100 shadow-lg transform transition-transform hover:-translate-y-1 border-2 border-transparent hover:border-white/20 group" 
            icon={<MessageCircle className="h-5 w-5 group-hover:animate-pulse" />}
            as="a"
            href="#contact-form"
          >
            Live Chat
          </Button>
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-4 text-center md:text-left bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/10 shadow-lg inline-block">
          <div className="flex items-center justify-center bg-white/20 rounded-full p-3 animate-pulse">
            <ArrowRight className="h-6 w-6" />
          </div>
          <p className="text-lg">
            Don't see what you need? <span className="font-semibold underline decoration-wavy decoration-2 decoration-white/30 underline-offset-4">Our team is ready to help with custom solutions</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
