
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';

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
      <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
        <Avatar className="h-24 w-24 mb-4 border-2 border-health-primary/20 group-hover:border-health-primary transition-all duration-300">
          <AvatarImage src={member.avatar} alt={member.name} className="object-cover" />
          <AvatarFallback className="bg-gradient-to-br from-health-primary/15 to-health-secondary/15 text-health-primary font-medium text-xl">
            {member.initials}
          </AvatarFallback>
        </Avatar>
      </motion.div>
      <h4 className="font-semibold text-health-dark text-lg mb-1 group-hover:text-health-primary transition-colors">{member.name}</h4>
      <div className="px-3 py-1 rounded-full bg-health-primary/10 text-health-primary text-xs font-medium mb-3">{member.title}</div>
      <p className="text-health-dark/70 text-sm text-center">{member.bio}</p>
    </motion.div>
  );
};
