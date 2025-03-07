
import React from 'react';
import { Bot } from 'lucide-react';

const TypingIndicator = () => {
  return (
    <div className="flex items-start mt-5">
      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-health-primary/10 flex items-center justify-center">
        <Bot size={16} className="text-health-primary" />
      </div>
      <div className="mx-2 px-4 py-2 bg-gray-100 rounded-full">
        <div className="flex space-x-1 items-center">
          <div className="w-2 h-2 bg-health-primary rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-health-primary rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
          <div className="w-2 h-2 bg-health-primary rounded-full animate-pulse" style={{ animationDelay: '600ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
