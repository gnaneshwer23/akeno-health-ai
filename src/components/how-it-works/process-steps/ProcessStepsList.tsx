
import React from 'react';
import ProcessStep from '../ProcessStep';
import { processStepsData } from './stepsData';
import { motion } from 'framer-motion';

const ProcessStepsList: React.FC = () => {
  return (
    <div className="space-y-16">
      {processStepsData.map((step, index) => (
        <motion.div
          key={step.stepNumber}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.7,
            delay: index * 0.1,
            ease: "easeOut"
          }}
        >
          <ProcessStep
            stepNumber={step.stepNumber}
            title={step.title}
            description={step.description}
            icon={step.icon}
            features={step.features}
            outcome={step.outcome}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ProcessStepsList;
