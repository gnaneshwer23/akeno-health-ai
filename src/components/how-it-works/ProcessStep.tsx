
import React from 'react';
import { motion } from 'framer-motion';
import ProcessStepIcon from './process-steps/ProcessStepIcon';

interface FeatureItem {
  icon: React.ReactNode;
  content: string;
}

interface ProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
  icon: string;
  features: FeatureItem[];
  outcome: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  stepNumber, 
  title, 
  description, 
  icon,
  features,
  outcome
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
      {/* Step Number and Icon */}
      <div className="flex flex-col items-center md:items-start">
        <div className="bg-indigo-100 text-indigo-800 rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl mb-4">
          {stepNumber}
        </div>
        <div className="hidden md:block h-full w-0.5 bg-gradient-to-b from-indigo-400 to-indigo-100 mx-auto" />
      </div>
      
      {/* Step Content */}
      <div className="flex-1">
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-start">
          {/* Title and Description */}
          <div className="md:w-1/3">
            <div className="mb-3">
              <ProcessStepIcon iconName={icon} className="h-10 w-10 text-health-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-health-dark">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
          
          {/* Features List */}
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 rounded-lg border border-health-primary/10 shadow-sm flex gap-3 items-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-health-primary flex-shrink-0">
                    {feature.icon}
                  </div>
                  <span className="text-sm text-health-dark">
                    {feature.content}
                  </span>
                </motion.div>
              ))}
            </div>
            
            {/* Outcome */}
            <div className="bg-indigo-50/70 p-4 rounded-lg border border-indigo-100">
              <div className="text-sm font-medium text-indigo-800 mb-1">Outcome</div>
              <p className="text-health-dark">{outcome}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessStep;
