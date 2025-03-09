
import React from 'react';
import { ChevronRight } from 'lucide-react';

const FlowConnector = () => {
  return (
    <div className="flow-connector">
      <div className="flow-animation">
        <div className="flow-dot"></div>
        <div className="flow-dot"></div>
        <div className="flow-dot"></div>
        <ChevronRight className="flow-arrow-end" />
      </div>
    </div>
  );
};

export default FlowConnector;
