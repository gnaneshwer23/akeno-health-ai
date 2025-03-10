
import React from 'react';
import { Link } from 'react-router-dom';

const AuthButtons: React.FC = () => {
  return (
    <div className="flex items-center space-x-3">
      <Link
        to="/login"
        className="text-health-dark hover:text-health-primary transition-colors text-sm font-medium hidden sm:inline-block"
      >
        Sign In
      </Link>
      <Link
        to="/register"
        className="bg-health-primary hover:bg-health-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm hover:shadow"
      >
        Join Our Network
      </Link>
    </div>
  );
};

export { AuthButtons };
