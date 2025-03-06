
import React from 'react';
import { Book, Users, Search, File } from 'lucide-react';
import { Button } from '@/components/Button';

const SelfHelpResources = () => {
  return (
    <section id="self-help" className="scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
          AI-Powered Self-Help Resources
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Access our extensive knowledge base, community forums, and AI-curated guides to find 
          answers to your questions and learn more about our platform.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div className="bg-health-primary/10 p-6">
            <Book className="h-12 w-12 text-health-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Knowledge Hub</h3>
            <p className="text-gray-700">
              Comprehensive AI-curated guides, tutorials, and documentation
            </p>
          </div>
          <div className="p-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <File className="h-5 w-5 text-health-primary flex-shrink-0 mt-0.5" />
                <span>Platform user guides and feature tutorials</span>
              </li>
              <li className="flex items-start gap-3">
                <File className="h-5 w-5 text-health-primary flex-shrink-0 mt-0.5" />
                <span>Troubleshooting common technical issues</span>
              </li>
              <li className="flex items-start gap-3">
                <File className="h-5 w-5 text-health-primary flex-shrink-0 mt-0.5" />
                <span>Video demonstrations of advanced features</span>
              </li>
              <li className="flex items-start gap-3">
                <File className="h-5 w-5 text-health-primary flex-shrink-0 mt-0.5" />
                <span>AI-health technology research publications</span>
              </li>
            </ul>
            <div className="mt-6">
              <Button variant="outline">
                Browse Knowledge Base
              </Button>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div className="bg-health-primary/10 p-6">
            <Users className="h-12 w-12 text-health-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p className="text-gray-700">
              Connect with other users and experts in our collaborative forums
            </p>
          </div>
          <div className="p-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Search className="h-5 w-5 text-health-primary flex-shrink-0 mt-0.5" />
                <span>User discussion forums for shared experiences</span>
              </li>
              <li className="flex items-start gap-3">
                <Search className="h-5 w-5 text-health-primary flex-shrink-0 mt-0.5" />
                <span>Regular Q&A sessions with medical experts</span>
              </li>
              <li className="flex items-start gap-3">
                <Search className="h-5 w-5 text-health-primary flex-shrink-0 mt-0.5" />
                <span>Expert-led webinars on health technology</span>
              </li>
              <li className="flex items-start gap-3">
                <Search className="h-5 w-5 text-health-primary flex-shrink-0 mt-0.5" />
                <span>AI research community and developer resources</span>
              </li>
            </ul>
            <div className="mt-6">
              <Button variant="outline">
                Join Community Forum
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-xl p-6 md:p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold mb-2">Popular Support Topics</h3>
          <p className="text-gray-600">Quick access to our most frequently viewed help articles</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a href="#" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-medium text-health-primary">Getting Started Guide</h4>
            <p className="text-sm text-gray-600 mt-1">Set up your account and dashboard</p>
          </a>
          
          <a href="#" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-medium text-health-primary">Connecting Health Devices</h4>
            <p className="text-sm text-gray-600 mt-1">Sync your wearables and medical devices</p>
          </a>
          
          <a href="#" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-medium text-health-primary">Understanding AI Insights</h4>
            <p className="text-sm text-gray-600 mt-1">Interpret your health analytics</p>
          </a>
          
          <a href="#" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-medium text-health-primary">Privacy & Data Security</h4>
            <p className="text-sm text-gray-600 mt-1">How we protect your health information</p>
          </a>
          
          <a href="#" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-medium text-health-primary">Telehealth Appointments</h4>
            <p className="text-sm text-gray-600 mt-1">Setting up and joining virtual consultations</p>
          </a>
          
          <a href="#" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-medium text-health-primary">Account & Billing</h4>
            <p className="text-sm text-gray-600 mt-1">Manage your subscription and payments</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SelfHelpResources;
