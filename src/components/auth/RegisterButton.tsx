
import React, { memo } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, UserPlus } from 'lucide-react';
import { motion } from 'framer-motion';
import { itemVariants } from './animations';

interface RegisterButtonProps {
  isSubmitting: boolean;
}

const RegisterButton = ({ isSubmitting }: RegisterButtonProps) => {
  return (
    <motion.div variants={itemVariants}>
      <Button 
        type="submit" 
        variant="default" 
        size="lg" 
        className="w-full mt-4 group relative shadow-sm bg-health-primary text-white hover:bg-health-primary/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="mr-2 animate-spin" />
            Creating account...
          </>
        ) : (
          <>
            <UserPlus size={16} className="mr-2" />
            Create Account
          </>
        )}
      </Button>
    </motion.div>
  );
};

export default memo(RegisterButton);
