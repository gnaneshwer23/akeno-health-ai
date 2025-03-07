
import React from 'react';

const MetabolicHealthCard = () => (
  <div className="bg-white/80 rounded-xl p-4 shadow-sm">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
      <span className="font-medium text-sm">Metabolic Health</span>
    </div>
    <div className="text-xl font-bold">87%</div>
    <div className="mt-1 text-xs text-gray-500">Optimal Range</div>
  </div>
);

export default MetabolicHealthCard;
