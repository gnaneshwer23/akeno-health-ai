
import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  className?: string;
  valueClassName?: string;
}

const StatCard = ({ title, value, className = "", valueClassName = "" }: StatCardProps) => (
  <div className={`text-center p-3 bg-health-light rounded-lg hover:shadow-md transition-all ${className}`}>
    <div className="text-sm font-medium mb-1">{title}</div>
    <div className={`text-2xl font-bold text-health-primary ${valueClassName}`}>{value}</div>
  </div>
);

export default StatCard;
