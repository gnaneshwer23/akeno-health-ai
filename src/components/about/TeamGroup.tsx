
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TeamMemberCard } from './TeamMemberCard';
import { motion } from 'framer-motion';

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  initials: string;
}

export interface TeamGroupData {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  members: TeamMember[];
}

interface TeamGroupProps {
  group: TeamGroupData;
}

export const TeamGroup: React.FC<TeamGroupProps> = ({ group }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white border-none shadow-md overflow-hidden">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row gap-6 items-start mb-8">
            <motion.div 
              className="md:w-1/4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-health-dark mb-2">{group.title}</h3>
              <div className="h-1 w-12 bg-gradient-to-r from-health-primary to-health-secondary rounded-full mb-4"></div>
              <p className="text-health-dark/70">{group.description}</p>
            </motion.div>
            
            <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {group.members.map((member, index) => (
                <TeamMemberCard key={index} member={member} index={index} />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
