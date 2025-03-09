
import React from 'react';
import DiagnosticFeaturesList from './DiagnosticFeaturesList';
import DiagnosticDashboard from './DiagnosticDashboard';

const AIDiagnostics = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white/80 p-8 rounded-xl shadow-lg border border-health-primary/20 relative z-10">
            <div className="absolute -z-10 -top-10 -left-10 h-40 w-40 bg-health-primary/10 rounded-full blur-xl"></div>
            
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-health-primary/20 to-health-secondary/20 text-health-primary font-medium">
              Solution 1
            </div>
            
            <h2 className="text-3xl md:text-4xl font-medium bg-gradient-to-r from-health-dark to-health-primary bg-clip-text text-transparent mb-6">
              AI-Powered Clinical Decision Support
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Akeno Health enhances your clinical expertise by providing real-time, evidence-based AI assistance that helps reduce diagnostic errors, save time, and enhance clinical accuracy.
            </p>
            
            <DiagnosticFeaturesList />
            
            <div className="p-6 bg-gradient-to-br from-health-primary/10 to-health-accent/10 border border-health-primary/10 rounded-lg shadow-inner mt-8">
              <p className="font-medium text-health-dark mb-2">Outcome:</p>
              <p className="text-muted-foreground">Reduce diagnostic errors, save time, and enhance clinical accuracy with AI-powered insights that support your medical expertise.</p>
            </div>
          </div>
          
          <DiagnosticDashboard />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 h-64 w-64 bg-health-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 h-80 w-80 bg-health-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default AIDiagnostics;
