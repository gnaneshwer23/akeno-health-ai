
import React, { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface DiscoveryCardProps {
  icon: ReactNode;
  iconBgClass: string;
  iconTextClass: string;
  title: string;
  description: string;
  actionText: string;
}

const DiscoveryCard: React.FC<DiscoveryCardProps> = ({
  icon,
  iconBgClass,
  iconTextClass,
  title,
  description,
  actionText,
}) => {
  return (
    <div className="p-3 bg-gray-50 rounded-lg">
      <div className="flex items-start gap-3">
        <div className={`h-10 w-10 rounded-lg ${iconBgClass} flex items-center justify-center ${iconTextClass}`}>
          {icon}
        </div>
        <div>
          <h4 className="font-medium">{title}</h4>
          <p className="text-sm text-muted-foreground mt-1">
            {description}
          </p>
          <Button variant="link" size="sm" className="p-0 h-auto mt-1">{actionText}</Button>
        </div>
      </div>
    </div>
  );
};

export default DiscoveryCard;
