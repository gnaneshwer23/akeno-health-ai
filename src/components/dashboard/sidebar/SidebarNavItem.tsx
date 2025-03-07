
import React from 'react';

interface SidebarNavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const SidebarNavItem: React.FC<SidebarNavItemProps> = ({ icon, label, href }) => {
  return (
    <a
      href={href}
      className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 text-gray-700 hover:text-health-primary transition-colors"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

export default SidebarNavItem;
