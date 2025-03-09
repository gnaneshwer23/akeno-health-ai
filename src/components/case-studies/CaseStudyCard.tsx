
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CaseStudyCardProps {
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
  slug?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  challenge,
  solution,
  outcome,
  slug = "case-studies/detail"
}) => {
  return (
    <Card className="h-full shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-gradient-to-br from-white to-indigo-50 group border-t-4 border-t-purple-500 border-r border-r-indigo-200 border-l border-l-indigo-200 border-b border-b-indigo-200 rounded-xl">
      <CardHeader className="bg-gradient-to-r from-purple-50 to-transparent">
        <CardTitle className="text-xl font-bold text-indigo-900">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pb-2">
        <div className="space-y-2">
          <h4 className="font-semibold text-indigo-900 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-md">1</span>
            Challenge:
          </h4>
          <p className="text-indigo-700/70 pl-8">{challenge}</p>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold text-indigo-900 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-md">2</span>
            Solution:
          </h4>
          <p className="text-indigo-700/70 pl-8">{solution}</p>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold text-indigo-900 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 text-white shadow-md">3</span>
            Outcome:
          </h4>
          <p className="text-indigo-700/70 pl-8">{outcome}</p>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button 
          variant="ghost" 
          size="sm" 
          className="ml-auto text-purple-600 group-hover:text-indigo-700 group-hover:bg-indigo-100/50 transition-all"
          asChild
        >
          <Link to={`/${slug}`}>
            View Details
            <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CaseStudyCard;
