
import React from 'react';
import { 
  Search, 
  Brain, 
  Syringe, 
  ScanLine, 
  ListChecks, 
  Puzzle,
  Activity,
  ArrowRight
} from 'lucide-react';

const AIDiagnostics = () => {
  const features = [
    {
      icon: <Search size={24} />,
      title: "AI-Powered Diagnostics & Anomaly Detection",
      description: "Advanced machine learning models analyze medical imaging, pathology reports, laboratory results, and genetic data to provide high-accuracy diagnoses and early anomaly detection."
    },
    {
      icon: <Brain size={24} />,
      title: "Predictive Disease Modeling & Risk Stratification",
      description: "AI evaluates multi-omics data, clinical biomarkers, and symptom patterns to detect diseases earlier, more accurately, and at the molecular level."
    },
    {
      icon: <Syringe size={24} />,
      title: "Precision Medicine & AI-Driven Therapy Matching",
      description: "AI matches patients with the most effective, targeted treatment plans, using genomics, epigenetics, and proteomic data to customize interventions."
    },
    {
      icon: <ScanLine size={24} />,
      title: "Medical Imaging & Radiology Support",
      description: "AI assists radiologists in detecting tumors, fractures, infections, and cardiovascular abnormalities with enhanced accuracy and reduced false positives."
    },
    {
      icon: <ListChecks size={24} />,
      title: "AI-Powered Clinical Workflows",
      description: "AI automates routine clinical assessments, freeing up time for physicians to focus on critical decision-making and personalized patient care."
    },
    {
      icon: <Puzzle size={24} />,
      title: "AI for Rare & Complex Diseases",
      description: "AI analyzes vast datasets to identify rare genetic disorders, autoimmune conditions, and hard-to-diagnose diseases, providing AI-generated differential diagnoses."
    }
  ];

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
            
            <div className="space-y-5 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 hover:bg-health-primary/5 p-2 rounded-lg transition-colors group">
                  <div className="mt-1 flex-shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-health-primary/20 text-health-primary group-hover:bg-health-primary group-hover:text-white transition-colors">
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
              <p className="text-muted-foreground">AI-assisted diagnostics help doctors achieve faster, more accurate, and data-driven diagnoses, leading to improved patient outcomes and more effective treatments.</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video bg-white rounded-2xl shadow-xl overflow-hidden border border-health-primary/10">
              <div className="h-full p-6 flex flex-col">
                <div className="flex items-center justify-between mb-6 border-b pb-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-health-primary/10 p-2 rounded-full">
                      <ScanLine size={24} className="text-health-primary" />
                    </div>
                    <h3 className="font-medium">AI Diagnostic Assistant</h3>
                  </div>
                  <div className="text-sm text-health-primary bg-health-primary/10 px-2 py-1 rounded-full">
                    99.2% Accuracy
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-100 rounded-lg aspect-square overflow-hidden relative group">
                      <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-500">
                        Chest X-ray Image
                      </div>
                      <div className="absolute inset-0 bg-health-primary/10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <div className="bg-white/80 rounded-full p-2">
                          <ScanLine size={20} className="text-health-primary" />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-lg aspect-square overflow-hidden relative group">
                      <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-500">
                        CT Scan
                      </div>
                      <div className="absolute inset-0 bg-health-primary/10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <div className="bg-white/80 rounded-full p-2">
                          <Brain size={20} className="text-health-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-health-light p-4 rounded-lg">
                    <div className="mb-3 text-sm font-medium flex items-center justify-between">
                      <span>AI Analysis Results</span>
                      <span className="text-xs text-health-primary bg-health-primary/10 px-2 py-0.5 rounded-full">
                        Processing Time: 4.3s
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium flex items-center gap-1">
                            <Activity size={14} className="text-health-primary" />
                            Early Stage Pneumonia
                          </span>
                          <span className="text-sm">96%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-health-primary rounded-full" style={{ width: '96%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium flex items-center gap-1">
                            <Activity size={14} className="text-health-primary" />
                            COVID-19 Indicators
                          </span>
                          <span className="text-sm">12%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-health-primary rounded-full" style={{ width: '12%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium flex items-center gap-1">
                            <Activity size={14} className="text-health-primary" />
                            Pulmonary Fibrosis
                          </span>
                          <span className="text-sm">3%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-health-primary rounded-full" style={{ width: '3%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="flex flex-col items-center justify-center p-2 bg-health-light/50 rounded-lg">
                      <Brain size={18} className="text-health-primary mb-1" />
                      <span className="text-xs text-health-dark font-medium">AI Analysis</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 bg-health-light/50 rounded-lg">
                      <ArrowRight size={18} className="text-health-primary mb-1" />
                      <span className="text-xs text-health-dark font-medium">Processing</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 bg-health-primary/10 rounded-lg">
                      <ListChecks size={18} className="text-health-primary mb-1" />
                      <span className="text-xs text-health-dark font-medium">Diagnosis</span>
                    </div>
                  </div>
                  
                  <div className="mt-auto bg-health-primary/10 p-4 rounded-lg">
                    <div className="text-sm font-medium mb-2">AI Recommendation</div>
                    <p className="text-sm">
                      High probability of early-stage pneumonia detected. Recommend immediate antibiotic treatment with Azithromycin 500mg daily for 5 days and follow-up chest X-ray in 2 weeks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-6 -right-6 h-32 w-32 bg-health-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -z-10 -bottom-6 -left-6 h-32 w-32 bg-health-secondary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDiagnostics;
