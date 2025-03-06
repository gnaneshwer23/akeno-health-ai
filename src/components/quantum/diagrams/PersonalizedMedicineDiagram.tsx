
import React from 'react';
import { User, Pill } from 'lucide-react';

export const PersonalizedMedicineDiagram = () => (
  <div className="flex flex-col items-center">
    <div className="w-full h-40 relative">
      {/* Patient silhouette with overlaid layers */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Patient silhouette background */}
          <div className="w-20 h-36 bg-indigo-50 rounded-full mx-auto opacity-50"></div>
          
          {/* Central patient icon */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
            <User size={32} className="text-indigo-600" />
          </div>
          
          {/* Data layers with glow effects */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-28 h-28 rounded-full border-2 border-dashed border-blue-300 opacity-60 animate-pulse"></div>
            <div className="w-24 h-24 rounded-full border-2 border-dashed border-green-300 opacity-60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" 
                 style={{animationDelay: '0.5s'}}></div>
            <div className="w-20 h-20 rounded-full border-2 border-dashed border-purple-300 opacity-60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
                 style={{animationDelay: '1s'}}></div>
          </div>
          
          {/* Data point nodes around patient */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <div className="h-6 w-16 bg-blue-100 border border-blue-300 rounded-md flex items-center justify-center">
              <span className="text-[8px] font-medium text-blue-700">Genomic Data</span>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <div className="h-6 w-16 bg-green-100 border border-green-300 rounded-md flex items-center justify-center">
              <span className="text-[8px] font-medium text-green-700">Medical History</span>
            </div>
          </div>
          
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <div className="h-6 w-16 bg-purple-100 border border-purple-300 rounded-md flex items-center justify-center">
              <span className="text-[8px] font-medium text-purple-700">Biomarkers</span>
            </div>
          </div>
          
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <div className="h-6 w-16 bg-amber-100 border border-amber-300 rounded-md flex items-center justify-center">
              <span className="text-[8px] font-medium text-amber-700">Lifestyle</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Treatment recommendation label */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <div className="bg-indigo-600/10 px-3 py-1 rounded-lg text-xs font-medium text-indigo-800 flex items-center">
          <Pill size={12} className="mr-1" /> Optimized Treatment
        </div>
      </div>
    </div>
    <span className="text-sm font-medium text-indigo-800 mt-2 text-center">
      Quantum-enhanced precision matching<br/>Patient-specific treatment optimization
    </span>
  </div>
);
