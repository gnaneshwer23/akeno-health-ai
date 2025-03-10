
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { TeamGroupHeader } from './team/TeamGroupHeader';
import { TeamMembersGrid } from './team/TeamMembersGrid';

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
            <TeamGroupHeader title={group.title} description={group.description} />
            <TeamMembersGrid members={group.members} />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
