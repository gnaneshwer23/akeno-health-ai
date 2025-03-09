
import React, { memo } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from 'lucide-react';
import { motion } from 'framer-motion';
import { itemVariants } from './animations';

interface NameInputProps {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NameInput = ({ name, onChange }: NameInputProps) => {
  return (
    <motion.div className="space-y-2" variants={itemVariants}>
      <Label htmlFor="name" className="text-sm font-medium flex items-center gap-1.5">
        <User size={14} className="text-health-primary" />
        Full Name
      </Label>
      <Input 
        id="name" 
        type="text" 
        placeholder="Your Full Name" 
        value={name}
        onChange={onChange}
        required
        className="transition-all duration-300 focus:ring-2 focus:ring-health-primary/30 focus:border-health-primary shadow-sm"
      />
    </motion.div>
  );
};

export default memo(NameInput);
