
import React from 'react';
import { ArrowDownIcon, DatabaseIcon, BrainCircuitIcon, HeartPulseIcon, ShieldIcon, SparklesIcon } from 'lucide-react';

const AkenoServiceFlowMobile = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="space-y-8">
        {/* Data Collection */}
        <div className="bg-white rounded-lg shadow-md p-4 border border-health-primary/10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <DatabaseIcon size={20} />
            </div>
            <h3 className="font-medium text-lg">Data Collection</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Securely gathering your health data from wearables, medical records, and genomic information
          </p>
        </div>
        
        <div className="flex justify-center">
          <ArrowDownIcon className="text-health-primary" />
        </div>
        
        {/* AI Processing */}
        <div className="bg-white rounded-lg shadow-md p-4 border border-health-primary/10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
              <BrainCircuitIcon size={20} />
            </div>
            <h3 className="font-medium text-lg">AI Processing</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Advanced algorithms analyze patterns, correlations, and early warning signs in your health data
          </p>
        </div>
        
        <div className="flex justify-center">
          <ArrowDownIcon className="text-health-primary" />
        </div>
        
        {/* Digital Twin */}
        <div className="bg-white rounded-lg shadow-md p-4 border border-health-primary/10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <SparklesIcon size={20} />
            </div>
            <h3 className="font-medium text-lg">Digital Twin</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Creating a virtual model of your health to simulate treatments and predict outcomes
          </p>
        </div>
        
        <div className="flex justify-center">
          <ArrowDownIcon className="text-health-primary" />
        </div>
        
        {/* Personalized Health */}
        <div className="bg-white rounded-lg shadow-md p-4 border border-health-primary/10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
              <HeartPulseIcon size={20} />
            </div>
            <h3 className="font-medium text-lg">Personalized Health</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Delivering tailored insights and recommendations for improving your health outcomes
          </p>
        </div>
        
        <div className="flex justify-center">
          <ArrowDownIcon className="text-health-primary" />
        </div>
        
        {/* Security & Privacy */}
        <div className="bg-white rounded-lg shadow-md p-4 border border-health-primary/10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
              <ShieldIcon size={20} />
            </div>
            <h3 className="font-medium text-lg">Security & Privacy</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Your data is protected with enterprise-grade encryption and blockchain technology
          </p>
        </div>
      </div>
    </div>
  );
};

export default AkenoServiceFlowMobile;
