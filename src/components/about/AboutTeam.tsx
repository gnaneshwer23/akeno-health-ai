
import React from 'react';
import { Tabs, TabsContent, TabsList } from '@/components/ui/tabs';
import { teamGroups } from '@/data/teamData';
import { TeamGroup } from './TeamGroup';
import { TeamTabTrigger } from './TeamTabTrigger';
import { Users, Stethoscope, Lightbulb, Sparkles } from 'lucide-react';

export const AboutTeam = () => {
  return (
    <section className="mb-20 px-6 py-16 relative bg-gradient-to-b from-health-light to-white overflow-hidden" id="team">
      {/* Enhanced background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-blue-600/5 rounded-full blur-xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-up-1">
          <span className="inline-flex items-center px-5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-700 text-sm font-medium mb-5">
            <Users size={16} className="text-purple-500 mr-2" />
            Meet the Team
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
            The Minds Behind Akeno Health
          </h2>
          
          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
          </div>
          
          <p className="text-health-dark/80 max-w-3xl mx-auto">
            Our team consists of world-class experts in AI, medicine, biotechnology, healthcare strategy, and digital transformation. 
            Together, we are united by a single mission—to redefine healthcare as a data-driven, precision-based, 
            patient-first ecosystem that leverages AI to enhance medical outcomes and make healthcare more accessible for all.
          </p>
        </div>
        
        <div className="mb-16 bg-white rounded-2xl shadow-lg border border-purple-100 p-6 fade-up-2">
          <h3 className="text-2xl font-bold text-center text-health-dark mb-8 flex items-center justify-center gap-2">
            <Sparkles size={24} className="text-purple-500" />
            Leadership Team
            <Sparkles size={24} className="text-purple-500" />
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-xl bg-gradient-to-br from-white to-purple-50 border border-purple-100 shadow-sm hover:shadow-md transition-all">
              <div className="text-center">
                <h4 className="font-semibold text-health-dark mb-1">Dr. Gnaneshwer Reddy</h4>
                <p className="text-purple-700 text-sm font-medium mb-2">Founder & CEO</p>
                <p className="text-health-dark/70 text-sm">Visionary in AI-powered healthcare innovation</p>
              </div>
            </div>
            
            <div className="p-4 rounded-xl bg-gradient-to-br from-white to-indigo-50 border border-indigo-100 shadow-sm hover:shadow-md transition-all">
              <div className="text-center">
                <h4 className="font-semibold text-health-dark mb-1">Dr. Sarah Johnson</h4>
                <p className="text-indigo-700 text-sm font-medium mb-2">Chief Medical Officer</p>
                <p className="text-health-dark/70 text-sm">Leading AI-driven clinical transformation</p>
              </div>
            </div>
            
            <div className="p-4 rounded-xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 shadow-sm hover:shadow-md transition-all">
              <div className="text-center">
                <h4 className="font-semibold text-health-dark mb-1">Dr. Marcus Wei</h4>
                <p className="text-blue-700 text-sm font-medium mb-2">Chief Technology Officer</p>
                <p className="text-health-dark/70 text-sm">Expert in AI, blockchain, and quantum computing for healthcare</p>
              </div>
            </div>
            
            <div className="p-4 rounded-xl bg-gradient-to-br from-white to-emerald-50 border border-emerald-100 shadow-sm hover:shadow-md transition-all">
              <div className="text-center">
                <h4 className="font-semibold text-health-dark mb-1">Michael Torres</h4>
                <p className="text-emerald-700 text-sm font-medium mb-2">Chief Operating Officer</p>
                <p className="text-health-dark/70 text-sm">Scaling operations and global healthcare partnerships</p>
              </div>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="medical" className="w-full fade-up-3">
          <TabsList className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-transparent w-full mb-8">
            {teamGroups.filter(group => group.id !== "scientists").map((group) => (
              <TeamTabTrigger 
                key={group.id} 
                id={group.id}
                icon={group.icon}
                title={group.title}
              />
            ))}
          </TabsList>
          
          {teamGroups.filter(group => group.id !== "scientists").map((group) => (
            <TabsContent key={group.id} value={group.id} className="mt-4 animate-fade-in">
              <TeamGroup group={group} />
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-12 text-center fade-up-5">
          <div className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-100 to-purple-100 border border-purple-200 shadow-md">
            <p className="text-health-dark/80 font-medium">
              We are backed by renowned medical professionals, AI pioneers, and biotech leaders who guide our mission towards a smarter, more efficient healthcare system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
