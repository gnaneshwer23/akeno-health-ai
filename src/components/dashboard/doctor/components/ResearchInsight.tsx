
import React from 'react';

interface ResearchInsightProps {
  relevance: string;
  content: string;
  link?: string;
  linkText?: string;
  color?: string;
}

const ResearchInsight: React.FC<ResearchInsightProps> = ({
  relevance,
  content,
  link = '#',
  linkText = 'View study details',
  color = 'border-blue-500'
}) => {
  return (
    <div className={`border-l-4 ${color} pl-3`}>
      <h4 className="text-sm font-medium">{relevance}</h4>
      <p className="text-sm">{content}</p>
      <a href={link} className="text-sm text-blue-500 hover:underline">{linkText}</a>
    </div>
  );
};

export default ResearchInsight;
