
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';

interface DatasetItemProps {
  icon: React.ReactNode;
  iconBgClass: string;
  iconTextClass: string;
  title: string;
  description: string;
  badgeText: string;
}

const DatasetItem: React.FC<DatasetItemProps> = ({
  icon,
  iconBgClass,
  iconTextClass,
  title,
  description,
  badgeText,
}) => {
  return (
    <div className="p-4 border rounded-lg flex items-center hover:bg-gray-50 transition-colors">
      <div className={`h-10 w-10 rounded-lg ${iconBgClass} flex items-center justify-center ${iconTextClass} mr-3`}>
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <h3 className="font-medium">{title}</h3>
          <Badge>{badgeText}</Badge>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <Button variant="ghost" size="sm">
        <ChevronRight size={16} />
      </Button>
    </div>
  );
};

export default DatasetItem;
