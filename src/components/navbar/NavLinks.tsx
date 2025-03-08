
import React from 'react';
import { cn } from '@/lib/utils';
import { useActiveLink } from '@/hooks/use-active-link';
import { NavLink } from './NavLink';
import { NavDropdown } from './NavDropdown';
import { navigationLinks } from '@/data/navigationData';

interface NavLinksProps {
  className?: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ className }) => {
  const { isActive } = useActiveLink();
  
  return (
    <nav className={cn('flex items-center justify-center space-x-10', className)}>
      {navigationLinks.map((link) => (
        <div key={link.name} className="relative group">
          {link.isDropdown ? (
            <NavDropdown 
              name={link.name} 
              sublinks={link.sublinks.map(sublink => ({
                ...sublink,
                isActive: isActive(sublink.path)
              }))} 
            />
          ) : (
            <NavLink to={link.path} isActive={isActive(link.path)}>
              {link.name}
            </NavLink>
          )}
        </div>
      ))}
    </nav>
  );
};

export { NavLinks };
