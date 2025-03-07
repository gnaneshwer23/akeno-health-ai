
import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedLogo } from '../AnimatedLogo';

const Brand: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="relative">
        <AnimatedLogo size="md" variant="default" className="transition-all duration-300" />
      </div>
      <div className="flex flex-col items-start">
        <span className="font-bold text-lg sm:text-xl text-health-primary">
          Akeno Health
        </span>
        <span className="text-[10px] sm:text-xs text-health-dark/70">
          AI-Powered Healthcare
        </span>
      </div>
    </Link>
  );
};

export { Brand };
