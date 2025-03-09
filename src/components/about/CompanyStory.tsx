
import React from 'react';
import { Button } from '@/components/Button';
import { ArrowRight, Lightbulb, Sparkles, Brain, Network, Activity } from 'lucide-react';

export const CompanyStory = () => {
  const milestones = [
    {
      title: "Inception",
      description: "Conceived by AI experts, medical professionals, and biotech innovators who saw the urgent need for a smarter, AI-driven healthcare system.",
      icon: <Lightbulb className="h-8 w-8 text-amber-500" />,
      color: "bg-amber-500/20 text-amber-700"
    },
    {
      title: "Technology Development",
      description: "Built the world's first fully AI-powered personalised healthcare ecosystem integrating continuous monitoring, AI-driven diagnostics, and blockchain-secured patient records.",
      icon: <Brain className="h-8 w-8 text-indigo-500" />,
      color: "bg-indigo-500/20 text-indigo-700"
    },
    {
      title: "Clinical Validation & Partnerships",
      description: "Collaborated with hospitals, pharma companies, and research institutions to ensure real-world applicability and high-impact health outcomes.",
      icon: <Network className="h-8 w-8 text-purple-500" />,
      color: "bg-purple-500/20 text-purple-700"
    },
    {
      title: "Global Expansion",
      description: "Scaling our platform to deliver world-class AI-powered healthcare solutions across multiple regions and demographics.",
      icon: <Activity className="h-8 w-8 text-emerald-500" />,
      color: "bg-emerald-500/20 text-emerald-700"
    }
  ];

  const questions = [
    "What if healthcare could be predictive rather than reactive?",
    "What if AI could prevent disease before symptoms appear?",
    "What if patients could have full control over their own health data?"
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="story">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-health-light/10 to-white -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-up-1">
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-700 text-sm font-medium mb-5">
            <Sparkles size={16} className="text-amber-500 mr-2" />
            Our Story
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
            The Journey from Idea to Global Healthcare Transformation
          </h2>
          
          <div className="flex justify-center mb-8">
            <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
          </div>
          
          <p className="text-lg text-health-dark/70 max-w-3xl mx-auto mb-6">
            Akeno Health was founded on a simple yet profound idea:
          </p>
          
          <div className="space-y-4 max-w-3xl mx-auto mb-16">
            {questions.map((question, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg border border-amber-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-lg font-medium text-amber-900">
                  {question}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-300 via-indigo-400 to-emerald-400 rounded-full hidden md:block"></div>
          
          {/* Milestones */}
          <div className="space-y-12 relative">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center fade-up-${index + 2}`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:order-last'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-health-dark mb-3">{milestone.title}</h3>
                    <p className="text-health-dark/70">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="md:w-12 flex items-center justify-center py-4 md:py-0 z-10 relative">
                  <div className={`h-12 w-12 rounded-full ${milestone.color} flex items-center justify-center shadow-lg`}>
                    {milestone.icon}
                  </div>
                </div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-16 md:order-last' : 'md:pr-16 md:text-right'}`}>
                  {/* Empty div for layout */}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-20 fade-up-4">
          <p className="text-xl font-bold text-health-dark mb-8">
            The future of healthcare is here – and Akeno Health is leading the way.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              variant="primary" 
              size="lg" 
              as="Link" 
              to="/contact"
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 group"
            >
              Join Our Mission
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              as="Link" 
              to="/how-it-works"
              className="border-amber-300 text-amber-900 hover:bg-amber-50"
            >
              Learn More About Our Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
