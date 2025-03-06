import React from 'react';
import ProcessStep from './ProcessStep';
import { Smartphone, Database, Brain, Activity, FlaskConical, Workflow, Dna, LineChart, HeartPulse, Beaker, Users, Shield, FileText } from 'lucide-react';

const ProcessStepsSection = () => {
  return (
    <section className="py-20 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
            Step-by-Step Process: AI-Driven Diagnostics & Personalized Therapy
          </h2>
        </div>
        
        {/* Step 1 */}
        <ProcessStep
          stepNumber={1}
          title="AI-Powered Health Data Collection & Digital Twin Creation"
          description="Our AI collects, integrates, and analyzes comprehensive health data to create a personalized Digital Twin that simulates your unique physiology."
          icon={<Database size={60} className="text-health-primary/70" />}
          features={[
            {
              icon: <Smartphone size={24} />,
              title: "Wearables & IoT Devices",
              content: "Smartwatches, glucose monitors, ECG sensors, continuous glucose monitors (CGMs), and fitness trackers provide real-time biometrics (heart rate, HRV, sleep quality, blood oxygen, glucose levels, physical activity)."
            },
            {
              icon: <FileText size={24} />,
              title: "Electronic Health Records (EHRs)",
              content: "AI securely integrates comprehensive medical history, including clinical notes, lab test results, imaging scans, prescriptions, and physician observations into the system."
            },
            {
              icon: <Dna size={24} />,
              title: "Multi-Omics Data Analysis",
              content: "AI extracts deep insights from genomics, epigenomics, transcriptomics, proteomics, metabolomics, and microbiome sequencing, identifying disease risks and immune response anomalies."
            },
            {
              icon: <Activity size={24} />,
              title: "Environmental & Lifestyle Data",
              content: "AI continuously factors in diet, stress levels, exposure to environmental toxins, and social determinants of health to create a truly holistic healthcare profile."
            },
          ]}
          outcome="A continuously evolving, AI-driven digital twin - a virtual representation of the patient's genetic, immune, and physiological state. This Digital Twin helps simulate disease progression, predict therapy responses, and guide precision healthcare interventions."
        />
        
        {/* Step 2 */}
        <ProcessStep
          stepNumber={2}
          title="AI-Driven Risk Prediction & Early Disease Detection"
          description="Our AI identifies disease risks and early biomarkers years before symptoms appear, enabling proactive intervention."
          icon={<LineChart size={60} className="text-health-primary/70" />}
          features={[
            {
              icon: <Brain size={20} />,
              content: "AI-powered pattern recognition detects early biomarkers for chronic conditions, including cancer, cardiovascular diseases, neurodegenerative disorders, and metabolic dysfunctions."
            },
            {
              icon: <Dna size={20} />,
              content: "Predictive modelling integrates multi-omics data with real-time biometrics to provide high-accuracy risk assessments years before symptoms appear."
            },
            {
              icon: <Activity size={20} />,
              content: "Advanced machine learning models refine predictions dynamically, ensuring personalized risk stratification that continuously adapts to each individual."
            },
            {
              icon: <HeartPulse size={20} />,
              content: "Continuous AI monitoring identifies subtle variations in immune response, metabolism, and inflammatory markers to proactively recommend interventions."
            },
          ]}
          outcome="Patients and doctors receive highly personalized early disease warnings, allowing for timely preventive measures, risk mitigation strategies, and precision-based health interventions."
        />
        
        {/* Step 3 */}
        <ProcessStep
          stepNumber={3}
          title="AI-Optimized Personalized Treatment Plans"
          description="Our AI creates highly personalized treatment plans based on your unique genetic, epigenetic, and molecular profile."
          icon={<FlaskConical size={60} className="text-health-primary/70" />}
          features={[
            {
              icon: <Dna size={20} />,
              content: "AI evaluates epigenetic markers and gene expression profiles to create highly personalized treatment recommendations tailored to each patient's molecular needs."
            },
            {
              icon: <Shield size={20} />,
              content: "Quantum-powered drug repurposing finds FDA-approved drugs that match a patient's molecular profile, eliminating trial-and-error prescribing."
            },
            {
              icon: <Activity size={20} />,
              content: "CRISPR-based AI insights help clinicians and researchers optimize targeted gene therapies for genetic and autoimmune conditions."
            },
            {
              icon: <Activity size={20} />,
              content: "AI-driven lifestyle and dietary interventions provide specific, real-time recommendations for metabolic health, immune function, and longevity."
            },
            {
              icon: <Brain size={20} />,
              content: "AI models continuously refine treatments based on patient responses, adjusting recommendations dynamically in real-time."
            },
          ]}
          outcome="Every patient receives a dynamic, adaptive health plan that evolves with their biological state, maximizing therapy effectiveness and long-term well-being."
        />
        
        {/* Step 4 */}
        <ProcessStep
          stepNumber={4}
          title="Continuous AI Monitoring & Adaptive Therapy Adjustments"
          description="Our AI continuously monitors your health data and dynamically adjusts treatment recommendations in real-time."
          icon={<Activity size={60} className="text-health-primary/70" />}
          features={[
            {
              icon: <Smartphone size={20} />,
              content: "AI continuously tracks health metrics using real-time wearables, at-home diagnostics, and medical-grade biosensors."
            },
            {
              icon: <Brain size={20} />,
              content: "Machine learning algorithms refine medication dosing, nutritional plans, and exercise recommendations based on changing biomarker levels."
            },
            {
              icon: <Workflow size={20} />,
              content: "Digital Twin simulations predict treatment efficacy, adverse reactions, and personalized therapy adjustments to ensure patient safety."
            },
            {
              icon: <Smartphone size={20} />,
              content: "Patients receive actionable AI-driven insights through their mobile app, enabling real-time health optimization."
            },
            {
              icon: <HeartPulse size={20} />,
              content: "Telemedicine integration allows clinicians to receive automated alerts for critical patient changes, ensuring proactive intervention."
            },
          ]}
          outcome="AI-driven healthcare ensures early detection of complications, real-time therapy optimization, and proactive intervention, significantly reducing hospitalization rates and chronic disease progression."
        />
        
        {/* Step 5 */}
        <ProcessStep
          stepNumber={5}
          title="AI-Powered Biotech & Pharma Integration"
          description="Our AI accelerates drug discovery, optimizes clinical trials, and drives breakthrough innovations in precision medicine."
          icon={<Beaker size={60} className="text-health-primary/70" />}
          features={[
            {
              icon: <Dna size={20} />,
              content: "Quantum AI accelerates biomarker discovery for precision medicine therapies tailored to genetic and epigenetic profiles."
            },
            {
              icon: <Users size={20} />,
              content: "AI optimizes clinical trial recruitment by selecting ideal candidates based on predictive success rates, reducing costs and accelerating research timelines."
            },
            {
              icon: <FlaskConical size={20} />,
              content: "AI-powered synthetic biology and quantum simulations enable next-generation therapeutics, including highly targeted cancer treatments and regenerative medicine breakthroughs."
            },
            {
              icon: <Brain size={20} />,
              content: "Machine learning models predict drug interactions, reducing the risks of adverse events and enhancing clinical decision-making."
            },
          ]}
          outcome="Akeno Health AI is actively driving breakthroughs in precision drug development, AI-powered biomarker discovery, and real-time clinical trial optimization, ensuring faster, safer, and more effective therapies reach patients."
        />
      </div>
    </section>
  );
};

export default ProcessStepsSection;
