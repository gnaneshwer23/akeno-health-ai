
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';

interface MemberAvatarProps {
  avatar: string;
  name: string;
  initials: string;
}

export const MemberAvatar: React.FC<MemberAvatarProps> = ({ avatar, name, initials }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
      <Avatar className="h-24 w-24 mb-4 border-2 border-health-primary/20 group-hover:border-health-primary transition-all duration-300">
        <AvatarImage src={avatar} alt={name} className="object-cover" />
        <AvatarFallback className="bg-gradient-to-br from-health-primary/15 to-health-secondary/15 text-health-primary font-medium text-xl">
          {initials}
        </AvatarFallback>
      </Avatar>
    </motion.div>
  );
};
