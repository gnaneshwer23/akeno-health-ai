
import React from 'react';
import { ClipboardList, Atom, BarChart4 } from 'lucide-react';

export const ClinicalTrialsDiagram = () => (
  <div className="flex flex-col items-center">
    <div className="w-full h-40 relative">
      {/* Clinical trial optimization visualization */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-32">
          {/* Main framework */}
          <div className="h-32 w-full border-2 border-indigo-300 rounded-lg bg-indigo-50 flex flex-col">
            {/* Header */}
            <div className="h-8 bg-indigo-200 rounded-t-md flex items-center justify-center">
              <span className="text-xs font-medium text-indigo-800">Trial Optimization</span>
            </div>
            
            {/* Content area */}
            <div className="flex-1 p-2 relative">
              {/* Patient cohort visualization */}
              <div className="absolute top-2 left-2 right-2 flex space-x-1">
                <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                <div className="h-3 w-3 rounded-full bg-purple-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
                <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                <div className="h-3 w-3 rounded-full bg-purple-400"></div>
              </div>
              
              {/* Treatment paths visualization */}
              <div className="absolute top-7 left-2 right-2">
                <div className="h-12 w-full flex">
                  {/* Path A */}
                  <div className="flex-1 flex flex-col items-center">
                    <div className="h-2 w-full bg-blue-200 mb-1"></div>
                    <div className="h-2 w-full bg-blue-300 mb-1"></div>
                    <div className="h-2 w-full bg-blue-400 mb-1"></div>
                    <div className="h-2 w-full bg-green-500"></div>
                  </div>
                  
                  {/* Path B */}
                  <div className="flex-1 flex flex-col items-center mx-1">
                    <div className="h-2 w-full bg-purple-200 mb-1"></div>
                    <div className="h-2 w-full bg-purple-300 mb-1"></div>
                    <div className="h-2 w-full bg-red-400 mb-1"></div>
                    <div className="h-2 w-full bg-red-500"></div>
                  </div>
                  
                  {/* Path C - optimized path */}
                  <div className="flex-1 flex flex-col items-center relative">
                    <div className="h-2 w-full bg-green-200 mb-1"></div>
                    <div className="h-2 w-full bg-green-300 mb-1"></div>
                    <div className="h-2 w-full bg-green-400 mb-1"></div>
                    <div className="h-2 w-full bg-green-500"></div>
                    <div className="absolute -right-2 -top-1 h-4 w-4 rounded-full bg-green-100 border border-green-500 flex items-center justify-center">
                      <span className="text-[8px] text-green-700">✓</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Success metrics */}
              <div className="absolute bottom-1 left-2 right-2 flex justify-between items-center">
                <BarChart4 size={14} className="text-indigo-600" />
                <div className="text-[8px] font-medium text-indigo-800">Efficacy +68%</div>
              </div>
            </div>
          </div>
          
          {/* Quantum computing process indicator */}
          <div className="absolute -right-4 -bottom-2 h-6 w-6 rounded-full bg-indigo-100 border border-indigo-400 flex items-center justify-center">
            <Atom size={14} className="text-indigo-600" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <div className="bg-indigo-600/10 px-3 py-1 rounded-lg text-xs font-medium text-indigo-800 flex items-center">
          <ClipboardList size={12} className="mr-1" /> Quantum-Optimized Trials
        </div>
      </div>
    </div>
    <span className="text-sm font-medium text-indigo-800 mt-2 text-center">
      Trial simulation & optimization<br/>Reduced failure rates & development time
    </span>
  </div>
);
