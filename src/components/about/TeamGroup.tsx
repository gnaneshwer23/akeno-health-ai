import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TeamMemberCard } from './TeamMemberCard';

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
    <Card className="bg-white border-none shadow-md">
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row gap-6 items-start mb-8">
          <div className="md:w-1/4">
            <h3 className="text-2xl font-bold text-health-dark mb-2">{group.title}</h3>
            <div className="h-1 w-12 bg-health-primary mb-4"></div>
            <p className="text-health-dark/70">{group.description}</p>
          </div>
          
          <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {group.members.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
