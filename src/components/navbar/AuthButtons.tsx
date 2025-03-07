
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';

const AuthButtons: React.FC = () => {
  return (
    <div className="hidden lg:flex items-center gap-4">
      <Link
        to="/login"
        className="text-health-dark/80 hover:text-health-primary transition-colors text-sm font-medium"
      >
        Sign In
      </Link>
      <Button 
        variant="primary" 
        size="sm" 
        className="rounded-full shadow hover:shadow-md transition-all"
        as="Link"
        to="/contact"
      >
        Get Started
      </Button>
    </div>
  );
};

export { AuthButtons };
