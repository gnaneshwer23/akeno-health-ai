
import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedLogo } from '../AnimatedLogo';

const Brand: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-2 text-health-dark">
      <AnimatedLogo size="md" />
      <span className="font-medium text-lg hidden sm:block">Akeno Health AI</span>
    </Link>
  );
};

export { Brand };
