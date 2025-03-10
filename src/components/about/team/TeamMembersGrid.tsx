
import React from 'react';
import { TeamMember } from '../TeamGroup';
import { TeamMemberCard } from '../TeamMemberCard';

interface TeamMembersGridProps {
  members: TeamMember[];
}

export const TeamMembersGrid: React.FC<TeamMembersGridProps> = ({ members }) => {
  return (
    <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {members.map((member, index) => (
        <TeamMemberCard key={index} member={member} index={index} />
      ))}
    </div>
  );
};
