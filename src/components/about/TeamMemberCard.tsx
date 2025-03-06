
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  initials: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
      <Avatar className="h-24 w-24 mb-4 border-2 border-health-primary/20 group-hover:border-health-primary transition-all duration-300">
        <AvatarImage src={member.avatar} alt={member.name} />
        <AvatarFallback className="bg-health-primary/10 text-health-primary font-medium text-xl">
          {member.initials}
        </AvatarFallback>
      </Avatar>
      <h4 className="font-semibold text-health-dark text-lg mb-1 group-hover:text-health-primary transition-colors">{member.name}</h4>
      <p className="text-health-primary font-medium text-sm mb-3">{member.title}</p>
      <p className="text-health-dark/70 text-sm text-center">{member.bio}</p>
    </div>
  );
};
