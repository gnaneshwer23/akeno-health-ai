
import React from 'react';
import { SectionHeader } from './vision-mission/SectionHeader';
import { VisionCard } from './vision-mission/VisionCard';
import { MissionCard } from './vision-mission/MissionCard';
import { VisionMissionCTA } from './vision-mission/VisionMissionCTA';
import { BackgroundDecorations } from './vision-mission/BackgroundDecorations';
import { ConnectedDots } from './vision-mission/ConnectedDots';
import { ConnectingLine } from './vision-mission/ConnectingLine';
import { motion } from 'framer-motion';

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
      
      {/* Connected dots network with improved animation */}
      <ConnectedDots />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader />
        </motion.div>
        
        {/* Vision and Mission Cards with Shared Background */}
        <div className="relative mb-10">
          {/* Connecting Line with enhanced animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ConnectingLine />
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 relative">
            {/* Vision Card with animation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <VisionCard visionPoints={visionPoints} />
            </motion.div>
            
            {/* Mission Card with animation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <MissionCard missionPoints={missionPoints} />
            </motion.div>
          </div>
        </div>
        
        {/* Call to Action with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <VisionMissionCTA />
        </motion.div>
      </div>
    </section>
  );
};
