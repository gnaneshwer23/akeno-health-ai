
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FlaskConical, 
  Dna, 
  User, 
  ScanLine, 
  ClipboardList,
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
          <h2 className="text-3xl font-bold text-health-dark mb-4">Key Quantum Computing Applications in Akeno Health AI</h2>
          <p className="text-lg text-health-dark/70 max-w-3xl mx-auto">
            Discover how we're leveraging quantum computing to revolutionize healthcare across multiple domains.
          </p>
        </div>
        
        <Tabs defaultValue="drug-discovery" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="drug-discovery">Drug Discovery</TabsTrigger>
            <TabsTrigger value="multi-omics">Multi-Omics Analysis</TabsTrigger>
            <TabsTrigger value="personalized-medicine">Personalized Medicine</TabsTrigger>
            <TabsTrigger value="diagnostics">AI Diagnostics</TabsTrigger>
            <TabsTrigger value="clinical-trials">Clinical Trials</TabsTrigger>
          </TabsList>
          
          <TabsContent value="drug-discovery" className="pt-2">
            <ApplicationCard 
              icon={<FlaskConical size={24} className="text-health-primary" />}
              title="Quantum-Accelerated Drug Discovery"
              description={[
                "Traditional drug discovery takes years due to the complexity of molecular simulations.",
                "Quantum computing enables real-time simulation of molecular interactions, drastically reducing the time required to identify effective drug compounds."
              ]}
              impact="Faster drug development cycles and reduced research costs, accelerating FDA approvals and bringing novel therapies to market more efficiently."
              diagram={<DrugDiscoveryDiagram />}
            />
          </TabsContent>
          
          <TabsContent value="multi-omics" className="pt-2">
            <ApplicationCard 
              icon={<Dna size={24} className="text-health-primary" />}
              title="Multi-Omics Analysis & Biomarker Discovery"
              description={[
                "Quantum AI processes vast genomic, proteomic, and metabolomic datasets in seconds.",
                "It identifies novel biomarkers for early disease detection by correlating complex biological variables that classical computing struggles to analyze."
              ]}
              impact="More accurate disease predictions and precision treatment plans tailored to an individual's genetic and immune profile."
              diagram={<MultiOmicsDiagram />}
            />
          </TabsContent>
          
          <TabsContent value="personalized-medicine" className="pt-2">
            <ApplicationCard 
              icon={<User size={24} className="text-health-primary" />}
              title="Personalized Medicine & Quantum Optimization"
              description={[
                "Every patient's response to treatment is unique, requiring vast computational power to assess individual treatment strategies.",
                "Quantum AI enhances multi-dimensional patient modeling, optimizing personalized treatment plans based on genetics, lifestyle, and disease progression."
              ]}
              impact="Fewer side effects, higher treatment efficacy, and better patient outcomes through quantum-powered precision medicine."
              diagram={<PersonalizedMedicineDiagram />}
            />
          </TabsContent>
          
          <TabsContent value="diagnostics" className="pt-2">
            <ApplicationCard 
              icon={<ScanLine size={24} className="text-health-primary" />}
              title="AI-Enhanced Diagnostics & Medical Imaging"
              description={[
                "Quantum AI enhances pattern recognition in MRI, CT scans, and pathology reports, improving diagnostic accuracy.",
                "It enables rapid anomaly detection in large medical datasets, allowing for earlier and more accurate disease diagnoses."
              ]}
              impact="Early-stage cancer detection, improved radiology workflows, and enhanced AI-powered diagnostics."
              diagram={<AIDiagnosticsDiagram />}
            />
          </TabsContent>
          
          <TabsContent value="clinical-trials" className="pt-2">
            <ApplicationCard 
              icon={<ClipboardList size={24} className="text-health-primary" />}
              title="Quantum-Powered Clinical Trial Optimization"
              description={[
                "Clinical trials are expensive and time-consuming due to the complexities of patient recruitment and trial design.",
                "Quantum computing can simulate thousands of patient responses and predict optimal trial designs, reducing failure rates."
              ]}
              impact="Faster, more cost-effective trials leading to quicker availability of life-saving treatments."
              diagram={<ClinicalTrialsDiagram />}
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
