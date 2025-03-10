
import React from 'react';
import { motion } from 'framer-motion';
import { journeySteps } from './journeyStepsData';
import type { JourneyStep } from './journeyStepsData';
import { getColorClasses } from './ColorSchemeUtils';
import { cn } from '@/lib/utils';

const JourneyTimeline: React.FC = () => {
  return (
    <div className="relative">
      {/* Enhanced Vertical Line with animated gradient */}
      <motion.div 
        className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400 rounded-full -z-10"
        initial={{ height: "0%" }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      {/* Journey Steps */}
      <div className="space-y-12">
        {journeySteps.map((item, index) => (
          <JourneyStep 
            key={index}
            item={item}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

interface JourneyStepProps {
  item: JourneyStep;
  index: number;
}

const JourneyStep: React.FC<JourneyStepProps> = ({ item, index }) => {
  const colors = getColorClasses(item.color);
  const isRightAligned = index % 2 === 0;
  
  return (
    <motion.div 
      className={cn(
        "flex flex-col lg:flex-row gap-6 items-center lg:items-start relative",
        isRightAligned ? "lg:flex-row-reverse" : ""
      )}
      initial={{ opacity: 0, x: isRightAligned ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: 0.1 * index }}
    >
      {/* Step number circle */}
      <motion.div 
        className="absolute left-4 lg:left-1/2 top-0 transform -translate-x-1/2 z-10"
        initial={{ scale: 0, rotate: -30 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          delay: 0.2 + (0.05 * index)
        }}
      >
        <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br ${colors.gradient} text-white text-sm font-bold shadow-lg border-2 border-white`}>
          {item.step}
        </div>
      </motion.div>
      
      {/* Content card */}
      <div className={cn(
        "w-full lg:w-1/2 pl-16 lg:pl-0 lg:px-8",
        isRightAligned ? "lg:text-right" : "lg:text-left"
      )}>
        <motion.div 
          className={`bg-white rounded-xl p-6 shadow-md border ${colors.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${colors.shadow}`}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className={cn(
            "flex gap-4 items-start",
            isRightAligned ? "lg:flex-row-reverse" : ""
          )}>
            <motion.div 
              className={`flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-white shadow-md`}
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {item.icon}
            </motion.div>
            <div>
              <h4 className="font-bold text-lg text-health-dark mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.content}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default JourneyTimeline;
