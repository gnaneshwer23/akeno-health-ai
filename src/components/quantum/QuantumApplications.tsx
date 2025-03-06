
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FlaskConical, 
  Dna, 
  User, 
  ScanLine, 
  ClipboardList 
} from 'lucide-react';

const ApplicationCard = ({ 
  icon, 
  title, 
  description, 
  example 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  example: string;
}) => (
  <Card className="border-none shadow-sm hover:shadow-md transition-shadow h-full">
    <CardHeader className="pb-2">
      <div className="h-12 w-12 rounded-full bg-health-primary/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <CardTitle className="text-xl font-bold text-health-dark">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-health-dark/70 mb-4">{description}</p>
      <CardDescription className="text-health-primary border-l-2 border-health-primary pl-3 italic">
        <strong>Example:</strong> {example}
      </CardDescription>
    </CardContent>
  </Card>
);

export const QuantumApplications = () => {
  return (
    <section className="mb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-health-dark mb-4">Akeno Health AI's Quantum Computing Integration</h2>
          <p className="text-lg text-health-dark/70 max-w-3xl mx-auto">
            Discover how we're leveraging quantum computing to revolutionize healthcare across multiple domains.
          </p>
        </div>
        
        <Tabs defaultValue="drug-discovery" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="drug-discovery">Drug Discovery</TabsTrigger>
            <TabsTrigger value="genomics">Genomics</TabsTrigger>
            <TabsTrigger value="personalized-medicine">Personalized Medicine</TabsTrigger>
            <TabsTrigger value="diagnostics">Diagnostics</TabsTrigger>
            <TabsTrigger value="clinical-trials">Clinical Trials</TabsTrigger>
          </TabsList>
          
          <TabsContent value="drug-discovery" className="pt-2">
            <ApplicationCard 
              icon={<FlaskConical size={24} className="text-health-primary" />}
              title="Quantum-Accelerated Drug Discovery"
              description="Traditional drug discovery takes years due to complex molecular simulations. Quantum computing simulates molecular interactions in real-time, drastically reducing the time required to identify promising drug candidates."
              example="Quantum AI can model how potential drugs bind to proteins, accelerating the development of treatments for diseases like cancer and neurodegenerative disorders."
            />
          </TabsContent>
          
          <TabsContent value="genomics" className="pt-2">
            <ApplicationCard 
              icon={<Dna size={24} className="text-health-primary" />}
              title="Genomic & Multi-Omics Analysis"
              description="Genomic research involves analyzing billions of DNA base pairs, a computationally heavy task. Quantum computing enhances DNA sequencing and mutation analysis, identifying disease markers faster than classical computers."
              example="It enables multi-omics data integration, combining genomics, transcriptomics, and proteomics to provide a holistic view of a patient's health."
            />
          </TabsContent>
          
          <TabsContent value="personalized-medicine" className="pt-2">
            <ApplicationCard 
              icon={<User size={24} className="text-health-primary" />}
              title="Personalized Medicine with Quantum AI"
              description="Every patient's body responds differently to treatments. Quantum AI allows hyper-personalized medicine by analyzing a patient's genetic, epigenetic, and environmental data to tailor treatments accordingly."
              example="Quantum-powered AI models predict drug responses, reducing side effects and optimizing treatment plans for individual patients."
            />
          </TabsContent>
          
          <TabsContent value="diagnostics" className="pt-2">
            <ApplicationCard 
              icon={<ScanLine size={24} className="text-health-primary" />}
              title="AI-Powered Diagnostics & Imaging"
              description="Medical imaging and diagnostics generate vast amounts of data that require advanced AI models for interpretation. Quantum computing enhances image analysis, anomaly detection, and pattern recognition in MRIs, CT scans, and pathology slides."
              example="Faster processing means earlier and more accurate diagnoses, improving patient outcomes through rapid detection of conditions like cancer or cardiovascular diseases."
            />
          </TabsContent>
          
          <TabsContent value="clinical-trials" className="pt-2">
            <ApplicationCard 
              icon={<ClipboardList size={24} className="text-health-primary" />}
              title="Optimization of Clinical Trials"
              description="Clinical trials are expensive and time-consuming due to the large datasets involved. Quantum AI optimizes trial designs by simulating thousands of potential patient responses and selecting the most effective trial parameters."
              example="This reduces trial failure rates and speeds up the development of new therapies by predicting outcomes and identifying optimal patient cohorts."
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
