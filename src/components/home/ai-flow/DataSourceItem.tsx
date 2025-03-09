
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DataSourceItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const DataSourceItem = ({ icon: Icon, title, description }: DataSourceItemProps) => {
  return (
    <div className="flow-item-card">
      <Icon className="item-icon-card" />
      <div className="item-title-card">{title}</div>
      <div className="item-desc-card">{description}</div>
    </div>
  );
};

export default DataSourceItem;
