
import React, { memo } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { itemVariants } from './animations';

interface ConfirmPasswordInputProps {
  confirmPassword: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword: boolean;
}

const ConfirmPasswordInput = ({ confirmPassword, onChange, showPassword }: ConfirmPasswordInputProps) => {
  return (
    <motion.div className="space-y-2" variants={itemVariants}>
      <Label htmlFor="confirmPassword" className="text-sm font-medium flex items-center gap-1.5">
        <Check size={14} className="text-health-primary" />
        Confirm Password
      </Label>
      <Input 
        id="confirmPassword" 
        type={showPassword ? "text" : "password"}
        placeholder="••••••••" 
        value={confirmPassword}
        onChange={onChange}
        required
        className="transition-all duration-300 focus:ring-2 focus:ring-health-primary/30 focus:border-health-primary shadow-sm"
      />
    </motion.div>
  );
};

export default memo(ConfirmPasswordInput);
