
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
  Sparkles
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
                <span>Biotech & Pharma</span>
              </span>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-health-dark mb-6">
                Transforming <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Pharmaceutical Research</span> with <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">AI</span>
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
                    At Akeno Health AI, we empower biotech and pharmaceutical companies with AI-driven solutions that transform:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-2 items-start">
                      <ChevronRight size={18} className="text-indigo-600 mt-1 flex-shrink-0" />
                      <span>Drug discovery processes</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <ChevronRight size={18} className="text-indigo-600 mt-1 flex-shrink-0" />
                      <span>Biomarker-based clinical trials</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <ChevronRight size={18} className="text-indigo-600 mt-1 flex-shrink-0" />
                      <span>Synthetic biology innovations</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <ChevronRight size={18} className="text-indigo-600 mt-1 flex-shrink-0" />
                      <span>Immune therapy development</span>
                    </li>
                  </ul>
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
        
        {/* Drug Discovery Section */}
        <section id="drug-discovery" className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 text-white mb-4 shadow-lg shadow-indigo-500/20">
                <span className="text-xl font-bold">1</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-medium text-health-dark mb-4">
                AI-Powered Drug Discovery & Biomarker-Driven Clinical Trials
              </h2>
            </div>
            
            {/* Process visualization */}
            <div className="mb-16 overflow-hidden">
              <div className="relative">
                <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-200 -translate-y-1/2 z-0"></div>
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
                        <MicroscopeIcon size={80} className="text-indigo-600" />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-medium text-health-dark mb-3">AI-Driven Target Identification</h3>
                      <p className="text-muted-foreground mb-4">
                        Machine learning models analyze genomic, transcriptomic, proteomic, and metabolomic datasets to identify new 
                        drug targets with higher precision and efficiency than traditional methods.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2 bg-indigo-50 p-2 rounded-lg">
                          <CheckCircle2 size={16} className="text-indigo-600" />
                          <span>Multi-omics integration</span>
                        </div>
                        <div className="flex items-center gap-2 bg-indigo-50 p-2 rounded-lg">
                          <CheckCircle2 size={16} className="text-indigo-600" />
                          <span>Network biology analysis</span>
                        </div>
                        <div className="flex items-center gap-2 bg-indigo-50 p-2 rounded-lg">
                          <CheckCircle2 size={16} className="text-indigo-600" />
                          <span>Pathway prediction</span>
                        </div>
                        <div className="flex items-center gap-2 bg-indigo-50 p-2 rounded-lg">
                          <CheckCircle2 size={16} className="text-indigo-600" />
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
              
              <DiagnosticFeature
                icon={<Zap size={20} />}
                title="Accelerated Drug Repurposing"
                description="AI scans chemical libraries and disease ontologies to identify new applications for existing drugs."
              />
            </div>
            
            <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-xl border border-indigo-200 shadow-inner">
              <h4 className="flex items-center gap-2 text-indigo-700 font-medium mb-2">
                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs">✓</span>
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
        <section id="synthetic-biology" className="py-16 px-6 bg-gradient-to-br from-purple-50 to-indigo-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 text-white mb-4 shadow-lg shadow-purple-500/20">
                <span className="text-xl font-bold">2</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-medium text-health-dark mb-4">
                AI-Powered Synthetic Biology & Immune Therapy Innovations
              </h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-md border border-purple-200 mb-10 overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-medium text-health-dark mb-4 flex items-center gap-2">
                    <Dna size={24} className="text-purple-600" />
                    <span>Synthetic Biology Innovation Pipeline</span>
                  </h3>
                  <div className="space-y-4">
                    <DiagnosticStep
                      icon={<Dna size={24} />}
                      title="AI-Designed Gene & Cell Therapies"
                      description="AI analyses genomic sequences to design optimized gene-editing solutions."
                      accentColor="bg-purple-500/10 text-purple-600"
                      activeAccentColor="bg-purple-600 text-white"
                      active={true}
                    />
                    
                    <DiagnosticStep
                      icon={<Pill size={24} />}
                      title="Precision Medicine Engineering"
                      description="AI-driven computational biology for customized therapeutic molecules."
                      accentColor="bg-purple-500/10 text-purple-600"
                      activeAccentColor="bg-purple-600 text-white"
                    />
                    <DiagnosticStep
                      icon={<Shield size={24} />}
                      title="Immunotherapy Development"
                      description="AI models predict immune checkpoint inhibitor responses and antibody engineering."
                      accentColor="bg-purple-500/10 text-purple-600"
                      activeAccentColor="bg-purple-600 text-white"
                    />
                    <DiagnosticStep
                      icon={<Syringe size={24} />}
                      title="Personalized Vaccine Development"
                      description="AI identifies mutation patterns to accelerate vaccine design and optimization."
                      accentColor="bg-purple-500/10 text-purple-600"
                      activeAccentColor="bg-purple-600 text-white"
                    />
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 md:p-8 flex items-center">
                  <div>
                    <h3 className="text-xl font-medium text-health-dark mb-4">AI-Guided Therapeutic Design</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Gene Editing Efficiency</span>
                          <span className="text-sm">92%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-purple-400 to-purple-600 w-[92%]"></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Target Specificity</span>
                          <span className="text-sm">88%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-purple-400 to-purple-600 w-[88%]"></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Therapeutic Efficacy</span>
                          <span className="text-sm">95%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-purple-400 to-purple-600 w-[95%]"></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Development Speed</span>
                          <span className="text-sm">78%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-purple-400 to-purple-600 w-[78%]"></div>
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
                accentColor="bg-purple-500/20 text-purple-600 group-hover:bg-purple-600 group-hover:text-white"
              />
              
              <DiagnosticFeature
                icon={<Pill size={20} />}
                title="Synthetic Biology for Precision Medicine"
                description="AI-driven computational biology and protein engineering help design customized therapeutic molecules."
                accentColor="bg-purple-500/20 text-purple-600 group-hover:bg-purple-600 group-hover:text-white"
              />
              
              <DiagnosticFeature
                icon={<Shield size={20} />}
                title="AI in Immunotherapy Development"
                description="AI models predict immune checkpoint inhibitor responses, T-cell receptor interactions, and antibody engineering."
                accentColor="bg-purple-500/20 text-purple-600 group-hover:bg-purple-600 group-hover:text-white"
              />
              
              <DiagnosticFeature
                icon={<Syringe size={20} />}
                title="AI-Guided Vaccine Development"
                description="AI identifies mutation patterns in infectious diseases to accelerate vaccine design and optimize immune responses."
                accentColor="bg-purple-500/20 text-purple-600 group-hover:bg-purple-600 group-hover:text-white"
              />
              
              <DiagnosticFeature
                icon={<Zap size={20} />}
                title="Real-Time Therapy Optimization"
                description="AI continuously monitors patient immune profiles and treatment responses, dynamically adjusting dosage and combinations."
                accentColor="bg-purple-500/20 text-purple-600 group-hover:bg-purple-600 group-hover:text-white"
              />
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 shadow-inner">
              <h4 className="flex items-center gap-2 text-purple-700 font-medium mb-2">
                <span className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs">✓</span>
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
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-4 shadow-lg shadow-blue-500/20">
                <span className="text-xl font-bold">3</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-medium text-health-dark mb-4">
                Data-Driven Clinical Research Insights
              </h2>
            </div>
            
            {/* Data flow diagram */}
            <div className="mb-16">
              <div className="relative p-4 bg-white rounded-xl shadow-md border border-blue-200">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Data Sources */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-health-dark mb-4 flex items-center gap-2">
                      <Database size={20} className="text-blue-600" />
                      <span>Data Sources</span>
                    </h3>
                    <div className="space-y-3">
                      <Card className="bg-white/80 backdrop-blur-sm border border-blue-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <FileText size={18} className="text-blue-600" />
                            <span className="text-sm">Electronic Health Records</span>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-white/80 backdrop-blur-sm border border-blue-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <Activity size={18} className="text-blue-600" />
                            <span className="text-sm">Wearable Device Data</span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-white/80 backdrop-blur-sm border border-blue-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <Globe size={18} className="text-blue-600" />
                            <span className="text-sm">Population Health Data</span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-white/80 backdrop-blur-sm border border-blue-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <Dna size={18} className="text-blue-600" />
                            <span className="text-sm">Genomic Databases</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  {/* AI Processing */}
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-health-dark mb-4 flex items-center gap-2">
                      <Brain size={20} className="text-blue-600" />
                      <span>AI Processing</span>
                    </h3>
                    <div className="space-y-3">
                      <Card className="bg-white/80 backdrop-blur-sm border border-blue-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <Search size={18} className="text-blue-600" />
                            <span className="text-sm">Pattern Recognition</span>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-white/80 backdrop-blur-sm border border-blue-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <Brain size={18} className="text-blue-600" />
                            <span className="text-sm">Predictive Modeling</span>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-white/80 backdrop-blur-sm border border-blue-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <Dna size={18} className="text-blue-600" />
                            <span className="text-sm">Genomic Analysis</span>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-white/80 backdrop-blur-sm border border-blue-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <BarChart4 size={18} className="text-blue-600" />
                            <span className="text-sm">Statistical Learning</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  {/* Clinical Insights */}
                  <div className="bg-gradient-to-br from-blue-200 to-blue-300 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-health-dark mb-4 flex items-center gap-2">
                      <Stethoscope size={20} className="text-blue-600" />
                      <span>Clinical Insights</span>
                    </h3>
                    <div className="space-y-3">
                      <Card className="bg-white/80 backdrop-blur-sm border border-blue-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <LineChart size={18} className="text-blue-600" />
                            <span className="text-sm">Biomarker Discovery</span>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-white/80 backdrop-blur-sm border border-blue-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <Shield size={18} className="text-blue-600" />
                            <span className="text-sm">Risk Stratification</span>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-white/80 backdrop-blur-sm border border-blue-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <Pill size={18} className="text-blue-600" />
                            <span className="text-sm">Treatment Response</span>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-white/80 backdrop-blur-sm border border-blue-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2">
                            <Zap size={18} className="text-blue-600" />
                            <span className="text-sm">Early Intervention</span>
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
                icon={<Database size={20} />}
                title="Multi-Omic Data Integration"
                description="AI integrates genomic, proteomic, metabolomic, and clinical data for comprehensive insights."
                accentColor="bg-blue-500/20 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
              />
              
              <DiagnosticFeature
                icon={<Brain size={20} />}
                title="Predictive Biomarker Discovery"
                description="AI identifies novel biomarkers for precision diagnostics and targeted therapies."
                accentColor="bg-blue-500/20 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
              />
              
              <DiagnosticFeature
                icon={<BarChart4 size={20} />}
                title="Real-World Evidence Analysis"
                description="AI analyzes diverse data sources to validate research findings and guide clinical decisions."
                accentColor="bg-blue-500/20 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
              />
              
              <DiagnosticFeature
                icon={<Radio size={20} />}
                title="Radiomics & Digital Pathology"
                description="AI extracts quantitative features from medical images for enhanced research insights."
                accentColor="bg-blue-500/20 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
              />
              
              <DiagnosticFeature
                icon={<LineChart size={20} />}
                title="Longitudinal Outcome Prediction"
                description="AI models predict long-term patient outcomes to guide research priorities."
                accentColor="bg-blue-500/20 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
              />
              
              <DiagnosticFeature
                icon={<Globe size={20} />}
                title="Population Health Insights"
                description="AI identifies patterns across diverse patient populations to inform research strategies."
                accentColor="bg-blue-500/20 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
              />
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-inner">
              <h4 className="flex items-center gap-2 text-blue-700 font-medium mb-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">✓</span>
                Outcome
              </h4>
              <p className="text-health-dark">
                AI enhances clinical research efficiency, accelerates biomarker discovery, enables personalized medicine approaches, 
                and improves the translation of research findings into clinical practice with greater precision.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BiotechSolutions;
