
import React from 'react';
import { Database, BrainCircuit, HeartPulse, Shield, Sparkles, Files, Cpu, Activity, Smartphone } from 'lucide-react';

const AkenoServiceFlowDiagram = () => {
  return (
    <div className="w-full relative">
      <div className="bg-white rounded-xl shadow-lg p-8 border border-health-primary/10">
        <div className="grid grid-cols-5 gap-4">
          {/* DATA COLLECTION */}
          <div className="relative">
            <div className="p-4 bg-blue-50 rounded-lg h-full border border-blue-100">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-3">
                  <Database size={24} />
                </div>
                <h3 className="font-medium text-blue-700 mb-2 text-center">Data Collection</h3>
                <div className="space-y-2 text-sm text-center">
                  <div className="p-2 bg-white rounded-md border border-blue-100 shadow-sm flex items-center gap-1.5">
                    <Activity size={14} className="text-blue-500" />
                    <span className="text-xs">Wearables</span>
                  </div>
                  <div className="p-2 bg-white rounded-md border border-blue-100 shadow-sm flex items-center gap-1.5">
                    <Files size={14} className="text-blue-500" />
                    <span className="text-xs">Medical Records</span>
                  </div>
                  <div className="p-2 bg-white rounded-md border border-blue-100 shadow-sm flex items-center gap-1.5">
                    <Cpu size={14} className="text-blue-500" />
                    <span className="text-xs">Genetic Data</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
              <div className="w-8 h-8 bg-health-primary rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </div>
          </div>
          
          {/* AI PROCESSING */}
          <div className="relative">
            <div className="p-4 bg-purple-50 rounded-lg h-full border border-purple-100">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-3">
                  <BrainCircuit size={24} />
                </div>
                <h3 className="font-medium text-purple-700 mb-2 text-center">AI Processing</h3>
                <div className="space-y-2 text-sm text-center">
                  <p className="text-xs px-2">Advanced algorithms analyze patterns and correlations in your health data</p>
                  <div className="p-2 bg-white rounded-md border border-purple-100 shadow-sm">
                    <span className="text-xs">Pattern Recognition</span>
                  </div>
                  <div className="p-2 bg-white rounded-md border border-purple-100 shadow-sm">
                    <span className="text-xs">Risk Assessment</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
              <div className="w-8 h-8 bg-health-primary rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </div>
          </div>
          
          {/* DIGITAL TWIN */}
          <div className="relative">
            <div className="p-4 bg-green-50 rounded-lg h-full border border-green-100">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-3">
                  <Sparkles size={24} />
                </div>
                <h3 className="font-medium text-green-700 mb-2 text-center">Digital Twin</h3>
                <div className="space-y-2 text-sm text-center">
                  <p className="text-xs px-2">Virtual model of your health to simulate treatments</p>
                  <div className="p-2 bg-white rounded-md border border-green-100 shadow-sm">
                    <span className="text-xs">Treatment Simulation</span>
                  </div>
                  <div className="p-2 bg-white rounded-md border border-green-100 shadow-sm">
                    <span className="text-xs">Predictive Modeling</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
              <div className="w-8 h-8 bg-health-primary rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </div>
          </div>
          
          {/* PERSONALIZED HEALTH */}
          <div className="relative">
            <div className="p-4 bg-red-50 rounded-lg h-full border border-red-100">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-3">
                  <HeartPulse size={24} />
                </div>
                <h3 className="font-medium text-red-700 mb-2 text-center">Personalized Health</h3>
                <div className="space-y-2 text-sm text-center">
                  <div className="p-2 bg-white rounded-md border border-red-100 shadow-sm flex items-center justify-center gap-1.5">
                    <Smartphone size={14} className="text-red-500" />
                    <span className="text-xs">Mobile Dashboard</span>
                  </div>
                  <div className="p-2 bg-white rounded-md border border-red-100 shadow-sm">
                    <span className="text-xs">Tailored Recommendations</span>
                  </div>
                  <div className="p-2 bg-white rounded-md border border-red-100 shadow-sm">
                    <span className="text-xs">Early Warning System</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
              <div className="w-8 h-8 bg-health-primary rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </div>
          </div>
          
          {/* SECURITY & PRIVACY */}
          <div>
            <div className="p-4 bg-amber-50 rounded-lg h-full border border-amber-100">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mb-3">
                  <Shield size={24} />
                </div>
                <h3 className="font-medium text-amber-700 mb-2 text-center">Security & Privacy</h3>
                <div className="space-y-2 text-sm text-center">
                  <p className="text-xs px-2">Your data is protected with enterprise-grade security</p>
                  <div className="p-2 bg-white rounded-md border border-amber-100 shadow-sm">
                    <span className="text-xs">Blockchain Technology</span>
                  </div>
                  <div className="p-2 bg-white rounded-md border border-amber-100 shadow-sm">
                    <span className="text-xs">HIPAA Compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Connection lines - Would be better with SVG but this works for now */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/2 left-[20%] right-[20%] h-0.5 bg-health-primary/30 transform -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default AkenoServiceFlowDiagram;
