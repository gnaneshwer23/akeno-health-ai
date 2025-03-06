
import React from 'react';
import { Button } from '../Button';

const AuthButtons: React.FC = () => {
  return (
    <div className="hidden lg:flex items-center gap-4">
      <Button 
        variant="outline" 
        size="sm" 
        className="shadow-sm hover:shadow transition-all"
        as="Link"
        to="/login"
      >
        Sign In
      </Button>
      <Button 
        variant="primary" 
        size="sm" 
        className="shadow hover:shadow-md transition-all"
        as="Link"
        to="/login"
      >
        Get Started
      </Button>
    </div>
  );
};

export { AuthButtons };
