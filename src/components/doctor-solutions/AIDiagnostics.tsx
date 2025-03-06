
import React from 'react';
import { 
  Search, 
  Brain, 
  Syringe, 
  ScanLine, 
  ListChecks, 
  Puzzle,
  Activity,
  ArrowRight,
  ChevronRight,
  FileText,
  LucideIcon,
  AlertCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

  type DiagnosticStepProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
    active?: boolean;
  };

  const DiagnosticStep = ({ icon, title, description, active = false }: DiagnosticStepProps) => (
    <div className={`flex items-center gap-4 p-3 rounded-lg transition-all ${active ? 'bg-health-primary/20' : 'bg-white hover:bg-health-light/50'}`}>
      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${active ? 'bg-health-primary text-white' : 'bg-health-primary/10 text-health-primary'}`}>
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-health-dark">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {active && <div className="w-2 h-8 bg-health-primary rounded-full"/>}
    </div>
  );

  const diagnosticProcess = [
    {
      icon: <FileText size={24} />,
      title: "Data Collection",
      description: "Patient medical history, symptoms, and test results are gathered",
      active: false
    },
    {
      icon: <Brain size={24} />,
      title: "AI Analysis",
      description: "Deep learning algorithms process and analyze all patient data",
      active: true
    },
    {
      icon: <AlertCircle size={24} />,
      title: "Finding Identification",
      description: "AI detects anomalies and potential diagnoses",
      active: false
    },
    {
      icon: <ListChecks size={24} />,
      title: "Clinical Validation",
      description: "Medical professionals review AI findings and confirm diagnosis",
      active: false
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
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-health-primary/10">
              <div className="border-b border-gray-100">
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-health-primary/10 p-2 rounded-full">
                      <Brain size={24} className="text-health-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-health-dark">AI Diagnostic Assistant</h3>
                      <p className="text-xs text-muted-foreground">Advanced medical analysis platform</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-health-primary bg-health-primary/10 px-2 py-1 rounded-full">
                      99.2% Accuracy
                    </span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      Live Analysis
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-3">Diagnostic Process</h4>
                  <div className="space-y-3">
                    {diagnosticProcess.map((step, index) => (
                      <DiagnosticStep 
                        key={index}
                        icon={step.icon}
                        title={step.title}
                        description={step.description}
                        active={step.active}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Card className="border-0 shadow-sm">
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <ScanLine size={16} className="text-health-primary" />
                        Medical Imaging
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="aspect-square bg-gray-100 rounded-lg relative flex items-center justify-center mb-2 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-500">
                          Chest X-ray Image
                        </div>
                        <div className="absolute bottom-2 right-2 bg-white/80 rounded-full p-1">
                          <Search size={14} className="text-health-primary" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Processed</span>
                        <span className="font-medium text-health-primary">4.3s</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-sm">
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <Brain size={16} className="text-health-primary" />
                        AI Analysis
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-medium flex items-center gap-1">
                              <Activity size={12} className="text-health-primary" />
                              Early Stage Pneumonia
                            </span>
                            <span className="text-xs font-medium">96%</span>
                          </div>
                          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-health-primary rounded-full" style={{ width: '96%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-medium flex items-center gap-1">
                              <Activity size={12} className="text-health-primary" />
                              COVID-19 Indicators
                            </span>
                            <span className="text-xs font-medium">12%</span>
                          </div>
                          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-health-primary rounded-full" style={{ width: '12%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-medium flex items-center gap-1">
                              <Activity size={12} className="text-health-primary" />
                              Pulmonary Fibrosis
                            </span>
                            <span className="text-xs font-medium">3%</span>
                          </div>
                          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-health-primary rounded-full" style={{ width: '3%' }}></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="bg-health-primary/10 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium flex items-center gap-2">
                      <Syringe size={16} className="text-health-primary" />
                      AI Recommendation
                    </h4>
                    <span className="text-xs bg-health-primary/20 text-health-primary px-2 py-0.5 rounded-full">
                      High Confidence
                    </span>
                  </div>
                  <p className="text-sm mb-3">
                    High probability of early-stage pneumonia detected. Recommend immediate antibiotic treatment with Azithromycin 500mg daily for 5 days and follow-up chest X-ray in 2 weeks.
                  </p>
                  <div className="flex items-center justify-between text-xs text-health-primary font-medium">
                    <span>View detailed report</span>
                    <ChevronRight size={14} />
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
