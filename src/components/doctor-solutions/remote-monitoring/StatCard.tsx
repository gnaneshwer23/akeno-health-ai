
import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
}

const StatCard = ({ title, value }: StatCardProps) => (
  <div className="text-center p-3 bg-health-light rounded-lg">
    <div className="text-sm font-medium mb-1">{title}</div>
    <div className="text-2xl font-bold text-health-primary">{value}</div>
  </div>
);

export default StatCard;
