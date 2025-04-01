
import React, { memo } from 'react';
import { Loader2, UserPlus } from 'lucide-react';
import { motion } from 'framer-motion';
import { itemVariants } from './animations';
import { CustomButton } from '@/components/ui/custom-button';

interface RegisterButtonProps {
  isSubmitting: boolean;
}

const RegisterButton = ({ isSubmitting }: RegisterButtonProps) => {
  return (
    <motion.div variants={itemVariants}>
      <CustomButton 
        type="submit" 
        variant="primary" 
        size="lg" 
        className="w-full mt-4 shadow-sm"
        disabled={isSubmitting}
        icon={isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <UserPlus size={16} />}
      >
        {isSubmitting ? "Creating account..." : "Create Account"}
      </CustomButton>
    </motion.div>
  );
};

export default memo(RegisterButton);
