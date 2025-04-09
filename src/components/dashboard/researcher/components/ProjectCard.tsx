
import React, { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface ProjectCardProps {
  title: string;
  badgeText: string;
  badgeClass: string;
  description: string;
  progress: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  badgeText,
  badgeClass,
  description,
  progress,
}) => {
  return (
    <div className="border rounded-lg p-3">
      <div className="flex justify-between items-center">
        <h4 className="font-medium">{title}</h4>
        <Badge className={badgeClass}>{badgeText}</Badge>
      </div>
      <p className="text-sm text-muted-foreground mt-1">
        {description}
      </p>
      <div className="mt-2">
        <div className="flex justify-between text-xs mb-1">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="h-1.5" />
      </div>
    </div>
  );
};

export default ProjectCard;
