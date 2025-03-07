
import React from 'react';
import { Tabs, TabsContent, TabsList } from '@/components/ui/tabs';
import { teamGroups } from '@/data/teamData';
import { TeamGroup } from './TeamGroup';
import { TeamTabTrigger } from './TeamTabTrigger';
import { Brain, FlaskConical, Microscope, Stethoscope } from 'lucide-react';

export const AboutTeam = () => {
  return (
    <section className="mb-20 px-6 py-16 relative bg-gradient-to-b from-health-light to-white overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-blue-600/5 rounded-full blur-xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-up-1">
          <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">Our Team: The Minds Behind the Innovation</h2>
          
          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
          </div>
          
          <p className="text-health-dark/80 max-w-3xl mx-auto">
            At the core of Akeno Health AI is a diverse team of scientists, AI engineers, healthcare professionals, 
            and biotechnology innovators, all driven by a shared passion for revolutionizing healthcare through 
            advanced technology. We bring together expertise from artificial intelligence, quantum computing, immunology, 
            genomics, bioinformatics, and pharmaceutical research to develop breakthrough healthcare solutions.
          </p>
        </div>
        
        <Tabs defaultValue="leadership" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-transparent w-full mb-8">
            {teamGroups.map((group) => (
              <TeamTabTrigger 
                key={group.id} 
                id={group.id}
                icon={group.icon}
                title={group.title}
              />
            ))}
          </TabsList>
          
          {teamGroups.map((group) => (
            <TabsContent key={group.id} value={group.id} className="mt-4 animate-fade-in">
              <TeamGroup group={group} />
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="grid md:grid-cols-4 gap-6 mt-12 fade-up-4">
          <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl p-6 shadow-md border border-purple-100 hover:shadow-lg transition-all group">
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-2 rounded-lg shadow-md text-white group-hover:rotate-6 transition-transform">
                <Brain size={24} />
              </div>
              <h4 className="font-semibold text-health-dark">AI Scientists & Quantum Experts</h4>
            </div>
            <p className="text-health-dark/70 text-sm">Specialists in deep learning, predictive analytics, bioinformatics, and AI-powered multi-omics modeling.</p>
          </div>
          
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 shadow-md border border-blue-100 hover:shadow-lg transition-all group">
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-gradient-to-br from-blue-500 to-sky-600 p-2 rounded-lg shadow-md text-white group-hover:rotate-6 transition-transform">
                <Stethoscope size={24} />
              </div>
              <h4 className="font-semibold text-health-dark">Clinical Professionals</h4>
            </div>
            <p className="text-health-dark/70 text-sm">Physicians, immunologists, and geneticists ensuring that AI solutions align with real-world medical needs.</p>
          </div>
          
          <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl p-6 shadow-md border border-amber-100 hover:shadow-lg transition-all group">
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-2 rounded-lg shadow-md text-white group-hover:rotate-6 transition-transform">
                <FlaskConical size={24} />
              </div>
              <h4 className="font-semibold text-health-dark">Biotech Innovators</h4>
            </div>
            <p className="text-health-dark/70 text-sm">Visionaries with extensive experience in biotechnology, AI-driven healthcare, and medical innovation.</p>
          </div>
          
          <div className="bg-gradient-to-br from-white to-emerald-50 rounded-xl p-6 shadow-md border border-emerald-100 hover:shadow-lg transition-all group">
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-lg shadow-md text-white group-hover:rotate-6 transition-transform">
                <Microscope size={24} />
              </div>
              <h4 className="font-semibold text-health-dark">Research Experts</h4>
            </div>
            <p className="text-health-dark/70 text-sm">Leaders in biopharma, health policy, AI ethics, regulatory affairs, and digital health transformation.</p>
          </div>
        </div>
        
        <div className="mt-12 text-center fade-up-5">
          <div className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-100 to-purple-100 border border-purple-200 shadow-md">
            <p className="text-health-dark/80 font-medium">
              Our team is united by a single mission—to redefine healthcare as a data-driven, precision-based, 
              patient-first ecosystem that leverages AI to enhance medical outcomes and make healthcare more accessible for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
