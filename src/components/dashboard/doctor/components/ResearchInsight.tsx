
import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResearchInsightProps {
  relevance: string;
  content: string;
  link?: string;
  linkText?: string;
  color?: string;
  score?: number;
  specialty?: string;
  date?: string;
}

const ResearchInsight: React.FC<ResearchInsightProps> = ({
  relevance,
  content,
  link = '#',
  linkText = 'View study details',
  color = 'border-blue-500',
  score,
  specialty,
  date
}) => {
  return (
    <div className={cn('border-l-4 pl-3 py-3 bg-white/50 rounded-r-lg shadow-sm transition-all hover:shadow-md', color)}>
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium">{relevance}</h4>
        {score && (
          <div className="flex items-center bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-xs">
            <Star size={12} className="mr-1" />
            <span>{score}/10</span>
          </div>
        )}
      </div>
      
      {specialty && (
        <div className="text-xs text-muted-foreground mb-1">
          {specialty} {date && `• ${date}`}
        </div>
      )}
      
      <p className="text-sm my-2">{content}</p>
      
      <a 
        href={link} 
        className="text-xs text-blue-500 hover:underline flex items-center group"
        target="_blank" 
        rel="noopener noreferrer"
      >
        {linkText}
        <ExternalLink size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>
    </div>
  );
};

export default ResearchInsight;
