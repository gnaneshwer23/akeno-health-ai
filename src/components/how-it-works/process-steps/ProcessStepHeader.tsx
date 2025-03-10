
import React from 'react';
import { Workflow } from 'lucide-react';

const ProcessStepHeader: React.FC = () => {
  return (
    <div className="text-center mb-16">
      <span className="inline-flex items-center px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-600 font-medium gap-2 border border-indigo-200/50 shadow-sm">
        <Workflow size={16} className="text-indigo-500" />
        <span>Our Process</span>
      </span>
      
      <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
        Our <span className="bg-gradient-to-br from-indigo-600 to-purple-600 bg-clip-text text-transparent">AI-Driven</span> Healthcare Process
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        How we combine AI, genomics, and real-time monitoring to revolutionize healthcare
      </p>
    </div>
  );
};

export default ProcessStepHeader;
