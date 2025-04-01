
import React, { memo } from 'react';
import { Loader2, Lock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { itemVariants } from './animations';
import { CustomButton } from '@/components/ui/custom-button';

interface LoginButtonProps {
  isSubmitting: boolean;
}

const LoginButton = ({ isSubmitting }: LoginButtonProps) => {
  return (
    <motion.div variants={itemVariants}>
      <CustomButton 
        type="submit" 
        variant="primary" 
        size="lg" 
        className="w-full mt-2 shadow-md text-white transition-all duration-300"
        disabled={isSubmitting}
        icon={isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <Lock size={16} />}
        withArrow={!isSubmitting}
      >
        {isSubmitting ? "Signing in..." : "Sign In"}
      </CustomButton>
    </motion.div>
  );
};

export default memo(LoginButton);
