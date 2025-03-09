
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PartnerTypeCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const PartnerTypeCard = ({ title, description, icon }: PartnerTypeCardProps) => {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-white to-blue-50/50 border border-blue-100 shadow-sm hover:shadow-md transition-all">
      <div className="p-2 rounded-lg bg-white shadow-sm">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-health-dark mb-1">{title}</h4>
        <p className="text-health-dark/70 text-sm">{description}</p>
      </div>
    </div>
  );
};
