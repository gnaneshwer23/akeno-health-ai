
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { CircleDot, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  topics: string[];
  category?: string;
  slug?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  title, 
  topics, 
  category = "Healthcare AI",
  slug = "blog/detail"
}) => {
  const getCategoryColors = (category: string) => {
    switch (category) {
      case "Quantum Computing":
        return "bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700 border-purple-200";
      case "AI Diagnostics":
        return "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-blue-200";
      case "Precision Medicine":
        return "bg-gradient-to-r from-teal-50 to-emerald-50 text-teal-700 border-teal-200";
      case "Digital Twins":
        return "bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 border-cyan-200";
      case "Telemedicine":
        return "bg-gradient-to-r from-amber-50 to-yellow-50 text-amber-700 border-amber-200";
      default:
        return "bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 border-indigo-200";
    }
  };

  const getCategoryBg = (category: string) => {
    switch (category) {
      case "Quantum Computing":
        return "from-purple-500/20 to-transparent";
      case "AI Diagnostics":
        return "from-blue-500/20 to-transparent";
      case "Precision Medicine":
        return "from-teal-500/20 to-transparent";
      case "Digital Twins":
        return "from-cyan-500/20 to-transparent";
      case "Telemedicine":
        return "from-amber-500/20 to-transparent";
      default:
        return "from-indigo-500/20 to-transparent";
    }
  };

  const getTopicIconColor = (category: string) => {
    switch (category) {
      case "Quantum Computing":
        return "text-purple-500";
      case "AI Diagnostics":
        return "text-blue-500";
      case "Precision Medicine":
        return "text-teal-500";
      case "Digital Twins":
        return "text-cyan-500";
      case "Telemedicine":
        return "text-amber-500";
      default:
        return "text-indigo-500";
    }
  };

  return (
    <Card className="h-full shadow-md hover:shadow-xl transition-all duration-300 border-none overflow-hidden bg-white group rounded-xl">
      <CardHeader className={`pb-3 bg-gradient-to-r ${getCategoryBg(category)}`}>
        <div className="flex justify-between items-start mb-3">
          <Badge className={`${getCategoryColors(category)}`}>
            {category}
          </Badge>
        </div>
        <CardTitle className="text-lg leading-tight font-bold text-indigo-900">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <ul className="space-y-4 mb-4">
          {topics.map((topic, index) => (
            <li key={index} className="flex gap-3">
              <CircleDot className={`h-5 w-5 ${getTopicIconColor(category)} mt-0.5 flex-shrink-0`} />
              <p className="text-indigo-700/70 text-sm">{topic}</p>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-0">
        <Button 
          variant="ghost" 
          size="sm" 
          className={`ml-auto ${getTopicIconColor(category)} group-hover:bg-indigo-50/50 transition-all`}
          asChild
        >
          <Link to={`/${slug}`}>
            Read More
            <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
