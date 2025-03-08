
import React from 'react';
import { Link } from 'react-router-dom';

const AuthButtons: React.FC = () => {
  return (
    <div className="hidden lg:flex items-center">
      <Link
        to="/login"
        className="text-health-dark/80 hover:text-health-primary transition-colors text-sm font-medium"
      >
        Sign In
      </Link>
    </div>
  );
};

export { AuthButtons };
