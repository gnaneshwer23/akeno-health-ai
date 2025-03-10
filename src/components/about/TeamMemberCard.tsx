
import React from 'react';
import { motion } from 'framer-motion';
import { MemberAvatar } from './team/MemberAvatar';
import { MemberDetails } from './team/MemberDetails';

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  initials: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => {
  return (
    <motion.div 
      className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    >
      <MemberAvatar 
        avatar={member.avatar} 
        name={member.name} 
        initials={member.initials} 
      />
      <MemberDetails 
        name={member.name} 
        title={member.title} 
        bio={member.bio} 
      />
    </motion.div>
  );
};
