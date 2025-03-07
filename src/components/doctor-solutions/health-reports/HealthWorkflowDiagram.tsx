
import React from 'react';
import { ArrowRight, Users, Brain, ShieldAlert, Activity } from 'lucide-react';

const HealthWorkflowDiagram = () => (
  <div className="bg-white/80 rounded-xl p-3 shadow-sm mb-2">
    <div className="text-sm font-medium mb-3 text-center text-health-primary">AI Health Assessment Workflow</div>
    <div className="flex items-center justify-between">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-health-primary/10 flex items-center justify-center mb-1">
          <Users size={20} className="text-health-primary" />
        </div>
        <span className="text-xs text-center">Patient Data</span>
      </div>
      <ArrowRight size={14} className="text-gray-400" />
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-health-primary/10 flex items-center justify-center mb-1">
          <Brain size={20} className="text-health-primary" />
        </div>
        <span className="text-xs text-center">AI Analysis</span>
      </div>
      <ArrowRight size={14} className="text-gray-400" />
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-health-primary/10 flex items-center justify-center mb-1">
          <ShieldAlert size={20} className="text-health-primary" />
        </div>
        <span className="text-xs text-center">Risk Assessment</span>
      </div>
      <ArrowRight size={14} className="text-gray-400" />
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-health-primary/20 flex items-center justify-center mb-1">
          <Activity size={20} className="text-health-primary" />
        </div>
        <span className="text-xs text-center">Care Plan</span>
      </div>
    </div>
  </div>
);

export default HealthWorkflowDiagram;
