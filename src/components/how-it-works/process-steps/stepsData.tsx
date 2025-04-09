
import React from 'react';
import { 
  Activity, Brain, Flask, Shield, Database, 
  Zap, HeartPulse, Link as LinkIcon, Lock
} from 'lucide-react';

export interface ProcessStep {
  id: string;
  title: string;
  tagline: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  color: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: "data-collection",
    title: "Real-Time Data Collection",
    tagline: "We start by listening to your body — continuously.",
    description: (
      <div className="space-y-3">
        <p className="text-muted-foreground">
          Akeno Health aggregates data from multiple sources to build a comprehensive picture of your health:
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 text-xs">•</span>
            </div>
            <span>Smart wearables (ECG, CGM, HR, Sleep, SpO₂)</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 text-xs">•</span>
            </div>
            <span>IoT medical devices (BP monitors, smart scales)</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 text-xs">•</span>
            </div>
            <span>Electronic Health Records (EHRs, labs, prescriptions)</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 text-xs">•</span>
            </div>
            <span>Multi-Omics data (genomics, microbiome, proteomics)</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 text-xs">•</span>
            </div>
            <span>Lifestyle & environment inputs (diet, stress, pollution)</span>
          </li>
        </ul>
        <p className="text-sm font-medium flex items-center gap-2 mt-3 text-blue-600">
          <Lock size={16} />
          All data is encrypted at source (end-to-end)
        </p>
      </div>
    ),
    icon: <Database size={24} />,
    color: "blue"
  },
  {
    id: "risk-detection",
    title: "AI-Powered Risk Detection & Early Warnings",
    tagline: "Before symptoms appear, our AI predicts risk.",
    description: (
      <div className="space-y-3">
        <p className="text-muted-foreground">
          Our AI continuously analyzes your health data to detect potential issues before they become serious:
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-xs">•</span>
            </div>
            <span>Real-time analysis of vitals & historical trends</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-xs">•</span>
            </div>
            <span>Polygenic risk scoring for disease predisposition</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-xs">•</span>
            </div>
            <span>AI flags deviations in health baselines and sends early alerts</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-xs">•</span>
            </div>
            <span>Use of federated learning to continuously improve without centralising data</span>
          </li>
        </ul>
      </div>
    ),
    icon: <Brain size={24} />,
    color: "indigo"
  },
  {
    id: "clinical-intelligence",
    title: "AI Clinical Intelligence & Doctor Insights",
    tagline: "AI becomes your doctor's co-pilot.",
    description: (
      <div className="space-y-3">
        <p className="text-muted-foreground">
          Akeno Health empowers healthcare providers with AI-powered clinical insights:
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
              <span className="text-purple-600 text-xs">•</span>
            </div>
            <span>Clinical Decision Support (CDS) during diagnosis</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
              <span className="text-purple-600 text-xs">•</span>
            </div>
            <span>Predictive treatment pathways based on real-world data</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
              <span className="text-purple-600 text-xs">•</span>
            </div>
            <span>NLP-powered literature review: AI cites guidelines & recent studies</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
              <span className="text-purple-600 text-xs">•</span>
            </div>
            <span>Drug-drug interaction alerts, allergy detection, dosing recommendations</span>
          </li>
        </ul>
      </div>
    ),
    icon: <HeartPulse size={24} />,
    color: "purple"
  },
  {
    id: "precision-treatment",
    title: "Precision Treatment & Digital Twin Simulation",
    tagline: "A treatment plan tested on your digital self first.",
    description: (
      <div className="space-y-3">
        <p className="text-muted-foreground">
          We create a personalized digital model of your health to simulate treatment options:
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
              <span className="text-cyan-600 text-xs">•</span>
            </div>
            <span>Your Digital Twin is created using genomics + medical + behavioural data</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
              <span className="text-cyan-600 text-xs">•</span>
            </div>
            <span>Simulates responses to different treatment options</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
              <span className="text-cyan-600 text-xs">•</span>
            </div>
            <span>AI suggests the optimal protocol (drug, dose, duration)</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
              <span className="text-cyan-600 text-xs">•</span>
            </div>
            <span>Adapts continuously with each new data point</span>
          </li>
        </ul>
      </div>
    ),
    icon: <Flask size={24} />,
    color: "cyan"
  },
  {
    id: "real-time-monitoring",
    title: "Real-Time Monitoring & Adaptive Care",
    tagline: "As you heal, the system evolves with you.",
    description: (
      <div className="space-y-3">
        <p className="text-muted-foreground">
          Akeno Health continuously monitors your health and adapts your care plan:
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
              <span className="text-teal-600 text-xs">•</span>
            </div>
            <span>AI monitors treatment response via wearables + biomarkers</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
              <span className="text-teal-600 text-xs">•</span>
            </div>
            <span>Auto-adjusts medication or notifies doctors in real-time</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
              <span className="text-teal-600 text-xs">•</span>
            </div>
            <span>Mental health, sleep, and nutrition tracked holistically</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
              <span className="text-teal-600 text-xs">•</span>
            </div>
            <span>Chronic condition coaching through conversational AI</span>
          </li>
        </ul>
      </div>
    ),
    icon: <Activity size={24} />,
    color: "teal"
  },
  {
    id: "clinical-trial",
    title: "Clinical Trial Matching & Research Acceleration",
    tagline: "You may be eligible for cutting-edge treatments before others.",
    description: (
      <div className="space-y-3">
        <p className="text-muted-foreground">
          Connect to breakthrough research and cutting-edge treatments:
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
              <span className="text-pink-600 text-xs">•</span>
            </div>
            <span>AI checks patient profiles against 10,000+ active trials</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
              <span className="text-pink-600 text-xs">•</span>
            </div>
            <span>Privacy-preserving federated trial matching</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
              <span className="text-pink-600 text-xs">•</span>
            </div>
            <span>For researchers: run simulations, stratify cohorts, design smarter studies</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
              <span className="text-pink-600 text-xs">•</span>
            </div>
            <span>Digital twins inform trial protocol design & real-world impact models</span>
          </li>
        </ul>
      </div>
    ),
    icon: <Zap size={24} />,
    color: "pink"
  },
  {
    id: "security",
    title: "Blockchain-Based Security & Global Interoperability",
    tagline: "You control your health data – always.",
    description: (
      <div className="space-y-3">
        <p className="text-muted-foreground">
          Your data remains secure, private, and completely under your control:
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <span className="text-amber-600 text-xs">•</span>
            </div>
            <span>All medical records stored in a Universal Health Record (UHR)</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <span className="text-amber-600 text-xs">•</span>
            </div>
            <span>Access managed by smart contracts & ZKPs (zero-knowledge proofs)</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <span className="text-amber-600 text-xs">•</span>
            </div>
            <span>Interoperability with systems across countries (FHIR, HL7, DICOM)</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <span className="text-amber-600 text-xs">•</span>
            </div>
            <span>Full GDPR/HIPAA/ICMR compliance</span>
          </li>
        </ul>
      </div>
    ),
    icon: <Shield size={24} />,
    color: "amber"
  },
];
