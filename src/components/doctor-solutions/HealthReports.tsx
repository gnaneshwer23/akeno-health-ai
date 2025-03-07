
import React from 'react';
import HealthReportFeaturesList from './health-reports/HealthReportFeaturesList';
import PatientHealthDashboard from './health-reports/PatientHealthDashboard';
import HealthReportOutcomeBox from './health-reports/HealthReportOutcomeBox';

const HealthReports = () => {
  return (
    <section className="py-20 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 relative">
            <PatientHealthDashboard />
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-6 -left-6 h-32 w-32 bg-health-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -z-10 -bottom-6 -right-6 h-32 w-32 bg-health-secondary/20 rounded-full blur-xl"></div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium">
              Solution 2
            </div>
            
            <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
              AI-Generated Patient Health Reports & Risk Assessments
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Our AI analyzes comprehensive patient data to generate detailed health reports, identify risk factors, and provide actionable clinical insights for healthcare providers.
            </p>
            
            <HealthReportFeaturesList />
            
            <HealthReportOutcomeBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthReports;
