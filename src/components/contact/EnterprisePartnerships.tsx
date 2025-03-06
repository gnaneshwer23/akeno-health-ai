
import React from 'react';
import { Microscope, Building, Network, Rocket } from 'lucide-react';
import { Button } from '@/components/Button';

const EnterprisePartnerships = () => {
  return (
    <section id="enterprise-partnerships" className="scroll-mt-24">
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
            Enterprise & Research Partnerships
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Collaborate with Akeno Health AI to implement cutting-edge AI solutions for healthcare 
            institutions, research initiatives, and industry partnerships.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-health-primary/10 p-3 rounded-lg">
                <Microscope className="h-6 w-6 text-health-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">AI Solutions for Healthcare & Research</h3>
                <p className="text-gray-600 mb-4">
                  We collaborate with hospitals, research labs, and pharmaceutical companies to provide 
                  custom AI-powered analytics, predictive modeling, and real-world evidence generation.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-health-primary mr-2"></span>
                    AI-powered clinical decision support systems
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-health-primary mr-2"></span>
                    Predictive analytics for patient outcomes
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-health-primary mr-2"></span>
                    Real-world evidence generation platforms
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-health-primary/10 p-3 rounded-lg">
                <Building className="h-6 w-6 text-health-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Custom AI Integration for Healthcare</h3>
                <p className="text-gray-600 mb-4">
                  Our AI-powered decision support systems can be integrated into hospital networks, 
                  digital health applications, and clinical workflows.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-health-primary mr-2"></span>
                    Seamless EHR integration solutions
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-health-primary mr-2"></span>
                    AI-enabled diagnostic decision support
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-health-primary mr-2"></span>
                    Real-time patient monitoring systems
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-health-primary/10 p-3 rounded-lg">
                <Network className="h-6 w-6 text-health-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Business & Technology Partnerships</h3>
                <p className="text-gray-600 mb-4">
                  We partner with health-tech innovators, insurance providers, and biotech firms to expand 
                  AI-driven precision medicine and predictive analytics solutions.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-health-primary mr-2"></span>
                    Strategic technology alliances
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-health-primary mr-2"></span>
                    Insurance integration for value-based care
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-health-primary mr-2"></span>
                    Biotech research & development collaborations
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-health-primary/10 p-3 rounded-lg">
                <Rocket className="h-6 w-6 text-health-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Research Collaboration Opportunities</h3>
                <p className="text-gray-600 mb-4">
                  Academic and research institutions can gain exclusive access to AI-processed anonymized 
                  health data and predictive disease modeling frameworks.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-health-primary mr-2"></span>
                    Anonymized data access for researchers
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-health-primary mr-2"></span>
                    Joint research publications and initiatives
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-health-primary mr-2"></span>
                    AI model training partnerships
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="primary" size="lg">
            Explore Partnership Opportunities
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EnterprisePartnerships;
