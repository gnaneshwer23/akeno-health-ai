
import React from 'react';

interface SidebarNavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive?: boolean;
}

const SidebarNavItem: React.FC<SidebarNavItemProps> = ({ 
  icon, 
  label, 
  href,
  isActive = false
}) => {
  return (
    <a
      href={href}
      className={`flex items-center gap-3 p-2 rounded-md transition-all ${
        isActive 
          ? 'bg-gradient-to-r from-health-primary/20 to-health-primary/5 text-health-primary font-medium shadow-sm'
          : 'hover:bg-gray-100 text-gray-700 hover:text-health-primary'
      }`}
    >
      <div className={`p-1.5 rounded-full ${isActive ? 'bg-health-primary/10' : 'bg-transparent'}`}>
        {icon}
      </div>
      <span>{label}</span>
      {isActive && <div className="ml-auto h-2 w-2 rounded-full bg-health-primary"></div>}
    </a>
  );
};

export default SidebarNavItem;
