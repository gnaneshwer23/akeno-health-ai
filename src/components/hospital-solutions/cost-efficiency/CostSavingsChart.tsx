
import React from 'react';

const CostSavingsChart = () => (
  <div className="bg-health-light/20 rounded-lg p-4">
    <div className="flex justify-between items-center mb-4">
      <h4 className="text-sm font-medium">Cost Savings by Department</h4>
      <div className="flex items-center gap-2">
        <span className="flex items-center text-xs">
          <span className="w-2 h-2 bg-health-primary rounded-full mr-1"></span>Before AI
        </span>
        <span className="flex items-center text-xs">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>After AI
        </span>
      </div>
    </div>
    
    <div className="space-y-3">
      <div className="space-y-1">
        <div className="flex justify-between text-xs">
          <span>Administration</span>
          <span className="font-medium">-68%</span>
        </div>
        <div className="flex h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="bg-health-primary w-full"></div>
        </div>
        <div className="flex h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="bg-green-500 w-[32%]"></div>
        </div>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between text-xs">
          <span>Emergency Dept.</span>
          <span className="font-medium">-42%</span>
        </div>
        <div className="flex h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="bg-health-primary w-full"></div>
        </div>
        <div className="flex h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="bg-green-500 w-[58%]"></div>
        </div>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between text-xs">
          <span>ICU</span>
          <span className="font-medium">-38%</span>
        </div>
        <div className="flex h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="bg-health-primary w-full"></div>
        </div>
        <div className="flex h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="bg-green-500 w-[62%]"></div>
        </div>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between text-xs">
          <span>Pharmacy</span>
          <span className="font-medium">-45%</span>
        </div>
        <div className="flex h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="bg-health-primary w-full"></div>
        </div>
        <div className="flex h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="bg-green-500 w-[55%]"></div>
        </div>
      </div>
    </div>
  </div>
);

export default CostSavingsChart;
