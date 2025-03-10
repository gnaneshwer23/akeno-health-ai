
import React from 'react';
import { motion } from 'framer-motion';
import InfographicBackground from './infographic/InfographicBackground';
import InfographicHeader from './infographic/InfographicHeader';
import JourneyTimeline from './infographic/JourneyTimeline';

const InfographicSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-indigo-50/40 relative overflow-hidden">
      <InfographicBackground />
      
      <motion.div 
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <InfographicHeader />
        <JourneyTimeline />
      </motion.div>
    </section>
  );
};

export default InfographicSection;
