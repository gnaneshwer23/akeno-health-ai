
import React, { memo } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { itemVariants } from './animations';

interface EmailInputProps {
  email: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EmailInput = ({ email, onChange }: EmailInputProps) => {
  return (
    <motion.div className="space-y-2" variants={itemVariants}>
      <Label htmlFor="email" className="text-sm font-medium flex items-center gap-1.5">
        <Mail size={14} className="text-health-primary" />
        Email
      </Label>
      <Input 
        id="email" 
        type="email" 
        placeholder="your.email@example.com" 
        value={email}
        onChange={onChange}
        required
        className="transition-all duration-300 focus:ring-2 focus:ring-health-primary/30 focus:border-health-primary shadow-sm"
      />
    </motion.div>
  );
};

export default memo(EmailInput);
