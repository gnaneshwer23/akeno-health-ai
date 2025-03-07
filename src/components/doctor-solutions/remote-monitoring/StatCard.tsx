
import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  className?: string;
  valueClassName?: string;
}

const StatCard = ({ title, value, className = "", valueClassName = "" }: StatCardProps) => (
  <div className={`text-center p-5 bg-gradient-to-br from-health-light/90 to-white rounded-xl border border-health-primary/10 hover:shadow-xl hover:translate-y-[-3px] transition-all duration-300 group ${className}`}>
    <div className="text-sm font-medium text-health-dark/80 mb-2 group-hover:text-health-primary transition-colors">{title}</div>
    <div className={`text-2xl font-bold bg-gradient-to-r from-health-primary via-health-secondary to-health-accent bg-clip-text text-transparent group-hover:scale-105 transition-transform ${valueClassName}`}>{value}</div>
    <div className="w-0 h-0.5 bg-gradient-to-r from-health-primary to-health-secondary mx-auto mt-3 group-hover:w-1/2 transition-all duration-500"></div>
  </div>
);

export default StatCard;
