
import React from 'react';

const LungFunctionCard = () => (
  <div className="bg-white/80 rounded-xl p-4 shadow-sm">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
      <span className="font-medium text-sm">Lung Function</span>
    </div>
    <div className="text-xl font-bold">67%</div>
    <div className="mt-1 text-xs text-gray-500">Moderate Concern</div>
  </div>
);

export default LungFunctionCard;
