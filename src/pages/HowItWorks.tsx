
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/Button';
import { ArrowRight, Smartphone, Database, Brain, Activity, ChemicalX, FlaskConical, Workflow, Dna, LineChart, HeartPulse } from 'lucide-react';
import { cn } from '@/lib/utils';

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-health-light/50 to-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium fade-up-1">
              Our Technology
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-health-dark mb-8 leading-tight fade-up-2">
              Transforming Healthcare with AI-Powered Precision Medicine
            </h1>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed fade-up-3">
              At Akeno Health AI, we integrate advanced artificial intelligence, multi-omics analysis, and real-time digital twin simulations to create a highly personalized, data-driven healthcare experience.
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-health-primary/10 max-w-3xl mx-auto mb-10 text-left shadow-sm fade-up-4">
              <p className="text-muted-foreground leading-relaxed">
                Our technology provides early disease detection, precision therapies, and real-time adaptive care, ensuring patients receive highly personalized healthcare recommendations while clinicians gain AI-powered insights for optimized treatment planning.
              </p>
            </div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-health-primary opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-health-secondary opacity-5 rounded-full blur-3xl"></div>
        </section>
        
        {/* Step-by-Step Process Section */}
        <section className="py-20 px-6 bg-white relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
                Step-by-Step Process: AI-Driven Diagnostics & Therapy Recommendations
              </h2>
            </div>
            
            {/* Step 1 */}
            <div className="mb-20">
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                <div className="lg:w-1/3 flex-shrink-0">
                  <div className="sticky top-28">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-health-primary text-white text-xl font-medium">1</div>
                      <h3 className="text-2xl font-medium text-health-dark">AI-Powered Health Data Collection & Digital Twin Creation</h3>
                    </div>
                    <div className="pl-16">
                      <p className="text-muted-foreground mb-6">
                        Our AI collects, integrates, and analyzes comprehensive health data to create a personalized Digital Twin that simulates your unique physiology.
                      </p>
                      <div className="h-40 w-40 mx-auto rounded-xl bg-gradient-to-br from-health-primary/20 to-health-secondary/20 flex items-center justify-center">
                        <Database size={60} className="text-health-primary/70" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <div className="bg-health-light/30 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-medium text-health-dark mb-4">Data Inputs:</h4>
                    
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-health-primary/10 flex items-center justify-center text-health-primary">
                          <Smartphone size={24} />
                        </div>
                        <div>
                          <h5 className="text-base font-medium text-health-dark mb-1">Wearables & IoT Devices</h5>
                          <p className="text-muted-foreground text-sm">
                            Smartwatches, glucose monitors, ECG sensors, continuous glucose monitors (CGMs), and fitness trackers provide real-time biometrics (heart rate, HRV, sleep quality, blood oxygen, glucose levels, physical activity).
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-health-primary/10 flex items-center justify-center text-health-primary">
                          <Database size={24} />
                        </div>
                        <div>
                          <h5 className="text-base font-medium text-health-dark mb-1">Electronic Health Records (EHRs)</h5>
                          <p className="text-muted-foreground text-sm">
                            A comprehensive medical history, including clinical notes, lab test results, imaging scans, prescriptions, and physician observations, is securely integrated into the system.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-health-primary/10 flex items-center justify-center text-health-primary">
                          <Dna size={24} />
                        </div>
                        <div>
                          <h5 className="text-base font-medium text-health-dark mb-1">Multi-Omics Data Analysis</h5>
                          <p className="text-muted-foreground text-sm">
                            AI extracts deep insights from genomics, epigenomics, transcriptomics, proteomics, metabolomics, and microbiome sequencing, identifying disease risks and immune response anomalies.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-health-primary/10 flex items-center justify-center text-health-primary">
                          <Activity size={24} />
                        </div>
                        <div>
                          <h5 className="text-base font-medium text-health-dark mb-1">Environmental & Lifestyle Data</h5>
                          <p className="text-muted-foreground text-sm">
                            AI continuously factors in diet, stress levels, exposure to environmental toxins, and social determinants of health to create a truly holistic healthcare profile.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 border border-health-primary/10 shadow-sm">
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-8 w-8 rounded-full bg-health-primary/20 flex items-center justify-center text-health-primary">
                          <Brain size={16} />
                        </div>
                      </div>
                      <div>
                        <h5 className="text-base font-medium text-health-dark mb-2">AI then builds a Digital Twin</h5>
                        <p className="text-muted-foreground text-sm">
                          A continuously evolving, AI-driven virtual representation of the patient's physiological, genetic, and immune system state. This Digital Twin is used to simulate disease progression, predict therapy responses, and guide precision healthcare interventions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="mb-20">
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                <div className="lg:w-1/3 flex-shrink-0">
                  <div className="sticky top-28">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-health-primary text-white text-xl font-medium">2</div>
                      <h3 className="text-2xl font-medium text-health-dark">AI-Driven Risk Prediction & Early Disease Detection</h3>
                    </div>
                    <div className="pl-16">
                      <p className="text-muted-foreground mb-6">
                        Our AI identifies disease risks and early biomarkers years before symptoms appear, enabling proactive intervention.
                      </p>
                      <div className="h-40 w-40 mx-auto rounded-xl bg-gradient-to-br from-health-primary/20 to-health-secondary/20 flex items-center justify-center">
                        <LineChart size={60} className="text-health-primary/70" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <div className="space-y-6">
                    <div className="bg-health-light/30 rounded-xl p-6">
                      <div className="space-y-6">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-health-primary/10 flex items-center justify-center text-health-primary">
                            <Brain size={20} />
                          </div>
                          <div>
                            <p className="text-muted-foreground">
                              AI-powered pattern recognition detects early biomarkers for chronic conditions, including cancer, cardiovascular diseases, neurodegenerative disorders, and metabolic dysfunctions.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-health-primary/10 flex items-center justify-center text-health-primary">
                            <Dna size={20} />
                          </div>
                          <div>
                            <p className="text-muted-foreground">
                              Predictive modelling integrates multi-omics data with real-time biometrics to provide hyper-accurate risk assessments years before symptoms appear.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-health-primary/10 flex items-center justify-center text-health-primary">
                            <Activity size={20} />
                          </div>
                          <div>
                            <p className="text-muted-foreground">
                              Advanced machine learning models refine predictions dynamically, ensuring personalized risk stratification for each individual.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-health-primary/10 flex items-center justify-center text-health-primary">
                            <HeartPulse size={20} />
                          </div>
                          <div>
                            <p className="text-muted-foreground">
                              Continuous AI monitoring identifies subtle variations in immune response, metabolism, and inflammatory markers to proactively recommend interventions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 border border-health-primary/10 shadow-sm">
                      <div className="flex gap-4 items-start">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-health-primary flex items-center justify-center text-white">
                            <ArrowRight size={20} />
                          </div>
                        </div>
                        <div>
                          <h5 className="text-base font-medium text-health-dark mb-2">Outcome:</h5>
                          <p className="text-muted-foreground">
                            Patients and doctors receive highly personalized early disease warnings, allowing for timely preventive measures, risk mitigation strategies, and precision-based health interventions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="mb-20">
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                <div className="lg:w-1/3 flex-shrink-0">
                  <div className="sticky top-28">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-health-primary text-white text-xl font-medium">3</div>
                      <h3 className="text-2xl font-medium text-health-dark">Personalized AI-Optimized Treatment Plans</h3>
                    </div>
                    <div className="pl-16">
                      <p className="text-muted-foreground mb-6">
                        Our AI creates highly personalized treatment plans based on your unique genetic, epigenetic, and molecular profile.
                      </p>
                      <div className="h-40 w-40 mx-auto rounded-xl bg-gradient-to-br from-health-primary/20 to-health-secondary/20 flex items-center justify-center">
                        <FlaskConical size={60} className="text-health-primary/70" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <div className="space-y-6">
                    <div className="bg-health-light/30 rounded-xl p-6">
                      <div className="space-y-6">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-health-primary/10 flex items-center justify-center text-health-primary">
                            <Dna size={20} />
                          </div>
                          <div>
                            <p className="text-muted-foreground">
                              AI evaluates epigenetic markers and gene expression profiles to create highly personalized treatment recommendations.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-health-primary/10 flex items-center justify-center text-health-primary">
                            <FlaskConical size={20} />
                          </div>
                          <div>
                            <p className="text-muted-foreground">
                              AI-powered drug repurposing finds existing FDA-approved drugs that best match a patient's molecular profile, eliminating trial-and-error prescribing.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-health-primary/10 flex items-center justify-center text-health-primary">
                            <ChemicalX size={20} />
                          </div>
                          <div>
                            <p className="text-muted-foreground">
                              CRISPR-based gene editing insights help clinicians and researchers optimize targeted gene therapies for genetic and autoimmune conditions.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-health-primary/10 flex items-center justify-center text-health-primary">
                            <Activity size={20} />
                          </div>
                          <div>
                            <p className="text-muted-foreground">
                              AI-driven lifestyle and dietary interventions provide specific, real-time recommendations for metabolic health, immune function, and longevity.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-health-primary/10 flex items-center justify-center text-health-primary">
                            <Brain size={20} />
                          </div>
                          <div>
                            <p className="text-muted-foreground">
                              AI models continuously refine treatments based on patient responses, adjusting recommendations dynamically over time.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 border border-health-primary/10 shadow-sm">
                      <div className="flex gap-4 items-start">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-health-primary flex items-center justify-center text-white">
                            <ArrowRight size={20} />
                          </div>
                        </div>
                        <div>
                          <h5 className="text-base font-medium text-health-dark mb-2">Outcome:</h5>
                          <p className="text-muted-foreground">
                            Every patient receives a dynamic, adaptive health plan that evolves with their biological state, maximizing therapy effectiveness and long-term well-being.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="mb-20">
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                <div className="lg:w-1/3 flex-shrink-0">
                  <div className="sticky top-28">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-health-primary text-white text-xl font-medium">4</div>
                      <h3 className="text-2xl font-medium text-health-dark">Continuous AI Monitoring & Adaptive Therapy Adjustments</h3>
                    </div>
                    <div className="pl-16">
                      <p className="text-muted-foreground mb-6">
                        Our AI continuously monitors your health data and dynamically adjusts treatment recommendations in real-time.
                      </p>
                      <div className="h-40 w-40 mx-auto rounded-xl bg-gradient-to-br from-health-primary/20 to-health-secondary/20 flex items-center justify-center">
                        <Activity size={60} className="text-health-primary/70" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <div className="space-y-6">
                    <div className="bg-health-light/30 rounded-xl p-6">
                      <div className="space-y-6">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-health-primary/10 flex items-center justify-center text-health-primary">
                            <Smartphone size={20} />
                          </div>
                          <div>
                            <p className="text-muted-foreground">
                              AI continuously tracks health metrics using real-time wearables, at-home diagnostics, and medical-grade biosensors.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-health-primary/10 flex items-center justify-center text-health-primary">
                            <Brain size={20} />
                          </div>
                          <div>
                            <p className="text-muted-foreground">
                              Machine learning algorithms refine medication dosing, nutritional plans, and exercise recommendations based on changing biomarker levels.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-health-primary/10 flex items-center justify-center text-health-primary">
                            <Workflow size={20} />
                          </div>
                          <div>
                            <p className="text-muted-foreground">
                              Digital Twin simulations predict and prevent adverse reactions, ensuring therapy efficacy and patient safety.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-health-primary/10 flex items-center justify-center text-health-primary">
                            <Smartphone size={20} />
                          </div>
                          <div>
                            <p className="text-muted-foreground">
                              Patients receive actionable AI-driven insights through their mobile app, enabling real-time health optimization.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-health-primary/10 flex items-center justify-center text-health-primary">
                            <HeartPulse size={20} />
                          </div>
                          <div>
                            <p className="text-muted-foreground">
                              Telemedicine integration allows clinicians to receive automated alerts for critical patient changes, ensuring proactive intervention.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 border border-health-primary/10 shadow-sm">
                      <div className="flex gap-4 items-start">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-health-primary flex items-center justify-center text-white">
                            <ArrowRight size={20} />
                          </div>
                        </div>
                        <div>
                          <h5 className="text-base font-medium text-health-dark mb-2">Outcome:</h5>
                          <p className="text-muted-foreground">
                            AI-driven healthcare ensures early detection of complications, real-time therapy optimization, and proactive intervention, significantly reducing hospitalization rates and chronic disease progression.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="mb-20">
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                <div className="lg:w-1/3 flex-shrink-0">
                  <div className="sticky top-28">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-health-primary text-white text-xl font-medium">5</div>
                      <h3 className="text-2xl font-medium text-health-dark">AI-Powered Biotech & Pharma Integration</h3>
                    </div>
                    <div className="pl-16">
                      <p className="text-muted-foreground mb-6">
                        Our AI accelerates drug discovery, optimizes clinical trials, and drives breakthrough innovations in precision medicine.
                      </p>
                      <div className="h-40 w-40 mx-auto rounded-xl bg-gradient-to-br from-health-primary/20 to-health-secondary/20 flex items-center justify-center">
                        <ChemicalX size={60} className="text-health-primary/70" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <div className="space-y-6">
                    <div className="bg-health-light/30 rounded-xl p-6">
                      <div className="space-y-6">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-health-primary/10 flex items-center justify-center text-health-primary">
                            <Dna size={20} />
                          </div>
                          <div>
                            <p className="text-muted-foreground">
                              AI-driven biomarker analysis accelerates the discovery of precision medicine therapies tailored to genetic and epigenetic profiles.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-health-primary/10 flex items-center justify-center text-health-primary">
                            <Users size={20} />
                          </div>
                          <div>
                            <p className="text-muted-foreground">
                              AI optimizes clinical trial recruitment by selecting ideal candidates based on predictive success rates, reducing costs and accelerating research timelines.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-health-primary/10 flex items-center justify-center text-health-primary">
                            <FlaskConical size={20} />
                          </div>
                          <div>
                            <p className="text-muted-foreground">
                              AI-powered synthetic biology techniques drive next-generation therapeutics, including highly targeted cancer treatments and regenerative medicine breakthroughs.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-health-primary/10 flex items-center justify-center text-health-primary">
                            <Brain size={20} />
                          </div>
                          <div>
                            <p className="text-muted-foreground">
                              Machine learning models predict drug interactions, reducing the risks of adverse events and enhancing clinical decision-making.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 border border-health-primary/10 shadow-sm">
                      <div className="flex gap-4 items-start">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-health-primary flex items-center justify-center text-white">
                            <ArrowRight size={20} />
                          </div>
                        </div>
                        <div>
                          <h5 className="text-base font-medium text-health-dark mb-2">Outcome:</h5>
                          <p className="text-muted-foreground">
                            Akeno Health AI is actively driving breakthroughs in precision drug development, AI-powered biomarker discovery, and real-time clinical trial optimization, ensuring faster, safer, and more effective therapies reach patients.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Infographic Section */}
        <section className="py-20 px-6 bg-health-light/30 relative overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
                The Patient Health Journey with Akeno Health AI
              </h2>
            </div>
            
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-health-primary/30"></div>
              
              {/* Journey Steps */}
              <div className="space-y-12">
                {[
                  {
                    step: 1,
                    content: "Patients onboard by syncing their wearable, EHR, and genetic data into Akeno Health AI.",
                    icon: <Smartphone size={24} />
                  },
                  {
                    step: 2,
                    content: "AI continuously collects and interprets real-time biometrics, lifestyle inputs, and multi-omics data.",
                    icon: <Database size={24} />
                  },
                  {
                    step: 3,
                    content: "The Digital Twin AI engine analyses patient health trends, predicting disease risks with unparalleled accuracy.",
                    icon: <Brain size={24} />
                  },
                  {
                    step: 4,
                    content: "AI provides personalized, real-time therapy recommendations based on genetics, immunology, and biomarker insights.",
                    icon: <FlaskConical size={24} />
                  },
                  {
                    step: 5,
                    content: "Continuous AI monitoring dynamically adjusts treatment recommendations based on patient responses.",
                    icon: <Activity size={24} />
                  },
                  {
                    step: 6,
                    content: "Doctors and researchers gain AI-driven insights to refine treatment decisions and optimize healthcare strategies.",
                    icon: <HeartPulse size={24} />
                  },
                  {
                    step: 7,
                    content: "Pharma and biotech firms leverage AI-driven analytics to power precision drug development and next-gen clinical research.",
                    icon: <ChemicalX size={24} />
                  }
                ].map((item, index) => (
                  <div key={index} className={cn(
                    "flex flex-col lg:flex-row gap-6 items-center lg:items-start relative",
                    index % 2 === 0 ? "lg:flex-row-reverse" : ""
                  )}>
                    <div className="absolute left-4 lg:left-1/2 top-0 transform -translate-x-1/2 z-10">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-health-primary text-white text-sm font-medium">
                        {item.step}
                      </div>
                    </div>
                    
                    <div className={cn(
                      "w-full lg:w-1/2 pl-16 lg:pl-0 lg:px-8",
                      index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                    )}>
                      <div className="bg-white rounded-xl p-6 shadow-sm border border-health-primary/10">
                        <div className={cn(
                          "flex gap-4 items-start",
                          index % 2 === 0 ? "lg:flex-row-reverse" : ""
                        )}>
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-health-primary/10 flex items-center justify-center text-health-primary">
                            {item.icon}
                          </div>
                          <p className="text-muted-foreground">{item.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 px-6 bg-gradient-to-b from-white to-health-light/30 relative overflow-hidden text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
              The Future of AI-Powered Healthcare is Here!
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              At Akeno Health AI, we believe in proactive, personalized, and AI-enhanced healthcare solutions that transform patient lives, optimize therapies, and advance medical innovation. By combining machine learning, biometrics, genomics, and continuous monitoring, we create a comprehensive, AI-powered healthcare ecosystem that empowers individuals, supports clinicians, and accelerates pharmaceutical breakthroughs.
            </p>
            
            <Button size="lg" variant="primary">
              Join us in shaping the future of medicine
              <ArrowRight size={16} />
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HowItWorks;
