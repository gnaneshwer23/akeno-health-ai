
import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  className?: string;
  valueClassName?: string;
}

const StatCard = ({ title, value, className = "", valueClassName = "" }: StatCardProps) => (
  <div className={`text-center p-4 bg-gradient-to-br from-health-light to-white rounded-lg border border-health-primary/10 hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 ${className}`}>
    <div className="text-sm font-medium text-health-dark/80 mb-2">{title}</div>
    <div className={`text-2xl font-bold bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent ${valueClassName}`}>{value}</div>
  </div>
);

export default StatCard;
