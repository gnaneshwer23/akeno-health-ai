
import React from 'react';
import { motion } from 'framer-motion';
import { MilestoneCard } from './MilestoneCard';
import { DetailedMilestoneCard } from './DetailedMilestoneCard';

interface Milestone {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface DetailedMilestone {
  year: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  color: string;
}

interface TimelineMilestonesProps {
  milestones?: Milestone[];
  detailedMilestones?: DetailedMilestone[];
  variant?: 'compact' | 'detailed';
}

export const TimelineMilestones: React.FC<TimelineMilestonesProps> = ({ 
  milestones = [], 
  detailedMilestones = [], 
  variant = 'compact' 
}) => {
  return (
    <div className="relative">
      {variant === 'compact' && (
        <>
          {/* Vertical timeline line */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-300 via-indigo-400 to-emerald-400 rounded-full hidden md:block"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          ></motion.div>
          
          {/* Milestones */}
          <div className="space-y-10 relative">
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
        </>
      )}

      {variant === 'detailed' && (
        <div className="space-y-16 relative">
          {/* Vertical timeline line for detailed view */}
          <motion.div 
            className="absolute left-[10%] sm:left-24 top-0 bottom-0 w-1.5 bg-gradient-to-b from-amber-300 via-indigo-400 to-emerald-400 rounded-full hidden md:block"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
          ></motion.div>
          
          {detailedMilestones.map((milestone, index) => (
            <DetailedMilestoneCard
              key={index}
              year={milestone.year}
              title={milestone.title}
              description={milestone.description}
              icon={milestone.icon}
              color={milestone.color}
              index={index}
              isLast={index === detailedMilestones.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};
