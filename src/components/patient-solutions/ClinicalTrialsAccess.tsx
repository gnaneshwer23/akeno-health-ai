
import React from 'react';
import { FlaskConical, ClipboardList, Users, Lock, LineChart } from 'lucide-react';
import { Button } from '@/components/Button';
import { PersonalizedMedicineDiagram } from '@/components/quantum/diagrams/PersonalizedMedicineDiagram';
import { ClinicalTrialsDiagram } from '@/components/quantum/diagrams/ClinicalTrialsDiagram';

const ClinicalTrialsAccess = () => {
  return (
    <section className="py-20 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 grid grid-cols-2 gap-6">
            <div className="bg-purple-50 rounded-xl p-5 border border-purple-100 flex flex-col items-center">
              <PersonalizedMedicineDiagram />
            </div>
            
            <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-100 flex flex-col items-center">
              <ClinicalTrialsDiagram />
            </div>
            
            <div className="col-span-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-5 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-indigo-100 rounded-full p-2">
                  <ClipboardList size={20} className="text-indigo-600" />
                </div>
                <h3 className="font-medium">Cutting-Edge Treatment Access</h3>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white rounded-lg p-3 flex flex-col items-center text-center">
                  <span className="text-3xl font-bold text-indigo-600 mb-1">82%</span>
                  <span className="text-xs text-muted-foreground">Faster trial matching</span>
                </div>
                
                <div className="bg-white rounded-lg p-3 flex flex-col items-center text-center">
                  <span className="text-3xl font-bold text-indigo-600 mb-1">3.7x</span>
                  <span className="text-xs text-muted-foreground">More treatment options</span>
                </div>
                
                <div className="bg-white rounded-lg p-3 flex flex-col items-center text-center">
                  <span className="text-3xl font-bold text-indigo-600 mb-1">100%</span>
                  <span className="text-xs text-muted-foreground">Consent transparency</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-purple-100 text-purple-700 font-medium">
              Advanced Treatment Access
            </div>
            
            <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
              AI-Powered Clinical Trials & Access to Cutting-Edge Treatments
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Be the first to access new, life-changing treatments with Akeno Health's AI-powered clinical trial matching that connects you to innovative therapies and groundbreaking medical research.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <ClipboardList size={24} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium text-health-dark mb-1">Instant Eligibility Checks</h3>
                  <p className="text-muted-foreground">AI continuously monitors your health profile to match you with clinical trials you're eligible for, based on your unique health data.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <FlaskConical size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-health-dark mb-1">Access to Innovative Drug Therapies</h3>
                  <p className="text-muted-foreground">Get early access to breakthrough treatments, experimental medications, and cutting-edge therapies not yet available to the general public.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Lock size={24} className="text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-medium text-health-dark mb-1">Blockchain-Secured Participation</h3>
                  <p className="text-muted-foreground">Your trial participation is secured with blockchain technology, ensuring fully transparent consent and privacy protection.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <LineChart size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-health-dark mb-1">Personalized Trial Progress Monitoring</h3>
                  <p className="text-muted-foreground">Track your response to treatments in real-time with AI-powered analytics that measure effectiveness for your specific condition.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-lg border border-purple-100 shadow-sm mb-8">
              <p className="text-health-dark">
                <span className="font-medium">Outcome:</span> Gain early access to breakthrough treatments and contribute to medical innovation while receiving personalized care.
              </p>
            </div>
            
            <Button
              variant="primary"
              size="lg"
              as="Link"
              to="/contact"
              className="bg-purple-600 hover:bg-purple-700"
            >
              Join AI-Powered Clinical Research
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicalTrialsAccess;
