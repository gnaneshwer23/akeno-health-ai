
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/Button';
import { Mail, User, MessageSquare, Building, ArrowRight } from 'lucide-react';

const ContactForm = () => {
  return (
    <section id="contact-form" className="scroll-mt-24">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Have a specific question or need personalized assistance? Fill out the form and our team will get back to you within 24-48 hours.
          </p>
          
          <div className="bg-gradient-to-br from-health-primary/10 to-health-secondary/10 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-health-dark">Why Contact Us Directly?</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="bg-health-primary/20 p-1.5 rounded-full mt-0.5">
                  <ArrowRight className="h-4 w-4 text-health-primary" />
                </div>
                <span>Personalized support for complex healthcare questions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-health-primary/20 p-1.5 rounded-full mt-0.5">
                  <ArrowRight className="h-4 w-4 text-health-primary" />
                </div>
                <span>Detailed information about enterprise partnerships</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-health-primary/20 p-1.5 rounded-full mt-0.5">
                  <ArrowRight className="h-4 w-4 text-health-primary" />
                </div>
                <span>Technical assistance with our AI-powered platform</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-health-primary/20 p-1.5 rounded-full mt-0.5">
                  <ArrowRight className="h-4 w-4 text-health-primary" />
                </div>
                <span>Custom telehealth and integration solutions</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="h-4 w-4 text-health-primary" />
                <span>Full Name</span>
              </Label>
              <Input 
                id="name" 
                type="text" 
                placeholder="Enter your full name" 
                className="border-gray-300 focus:border-health-primary" 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-health-primary" />
                <span>Email Address</span>
              </Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email address" 
                className="border-gray-300 focus:border-health-primary" 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="organization" className="flex items-center gap-2">
                <Building className="h-4 w-4 text-health-primary" />
                <span>Organization (Optional)</span>
              </Label>
              <Input 
                id="organization" 
                type="text" 
                placeholder="Enter your organization name" 
                className="border-gray-300 focus:border-health-primary" 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-health-primary" />
                <span>Message</span>
              </Label>
              <textarea 
                id="message" 
                rows={4} 
                placeholder="How can we help you?" 
                className="w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              />
            </div>
            
            <div>
              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
              <p className="text-xs text-gray-500 mt-2 text-center">
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
