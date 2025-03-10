
import React from 'react';
import { motion } from 'framer-motion';
import { MilestoneCard } from './MilestoneCard';

interface Milestone {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface TimelineMilestonesProps {
  milestones: Milestone[];
}

export const TimelineMilestones: React.FC<TimelineMilestonesProps> = ({ milestones }) => {
  return (
    <div className="relative">
      {/* Vertical timeline line */}
      <motion.div 
        className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-300 via-indigo-400 to-emerald-400 rounded-full hidden md:block"
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      ></motion.div>
      
      {/* Milestones */}
      <div className="space-y-12 relative">
        {milestones.map((milestone, index) => (
          <MilestoneCard
            key={index}
            title={milestone.title}
            description={milestone.description}
            icon={milestone.icon}
            color={milestone.color}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
