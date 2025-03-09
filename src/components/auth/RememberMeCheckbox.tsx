
import React, { memo } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { motion } from 'framer-motion';
import { itemVariants } from './animations';

interface RememberMeCheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

const RememberMeCheckbox = ({ checked, onCheckedChange }: RememberMeCheckboxProps) => {
  return (
    <motion.div className="flex items-center space-x-2" variants={itemVariants}>
      <Checkbox 
        id="remember" 
        checked={checked}
        onCheckedChange={(checked) => onCheckedChange(checked as boolean)}
        className="data-[state=checked]:bg-health-primary data-[state=checked]:border-health-primary"
      />
      <label
        htmlFor="remember"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
      >
        Remember me for 30 days
      </label>
    </motion.div>
  );
};

export default memo(RememberMeCheckbox);
