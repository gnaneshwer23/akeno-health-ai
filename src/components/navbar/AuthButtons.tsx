
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';

const AuthButtons: React.FC = () => {
  return (
    <div className="hidden lg:flex items-center gap-6">
      <Link
        to="/login"
        className="text-health-dark/80 hover:text-health-primary transition-colors relative group text-sm font-medium"
      >
        Sign In
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-health-primary transition-all duration-300 group-hover:w-full"></span>
      </Link>
      <Button 
        variant="primary" 
        size="sm" 
        className="shadow hover:shadow-md transition-all"
        as="Link"
        to="/contact"
      >
        Get Started
      </Button>
    </div>
  );
};

export { AuthButtons };
