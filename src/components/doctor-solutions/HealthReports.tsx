
import React from 'react';
import { 
  FileText, 
  TrendingUp, 
  Dna, 
  LineChart, 
  LayoutDashboard, 
  Flask 
} from 'lucide-react';

const HealthReports = () => {
  const features = [
    {
      icon: <FileText size={24} />,
      title: "AI-Powered Comprehensive Health Summaries",
      description: "AI compiles holistic patient reports by integrating EHRs, real-time biometrics, genomic sequencing, radiology data, and wearable device inputs."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Predictive Risk Assessments & Early Disease Detection",
      description: "AI evaluates multi-factorial health risks, predicting cardiovascular events, metabolic disorders, and other conditions before symptoms appear."
    },
    {
      icon: <Dna size={24} />,
      title: "Multi-Omics & Genomic Data Interpretation",
      description: "AI analyzes DNA mutations, epigenetic markers, and microbiome compositions to provide personalized risk assessments and preventative care strategies."
    },
    {
      icon: <LineChart size={24} />,
      title: "Longitudinal Health Monitoring & Trend Analysis",
      description: "AI continuously tracks biometric changes, medication adherence, and therapy effectiveness to provide actionable, long-term insights."
    },
    {
      icon: <LayoutDashboard size={24} />,
      title: "AI-Driven Clinical Decision Support Dashboards",
      description: "AI-powered interactive dashboards provide doctors with real-time alerts, AI-generated patient risk scores, and suggested clinical interventions."
    },
    {
      icon: <Flask size={24} />,
      title: "AI-Powered Laboratory Test Analysis",
      description: "AI identifies hidden patterns in blood tests, metabolic panels, and inflammatory markers, providing early warnings for potential health risks."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="aspect-auto bg-health-light/10 rounded-2xl shadow-xl overflow-hidden border border-health-primary/10 p-6">
              <div className="h-full flex flex-col">
                <div className="text-center mb-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-health-primary/10 mb-4">
                    <FileText size={24} className="text-health-primary" />
                  </div>
                  <h3 className="text-xl font-medium text-health-dark">Patient Health Dashboard</h3>
                </div>
                
                <div className="flex-1 flex flex-col gap-4">
                  <div className="bg-white/80 rounded-xl p-4 shadow-sm">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-health-primary"></div>
                        <span className="font-medium">Cardiovascular Risk</span>
                      </div>
                      <span className="text-sm font-bold text-health-primary">Medium</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-health-primary rounded-full" style={{ width: '42%' }}></div>
                      </div>
                      <span className="text-sm">42%</span>
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                      <span className="text-health-primary font-medium">AI Insight:</span> Patient shows elevated LDL cholesterol and family history of heart disease.
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/80 rounded-xl p-4 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="font-medium text-sm">Metabolic Health</span>
                      </div>
                      <div className="text-xl font-bold">87%</div>
                      <div className="mt-1 text-xs text-gray-500">Optimal Range</div>
                    </div>
                    <div className="bg-white/80 rounded-xl p-4 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <span className="font-medium text-sm">Lung Function</span>
                      </div>
                      <div className="text-xl font-bold">67%</div>
                      <div className="mt-1 text-xs text-gray-500">Moderate Concern</div>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 rounded-xl p-4 shadow-sm">
                    <div className="text-sm text-health-primary font-medium mb-2">Genetic Risk Factors</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Type 2 Diabetes</span>
                        <span className="text-sm font-medium px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded-full">Moderate</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Alzheimer's Disease</span>
                        <span className="text-sm font-medium px-2 py-0.5 bg-green-100 text-green-800 rounded-full">Low</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Breast Cancer (BRCA1/2)</span>
                        <span className="text-sm font-medium px-2 py-0.5 bg-red-100 text-red-800 rounded-full">High</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto bg-health-primary/10 p-4 rounded-lg">
                    <div className="text-sm font-medium mb-2">AI Prevention Recommendations</div>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Statin therapy consideration (Rosuvastatin 10mg)</li>
                      <li>Monthly breast examinations</li>
                      <li>Annual mammogram starting age 35</li>
                      <li>Mediterranean diet plan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
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
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-health-primary/20 text-health-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-health-dark">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-health-primary/5 border border-health-primary/10 rounded-lg">
              <p className="font-medium text-health-dark">Outcome:</p>
              <p className="text-muted-foreground">AI-generated patient health reports enable data-driven, precision-based clinical decisions, allowing providers to deliver highly personalized, proactive care that improves patient outcomes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthReports;
