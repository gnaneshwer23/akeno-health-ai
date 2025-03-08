
import React, { memo } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

interface LoginErrorAlertProps {
  error: string | null;
}

const LoginErrorAlert = ({ error }: LoginErrorAlertProps) => {
  if (!error) return null;
  
  return (
    <Alert variant="destructive">
      <AlertTriangle className="h-4 w-4" />
      <AlertDescription>{error}</AlertDescription>
    </Alert>
  );
};

export default memo(LoginErrorAlert);
