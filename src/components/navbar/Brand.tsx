
import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedLogo } from '../AnimatedLogo';

const Brand: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-3 text-health-dark group">
      <div className="relative">
        <AnimatedLogo size="md" variant="default" className="transition-all duration-300 group-hover:scale-110" />
      </div>
      <div className="flex flex-col items-start">
        <span className="font-bold text-xl hidden sm:block bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
          Akeno Health
        </span>
        <span className="text-xs hidden md:block bg-gradient-to-r from-health-dark/70 to-health-dark/90 bg-clip-text text-transparent">
          AI-Powered Healthcare
        </span>
      </div>
    </Link>
  );
};

export { Brand };
