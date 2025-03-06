
import React from 'react';
import DiagnosticFeaturesList from './DiagnosticFeaturesList';
import DiagnosticDashboard from './DiagnosticDashboard';

const AIDiagnostics = () => {
  return (
    <section className="py-20 px-6 bg-health-light/30 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium">
              Solution 1
            </div>
            
            <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
              AI-Assisted Diagnostics & Clinical Decision Support
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Our advanced AI diagnostic systems analyze medical data to provide accurate diagnoses, identify rare conditions, and recommend personalized treatment plans.
            </p>
            
            <DiagnosticFeaturesList />
            
            <div className="p-4 bg-health-primary/5 border border-health-primary/10 rounded-lg">
              <p className="font-medium text-health-dark">Outcome:</p>
              <p className="text-muted-foreground">AI-assisted diagnostics help doctors achieve faster, more accurate, and data-driven diagnoses, leading to improved patient outcomes and more effective treatments.</p>
            </div>
          </div>
          
          <DiagnosticDashboard />
        </div>
      </div>
    </section>
  );
};

export default AIDiagnostics;
