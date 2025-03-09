
import React from 'react';
import { Button } from '@/components/ui/button';
import { Hospital, ArrowRight, Phone, Mail, Zap } from 'lucide-react';

const HospitalSolutionsCTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 bg-gradient-to-br from-health-primary/10 to-health-secondary/10">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white text-health-primary font-medium mb-6">
                <Hospital size={18} className="mr-2" />
                <span>Request a Demo</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
                Experience the Power of AI-Driven Healthcare Transformation
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Join the future of AI-powered healthcare and transform your hospital operations with cutting-edge technology that improves patient outcomes and reduces costs.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <Zap size={12} />
                    </div>
                  </div>
                  <span>Improve patient outcomes with AI-powered diagnostics and monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <Zap size={12} />
                    </div>
                  </div>
                  <span>Reduce hospital costs through automation and predictive resource management</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <Zap size={12} />
                    </div>
                  </div>
                  <span>Enhance operational efficiency with seamless AI-driven workflow integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <Zap size={12} />
                    </div>
                  </div>
                  <span>Provide cutting-edge AI-assisted clinical decision support to doctors</span>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2">
                  Request a Demo <ArrowRight size={18} />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  Join Our AI Hospital Network <Hospital size={18} />
                </Button>
              </div>
            </div>
            
            <div className="p-8 md:p-12 bg-white">
              <h3 className="text-xl font-medium text-health-dark mb-6">
                Speak to an AI Healthcare Expert
              </h3>
              
              <div className="space-y-4 mb-8">
                <div>
                  <label htmlFor="hospital-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Hospital/Healthcare Organization
                  </label>
                  <input
                    type="text"
                    id="hospital-name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-health-primary focus:border-health-primary"
                    placeholder="Enter your organization name"
                  />
                </div>
                
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-health-primary focus:border-health-primary"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-health-primary focus:border-health-primary"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-health-primary focus:border-health-primary"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-health-primary focus:border-health-primary"
                    placeholder="Tell us about your hospital's needs"
                  ></textarea>
                </div>
              </div>
              
              <Button size="lg" className="w-full gap-2">
                Submit Request <ArrowRight size={18} />
              </Button>
              
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#" className="flex items-center gap-2 text-health-primary hover:text-health-secondary">
                  <Phone size={18} />
                  <span>+1 (800) 123-4567</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-health-primary hover:text-health-secondary">
                  <Mail size={18} />
                  <span>hospital@akeno-health.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalSolutionsCTA;
