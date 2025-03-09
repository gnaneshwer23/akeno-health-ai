
import React, { memo } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

interface LoginErrorAlertProps {
  error: string | null;
}

const LoginErrorAlert = ({ error }: LoginErrorAlertProps) => {
  if (!error) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Alert variant="destructive" className="mb-4 animate-pulse border-destructive/30">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription className="font-medium">{error}</AlertDescription>
      </Alert>
    </motion.div>
  );
};

export default memo(LoginErrorAlert);
