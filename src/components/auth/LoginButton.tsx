
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
        className="w-full mt-2 group relative shadow-md bg-health-primary text-white hover:bg-health-primary/90 transition-all duration-300"
        disabled={isSubmitting}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              <span>Signing in...</span>
            </>
          ) : (
            <>
              <Lock size={16} />
              <span>Sign In</span>
              <ArrowRight size={16} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </>
          )}
        </span>
        
        {/* Ripple effect on click */}
        <span className="absolute inset-0 z-0 overflow-hidden rounded-md">
          <span className="absolute top-1/2 left-1/2 aspect-square w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-0 transition-all duration-500 active:w-32 active:opacity-20"></span>
        </span>
      </Button>
    </motion.div>
  );
};

export default memo(LoginButton);
