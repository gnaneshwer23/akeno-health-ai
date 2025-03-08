
import React from 'react';
import { ExternalLink, Star, Calendar, Tag } from 'lucide-react';
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
  isNew?: boolean;
  apiEndpoint?: string;
}

const ResearchInsight: React.FC<ResearchInsightProps> = ({
  relevance,
  content,
  link = '#',
  linkText = 'View study details',
  color = 'border-blue-500',
  score,
  specialty,
  date,
  isNew = false,
  apiEndpoint
}) => {
  return (
    <div className={cn('border-l-4 pl-3 py-3 bg-white/50 rounded-r-lg shadow-sm transition-all hover:shadow-md', color)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-medium">{relevance}</h4>
          {isNew && (
            <span className="bg-green-100 text-green-800 text-xs px-1.5 py-0.5 rounded-full">
              New
            </span>
          )}
        </div>
        {score && (
          <div className="flex items-center bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-xs">
            <Star size={12} className="mr-1" />
            <span>{score}/10</span>
          </div>
        )}
      </div>
      
      {(specialty || date) && (
        <div className="text-xs text-muted-foreground mb-1 flex items-center gap-2">
          {specialty && (
            <span className="flex items-center">
              <Tag size={10} className="mr-1" />
              {specialty}
            </span>
          )}
          {date && (
            <span className="flex items-center">
              <Calendar size={10} className="mr-1" />
              {date}
            </span>
          )}
        </div>
      )}
      
      <p className="text-sm my-2">{content}</p>
      
      <div className="flex items-center justify-between">
        <a 
          href={link} 
          className="text-xs text-blue-500 hover:underline flex items-center group"
          target="_blank" 
          rel="noopener noreferrer"
        >
          {linkText}
          <ExternalLink size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
        
        {apiEndpoint && (
          <div className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full font-mono">
            {apiEndpoint}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResearchInsight;
