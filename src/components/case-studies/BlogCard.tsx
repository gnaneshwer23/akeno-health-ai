
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { CircleDot, ArrowRight } from 'lucide-react';
import { Button } from '@/components/Button';
import { Badge } from '@/components/ui/badge';

interface BlogCardProps {
  title: string;
  topics: string[];
  category?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, topics, category = "Healthcare AI" }) => {
  return (
    <Card className="h-full shadow-md hover:shadow-lg transition-all duration-300 border-none overflow-hidden bg-white group">
      <CardHeader className="pb-3 bg-gradient-to-r from-health-secondary/20 to-transparent">
        <div className="flex justify-between items-start mb-3">
          <Badge className="bg-health-light text-health-secondary border-health-secondary/30">
            {category}
          </Badge>
        </div>
        <CardTitle className="text-lg leading-tight font-bold text-health-dark">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <ul className="space-y-4 mb-4">
          {topics.map((topic, index) => (
            <li key={index} className="flex gap-3">
              <CircleDot className="h-5 w-5 text-health-secondary mt-0.5 flex-shrink-0" />
              <p className="text-muted-foreground text-sm">{topic}</p>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-0">
        <Button 
          variant="ghost" 
          size="sm" 
          className="ml-auto text-health-secondary group-hover:text-health-primary group-hover:bg-health-light/20 transition-all"
        >
          Read More
          <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
