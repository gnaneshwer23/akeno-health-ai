
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MobileMenuLink } from './MobileMenuLink';
import { LucideIcon } from 'lucide-react';

interface DropdownLink {
  to: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
}

interface MobileMenuDropdownProps {
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  links: DropdownLink[];
  onLinkClick?: () => void;
}

const MobileMenuDropdown: React.FC<MobileMenuDropdownProps> = ({
  icon: Icon,
  label,
  isActive,
  links,
  onLinkClick
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={cn(
          "flex items-center justify-between w-full px-4 py-3 rounded-lg text-lg transition-colors",
          isActive ? "text-health-primary bg-health-primary/5" : "text-health-dark hover:bg-gray-50"
        )}
      >
        <div className="flex items-center">
          <Icon className="h-5 w-5 mr-3" />
          {label}
        </div>
        <ChevronDown 
          className={cn(
            "h-5 w-5 transition-transform", 
            isOpen ? "transform rotate-180" : ""
          )} 
        />
      </button>
      
      <div className={cn(
        "pl-8 overflow-hidden transition-all duration-300",
        isOpen ? "max-h-[500px] opacity-100 mt-1" : "max-h-0 opacity-0"
      )}>
        {links.map((link) => (
          <MobileMenuLink
            key={link.to}
            to={link.to}
            icon={link.icon}
            label={link.label}
            isActive={link.isActive}
            onClick={onLinkClick}
          />
        ))}
      </div>
    </div>
  );
};

export { MobileMenuDropdown };
