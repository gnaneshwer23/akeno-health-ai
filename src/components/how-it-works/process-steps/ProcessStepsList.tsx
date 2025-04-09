
import React from 'react';
import ProcessStep from '../ProcessStep';
import { processSteps } from './stepsData';
import { motion } from 'framer-motion';

const ProcessStepsList: React.FC = () => {
  return (
    <div className="space-y-16">
      {processSteps.map((step, index) => (
        <motion.div
          key={step.id}
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
            stepNumber={index + 1}
            title={step.title}
            description={step.tagline}
            icon={step.icon}
            features={[]}
            outcome=""
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ProcessStepsList;
