
import React from 'react';
import { Brain } from 'lucide-react';
import DiagnosticProcessList from './DiagnosticProcessList';
import MedicalImagingCard from './MedicalImagingCard';
import AIAnalysisCard from './AIAnalysisCard';
import AIRecommendation from './AIRecommendation';

const DiagnosticDashboard = () => {
  return (
    <div className="relative">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-health-primary/10">
        <div className="border-b border-gray-100">
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center gap-3">
              <div className="bg-health-primary/10 p-2 rounded-full">
                <Brain size={24} className="text-health-primary" />
              </div>
              <div>
                <h3 className="font-medium text-health-dark">AI Diagnostic Assistant</h3>
                <p className="text-xs text-muted-foreground">Advanced medical analysis platform</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-health-primary bg-health-primary/10 px-2 py-1 rounded-full">
                99.2% Accuracy
              </span>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                Live Analysis
              </span>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <DiagnosticProcessList />
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <MedicalImagingCard />
            <AIAnalysisCard />
          </div>
          
          <AIRecommendation />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -z-10 -top-6 -right-6 h-32 w-32 bg-health-primary/20 rounded-full blur-xl"></div>
      <div className="absolute -z-10 -bottom-6 -left-6 h-32 w-32 bg-health-secondary/20 rounded-full blur-xl"></div>
    </div>
  );
};

export default DiagnosticDashboard;
