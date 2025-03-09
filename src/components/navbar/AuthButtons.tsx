
import React from 'react';
import { Link } from 'react-router-dom';

const AuthButtons: React.FC = () => {
  return (
    <div className="hidden lg:flex items-center">
      <Link
        to="/login"
        className="text-health-dark/80 hover:text-health-primary transition-colors text-sm font-medium mr-4"
      >
        Sign In
      </Link>
      <Link
        to="/register"
        className="bg-health-primary hover:bg-health-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
      >
        Join Our Network
      </Link>
    </div>
  );
};

export { AuthButtons };
