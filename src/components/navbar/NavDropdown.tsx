
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavDropdownLink {
  name: string;
  path: string;
  isActive: boolean;
}

interface NavDropdownProps {
  name: string;
  sublinks: NavDropdownLink[];
}

export const NavDropdown: React.FC<NavDropdownProps> = ({ name, sublinks }) => {
  return (
    <div className="relative group">
      <button className="text-health-dark hover:text-health-primary transition-colors py-2 font-medium text-sm">
        {name}
      </button>
      <div className="absolute left-0 top-full pt-2 w-48 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
        <div className="bg-white shadow-lg rounded-xl p-2 border border-gray-100">
          {sublinks.map((sublink) => (
            <Link
              key={sublink.path}
              to={sublink.path}
              className={cn(
                "block px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-50",
                sublink.isActive ? "text-health-primary" : "text-gray-700"
              )}
            >
              {sublink.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
