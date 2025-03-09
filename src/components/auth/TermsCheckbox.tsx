
import React, { memo } from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from 'framer-motion';
import { itemVariants } from './animations';

interface TermsCheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

const TermsCheckbox = ({ checked, onCheckedChange }: TermsCheckboxProps) => {
  return (
    <motion.div className="flex items-center space-x-2 pt-2" variants={itemVariants}>
      <Checkbox 
        id="terms" 
        checked={checked}
        onCheckedChange={(checked) => onCheckedChange(checked as boolean)}
        required
      />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        I agree to the{" "}
        <a href="#" className="text-health-primary hover:underline">Terms of Service</a>
        {" "}and{" "}
        <a href="#" className="text-health-primary hover:underline">Privacy Policy</a>
      </label>
    </motion.div>
  );
};

export default memo(TermsCheckbox);
