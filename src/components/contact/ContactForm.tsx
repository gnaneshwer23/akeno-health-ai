
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/Button';
import { Mail, User, MessageSquare, Building, ArrowRight, Send } from 'lucide-react';

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    console.log('Form submitted');
    // You could add toast notification here
  };

  return (
    <section id="contact-form" className="scroll-mt-24">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6 bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Have a specific question or need personalized assistance? Fill out the form and our team will get back to you within 24-48 hours.
          </p>
          
          <div className="bg-gradient-to-br from-health-primary/10 via-health-secondary/10 to-health-accent/10 p-8 rounded-2xl shadow-inner relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl opacity-50"></div>
            
            <h3 className="text-xl font-semibold mb-6 text-health-dark relative z-10">Why Contact Us Directly?</h3>
            <ul className="space-y-4 relative z-10">
              <li className="flex items-start gap-4 group transition-all">
                <div className="bg-health-primary/20 p-2 rounded-full mt-0.5 group-hover:bg-health-primary/40 transition-colors">
                  <ArrowRight className="h-4 w-4 text-health-primary" />
                </div>
                <div className="bg-white/70 backdrop-blur-sm p-3 rounded-lg shadow-sm border border-health-primary/10 flex-1 group-hover:bg-white group-hover:shadow-md transition-all">
                  <span>Personalized support for complex healthcare questions</span>
                </div>
              </li>
              <li className="flex items-start gap-4 group transition-all">
                <div className="bg-health-primary/20 p-2 rounded-full mt-0.5 group-hover:bg-health-primary/40 transition-colors">
                  <ArrowRight className="h-4 w-4 text-health-primary" />
                </div>
                <div className="bg-white/70 backdrop-blur-sm p-3 rounded-lg shadow-sm border border-health-primary/10 flex-1 group-hover:bg-white group-hover:shadow-md transition-all">
                  <span>Detailed information about enterprise partnerships</span>
                </div>
              </li>
              <li className="flex items-start gap-4 group transition-all">
                <div className="bg-health-primary/20 p-2 rounded-full mt-0.5 group-hover:bg-health-primary/40 transition-colors">
                  <ArrowRight className="h-4 w-4 text-health-primary" />
                </div>
                <div className="bg-white/70 backdrop-blur-sm p-3 rounded-lg shadow-sm border border-health-primary/10 flex-1 group-hover:bg-white group-hover:shadow-md transition-all">
                  <span>Technical assistance with our AI-powered platform</span>
                </div>
              </li>
              <li className="flex items-start gap-4 group transition-all">
                <div className="bg-health-primary/20 p-2 rounded-full mt-0.5 group-hover:bg-health-primary/40 transition-colors">
                  <ArrowRight className="h-4 w-4 text-health-primary" />
                </div>
                <div className="bg-white/70 backdrop-blur-sm p-3 rounded-lg shadow-sm border border-health-primary/10 flex-1 group-hover:bg-white group-hover:shadow-md transition-all">
                  <span>Custom telehealth and integration solutions</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 bg-gradient-to-tr from-health-light to-white p-8 rounded-2xl shadow-xl border border-health-primary/10 relative">
          <div className="absolute top-0 left-0 w-40 h-40 bg-health-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-health-secondary/5 rounded-full blur-3xl"></div>
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2 text-health-dark">
                <div className="bg-health-primary/10 p-1.5 rounded-full">
                  <User className="h-4 w-4 text-health-primary" />
                </div>
                <span>Full Name</span>
              </Label>
              <Input 
                id="name" 
                type="text" 
                placeholder="Enter your full name" 
                className="border-gray-200 focus:border-health-primary bg-white/80 backdrop-blur-sm shadow-sm" 
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2 text-health-dark">
                <div className="bg-health-primary/10 p-1.5 rounded-full">
                  <Mail className="h-4 w-4 text-health-primary" />
                </div>
                <span>Email Address</span>
              </Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email address" 
                className="border-gray-200 focus:border-health-primary bg-white/80 backdrop-blur-sm shadow-sm" 
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="organization" className="flex items-center gap-2 text-health-dark">
                <div className="bg-health-primary/10 p-1.5 rounded-full">
                  <Building className="h-4 w-4 text-health-primary" />
                </div>
                <span>Organization (Optional)</span>
              </Label>
              <Input 
                id="organization" 
                type="text" 
                placeholder="Enter your organization name" 
                className="border-gray-200 focus:border-health-primary bg-white/80 backdrop-blur-sm shadow-sm" 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="flex items-center gap-2 text-health-dark">
                <div className="bg-health-primary/10 p-1.5 rounded-full">
                  <MessageSquare className="h-4 w-4 text-health-primary" />
                </div>
                <span>Message</span>
              </Label>
              <textarea 
                id="message" 
                rows={4} 
                placeholder="How can we help you?" 
                className="w-full rounded-md border border-gray-200 bg-white/80 backdrop-blur-sm px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-health-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm shadow-sm"
                required
              />
            </div>
            
            <div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-health-primary to-health-secondary hover:from-health-primary/90 hover:to-health-secondary/90 group" 
                size="lg"
                icon={<Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />}
              >
                Send Message
              </Button>
              <p className="text-xs text-gray-500 mt-3 text-center bg-health-light/50 backdrop-blur-sm p-2 rounded-lg border border-health-primary/5">
                We typically respond within 24-48 business hours
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
