
import React from 'react';
import { SectionHeader } from './vision-mission/SectionHeader';
import { VisionCard } from './vision-mission/VisionCard';
import { MissionCard } from './vision-mission/MissionCard';
import { VisionMissionCTA } from './vision-mission/VisionMissionCTA';
import { BackgroundDecorations } from './vision-mission/BackgroundDecorations';
import { ConnectedDots } from './vision-mission/ConnectedDots';
import { ConnectingLine } from './vision-mission/ConnectingLine';

export const VisionMission = () => {
  const missionPoints = [
    "Empower individuals with continuous AI-driven health insights",
    "Support healthcare providers with real-time, AI-powered clinical decision support",
    "Enable pharmaceutical companies to accelerate drug discovery and optimise clinical trials",
    "Secure health data ownership through blockchain-powered patient records",
    "Create a global, decentralised, and intelligent healthcare network"
  ];

  const visionPoints = [
    "A world where diseases are predicted before they occur",
    "Treatments tailored to each individual's unique genetic makeup",
    "Medical research that accelerates breakthroughs and saves lives",
    "Healthcare that is proactive rather than reactive",
    "AI identifying health risks before they become serious conditions"
  ];

  return (
    <section id="vision" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <BackgroundDecorations />
      
      {/* Connected dots network */}
      <ConnectedDots />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <SectionHeader />
        
        {/* Vision and Mission Cards with Shared Background */}
        <div className="relative mb-10">
          {/* Connecting Line */}
          <ConnectingLine />
          
          <div className="grid lg:grid-cols-2 gap-12 relative">
            {/* Vision Card */}
            <VisionCard visionPoints={visionPoints} />
            
            {/* Mission Card */}
            <MissionCard missionPoints={missionPoints} />
          </div>
        </div>
        
        {/* Call to Action */}
        <VisionMissionCTA />
      </div>
    </section>
  );
};
