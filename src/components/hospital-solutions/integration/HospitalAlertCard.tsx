
import React from 'react';
import { Button } from '@/components/ui/button';

interface HospitalAlertCardProps {
  type: 'warning' | 'critical' | 'success' | 'info';
  icon: React.ReactNode;
  title: string;
  timeAgo: string;
  description: string;
  primaryActionText?: string;
  secondaryActionText?: string;
}

const HospitalAlertCard = ({
  type,
  icon,
  title,
  timeAgo,
  description,
  primaryActionText,
  secondaryActionText
}: HospitalAlertCardProps) => {
  const getTypeStyles = () => {
    switch (type) {
      case 'critical':
        return 'bg-red-50 border-red-200';
      case 'warning':
        return 'bg-amber-50 border-amber-200';
      case 'success':
        return 'bg-green-50 border-green-200';
      case 'info':
      default:
        return 'bg-blue-50 border-blue-200';
    }
  };

  return (
    <div className={`p-4 rounded-lg border ${getTypeStyles()}`}>
      <div className="flex justify-between mb-2">
        <div className="flex items-center">
          <div className="mr-2">{icon}</div>
          <h4 className="font-medium">{title}</h4>
        </div>
        <span className="text-xs text-gray-500">{timeAgo}</span>
      </div>
      
      <p className="text-sm mb-3">{description}</p>
      
      {(primaryActionText || secondaryActionText) && (
        <div className="flex gap-2">
          {primaryActionText && (
            <Button size="sm">{primaryActionText}</Button>
          )}
          {secondaryActionText && (
            <Button size="sm" variant="outline">{secondaryActionText}</Button>
          )}
        </div>
      )}
    </div>
  );
};

export default HospitalAlertCard;
