
import React from 'react';
import { Link } from 'react-router-dom';

const AuthButtons: React.FC = () => {
  return (
    <div className="hidden lg:flex items-center">
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
