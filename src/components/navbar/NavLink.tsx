
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  to: string;
  isActive: boolean;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ to, isActive, children }) => {
  return (
    <Link
      to={to}
      className={cn(
        "text-sm font-medium transition-colors py-2 px-1 whitespace-nowrap",
        isActive ? "text-health-primary" : "text-health-dark hover:text-health-primary"
      )}
    >
      {children}
    </Link>
  );
};
