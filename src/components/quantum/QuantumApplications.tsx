
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FlaskConical, 
  Dna, 
  User, 
  ScanLine, 
  ClipboardList,
  Lock
} from 'lucide-react';

import { ApplicationCard } from './ApplicationCard';
import { DrugDiscoveryDiagram } from './diagrams/DrugDiscoveryDiagram';
import { MultiOmicsDiagram } from './diagrams/MultiOmicsDiagram';
import { PersonalizedMedicineDiagram } from './diagrams/PersonalizedMedicineDiagram';
import { AIDiagnosticsDiagram } from './diagrams/AIDiagnosticsDiagram';
import { ClinicalTrialsDiagram } from './diagrams/ClinicalTrialsDiagram';

export const QuantumApplications = () => {
  return (
    <section className="mb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">Key Quantum Computing Applications in Akeno Health AI</h2>
          <p className="text-lg text-health-dark/70 max-w-3xl mx-auto">
            Discover how we're leveraging quantum computing to revolutionize healthcare across multiple domains, from drug discovery to secure patient data exchange.
          </p>
        </div>
        
        <Tabs defaultValue="drug-discovery" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 bg-purple-100/50">
            <TabsTrigger value="drug-discovery" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">Drug Discovery</TabsTrigger>
            <TabsTrigger value="multi-omics" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">Multi-Omics Analysis</TabsTrigger>
            <TabsTrigger value="personalized-medicine" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">Personalized Medicine</TabsTrigger>
            <TabsTrigger value="diagnostics" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">AI Diagnostics</TabsTrigger>
            <TabsTrigger value="clinical-trials" className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white">Clinical Trials</TabsTrigger>
          </TabsList>
          
          <TabsContent value="drug-discovery" className="pt-2">
            <ApplicationCard 
              icon={<FlaskConical size={24} className="text-purple-600" />}
              title="Quantum-Powered Drug Discovery & Molecular Simulations"
              description={[
                "Simulates molecular interactions in minutes, drastically accelerating drug R&D that would take traditional supercomputers years to process.",
                "Identifies new drug candidates for complex diseases previously considered 'undruggable', predicting chemical properties and reducing trial-and-error lab testing.",
                "Enhances precision medicine by modeling how drugs will interact with different genetic profiles across various patient populations."
              ]}
              impact="Powering the next breakthrough therapies for cancer, Alzheimer's, autoimmune diseases, and rare genetic disorders while slashing drug development costs by billions."
              diagram={<DrugDiscoveryDiagram />}
              gradient="from-purple-100 to-blue-100"
            />
          </TabsContent>
          
          <TabsContent value="multi-omics" className="pt-2">
            <ApplicationCard 
              icon={<Dna size={24} className="text-blue-600" />}
              title="AI & Quantum for Predictive Healthcare & Disease Modeling"
              description={[
                "Ultra-accurate disease forecasting by analyzing entire human genomes and their interactions with environmental factors.",
                "Hyper-personalized risk assessments for diseases like cancer, heart disease, and diabetes through quantum-powered biomarker discovery.",
                "Real-time AI modeling of how lifestyle, genetics, and environment interact to influence health outcomes before symptoms appear."
              ]}
              impact="Redefining personalized medicine by enabling proactive rather than reactive healthcare, identifying signals of disease through quantum-accelerated biomarker discovery."
              diagram={<MultiOmicsDiagram />}
              gradient="from-blue-100 to-indigo-100"
            />
          </TabsContent>
          
          <TabsContent value="personalized-medicine" className="pt-2">
            <ApplicationCard 
              icon={<User size={24} className="text-green-600" />}
              title="Transforming the Future of Personalized Medicine"
              description={[
                "Shifting healthcare from reactive to predictive by simulating patient-specific disease progression to recommend preventive lifestyle changes.",
                "Designing fully individualized treatment plans based on genetics, microbiome, and real-time health data with quantum-enhanced precision.",
                "Predicting patient reactions to drugs before prescribing them, reducing side effects and optimizing dosing based on metabolism for maximum efficacy."
              ]}
              impact="Creating a future where treatments are tailored to individual biology, dramatically improving outcomes and reducing healthcare costs through precision medicine."
              diagram={<PersonalizedMedicineDiagram />}
              gradient="from-green-100 to-emerald-100"
            />
          </TabsContent>
          
          <TabsContent value="diagnostics" className="pt-2">
            <ApplicationCard 
              icon={<ScanLine size={24} className="text-amber-600" />}
              title="AI-Enhanced Diagnostics & Medical Imaging"
              description={[
                "Quantum AI enhances pattern recognition in MRI, CT scans, and pathology reports, improving diagnostic accuracy beyond human capabilities.",
                "It enables rapid anomaly detection in large medical datasets, allowing for earlier and more accurate disease diagnoses.",
                "Quantum algorithms can process and analyze complex 3D medical imaging data in real-time, identifying subtle patterns invisible to traditional methods."
              ]}
              impact="Early-stage cancer detection, improved radiology workflows, and enhanced AI-powered diagnostics that can save countless lives through earlier intervention."
              diagram={<AIDiagnosticsDiagram />}
              gradient="from-amber-100 to-yellow-100"
            />
          </TabsContent>
          
          <TabsContent value="clinical-trials" className="pt-2">
            <ApplicationCard 
              icon={<ClipboardList size={24} className="text-indigo-600" />}
              title="Quantum-Powered Clinical Trial Optimization"
              description={[
                "Clinical trials are expensive and time-consuming due to the complexities of patient recruitment and trial design.",
                "Quantum computing can simulate thousands of patient responses and predict optimal trial designs, reducing failure rates.",
                "AI-powered matching connects patients with the most suitable trials while quantum algorithms optimize protocol design to maximize success rates."
              ]}
              impact="Faster, more cost-effective trials leading to quicker availability of life-saving treatments and unprecedented access to cutting-edge therapies for patients."
              diagram={<ClinicalTrialsDiagram />}
              gradient="from-indigo-100 to-purple-100"
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
