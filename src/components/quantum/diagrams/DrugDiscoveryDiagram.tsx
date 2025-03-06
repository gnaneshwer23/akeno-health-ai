
import React from 'react';
import { Atom, FlaskConical, Pill, MicroscopeIcon, Syringe, Zap } from 'lucide-react';

export const DrugDiscoveryDiagram = () => (
  <div className="flex flex-col items-center">
    <div className="w-full h-40 relative">
      {/* Central atom with electron orbits */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <Atom size={32} className="text-blue-600" />
          {/* Electron orbits with molecules */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute w-28 h-28 rounded-full border border-dashed border-indigo-300 animate-spin" style={{animationDuration: '20s'}} />
            <div className="absolute w-20 h-20 rounded-full border border-dashed border-blue-300 animate-spin" style={{animationDuration: '15s', transform: 'rotate(45deg)'}} />
            <div className="absolute w-12 h-12 rounded-full border border-dashed border-purple-300 animate-spin" style={{animationDuration: '10s', transform: 'rotate(90deg)'}} />
          </div>
          
          {/* Molecules at orbit points */}
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
            <FlaskConical size={16} className="text-purple-600" />
          </div>
          <div className="absolute top-2 -right-14">
            <Pill size={16} className="text-green-600" />
          </div>
          <div className="absolute bottom-2 -right-12">
            <MicroscopeIcon size={16} className="text-amber-600" />
          </div>
          <div className="absolute bottom-2 -left-12">
            <Syringe size={16} className="text-red-600" />
          </div>
        </div>
      </div>
      
      {/* Processing arrows and quantum notes */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <div className="bg-blue-600/10 px-3 py-1 rounded-lg text-xs font-medium text-blue-800 flex items-center">
          <Zap size={12} className="mr-1" /> Quantum Acceleration
        </div>
      </div>
    </div>
    <span className="text-sm font-medium text-indigo-800 mt-2 text-center">
      Quantum-powered molecular modeling<br/>10,000x faster simulations
    </span>
  </div>
);
