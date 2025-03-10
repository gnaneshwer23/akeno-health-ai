
import React from 'react';
import ProcessStepHeader from './process-steps/ProcessStepHeader';
import ProcessStepsBackground from './process-steps/ProcessStepsBackground';
import ProcessStepsList from './process-steps/ProcessStepsList';
import { motion } from 'framer-motion';

const ProcessStepsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-indigo-50/50 to-white relative">
      <ProcessStepsBackground />
      
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <ProcessStepHeader />
        <ProcessStepsList />
      </motion.div>
    </section>
  );
};

export default ProcessStepsSection;
