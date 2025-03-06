
import React from 'react';
import { Syringe, ChevronRight } from 'lucide-react';

const AIRecommendation = () => {
  return (
    <div className="bg-health-primary/10 p-4 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm font-medium flex items-center gap-2">
          <Syringe size={16} className="text-health-primary" />
          AI Recommendation
        </h4>
        <span className="text-xs bg-health-primary/20 text-health-primary px-2 py-0.5 rounded-full">
          High Confidence
        </span>
      </div>
      <p className="text-sm mb-3">
        High probability of early-stage pneumonia detected. Recommend immediate antibiotic treatment with Azithromycin 500mg daily for 5 days and follow-up chest X-ray in 2 weeks.
      </p>
      <div className="flex items-center justify-between text-xs text-health-primary font-medium">
        <span>View detailed report</span>
        <ChevronRight size={14} />
      </div>
    </div>
  );
};

export default AIRecommendation;
