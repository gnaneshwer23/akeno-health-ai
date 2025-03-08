
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface MobileMenuLinkProps {
  to: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

const MobileMenuLink: React.FC<MobileMenuLinkProps> = ({
  to,
  icon: Icon,
  label,
  isActive,
  onClick
}) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center px-4 py-3 rounded-lg text-lg transition-colors",
        isActive ? "text-health-primary bg-health-primary/5" : "text-health-dark hover:bg-gray-50"
      )}
      onClick={onClick}
    >
      <Icon className="h-5 w-5 mr-3" />
      {label}
    </Link>
  );
};

export { MobileMenuLink };
