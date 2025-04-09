
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { CircleDot, ArrowRight, User, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  topics: string[];
  category?: string;
  author?: string;
  date?: string;
  excerpt?: string;
  slug?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  title, 
  topics,
  category = "Healthcare AI",
  author = "Akeno Team",
  date = "March 2025",
  excerpt = "",
  slug = "blog/detail"
}) => {
  const getCategoryColors = (category: string) => {
    switch (category) {
      case "AI & Precision Medicine":
        return "bg-gradient-to-r from-teal-50 to-emerald-50 text-teal-700 border-teal-200";
      case "Research & Whitepapers":
        return "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-blue-200";
      case "Clinical Case Studies":
        return "bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 border-amber-200";
      case "Drug Discovery & Trials":
        return "bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700 border-purple-200";
      case "Data Ethics & Security":
        return "bg-gradient-to-r from-red-50 to-rose-50 text-red-700 border-red-200";
      case "Global Health & Equity":
        return "bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 border-cyan-200";
      case "Press Releases":
        return "bg-gradient-to-r from-gray-50 to-slate-50 text-gray-700 border-gray-200";
      case "Patient Stories":
        return "bg-gradient-to-r from-pink-50 to-rose-50 text-pink-700 border-pink-200";
      default:
        return "bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 border-indigo-200";
    }
  };

  const getCategoryBg = (category: string) => {
    switch (category) {
      case "AI & Precision Medicine":
        return "from-teal-500/20 to-transparent";
      case "Research & Whitepapers":
        return "from-blue-500/20 to-transparent";
      case "Clinical Case Studies":
        return "from-amber-500/20 to-transparent";
      case "Drug Discovery & Trials":
        return "from-purple-500/20 to-transparent";
      case "Data Ethics & Security":
        return "from-red-500/20 to-transparent";
      case "Global Health & Equity":
        return "from-cyan-500/20 to-transparent";
      case "Press Releases":
        return "from-gray-500/20 to-transparent";
      case "Patient Stories":
        return "from-pink-500/20 to-transparent";
      default:
        return "from-indigo-500/20 to-transparent";
    }
  };

  const getTopicIconColor = (category: string) => {
    switch (category) {
      case "AI & Precision Medicine":
        return "text-teal-500";
      case "Research & Whitepapers":
        return "text-blue-500";
      case "Clinical Case Studies":
        return "text-amber-500";
      case "Drug Discovery & Trials":
        return "text-purple-500";
      case "Data Ethics & Security":
        return "text-red-500";
      case "Global Health & Equity":
        return "text-cyan-500";
      case "Press Releases":
        return "text-gray-500";
      case "Patient Stories":
        return "text-pink-500";
      default:
        return "text-indigo-500";
    }
  };

  return (
    <Card className="h-full shadow-md hover:shadow-xl transition-all duration-300 border-none overflow-hidden bg-white group rounded-xl">
      <CardHeader className={`pb-3 bg-gradient-to-r ${getCategoryBg(category)}`}>
        <div className="flex justify-between items-start mb-2">
          <Badge className={`${getCategoryColors(category)}`}>
            {category}
          </Badge>
        </div>
        <CardTitle className="text-lg leading-tight font-bold text-indigo-900">{title}</CardTitle>
        <div className="flex items-center text-xs text-indigo-500 mt-2 space-x-4">
          <div className="flex items-center">
            <User size={12} className="mr-1" />
            {author}
          </div>
          <div className="flex items-center">
            <CalendarDays size={12} className="mr-1" />
            {date}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        {excerpt && (
          <p className="text-indigo-700/70 text-sm mb-4 line-clamp-2">
            {excerpt}
          </p>
        )}
        <ul className="space-y-3 mb-4">
          {topics.slice(0, 2).map((topic, index) => (
            <li key={index} className="flex gap-3">
              <CircleDot className={`h-5 w-5 ${getTopicIconColor(category)} mt-0.5 flex-shrink-0`} />
              <p className="text-indigo-700/70 text-sm">{topic}</p>
            </li>
          ))}
          {topics.length > 2 && (
            <li className="text-sm text-indigo-500 pl-8 italic">
              +{topics.length - 2} more topics
            </li>
          )}
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
