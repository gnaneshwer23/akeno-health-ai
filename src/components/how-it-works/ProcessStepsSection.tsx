
import React from 'react';
import ProcessStep from './ProcessStep';
import { 
  Smartphone, Database, Brain, Activity, FlaskConical, Workflow, 
  Dna, LineChart, HeartPulse, Beaker, Users, Shield, FileText, 
  Zap, Lock, Link as LinkIcon, Pill
} from 'lucide-react';

const ProcessStepsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-indigo-50/50 to-white relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-indigo-50 to-transparent"></div>
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-gradient-to-br from-indigo-300/10 to-purple-300/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-gradient-to-br from-purple-300/10 to-pink-300/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-600 font-medium gap-2 border border-indigo-200/50 shadow-sm">
            <Workflow size={16} className="text-indigo-500" />
            <span>Our Process</span>
          </span>
          
          <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
            Our <span className="bg-gradient-to-br from-indigo-600 to-purple-600 bg-clip-text text-transparent">AI-Driven</span> Healthcare Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            How we combine AI, genomics, and real-time monitoring to revolutionize healthcare
          </p>
        </div>
        
        {/* Step 1 */}
        <ProcessStep
          stepNumber={1}
          title="Real-Time Health Monitoring & Data Collection"
          description="Akeno Health continuously gathers real-time health data from multiple sources, creating a comprehensive 360° view of a patient's health."
          icon={<Database size={60} className="text-indigo-500" />}
          features={[
            {
              icon: <Smartphone size={24} />,
              title: "Wearables & IoT Devices",
              content: "Smartwatches, ECG patches, glucose monitors, BP cuffs, fitness trackers"
            },
            {
              icon: <FileText size={24} />,
              title: "Electronic Health Records",
              content: "Secure, AI-integrated health data exchange from clinics & hospitals"
            },
            {
              icon: <Dna size={24} />,
              title: "Genomic & Microbiome Data",
              content: "Personalised DNA & gut microbiome analysis for precision medicine"
            },
            {
              icon: <Activity size={24} />,
              title: "Medical Imaging & Lab Data",
              content: "AI-driven diagnostics from X-rays, MRIs, and blood tests"
            },
          ]}
          outcome="A fully automated, real-time health monitoring system that detects patterns before symptoms appear."
        />
        
        {/* Step 2 */}
        <ProcessStep
          stepNumber={2}
          title="AI-Powered Early Detection & Personalised Risk Analysis"
          description="Akeno Health's AI-driven risk assessment engine continuously analyses real-time health data to detect early warning signs of diseases and health risks."
          icon={<LineChart size={60} className="text-purple-500" />}
          features={[
            {
              icon: <Brain size={24} />,
              title: "Predictive AI Modelling",
              content: "Identifies potential health risks based on patient history & biometric patterns"
            },
            {
              icon: <Dna size={24} />,
              title: "Disease Forecasting",
              content: "AI predicts conditions like cancer, diabetes, heart disease, neurological disorders"
            },
            {
              icon: <Activity size={24} />,
              title: "Personalised Risk Scores",
              content: "AI generates individualised risk reports and alerts patients & doctors"
            },
            {
              icon: <HeartPulse size={24} />,
              title: "Automated Preventive Plans",
              content: "AI recommends customised lifestyle & medical interventions"
            },
          ]}
          outcome="Patients receive early health warnings & personalised recommendations before diseases progress."
        />
        
        {/* Step 3 */}
        <ProcessStep
          stepNumber={3}
          title="AI-Driven Clinical Decision Support & Doctor Insights"
          description="Akeno Health empowers doctors & healthcare providers with AI-driven clinical decision support, allowing them to deliver more accurate, personalised, and faster diagnoses."
          icon={<Brain size={60} className="text-blue-500" />}
          features={[
            {
              icon: <Dna size={24} />,
              title: "AI-Powered Diagnosis",
              content: "Instant differential diagnosis suggestions with symptom analysis"
            },
            {
              icon: <Shield size={24} />,
              title: "Automated Treatment Plans",
              content: "AI recommends evidence-based personalised treatment options"
            },
            {
              icon: <Activity size={24} />,
              title: "Medication Safety Alerts",
              content: "Ensures patient safety by preventing adverse drug reactions"
            },
            {
              icon: <Users size={24} />,
              title: "Doctor Collaboration Platform",
              content: "AI-enhanced real-time consultation between specialists"
            },
          ]}
          outcome="Doctors make faster, evidence-based decisions, improving patient outcomes & reducing errors."
        />
        
        {/* Step 4 */}
        <ProcessStep
          stepNumber={4}
          title="Precision Medicine & AI-Powered Treatment Optimisation"
          description="Akeno Health leverages AI, Quantum Computing, and Digital Twin Technology to optimise treatments for each individual."
          icon={<Zap size={60} className="text-cyan-500" />}
          features={[
            {
              icon: <Dna size={24} />,
              title: "Genomics Integration",
              content: "AI customises treatments based on DNA & microbiome analysis"
            },
            {
              icon: <Brain size={24} />,
              title: "Digital Twin Technology",
              content: "Creates a virtual health replica to simulate treatments before prescribing"
            },
            {
              icon: <FlaskConical size={24} />,
              title: "Quantum-Powered Drug Matching",
              content: "Identifies the most effective drugs for a patient's unique genetic profile"
            },
            {
              icon: <HeartPulse size={24} />,
              title: "AI-Optimised Dosage",
              content: "AI tailors drug dosages in real-time based on metabolic responses"
            },
          ]}
          outcome="Every patient receives fully personalised, optimised treatment for faster recovery & fewer side effects."
        />
        
        {/* Step 5 */}
        <ProcessStep
          stepNumber={5}
          title="Seamless Connectivity – Patients, Doctors, Pharma, and Research"
          description="Akeno Health eliminates healthcare silos by seamlessly integrating patients, healthcare providers, researchers, and pharma companies through a real-time, AI-powered ecosystem."
          icon={<LinkIcon size={60} className="text-pink-500" />}
          features={[
            {
              icon: <Pill size={24} />,
              title: "AI-Powered Prescription",
              content: "Connects doctors, pharmacies, and patients for seamless medication management"
            },
            {
              icon: <Smartphone size={24} />,
              title: "Telemedicine & AI Assistant",
              content: "Instant patient support via AI-driven chatbots & telehealth"
            },
            {
              icon: <Users size={24} />,
              title: "Automated Referrals",
              content: "AI matches patients to the best specialists & healthcare facilities"
            },
            {
              icon: <Shield size={24} />,
              title: "AI-Powered Insurance",
              content: "Faster approvals & fraud detection for insurance companies"
            },
          ]}
          outcome="A fully connected, AI-driven healthcare ecosystem that optimises efficiency for all stakeholders."
        />
        
        {/* Step 6 */}
        <ProcessStep
          stepNumber={6}
          title="AI-Powered Clinical Trials Matching & Drug Discovery Acceleration"
          description="Akeno Health revolutionises clinical trials and drug discovery by leveraging AI and Quantum Computing to streamline research, recruitment, and pharmaceutical innovation."
          icon={<Beaker size={60} className="text-indigo-500" />}
          features={[
            {
              icon: <Users size={24} />,
              title: "Automated Trial Matching",
              content: "AI scans millions of patient profiles to match them with relevant clinical trials"
            },
            {
              icon: <FlaskConical size={24} />,
              title: "Quantum-Accelerated Discovery",
              content: "AI simulates molecular interactions to identify potential drug candidates faster"
            },
            {
              icon: <Dna size={24} />,
              title: "AI-Powered Biomarker Discovery",
              content: "Identifies early disease indicators for targeted therapies"
            },
            {
              icon: <Shield size={24} />,
              title: "Blockchain-Based Consent",
              content: "Ensures secure & transparent clinical trial participation"
            },
          ]}
          outcome="Faster drug development, increased trial success rates, and better treatment options for patients."
        />
        
        {/* Step 7 */}
        <ProcessStep
          stepNumber={7}
          title="Blockchain-Enabled Data Security & Patient-Controlled Health Records"
          description="Akeno Health revolutionises health data security by integrating Blockchain, AI, and Quantum Encryption for ultra-secure, patient-owned medical records."
          icon={<Lock size={60} className="text-green-500" />}
          features={[
            {
              icon: <Database size={24} />,
              title: "Decentralised Health Records",
              content: "Patients fully control their health data and decide who can access it"
            },
            {
              icon: <Shield size={24} />,
              title: "Quantum Encryption",
              content: "Protects sensitive patient data from cyber threats"
            },
            {
              icon: <Lock size={24} />,
              title: "Zero-Knowledge Proofs",
              content: "Patients can share insights without revealing personal identity"
            },
            {
              icon: <Brain size={24} />,
              title: "AI-Powered Anonymisation",
              content: "Enables secure medical research & AI training without compromising privacy"
            },
          ]}
          outcome="Patients have complete control over their health records while ensuring ultra-secure, tamper-proof data protection."
        />
      </div>
    </section>
  );
};

export default ProcessStepsSection;
