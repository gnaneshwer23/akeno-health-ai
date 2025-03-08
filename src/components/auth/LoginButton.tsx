
import React, { memo } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, Lock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { itemVariants } from './animations';

interface LoginButtonProps {
  isSubmitting: boolean;
}

const LoginButton = ({ isSubmitting }: LoginButtonProps) => {
  return (
    <motion.div variants={itemVariants}>
      <Button 
        type="submit" 
        variant="default" 
        size="lg" 
        className="w-full mt-2 group relative shadow-sm bg-health-primary text-white hover:bg-health-primary/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="mr-2 animate-spin" />
            Signing in...
          </>
        ) : (
          <>
            <Lock size={16} className="mr-2" />
            Sign In
            <ArrowRight size={16} className="absolute right-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
          </>
        )}
      </Button>
    </motion.div>
  );
};

export default memo(LoginButton);
