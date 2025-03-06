
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

interface ApplicationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string[];
  impact: string;
  diagram: React.ReactNode;
  link?: string;
}

export const ApplicationCard = ({
  icon,
  title,
  description,
  impact,
  diagram,
  link = "/quantum-computing"
}: ApplicationCardProps) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <Card className="border-none shadow-sm md:col-span-2">
      <CardHeader className="pb-2">
        <div className="h-12 w-12 rounded-full bg-health-primary/10 flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold text-health-dark">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-4">
          {description.map((item, index) => (
            <li key={index} className="text-health-dark/70 flex items-start">
              <span className="text-health-primary mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <CardDescription className="text-health-primary border-l-2 border-health-primary pl-3 font-medium mt-4">
          <strong>Impact:</strong> {impact}
        </CardDescription>
      </CardContent>
    </Card>
    
    <Link to={link} className="block">
      <div className="bg-gradient-to-r from-indigo-100 to-blue-100 rounded-xl p-6 flex items-center justify-center h-full hover:shadow-md transition-shadow">
        {diagram}
      </div>
    </Link>
  </div>
);
