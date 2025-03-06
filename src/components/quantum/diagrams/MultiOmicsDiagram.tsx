
import React from 'react';
import { BrainCircuit, Network } from 'lucide-react';

export const MultiOmicsDiagram = () => (
  <div className="flex flex-col items-center">
    <div className="w-full h-40 relative">
      {/* Network of interconnected data nodes */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-32 h-32">
          {/* Central brain node */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <BrainCircuit size={28} className="text-purple-600" />
          </div>
          
          {/* Data nodes */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
            <div className="h-8 w-20 bg-blue-100 border border-blue-300 rounded-md flex items-center justify-center">
              <span className="text-[10px] font-medium text-blue-700">Genomics</span>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
            <div className="h-8 w-20 bg-green-100 border border-green-300 rounded-md flex items-center justify-center">
              <span className="text-[10px] font-medium text-green-700">Proteomics</span>
            </div>
          </div>
          
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
            <div className="h-8 w-20 bg-amber-100 border border-amber-300 rounded-md flex items-center justify-center">
              <span className="text-[10px] font-medium text-amber-700">Metabolomics</span>
            </div>
          </div>
          
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
            <div className="h-8 w-20 bg-red-100 border border-red-300 rounded-md flex items-center justify-center">
              <span className="text-[10px] font-medium text-red-700">Transcriptomics</span>
            </div>
          </div>
          
          {/* Connection lines with animation */}
          <svg className="absolute inset-0 z-0" width="100%" height="100%" viewBox="0 0 128 128">
            <path d="M64,16 L64,64" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="2" strokeDasharray="3 2">
              <animate attributeName="stroke-dashoffset" from="5" to="0" dur="2s" repeatCount="indefinite" />
            </path>
            <path d="M64,112 L64,64" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="2" strokeDasharray="3 2">
              <animate attributeName="stroke-dashoffset" from="5" to="0" dur="2s" repeatCount="indefinite" />
            </path>
            <path d="M16,64 L64,64" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="2" strokeDasharray="3 2">
              <animate attributeName="stroke-dashoffset" from="5" to="0" dur="2s" repeatCount="indefinite" />
            </path>
            <path d="M112,64 L64,64" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="2" strokeDasharray="3 2">
              <animate attributeName="stroke-dashoffset" from="5" to="0" dur="2s" repeatCount="indefinite" />
            </path>
          </svg>
        </div>
      </div>
      
      {/* Quantum computing label */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <div className="bg-purple-600/10 px-3 py-1 rounded-lg text-xs font-medium text-purple-800 flex items-center">
          <Network size={12} className="mr-1" /> Quantum Pattern Recognition
        </div>
      </div>
    </div>
    <span className="text-sm font-medium text-indigo-800 mt-2 text-center">
      Integrated multi-dimensional analysis<br/>Correlation across biological datasets
    </span>
  </div>
);
