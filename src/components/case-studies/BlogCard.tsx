
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CircleDot } from 'lucide-react';

interface BlogCardProps {
  title: string;
  topics: string[];
}

const BlogCard: React.FC<BlogCardProps> = ({ title, topics }) => {
  return (
    <Card className="h-full shadow-sm border-none overflow-hidden bg-white">
      <CardHeader className="pb-3 bg-gradient-to-r from-health-secondary/20 to-transparent">
        <CardTitle className="text-xl font-bold text-health-dark">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <ul className="space-y-3">
          {topics.map((topic, index) => (
            <li key={index} className="flex gap-3">
              <CircleDot className="h-5 w-5 text-health-secondary mt-0.5 flex-shrink-0" />
              <p className="text-muted-foreground">{topic}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
