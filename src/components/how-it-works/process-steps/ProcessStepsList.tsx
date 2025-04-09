
import React from 'react';
import ProcessStep from '../ProcessStep';
import { processSteps } from './stepsData';
import { motion } from 'framer-motion';
import { Database, Brain, HeartPulse, FlaskConical, Activity, Zap, Shield } from 'lucide-react';

const ProcessStepsList: React.FC = () => {
  // Define feature arrays and outcomes for each step
  const stepFeatureData = [
    {
      features: [
        {
          icon: <Database size={20} />,
          content: "Smart wearables (ECG, CGM, HR, Sleep, SpO₂)"
        },
        {
          icon: <Database size={20} />,
          content: "IoT medical devices (BP monitors, smart scales)"
        },
        {
          icon: <Database size={20} />,
          content: "Electronic Health Records (EHRs, labs, prescriptions)"
        },
        {
          icon: <Database size={20} />,
          content: "Multi-Omics data (genomics, microbiome, proteomics)"
        }
      ],
      outcome: "A comprehensive, real-time, and secure data foundation that gives our AI a complete picture of your health."
    },
    {
      features: [
        {
          icon: <Brain size={20} />,
          content: "Real-time analysis of vitals & historical trends"
        },
        {
          icon: <Brain size={20} />,
          content: "Polygenic risk scoring for disease predisposition"
        },
        {
          icon: <Brain size={20} />,
          content: "AI flags deviations in health baselines and sends early alerts"
        },
        {
          icon: <Brain size={20} />,
          content: "Use of federated learning to continuously improve without centralising data"
        }
      ],
      outcome: "Early identification of potential health issues before symptoms appear, enabling preventative intervention."
    },
    {
      features: [
        {
          icon: <HeartPulse size={20} />,
          content: "Clinical Decision Support (CDS) during diagnosis"
        },
        {
          icon: <HeartPulse size={20} />,
          content: "Predictive treatment pathways based on real-world data"
        },
        {
          icon: <HeartPulse size={20} />,
          content: "NLP-powered literature review of guidelines & studies"
        },
        {
          icon: <HeartPulse size={20} />,
          content: "Drug-drug interaction alerts and dosing recommendations"
        }
      ],
      outcome: "Enhanced diagnostic accuracy and personalized treatment plans backed by the latest medical evidence."
    },
    {
      features: [
        {
          icon: <FlaskConical size={20} />,
          content: "Digital Twin created using genomics + medical + behavioural data"
        },
        {
          icon: <FlaskConical size={20} />,
          content: "Simulates responses to different treatment options"
        },
        {
          icon: <FlaskConical size={20} />,
          content: "AI suggests optimal protocol (drug, dose, duration)"
        },
        {
          icon: <FlaskConical size={20} />,
          content: "Adapts continuously with each new data point"
        }
      ],
      outcome: "Safer, more effective treatment plans tailored to your unique physiology and health needs."
    },
    {
      features: [
        {
          icon: <Activity size={20} />,
          content: "AI monitors treatment response via wearables + biomarkers"
        },
        {
          icon: <Activity size={20} />,
          content: "Auto-adjusts medication or notifies doctors in real-time"
        },
        {
          icon: <Activity size={20} />,
          content: "Mental health, sleep, and nutrition tracked holistically"
        },
        {
          icon: <Activity size={20} />,
          content: "Chronic condition coaching through conversational AI"
        }
      ],
      outcome: "Continuous optimization of your care plan based on your real-time response to treatments."
    },
    {
      features: [
        {
          icon: <Zap size={20} />,
          content: "AI checks patient profiles against 10,000+ active trials"
        },
        {
          icon: <Zap size={20} />,
          content: "Privacy-preserving federated trial matching"
        },
        {
          icon: <Zap size={20} />,
          content: "For researchers: run simulations and design smarter studies"
        },
        {
          icon: <Zap size={20} />,
          content: "Digital twins inform trial protocol design & impact models"
        }
      ],
      outcome: "Access to cutting-edge treatments and contribution to medical research while maintaining privacy."
    },
    {
      features: [
        {
          icon: <Shield size={20} />,
          content: "All medical records stored in a Universal Health Record (UHR)"
        },
        {
          icon: <Shield size={20} />,
          content: "Access managed by smart contracts & zero-knowledge proofs"
        },
        {
          icon: <Shield size={20} />,
          content: "Interoperability with systems across countries (FHIR, HL7, DICOM)"
        },
        {
          icon: <Shield size={20} />,
          content: "Full GDPR/HIPAA/ICMR compliance"
        }
      ],
      outcome: "Complete control over your health data with seamless sharing between healthcare providers worldwide."
    },
  ];

  return (
    <div className="space-y-16">
      {processSteps.map((step, index) => (
        <motion.div
          key={step.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.7,
            delay: index * 0.1,
            ease: "easeOut"
          }}
        >
          <ProcessStep
            stepNumber={index + 1}
            title={step.title}
            description={step.tagline}
            icon={step.icon}
            features={stepFeatureData[index].features}
            outcome={stepFeatureData[index].outcome}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ProcessStepsList;
