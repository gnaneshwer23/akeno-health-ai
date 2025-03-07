
import React from 'react';

const LungFunctionCard = () => (
  <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl p-4 shadow-sm border border-yellow-300/50 transition-all duration-300 hover:shadow-md">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"></div>
      <span className="font-medium text-sm text-yellow-800">Lung Function</span>
    </div>
    <div className="text-xl font-bold text-yellow-900">67%</div>
    <div className="mt-1 text-xs text-yellow-700/80">Moderate Concern</div>
  </div>
);

export default LungFunctionCard;
