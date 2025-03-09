import React, { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { 
  FlaskConical, 
  Dna, 
  MicroscopeIcon, 
  Brain, 
  LineChart, 
  Shield, 
  Beaker, 
  Pill, 
  Zap, 
  Syringe, 
  BarChart4, 
  Search, 
  Stethoscope, 
  Globe, 
  FileText, 
  Radio,
  ChevronRight,
  CheckCircle2,
  Database,
  Activity,
  Sparkles,
  Lock,
  Blocks
} from 'lucide-react';
import DiagnosticFeature from '@/components/doctor-solutions/DiagnosticFeature';
import DiagnosticStep from '@/components/doctor-solutions/DiagnosticStep';
import { Card, CardContent } from '@/components/ui/card';

const BiotechSolutions = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  
  useEffect(() => {
    // Set page title
    document.title = 'Pharma & Research Solutions - Akeno Health AI';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Auto rotate through steps
    const interval = setInterval(() => {
      setActiveStep(prev => prev >= 5 ? 1 : prev + 1);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-health-light to-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-28 pb-16 px-6 relative overflow-hidden bg-gradient-to-b from-white to-indigo-50">
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-indigo-600 opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-purple-600 opacity-5 rounded-full blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium animate-pulse">
                <Sparkles size={16} className="text-white" />
                <span>Pharma & Research</span>
              </span>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-health-dark mb-6">
                Accelerating <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Drug Discovery</span> & <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Clinical Trials</span>
              </h1>
              
              <div className="flex justify-center mb-6">
                <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
              </div>
              
              <div className="flex justify-center mb-8">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-indigo-500/10 animate-pulse-slow"></div>
                  <FlaskConical size={32} className="text-indigo-600" />
                </div>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto mb-12 text-lg text-muted-foreground">
              <div className="flex flex-col md:flex-row gap-8 items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-indigo-200/30">
                <div className="md:w-1/2 space-y-4">
                  <p>
                    The pharmaceutical industry faces massive bottlenecks in drug discovery, clinical trial recruitment, and regulatory approval, costing billions and delaying life-saving treatments.
                  </p>
                  <p>
                    Akeno Health's AI-driven platform accelerates every phase of drug development—from early-stage drug discovery and biomarker identification to AI-powered patient recruitment and clinical trials optimisation.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden border border-indigo-200 bg-gradient-to-br from-white to-indigo-50">
                    <div className="bg-indigo-500/10 p-3 border-b border-indigo-200 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Dna size={20} className="text-indigo-600" />
                        <span className="font-medium text-health-dark">AI Impact on Pharma R&D</span>
                      </div>
                    </div>
                    <div className="p-4 bg-white/50 backdrop-blur-sm">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Development Speed</span>
                          <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-indigo-400 to-indigo-600 w-[85%]"></div>
                          </div>
                          <span className="text-sm font-medium">+85%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Cost Reduction</span>
                          <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-indigo-400 to-indigo-600 w-[70%]"></div>
                          </div>
                          <span className="text-sm font-medium">+70%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Treatment Efficacy</span>
                          <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-indigo-400 to-indigo-600 w-[90%]"></div>
                          </div>
                          <span className="text-sm font-medium">+90%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Clinical Trials Section */}
        <section id="clinical-trials" className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 text-white mb-4 shadow-lg shadow-indigo-500/20">
                <span className="text-xl font-bold">1</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-medium text-health-dark mb-4">
                AI-Driven Clinical Trials Matching
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Faster, More Efficient Patient Recruitment
              </p>
            </div>
            
            {/* Process visualization */}
            <div className="mb-16 overflow-hidden">
              <div className="relative">
                <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-200 -translate-y-1/2 z-0"></div>
                <div className="flex justify-between relative z-10">
                  {[
                    { icon: <Search size={24} />, title: "Patient Identification" },
                    { icon: <Activity size={24} />, title: "Screening & Enrollment" },
                    { icon: <CheckCircle2 size={24} />, title: "Consent Management" },
                    { icon: <LineChart size={24} />, title: "Patient Retention" },
                    { icon: <Database size={24} />, title: "Data Collection" }
                  ].map((step, idx) => (
                    <div 
                      key={idx} 
                      className={`flex flex-col items-center cursor-pointer`}
                      onClick={() => setActiveStep(idx + 1)}
                    >
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center 
                        ${activeStep === idx + 1 
                          ? 'bg-gradient-to-br from-indigo-500 to-indigo-700 text-white shadow-lg shadow-indigo-500/30' 
                          : 'bg-white text-indigo-600 border-2 border-indigo-300/50'}
                        transition-all duration-300 hover:scale-105`}
                      >
                        {step.icon}
                      </div>
                      <div className="text-center mt-2 text-sm font-medium">
                        {step.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-indigo-200 mt-8">
                {activeStep === 1 && (
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/3">
                      <div className="bg-indigo-100 p-6 rounded-full w-40 h-40 flex items-center justify-center mx-auto">
                        <Search size={80} className="text-indigo-600" />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-medium text-health-dark mb-3">AI-Powered Prescreening & Patient Identification</h3>
                      <p className="text-muted-foreground mb-4">
                        Our AI scans millions of electronic health records, genetic profiles, and biomarkers to identify 
                        eligible trial participants in real time, dramatically reducing recruitment timelines.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2 bg-indigo-50 p-2 rounded-lg">
                          <CheckCircle2 size={16} className="text-indigo-600" />
                          <span>Multi-criteria matching</span>
                        </div>
                        <div className="flex items-center gap-2 bg-indigo-50 p-2 rounded-lg">
                          <CheckCircle2 size={16} className="text-indigo-600" />
                          <span>Biomarker-based selection</span>
                        </div>
                        <div className="flex items-center gap-2 bg-indigo-50 p-2 rounded-lg">
                          <CheckCircle2 size={16} className="text-indigo-600" />
                          <span>Real-time processing</span>
                        </div>
                        <div className="flex items-center gap-2 bg-indigo-50 p-2 rounded-lg">
                          <CheckCircle2 size={16} className="text-indigo-600" />
                          <span>Privacy-preserving screening</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeStep === 2 && (
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/3">
                      <Activity size={80} className="text-health-primary mx-auto" />
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-medium text-health-dark mb-3">Automated Trial Recruitment & Patient Engagement</h3>
                      <p className="text-muted-foreground mb-4">
                        AI-powered personalized outreach increases enrollment efficiency, with smart matching algorithms 
                        ensuring participants meet all inclusion criteria while minimizing screening failures.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Personalized outreach</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Eligibility verification</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Scheduling automation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Communication tracking</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeStep === 3 && (
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/3">
                      <Blocks size={80} className="text-health-primary mx-auto" />
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-medium text-health-dark mb-3">Blockchain-Based Consent Management</h3>
                      <p className="text-muted-foreground mb-4">
                        Smart contracts ensure regulatory compliance, secure data sharing, and patient-controlled consent, 
                        creating a transparent and auditable record of all interactions.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Digital consent</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Regulatory compliance</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Immutable audit trail</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Patient data control</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeStep === 4 && (
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/3">
                      <LineChart size={80} className="text-health-primary mx-auto" />
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-medium text-health-dark mb-3">Predictive Retention Modeling</h3>
                      <p className="text-muted-foreground mb-4">
                        AI predicts dropout risks and recommends intervention strategies to improve patient retention,
                        analyzing engagement patterns to identify participants who may need additional support.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Dropout prediction</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Engagement tracking</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Targeted interventions</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Retention optimization</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeStep === 5 && (
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/3">
                      <Database size={80} className="text-health-primary mx-auto" />
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-medium text-health-dark mb-3">Secure Data Collection & Analysis</h3>
                      <p className="text-muted-foreground mb-4">
                        Our platform enables real-time data collection with advanced analytics to identify trends, 
                        monitor safety, and accelerate trial completion with validated outcomes.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Real-time monitoring</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Secure data storage</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Automated validation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Analytics dashboard</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <DiagnosticFeature 
                icon={<Search size={20} />}
                title="AI-Powered Patient Identification"
                description="Smart algorithms scan EHRs, genetic data, and biomarkers to find ideal trial candidates in seconds."
              />
              
              <DiagnosticFeature
                icon={<Activity size={20} />}
                title="Automated Recruitment Pipeline"
                description="Streamlined workflows for patient outreach, screening, and enrollment with AI-powered matching."
              />
              
              <DiagnosticFeature
                icon={<Blocks size={20} />}
                title="Blockchain Consent Management"
                description="Secure, transparent record-keeping with cryptographic verification for all patient interactions."
              />
              
              <DiagnosticFeature
                icon={<LineChart size={20} />}
                title="Retention Optimization"
                description="AI predicts dropout risks and suggests personalized interventions to keep patients engaged."
              />
              
              <DiagnosticFeature
                icon={<Shield size={20} />}
                title="Privacy-Preserving Technology"
                description="Advanced techniques ensure patient data security while enabling powerful recruitment capabilities."
              />
              
              <DiagnosticFeature
                icon={<Zap size={20} />}
                title="Real-Time Trial Analytics"
                description="Comprehensive dashboards track recruitment metrics, site performance, and enrollment progress."
              />
            </div>
            
            <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-xl shadow-inner">
              <h4 className="flex items-center gap-2 text-indigo-700 font-medium mb-2">
                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs">✓</span>
                Outcome
              </h4>
              <p className="text-health-dark">
                Accelerated patient recruitment, reduced costs, and higher retention rates in clinical trials, ultimately bringing 
                life-saving treatments to market faster with more representative patient populations.
              </p>
            </div>
          </div>
        </section>
        
        {/* Drug Discovery Section */}
        <section id="drug-discovery" className="py-16 px-6 bg-gradient-to-br from-purple-50 to-indigo-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 text-white mb-4 shadow-lg shadow-purple-500/20">
                <span className="text-xl font-bold">2</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-medium text-health-dark mb-4">
                AI & Quantum-Powered Drug Discovery
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Revolutionizing Drug Discovery with Advanced AI & Quantum Computing
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md border border-purple-200 mb-10 overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-medium text-health-dark mb-4 flex items-center gap-2">
                    <Dna size={24} className="text-purple-600" />
                    <span>Advanced Drug Discovery Pipeline</span>
                  </h3>
                  <div className="space-y-4">
                    <DiagnosticStep
                      icon={<MicroscopeIcon size={24} />}
                      title="AI-Powered Molecular Simulation"
                      description="Predicts drug-target interactions with extreme precision."
                      accentColor="bg-purple-500/10 text-purple-600"
                      activeAccentColor="bg-purple-600 text-white"
                      active={true}
                    />
                    
                    <DiagnosticStep
                      icon={<Brain size={24} />}
                      title="Quantum Drug Discovery"
                      description="Ultra-fast simulations of molecular interactions for novel compounds."
                      accentColor="bg-purple-500/10 text-purple-600"
                      activeAccentColor="bg-purple-600 text-white"
                    />
                    <DiagnosticStep
                      icon={<Dna size={24} />}
                      title="AI-Powered Biomarker Identification"
                      description="Detects new biomarkers for disease progression and treatment."
                      accentColor="bg-purple-500/10 text-purple-600"
                      activeAccentColor="bg-purple-600 text-white"
                    />
                    <DiagnosticStep
                      icon={<Database size={24} />}
                      title="Digital Twin Technology"
                      description="Creates AI-powered virtual patients to simulate drug efficacy."
                      accentColor="bg-purple-500/10 text-purple-600"
                      activeAccentColor="bg-purple-600 text-white"
                    />
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 md:p-8 flex items-center">
                  <div>
                    <h3 className="text-xl font-medium text-health-dark mb-4">AI-Powered Discovery Metrics</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Molecular Simulation Accuracy</span>
                          <span className="text-sm">95%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-purple-400 to-purple-600 w-[95%]"></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Quantum Computing Speed</span>
                          <span className="text-sm">98%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-purple-400 to-purple-600 w-[98%]"></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Biomarker Discovery Rate</span>
                          <span className="text-sm">89%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-purple-400 to-purple-600 w-[89%]"></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Digital Twin Accuracy</span>
                          <span className="text-sm">91%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-purple-400 to-purple-600 w-[91%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <DiagnosticFeature 
                icon={<MicroscopeIcon size={20} />}
                title="AI-Powered Target Identification"
                description="Advanced algorithms identify optimal drug targets by analyzing genomic and proteomic data."
                accentColor="bg-purple-500/20 text-purple-600 group-hover:bg-purple-600 group-hover:text-white"
              />
              
              <DiagnosticFeature
                icon={<Brain size={20} />}
                title="Quantum Computing Simulations"
                description="Harness quantum computing for complex molecular dynamics simulations impossible with classical computers."
                accentColor="bg-purple-500/20 text-purple-600 group-hover:bg-purple-600 group-hover:text-white"
              />
              
              <DiagnosticFeature
                icon={<Dna size={20} />}
                title="Multi-Omics Biomarker Detection"
                description="Identify novel biomarkers for target validation, patient stratification, and treatment response prediction."
                accentColor="bg-purple-500/20 text-purple-600 group-hover:bg-purple-600 group-hover:text-white"
              />
              
              <DiagnosticFeature
                icon={<Database size={20} />}
                title="Digital Twin Patient Modeling"
                description="Conduct virtual clinical trials on AI-generated patient cohorts to predict real-world outcomes."
                accentColor="bg-purple-500/20 text-purple-600 group-hover:bg-purple-600 group-hover:text-white"
              />
              
              <DiagnosticFeature
                icon={<Zap size={20} />}
                title="Accelerated Lead Optimization"
                description="AI algorithms rapidly optimize drug candidates for efficacy, safety, and manufacturability."
                accentColor="bg-purple-500/20 text-purple-600 group-hover:bg-purple-600 group-hover:text-white"
              />
              
              <DiagnosticFeature
                icon={<Shield size={20} />}
                title="AI-Powered Safety Prediction"
                description="Predict potential toxicity and side effects early in the development process to avoid costly failures."
                accentColor="bg-purple-500/20 text-purple-600 group-hover:bg-purple-600 group-hover:text-white"
              />
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 shadow-inner">
              <h4 className="flex items-center gap-2 text-purple-700 font-medium mb-2">
                <span className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs">✓</span>
                Outcome
              </h4>
              <p className="text-health-dark">
                Faster, cost-effective drug discovery and improved clinical success rates, dramatically reducing the time and resources 
                required to bring new treatments to patients who need them.
              </p>
            </div>
          </div>
        </section>
        
        {/* Blockchain Data Sharing Section */}
        <section id="data-sharing" className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-4 shadow-lg shadow-blue-500/20">
                <span className="text-xl font-bold">3</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-medium text-health-dark mb-4">
                Blockchain-Based Data Sharing
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Secure, Decentralized, and Compliant Data Exchange for Research
              </p>
            </div>
            
            {/* Data flow diagram */}
            <div className="mb-16">
              <div className="relative p-4 bg-white rounded-xl shadow-md border border-blue-200">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Patient Control */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-health-dark mb-4 flex items-center gap-2">
                      <Shield size={20} className="text-blue-600" />
                      <span>Patient Control</span>
                    </h3>
                    <div className="space-y-3">
                      <Card className="bg-white/80 backdrop-blur-sm border border-blue-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <Lock size={18} className="text-blue-600" />
                            <span className="text-sm">Consent Management</span>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-white/80 backdrop-blur-sm border border-blue-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 size={18} className="text-blue-600" />
                            <span className="text-sm">Permission Controls</span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-white/80 backdrop-blur-sm border border-blue-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <Database size={18} className="text-blue-600" />
                            <span className="text-sm">Universal Health Records</span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-white/80 backdrop-blur-sm border border-blue-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <Activity size={18} className="text-blue-600" />
                            <span className="text-sm">Access Tracking</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  {/* Blockchain Security */}
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-health-dark mb-4 flex items-center gap-2">
                      <Blocks size={20} className="text-blue-600" />
                      <span>Blockchain Security</span>
                    </h3>
                    <div className="space-y-3">
                      <Card className="bg-white/80 backdrop-blur-sm border border-blue-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <Lock size={18} className="text-blue-600" />
                            <span className="text-sm">Encrypted Storage</span>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-white/80 backdrop-blur-sm border border-blue-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <Shield size={18} className="text-blue-600" />
                            <span className="text-sm">Smart Contracts</span>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-white/80 backdrop-blur-sm border border-blue-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <Activity size={18} className="text-blue-600" />
                            <span className="text-sm">Audit Trail</span>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-white/80 backdrop-blur-sm border border-blue-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <FileText size={18} className="text-blue-600" />
                            <span className="text-sm">Regulatory Compliance</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  {/* Research Applications */}
                  <div className="bg-gradient-to-br from-blue-200 to-blue-300 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-health-dark mb-4 flex items-center gap-2">
                      <MicroscopeIcon size={20} className="text-blue-600" />
                      <span>Research Applications</span>
                    </h3>
                    <div className="space-y-3">
                      <Card className="bg-white/80 backdrop-blur-sm border border-blue-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <Brain size={18} className="text-blue-600" />
                            <span className="text-sm">Decentralized AI Training</span>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-white/80 backdrop-blur-sm border border-blue-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <LineChart size={18} className="text-blue-600" />
                            <span className="text-sm">Real-World Evidence</span>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-white/80 backdrop-blur-sm border border-blue-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <Globe size={18} className="text-blue-600" />
                            <span className="text-sm">Global Collaboration</span>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-white/80 backdrop-blur-sm border border-blue-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <Dna size={18} className="text-blue-600" />
                            <span className="text-sm">Multi-Omics Integration</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <DiagnosticFeature 
                icon={<Shield size={20} />}
                title="Universal Health Records (UHRs)"
                description="Patient-controlled data sharing with granular consent management for ethical research access."
                accentColor="bg-blue-500/20 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
              />
              
              <DiagnosticFeature
                icon={<Brain size={20} />}
                title="Decentralized AI Research"
                description="Train AI models across multiple institutions without sharing raw data, preserving privacy and compliance."
                accentColor="bg-blue-500/20 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
              />
              
              <DiagnosticFeature
                icon={<Blocks size={20} />}
                title="Secure Pharma Data Exchange"
                description="Blockchain encryption ensures tamper-proof, fully auditable, and regulatory-compliant data sharing."
                accentColor="bg-blue-500/20 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
              />
              
              <DiagnosticFeature
                icon={<LineChart size={20} />}
                title="Real-World Evidence Analysis"
                description="Continuously analyze de-identified patient data to uncover real-world drug effectiveness."
                accentColor="bg-blue-500/20 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
              />
              
              <DiagnosticFeature
                icon={<Globe size={20} />}
                title="Global Research Collaboration"
                description="Enable secure cross-border research partnerships with complete regulatory compliance."
                accentColor="bg-blue-500/20 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
              />
              
              <DiagnosticFeature
                icon={<Lock size={20} />}
                title="Regulatory-Compliant Data Sharing"
                description="Built-in compliance with GDPR, HIPAA, and other global data protection regulations."
                accentColor="bg-blue-500/20 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
              />
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-inner">
              <h4 className="flex items-center gap-2 text-blue-700 font-medium mb-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">✓</span>
                Outcome
              </h4>
              <p className="text-health-dark">
                A secure, transparent, and regulatory-compliant data-sharing ecosystem for pharma research, enabling unprecedented 
                collaboration while maintaining the highest standards of privacy and security.
              </p>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partner with Akeno Health – Transform the Future of Drug Development
            </h2>
            
            <p className="text-xl mb-10 text-indigo-100">
              Become a Part of the Most Advanced AI-Driven Healthcare Network
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/30 flex items-center justify-center">
                    <Brain size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-medium">AI & Quantum Computing</h3>
                </div>
                <p className="text-indigo-100">
                  Accelerate drug discovery with cutting-edge AI and quantum computing technologies
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/30 flex items-center justify-center">
                    <LineChart size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-medium">Optimized Clinical Trials</h3>
                </div>
                <p className="text-indigo-100">
                  Streamline recruitment and monitoring with AI-powered analytics and prediction
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/30 flex items-center justify-center">
                    <Blocks size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-medium">Blockchain Technology</h3>
                </div>
                <p className="text-indigo-100">
                  Unlock secure, decentralized research collaboration with advanced blockchain solutions
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/30 flex items-center justify-center">
                    <Globe size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-medium">Real-World Evidence</h3>
                </div>
                <p className="text-indigo-100">
                  Leverage AI-driven real-world evidence for drug efficacy & post-market surveillance
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-indigo-700 hover:bg-indigo-50 px-8 py-3 text-lg">
                Partner with Us
              </Button>
              <Button className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                Request a Demo
              </Button>
              <Button className="bg-transparent text-white hover:bg-white/10 px-8 py-3 text-lg">
                Join Our AI Research Network
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BiotechSolutions;
