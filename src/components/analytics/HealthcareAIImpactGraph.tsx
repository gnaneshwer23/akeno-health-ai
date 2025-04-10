
import React from 'react';
import { Brain, Dna, Flask, Stethoscope, Database } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import '@/styles/analytics/impact-graph.css';

// Define the impact data structure
interface ImpactData {
  category: string;
  score: number;
  icon: React.ReactNode;
  color: string;
}

const HealthcareAIImpactGraph: React.FC = () => {
  // Data for the impact scores
  const impactData: ImpactData[] = [
    {
      category: 'Disease Prediction',
      score: 85,
      icon: <Brain className="h-8 w-8 text-cyan-400" />,
      color: 'from-cyan-600 to-cyan-300'
    },
    {
      category: 'Precision Medicine',
      score: 92,
      icon: <Dna className="h-8 w-8 text-purple-400" />,
      color: 'from-purple-600 to-purple-300'
    },
    {
      category: 'Drug Discovery',
      score: 78,
      icon: <Flask className="h-8 w-8 text-blue-400" />,
      color: 'from-blue-600 to-blue-300'
    },
    {
      category: 'AI Clinical Decision',
      score: 88,
      icon: <Stethoscope className="h-8 w-8 text-rose-400" />,
      color: 'from-rose-500 to-rose-300'
    },
    {
      category: 'Data-Driven Healthcare',
      score: 83,
      icon: <Database className="h-8 w-8 text-amber-400" />,
      color: 'from-amber-600 to-amber-300'
    }
  ];

  return (
    <Card className="w-full overflow-hidden bg-slate-900 text-white border-slate-700">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
          Healthcare AI Impact Assessment
        </CardTitle>
        <CardDescription className="text-slate-400">
          Measuring the transformative potential across healthcare domains
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative h-[400px] flex items-end justify-between px-2 pt-8 pb-16">
          {/* Y-axis label */}
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 transform -rotate-90 text-sm font-medium text-slate-400">
            Impact Score
          </div>
          
          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between pt-8 pb-16">
            {[0, 25, 50, 75, 100].reverse().map((value) => (
              <div key={value} className="relative w-full h-px bg-slate-800">
                <span className="absolute -left-7 -translate-y-1/2 text-xs text-slate-500">
                  {value}
                </span>
              </div>
            ))}
          </div>
          
          {/* Bars */}
          {impactData.map((item, index) => (
            <div 
              key={index} 
              className="relative flex flex-col items-center w-1/6 min-w-[80px] group"
              style={{zIndex: 10 - index}} // Ensure hover states work properly
            >
              {/* Bar */}
              <div className="relative w-full flex justify-center">
                <div 
                  className={`w-16 md:w-24 bg-gradient-to-t ${item.color} rounded-t-lg shadow-lg impact-bar hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] impact-bar-animation`}
                  style={{ 
                    height: `${item.score}%`,
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  {/* Score value (shown on hover) */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Score: {item.score}
                  </div>
                </div>
              </div>
              
              {/* Icon */}
              <div 
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-slate-800 border border-slate-700 shadow-md impact-icon-animation"
                style={{ 
                  animationDelay: `${index * 0.3}s`
                }}
              >
                {item.icon}
              </div>
              
              {/* Category label - wider container for text */}
              <div className="absolute bottom-[-4rem] w-32 md:w-40 text-center pt-4">
                <div className="text-white text-xs md:text-sm font-medium leading-tight">
                  {item.category}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Legend with subtle divider */}
        <div className="mt-16 pt-4 border-t border-slate-800">
          <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-400">
            {impactData.map((item, index) => (
              <div key={index} className="flex items-center">
                <span className={`w-3 h-3 bg-gradient-to-t ${item.color} rounded-sm mr-2`}></span>
                {item.category}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthcareAIImpactGraph;
