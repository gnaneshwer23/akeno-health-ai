
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
  CheckCircle2
} from 'lucide-react';
import DiagnosticFeature from '@/components/doctor-solutions/DiagnosticFeature';
import DiagnosticStep from '@/components/doctor-solutions/DiagnosticStep';
import { Card, CardContent } from '@/components/ui/card';

const BiotechSolutions = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  
  useEffect(() => {
    // Set page title
    document.title = 'Biotech & Pharma Solutions - Akeno Health AI';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Auto rotate through steps
    const interval = setInterval(() => {
      setActiveStep(prev => prev >= 5 ? 1 : prev + 1);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-health-light">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-28 pb-16 px-6 relative overflow-hidden bg-gradient-to-b from-white to-health-light">
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-health-primary opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-health-secondary opacity-5 rounded-full blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium">
                Biotech & Pharma
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-health-dark mb-6">
                AI-Powered Healthcare Solutions for Biotech & Pharma
              </h1>
              
              <div className="flex justify-center mb-8">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-health-primary/10 animate-pulse-slow"></div>
                  <FlaskConical size={32} className="text-health-primary" />
                </div>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto mb-12 text-lg text-muted-foreground">
              <div className="flex flex-col md:flex-row gap-8 items-center p-6 bg-white rounded-xl shadow-sm border border-health-primary/10">
                <div className="md:w-1/2 space-y-4">
                  <p>
                    At Akeno Health AI, we empower biotech and pharmaceutical companies with AI-driven solutions that transform:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-2 items-start">
                      <ChevronRight size={18} className="text-health-primary mt-1 flex-shrink-0" />
                      <span>Drug discovery processes</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <ChevronRight size={18} className="text-health-primary mt-1 flex-shrink-0" />
                      <span>Biomarker-based clinical trials</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <ChevronRight size={18} className="text-health-primary mt-1 flex-shrink-0" />
                      <span>Synthetic biology innovations</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <ChevronRight size={18} className="text-health-primary mt-1 flex-shrink-0" />
                      <span>Immune therapy development</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden border border-health-primary/10">
                    <div className="bg-health-primary/5 p-3 border-b border-health-primary/10 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Dna size={20} className="text-health-primary" />
                        <span className="font-medium text-health-dark">AI Impact on Pharma R&D</span>
                      </div>
                    </div>
                    <div className="p-4 bg-white">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Development Speed</span>
                          <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-health-primary w-[85%]"></div>
                          </div>
                          <span className="text-sm font-medium">+85%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Cost Reduction</span>
                          <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-health-primary w-[70%]"></div>
                          </div>
                          <span className="text-sm font-medium">+70%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Treatment Efficacy</span>
                          <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-health-primary w-[90%]"></div>
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
        
        {/* Drug Discovery Section */}
        <section id="drug-discovery" className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-health-primary/10 text-health-primary mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-medium text-health-dark mb-4">
                AI-Powered Drug Discovery & Biomarker-Driven Clinical Trials
              </h2>
            </div>
            
            {/* Process visualization */}
            <div className="mb-16 overflow-hidden">
              <div className="relative">
                <div className="absolute left-0 right-0 top-1/2 h-1 bg-health-primary/20 -translate-y-1/2 z-0"></div>
                <div className="flex justify-between relative z-10">
                  {[
                    { icon: <MicroscopeIcon size={24} />, title: "Target Identification" },
                    { icon: <Beaker size={24} />, title: "Hit Discovery" },
                    { icon: <Brain size={24} />, title: "Lead Optimization" },
                    { icon: <Syringe size={24} />, title: "Preclinical Testing" },
                    { icon: <LineChart size={24} />, title: "Clinical Trials" }
                  ].map((step, idx) => (
                    <div 
                      key={idx} 
                      className={`flex flex-col items-center cursor-pointer`}
                      onClick={() => setActiveStep(idx + 1)}
                    >
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center 
                        ${activeStep === idx + 1 ? 'bg-health-primary text-white' : 'bg-white text-health-primary border-2 border-health-primary/30'}
                        transition-all duration-300`}
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
              
              <div className="bg-white p-6 rounded-2xl shadow-md border border-health-primary/10 mt-8">
                {activeStep === 1 && (
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/3">
                      <MicroscopeIcon size={80} className="text-health-primary mx-auto" />
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-medium text-health-dark mb-3">AI-Driven Target Identification</h3>
                      <p className="text-muted-foreground mb-4">
                        Machine learning models analyze genomic, transcriptomic, proteomic, and metabolomic datasets to identify new 
                        drug targets with higher precision and efficiency than traditional methods.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Multi-omics integration</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Network biology analysis</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Pathway prediction</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Target validation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeStep === 2 && (
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/3">
                      <Beaker size={80} className="text-health-primary mx-auto" />
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-medium text-health-dark mb-3">AI-Enhanced Hit Discovery</h3>
                      <p className="text-muted-foreground mb-4">
                        AI accelerates compound screening by predicting binding affinities and biological activities, 
                        analyzing chemical libraries to identify promising hit compounds with desired properties.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Virtual screening</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>De novo molecule design</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Fragment-based discovery</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Binding prediction</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeStep === 3 && (
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/3">
                      <Brain size={80} className="text-health-primary mx-auto" />
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-medium text-health-dark mb-3">AI-Powered Lead Optimization</h3>
                      <p className="text-muted-foreground mb-4">
                        Machine learning optimizes chemical structures to improve potency, selectivity, and drug-like properties while 
                        predicting ADMET characteristics to reduce late-stage failures.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Property prediction</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Molecular docking</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Toxicity assessment</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Structure optimization</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeStep === 4 && (
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/3">
                      <Syringe size={80} className="text-health-primary mx-auto" />
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-medium text-health-dark mb-3">AI-Enhanced Preclinical Testing</h3>
                      <p className="text-muted-foreground mb-4">
                        AI predicts in vivo efficacy and safety from in vitro data, optimizing study designs and 
                        reducing animal testing through advanced simulations.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Organ-on-chip modeling</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>PK/PD prediction</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Safety assessment</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Dose optimization</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeStep === 5 && (
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/3">
                      <LineChart size={80} className="text-health-primary mx-auto" />
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-medium text-health-dark mb-3">Biomarker-Based Clinical Trials</h3>
                      <p className="text-muted-foreground mb-4">
                        AI integrates multi-omics data and real-world evidence to stratify patients, 
                        design more targeted clinical trials, and predict treatment responses with precision.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Patient stratification</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Adaptive trial design</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Response prediction</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-health-primary" />
                          <span>Biomarker validation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <DiagnosticFeature 
                icon={<MicroscopeIcon size={20} />}
                title="AI-Driven Target Identification"
                description="Machine learning models analyse genomic, transcriptomic, proteomic, and metabolomic datasets to identify new drug targets."
              />
              
              <DiagnosticFeature
                icon={<Beaker size={20} />}
                title="Biomarker-Based Clinical Trials"
                description="AI integrates multi-omics data and real-world evidence to stratify patients based on predictive biomarkers."
              />
              
              <DiagnosticFeature
                icon={<Brain size={20} />}
                title="Digital Twin Simulations"
                description="AI-powered patient digital twins allow for in silico modelling of disease progression and drug response."
              />
              
              <DiagnosticFeature
                icon={<LineChart size={20} />}
                title="AI for Trial Optimization"
                description="Machine learning models enhance patient recruitment, eligibility screening, and adaptive trial designs."
              />
              
              <DiagnosticFeature
                icon={<Shield size={20} />}
                title="Predictive Safety & Efficacy"
                description="AI analyses adverse event patterns, genetic predispositions, and polypharmacy risks to predict drug responses."
              />
            </div>
            
            <div className="bg-health-primary/5 p-6 rounded-xl border border-health-primary/10">
              <h4 className="flex items-center gap-2 text-health-primary font-medium mb-2">
                <span className="w-6 h-6 rounded-full bg-health-primary text-white flex items-center justify-center text-xs">✓</span>
                Outcome
              </h4>
              <p className="text-health-dark">
                AI accelerates drug discovery timelines, optimizes biomarker-driven clinical trials, enhances patient stratification, 
                and increases the likelihood of successful therapeutic outcomes while reducing development costs.
              </p>
            </div>
          </div>
        </section>
        
        {/* Synthetic Biology Section */}
        <section id="synthetic-biology" className="py-16 px-6 bg-health-light/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-health-secondary/10 text-health-secondary mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-medium text-health-dark mb-4">
                AI-Powered Synthetic Biology & Immune Therapy Innovations
              </h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-md border border-health-secondary/10 mb-10 overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-medium text-health-dark mb-4 flex items-center gap-2">
                    <Dna size={24} className="text-health-secondary" />
                    <span>Synthetic Biology Innovation Pipeline</span>
                  </h3>
                  <div className="space-y-4">
                    <DiagnosticStep
                      icon={<Dna size={24} />}
                      title="AI-Designed Gene & Cell Therapies"
                      description="AI analyses genomic sequences to design optimized gene-editing solutions."
                      accentColor="bg-health-secondary/10 text-health-secondary"
                      activeAccentColor="bg-health-secondary text-white"
                      active={true}
                    />
                    <DiagnosticStep
                      icon={<Pill size={24} />}
                      title="Precision Medicine Engineering"
                      description="AI-driven computational biology for customized therapeutic molecules."
                      accentColor="bg-health-secondary/10 text-health-secondary"
                      activeAccentColor="bg-health-secondary text-white"
                    />
                    <DiagnosticStep
                      icon={<Shield size={24} />}
                      title="Immunotherapy Development"
                      description="AI models predict immune checkpoint inhibitor responses and antibody engineering."
                      accentColor="bg-health-secondary/10 text-health-secondary"
                      activeAccentColor="bg-health-secondary text-white"
                    />
                    <DiagnosticStep
                      icon={<Syringe size={24} />}
                      title="Personalized Vaccine Development"
                      description="AI identifies mutation patterns to accelerate vaccine design and optimization."
                      accentColor="bg-health-secondary/10 text-health-secondary"
                      activeAccentColor="bg-health-secondary text-white"
                    />
                  </div>
                </div>
                
                <div className="bg-health-secondary/5 p-6 md:p-8 flex items-center">
                  <div>
                    <h3 className="text-xl font-medium text-health-dark mb-4">AI-Guided Therapeutic Design</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Gene Editing Efficiency</span>
                          <span className="text-sm">92%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-health-secondary w-[92%]"></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Target Specificity</span>
                          <span className="text-sm">88%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-health-secondary w-[88%]"></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Therapeutic Efficacy</span>
                          <span className="text-sm">95%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-health-secondary w-[95%]"></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Development Speed</span>
                          <span className="text-sm">78%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-health-secondary w-[78%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <DiagnosticFeature 
                icon={<Dna size={20} />}
                title="AI-Designed Gene & Cell Therapies"
                description="AI analyses genomic sequences, CRISPR data, and immune system responses to design optimized gene-editing solutions."
                accentColor="bg-health-secondary/20 text-health-secondary group-hover:bg-health-secondary group-hover:text-white"
              />
              
              <DiagnosticFeature
                icon={<Pill size={20} />}
                title="Synthetic Biology for Precision Medicine"
                description="AI-driven computational biology and protein engineering help design customized therapeutic molecules."
                accentColor="bg-health-secondary/20 text-health-secondary group-hover:bg-health-secondary group-hover:text-white"
              />
              
              <DiagnosticFeature
                icon={<Shield size={20} />}
                title="AI in Immunotherapy Development"
                description="AI models predict immune checkpoint inhibitor responses, T-cell receptor interactions, and antibody engineering."
                accentColor="bg-health-secondary/20 text-health-secondary group-hover:bg-health-secondary group-hover:text-white"
              />
              
              <DiagnosticFeature
                icon={<Syringe size={20} />}
                title="AI-Guided Vaccine Development"
                description="AI identifies mutation patterns in infectious diseases to accelerate vaccine design and optimize immune responses."
                accentColor="bg-health-secondary/20 text-health-secondary group-hover:bg-health-secondary group-hover:text-white"
              />
              
              <DiagnosticFeature
                icon={<Zap size={20} />}
                title="Real-Time Therapy Optimization"
                description="AI continuously monitors patient immune profiles and treatment responses, dynamically adjusting dosage and combinations."
                accentColor="bg-health-secondary/20 text-health-secondary group-hover:bg-health-secondary group-hover:text-white"
              />
            </div>
            
            <div className="bg-health-secondary/5 p-6 rounded-xl border border-health-secondary/10">
              <h4 className="flex items-center gap-2 text-health-secondary font-medium mb-2">
                <span className="w-6 h-6 rounded-full bg-health-secondary text-white flex items-center justify-center text-xs">✓</span>
                Outcome
              </h4>
              <p className="text-health-dark">
                AI enhances precision therapy design, immune modulation strategies, and biologic drug development, 
                ensuring faster, safer, and more effective treatments while increasing the success rate of advanced therapeutics.
              </p>
            </div>
          </div>
        </section>
        
        {/* Clinical Research Section */}
        <section id="clinical-research" className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-health-accent/10 text-health-accent mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-medium text-health-dark mb-4">
                Data-Driven Clinical Research Insights
              </h2>
            </div>
            
            {/* Data flow diagram */}
            <div className="mb-16">
              <div className="relative p-4 bg-white rounded-xl shadow-md border border-health-accent/10">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Data Sources */}
                  <div className="bg-health-accent/5 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-health-dark mb-4 flex items-center gap-2">
                      <Database size={20} className="text-health-accent" />
                      <span>Data Sources</span>
                    </h3>
                    <div className="space-y-3">
                      <Card className="bg-white">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <FileText size={18} className="text-health-accent" />
                            <span className="text-sm">Electronic Health Records</span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-white">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <Activity size={18} className="text-health-accent" />
                            <span className="text-sm">Wearable Device Data</span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-white">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <Globe size={18} className="text-health-accent" />
                            <span className="text-sm">Population Health Data</span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-white">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <Dna size={18} className="text-health-accent" />
                            <span className="text-sm">Genomic Databases</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  {/* AI Processing */}
                  <div className="bg-health-accent/10 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-health-dark mb-4 flex items-center gap-2">
                      <Brain size={20} className="text-health-accent" />
                      <span>AI Processing</span>
                    </h3>
                    <div className="space-y-3">
                      <Card className="bg-white">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <Search size={18} className="text-health-accent" />
                            <span className="text-sm">Pattern Recognition</span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-white">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <LineChart size={18} className="text-health-accent" />
                            <span className="text-sm">Predictive Modeling</span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-white">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <MicroscopeIcon size={18} className="text-health-accent" />
                            <span className="text-sm">Biomarker Analysis</span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-white">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <Shield size={18} className="text-health-accent" />
                            <span className="text-sm">Safety Signal Detection</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  {/* Clinical Insights */}
                  <div className="bg-health-accent/5 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-health-dark mb-4 flex items-center gap-2">
                      <FlaskConical size={20} className="text-health-accent" />
                      <span>Clinical Insights</span>
                    </h3>
                    <div className="space-y-3">
                      <Card className="bg-white">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <Beaker size={18} className="text-health-accent" />
                            <span className="text-sm">Drug Repurposing Opportunities</span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-white">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <Radio size={18} className="text-health-accent" />
                            <span className="text-sm">Digital Biomarker Discovery</span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-white">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <Stethoscope size={18} className="text-health-accent" />
                            <span className="text-sm">Treatment Response Prediction</span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-white">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <BarChart4 size={18} className="text-health-accent" />
                            <span className="text-sm">Market Access Strategies</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 left-1/3 w-0 h-0 -translate-y-1/2 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-16 border-l-health-accent/20 hidden md:block"></div>
                <div className="absolute top-1/2 left-2/3 w-0 h-0 -translate-y-1/2 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-16 border-l-health-accent/40 hidden md:block"></div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <DiagnosticFeature 
                icon={<BarChart4 size={20} />}
                title="AI-Powered Real-World Data Analytics"
                description="AI extracts insights from EHRs, patient registries, and wearable data to enhance clinical trial designs."
                accentColor="bg-health-accent/20 text-health-accent group-hover:bg-health-accent group-hover:text-white"
              />
              
              <DiagnosticFeature
                icon={<Search size={20} />}
                title="AI-Enhanced Pharmacovigilance"
                description="Machine learning models detect adverse drug reactions, drug interactions, and long-term safety concerns."
                accentColor="bg-health-accent/20 text-health-accent group-hover:bg-health-accent group-hover:text-white"
              />
              
              <DiagnosticFeature
                icon={<Stethoscope size={20} />}
                title="AI-Driven Drug Repurposing"
                description="AI scans chemical libraries and disease ontologies to identify new applications for existing drugs."
                accentColor="bg-health-accent/20 text-health-accent group-hover:bg-health-accent group-hover:text-white"
              />
              
              <DiagnosticFeature
                icon={<Globe size={20} />}
                title="Population Health Insights"
                description="AI analyses global epidemiology trends and genetic risk factors for region-specific treatment strategies."
                accentColor="bg-health-accent/20 text-health-accent group-hover:bg-health-accent group-hover:text-white"
              />
              
              <DiagnosticFeature
                icon={<FileText size={20} />}
                title="Regulatory-Grade AI Analytics"
                description="AI supports regulatory submissions, compliance tracking, and evidence generation for global health agencies."
                accentColor="bg-health-accent/20 text-health-accent group-hover:bg-health-accent group-hover:text-white"
              />
              
              <DiagnosticFeature
                icon={<Radio size={20} />}
                title="AI-Powered Digital Biomarker Discovery"
                description="AI uncovers novel digital biomarkers from multi-omics data and patient-reported outcomes."
                accentColor="bg-health-accent/20 text-health-accent group-hover:bg-health-accent group-hover:text-white"
              />
            </div>
            
            <div className="bg-health-accent/5 p-6 rounded-xl border border-health-accent/10">
              <h4 className="flex items-center gap-2 text-health-accent font-medium mb-2">
                <span className="w-6 h-6 rounded-full bg-health-accent text-white flex items-center justify-center text-xs">✓</span>
                Outcome
              </h4>
              <p className="text-health-dark">
                AI-driven clinical insights enable more efficient, evidence-based drug development, regulatory approval processes, 
                and post-market safety monitoring, reducing R&D costs and improving therapeutic success rates.
              </p>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-health-light to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-health-secondary opacity-5 rounded-full blur-3xl"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-health-primary text-white mb-6">
              <FlaskConical size={30} />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-medium text-health-dark mb-6">
              Transform Biotech & Pharma Research with AI-Powered Solutions
            </h2>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-health-primary/10 mb-10">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-health-primary mb-1">85%</div>
                  <div className="text-sm text-muted-foreground">Faster Drug Development</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-health-primary mb-1">70%</div>
                  <div className="text-sm text-muted-foreground">Lower R&D Costs</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-health-primary mb-1">3.5x</div>
                  <div className="text-sm text-muted-foreground">Higher Success Rates</div>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
              With Akeno Health AI, biotech and pharmaceutical companies gain access to AI-powered solutions that transform 
              drug discovery, optimize clinical trials, and enhance real-world data analytics—accelerating innovation and 
              improving global healthcare outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="primary">
                Request a Demo
              </Button>
              <Button size="lg" variant="outline">
                Learn More
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
