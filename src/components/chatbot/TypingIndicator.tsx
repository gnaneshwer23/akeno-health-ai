
import React from 'react';
import { Bot } from 'lucide-react';

const TypingIndicator = () => {
  return (
    <div className="flex gap-3 mt-3 items-start">
      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-health-primary/20 flex items-center justify-center">
        <Bot size={16} className="text-health-primary" />
      </div>
      <div className="flex-1 bg-white p-3 rounded-lg shadow-sm max-w-[60%]">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-health-primary/60 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-health-primary/60 rounded-full animate-pulse delay-100"></div>
          <div className="w-2 h-2 bg-health-primary/60 rounded-full animate-pulse delay-200"></div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
