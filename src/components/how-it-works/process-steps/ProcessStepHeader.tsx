
import React from 'react';
import { motion } from 'framer-motion';

const ProcessStepHeader = () => {
  return (
    <div className="text-center mb-16">
      <motion.div 
        className="inline-flex items-center px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r from-health-primary/10 to-health-secondary/10 text-health-primary font-medium gap-2 border border-health-primary/10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Step-by-Step Journey
      </motion.div>

      <motion.h2
        className="text-3xl md:text-4xl font-bold text-health-dark mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
          How Akeno Health Works
        </span>
      </motion.h2>

      <div className="flex justify-center mb-4">
        <div className="h-1 w-24 bg-gradient-to-r from-health-primary to-health-secondary rounded-full"></div>
      </div>

      <motion.p
        className="text-lg text-muted-foreground max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        From Real-Time Health Data to Predictive, Personalised, and Ethical AI-Driven Care
      </motion.p>
    </div>
  );
};

export default ProcessStepHeader;
