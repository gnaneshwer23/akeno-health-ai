
import React, { memo } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

interface RegisterErrorAlertProps {
  error: string | null;
}

const RegisterErrorAlert = ({ error }: RegisterErrorAlertProps) => {
  if (!error) return null;
  
  return (
    <Alert variant="destructive" className="animate-fade-in">
      <AlertTriangle className="h-4 w-4" />
      <AlertDescription>{error}</AlertDescription>
    </Alert>
  );
};

export default memo(RegisterErrorAlert);
