
import React from 'react';
import { Tabs, TabsContent, TabsList } from '@/components/ui/tabs';
import { teamGroups } from '@/data/teamData';
import { TeamGroup } from './TeamGroup';
import { TeamTabTrigger } from './TeamTabTrigger';

export const AboutTeam = () => {
  return (
    <section className="mb-20 px-6 py-16 relative bg-gradient-to-b from-health-light to-white">
      <div className="absolute top-0 right-0 w-72 h-72 bg-health-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-health-secondary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">Our Team</h2>
          
          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-health-primary to-health-secondary"></div>
          </div>
          
          <p className="text-health-dark/80 max-w-3xl mx-auto">
            At the core of Akeno Health AI is a dynamic team of scientists, AI engineers, healthcare professionals, 
            and biotechnology innovators, all driven by a shared passion for revolutionizing healthcare through 
            advanced technology. We bring together expertise from artificial intelligence, immunology, genomics, 
            data science, and pharmaceutical research to develop state-of-the-art healthcare solutions.
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
        
        <div className="mt-12 text-center">
          <div className="inline-block px-6 py-3 rounded-lg bg-health-primary/10">
            <p className="text-health-dark/80 font-medium">
              Our team is united by a mission to transform healthcare into a data-driven, precision-based, 
              patient-first ecosystem that leverages AI to improve medical outcomes and accessibility for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
