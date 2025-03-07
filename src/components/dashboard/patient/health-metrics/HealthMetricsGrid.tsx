
import React from 'react';
import { Heart, Brain, Activity } from 'lucide-react';
import MetricCard from './MetricCard';

const HealthMetricsGrid = () => {
  const heartMetrics = [
    { label: 'Resting Heart Rate', value: '68 bpm', progress: 65 },
    { label: 'Blood Pressure', value: '118/78 mmHg', progress: 80 },
    { label: 'Heart Rate Variability', value: '62 ms', progress: 72 }
  ];

  const cognitiveMetrics = [
    { label: 'Sleep Quality', value: '7.4 hrs', progress: 78 },
    { label: 'Stress Level', value: 'Moderate', progress: 55 },
    { label: 'Focus & Attention', value: 'Good', progress: 75 }
  ];

  const metabolicMetrics = [
    { label: 'Blood Glucose', value: '92 mg/dL', progress: 90 },
    { label: 'Cholesterol', value: '175 mg/dL', progress: 85 },
    { label: 'Body Fat', value: '18.5%', progress: 88 }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <MetricCard
        title="Heart Health"
        icon={<Heart className="h-5 w-5 text-red-500" />}
        status="Optimal"
        statusColor="text-green-600"
        metrics={heartMetrics}
      />
      
      <MetricCard
        title="Cognitive Health"
        icon={<Brain className="h-5 w-5 text-purple-500" />}
        status="Good"
        statusColor="text-yellow-600"
        metrics={cognitiveMetrics}
      />
      
      <MetricCard
        title="Metabolic Health"
        icon={<Activity className="h-5 w-5 text-blue-500" />}
        status="Excellent"
        statusColor="text-green-600"
        metrics={metabolicMetrics}
      />
    </div>
  );
};

export default HealthMetricsGrid;
