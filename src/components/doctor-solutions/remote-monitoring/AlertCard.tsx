
import React from 'react';

interface AlertCardProps {
  type: 'critical' | 'warning';
  icon: React.ReactNode;
  title: string;
  timeAgo: string;
  description: string;
  primaryActionText: string;
  secondaryActionText: string;
}

const AlertCard = ({ 
  type, 
  icon, 
  title, 
  timeAgo, 
  description,
  primaryActionText,
  secondaryActionText
}: AlertCardProps) => {
  const bgColor = type === 'critical' ? 'bg-red-50 border-red-200' : 'bg-yellow-50 border-yellow-200';
  const iconBgColor = type === 'critical' ? 'bg-red-100' : 'bg-yellow-100';
  const textColor = type === 'critical' ? 'text-red-600' : 'text-yellow-600';
  const badgeBgColor = type === 'critical' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800';
  const buttonBgColor = type === 'critical' ? 'bg-red-600' : 'bg-yellow-600';
  
  return (
    <div className={`${bgColor} p-4 rounded-lg flex items-start gap-3`}>
      <div className="flex-shrink-0">
        <div className={`w-10 h-10 rounded-full ${iconBgColor} flex items-center justify-center`}>
          {icon}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className={`font-medium ${textColor}`}>{title}</span>
          <span className={`text-xs ${badgeBgColor} px-2 py-0.5 rounded-full`}>{timeAgo}</span>
        </div>
        <p className="text-sm text-gray-700">{description}</p>
        <div className="mt-2 flex gap-2">
          <button className={`text-xs ${buttonBgColor} text-white px-3 py-1 rounded-full`}>{primaryActionText}</button>
          <button className="text-xs bg-white border border-gray-300 px-3 py-1 rounded-full">{secondaryActionText}</button>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;
