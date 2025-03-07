
import React from 'react';

const MetabolicHealthCard = () => (
  <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-4 shadow-sm border border-green-300/50 transition-all duration-300 hover:shadow-md">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
      <span className="font-medium text-sm text-green-800">Metabolic Health</span>
    </div>
    <div className="text-xl font-bold text-green-900">87%</div>
    <div className="mt-1 text-xs text-green-700/80">Optimal Range</div>
  </div>
);

export default MetabolicHealthCard;
