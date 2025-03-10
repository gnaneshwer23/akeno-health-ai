
import React from 'react';

interface MemberDetailsProps {
  name: string;
  title: string;
  bio: string;
}

export const MemberDetails: React.FC<MemberDetailsProps> = ({ name, title, bio }) => {
  return (
    <>
      <h4 className="font-semibold text-health-dark text-lg mb-1 group-hover:text-health-primary transition-colors">{name}</h4>
      <div className="px-3 py-1 rounded-full bg-health-primary/10 text-health-primary text-xs font-medium mb-3">{title}</div>
      <p className="text-health-dark/70 text-sm text-center">{bio}</p>
    </>
  );
};
