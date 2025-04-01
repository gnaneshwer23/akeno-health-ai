
import React from 'react';
import { CustomButton } from '@/components/ui/custom-button';

const AuthButtons: React.FC = () => {
  return (
    <div className="flex items-center space-x-3">
      <CustomButton
        to="/login"
        variant="ghost"
        size="sm"
        className="text-health-dark hover:text-health-primary transition-colors hidden sm:inline-flex"
      >
        Sign In
      </CustomButton>
      <CustomButton
        to="/register"
        variant="primary"
        size="sm"
        className="shadow-sm hover:shadow"
      >
        Join Our Network
      </CustomButton>
    </div>
  );
};

export { AuthButtons };
