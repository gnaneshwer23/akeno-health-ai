
import React from 'react';

const PreventionRecommendationsCard = () => (
  <div className="mt-auto bg-health-primary/10 p-4 rounded-lg">
    <div className="text-sm font-medium mb-2">AI Prevention Recommendations</div>
    <ul className="text-sm space-y-1 list-disc list-inside">
      <li>Statin therapy consideration (Rosuvastatin 10mg)</li>
      <li>Monthly breast examinations</li>
      <li>Annual mammogram starting age 35</li>
      <li>Mediterranean diet plan</li>
    </ul>
  </div>
);

export default PreventionRecommendationsCard;
