
import React from 'react';
import { ScanLine, BrainCircuit } from 'lucide-react';

export const AIDiagnosticsDiagram = () => (
  <div className="flex flex-col items-center">
    <div className="w-full h-40 relative">
      {/* Medical scan with AI analysis overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Image frame */}
        <div className="w-32 h-32 border-2 border-blue-300 rounded-md bg-blue-50 relative overflow-hidden">
          {/* Scan graphic - simplified brain scan look */}
          <div className="absolute inset-2 bg-black/5 rounded">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-blue-200/50 relative">
                <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-blue-300/70"></div>
                <div className="absolute bottom-1/4 right-1/4 w-4 h-4 rounded-full bg-red-300/70 animate-pulse"></div>
              </div>
            </div>
          </div>
          
          {/* AI analysis overlay */}
          <div className="absolute inset-0">
            {/* Scanning line animation */}
            <div className="absolute left-0 right-0 h-0.5 bg-green-400 animate-[scan_3s_ease-in-out_infinite]" 
                 style={{"--scan-y": "0%", "--scan-y-end": "100%"} as any}></div>
            
            {/* Target markers */}
            <div className="absolute top-1/4 left-1/4 w-8 h-8">
              <div className="w-full h-full border border-green-400 rounded-sm opacity-70"></div>
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-green-400"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-green-400"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-green-400"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-green-400"></div>
            </div>
            
            {/* Alert marker */}
            <div className="absolute bottom-1/4 right-1/4 w-6 h-6">
              <div className="w-full h-full border border-red-400 rounded-sm opacity-70 animate-pulse"></div>
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-red-400"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-red-400"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-red-400"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-red-400"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Data analysis and prediction labels */}
      <div className="absolute top-1 left-0 right-0 flex justify-center">
        <div className="bg-blue-600/10 px-3 py-1 rounded-lg text-xs font-medium text-blue-800 flex items-center">
          <ScanLine size={12} className="mr-1" /> Enhanced Imaging
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <div className="bg-green-600/10 px-3 py-1 rounded-lg text-xs font-medium text-green-800 flex items-center">
          <BrainCircuit size={12} className="mr-1" /> Quantum AI Analysis
        </div>
      </div>
    </div>
    <span className="text-sm font-medium text-indigo-800 mt-2 text-center">
      Pattern recognition at quantum scale<br/>Early disease detection & characterization
    </span>
  </div>
);
