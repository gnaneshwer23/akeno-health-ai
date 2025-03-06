
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FlaskConical, 
  Dna, 
  User, 
  ScanLine, 
  ClipboardList,
  ArrowRight
} from 'lucide-react';

const ApplicationCard = ({ 
  icon, 
  title, 
  description, 
  impact
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string[]; 
  impact: string;
}) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <Card className="border-none shadow-sm md:col-span-2">
      <CardHeader className="pb-2">
        <div className="h-12 w-12 rounded-full bg-health-primary/10 flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold text-health-dark">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-4">
          {description.map((item, index) => (
            <li key={index} className="text-health-dark/70 flex items-start">
              <span className="text-health-primary mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <CardDescription className="text-health-primary border-l-2 border-health-primary pl-3 font-medium mt-4">
          <strong>Impact:</strong> {impact}
        </CardDescription>
      </CardContent>
    </Card>
    
    <div className="bg-gradient-to-r from-indigo-100 to-blue-100 rounded-xl p-6 flex items-center justify-center">
      <div className="relative">
        {title.includes("Drug Discovery") && (
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 relative">
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-indigo-200 animate-pulse"></div>
              </div>
              <div className="absolute top-10 left-16 h-8 w-8 rounded-full bg-blue-300"></div>
              <div className="absolute top-24 left-8 h-6 w-6 rounded-full bg-purple-300"></div>
              <div className="absolute bottom-4 right-10 h-10 w-10 rounded-full bg-teal-300"></div>
              <svg className="absolute inset-0" width="160" height="160" viewBox="0 0 160 160">
                <path d="M80,30 Q120,60 100,100 T80,140" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="2" fill="none" />
                <path d="M80,30 Q40,70 60,120 T80,140" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <span className="text-sm font-medium text-indigo-800 mt-2">Molecular Simulation</span>
          </div>
        )}
        
        {title.includes("Multi-Omics") && (
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 relative">
              <Dna size={56} className="text-indigo-500 absolute top-2 left-16" />
              <div className="absolute top-20 left-0 right-0 flex justify-center">
                <div className="h-20 w-36 bg-blue-100 border border-blue-300 rounded-md flex items-center justify-center">
                  <span className="text-xs font-medium text-blue-700">Quantum Processing</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2">
                <div className="h-10 w-10 bg-green-100 border border-green-300 rounded-md flex items-center justify-center">
                  <span className="text-[10px] font-medium text-green-700">Genomics</span>
                </div>
                <div className="h-10 w-10 bg-purple-100 border border-purple-300 rounded-md flex items-center justify-center">
                  <span className="text-[10px] font-medium text-purple-700">Proteomics</span>
                </div>
                <div className="h-10 w-10 bg-amber-100 border border-amber-300 rounded-md flex items-center justify-center">
                  <span className="text-[10px] font-medium text-amber-700">Metabolomics</span>
                </div>
              </div>
              <svg className="absolute inset-0" width="160" height="160" viewBox="0 0 160 160">
                <path d="M42,100 L80,80 L118,100" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <span className="text-sm font-medium text-indigo-800 mt-2">Multi-Omics Analysis</span>
          </div>
        )}
        
        {title.includes("Personalized Medicine") && (
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 relative">
              <User size={24} className="text-indigo-500 absolute top-4 left-16" />
              <div className="absolute top-12 left-0 right-0 flex justify-center">
                <div className="h-6 w-36 bg-indigo-100 border border-indigo-300 rounded-md flex items-center justify-center">
                  <span className="text-[10px] font-medium text-indigo-700">Genetic Profile</span>
                </div>
              </div>
              <div className="absolute top-20 left-0 right-0 flex justify-center">
                <div className="h-6 w-36 bg-blue-100 border border-blue-300 rounded-md flex items-center justify-center">
                  <span className="text-[10px] font-medium text-blue-700">Medical History</span>
                </div>
              </div>
              <div className="absolute top-28 left-0 right-0 flex justify-center">
                <div className="h-6 w-36 bg-green-100 border border-green-300 rounded-md flex items-center justify-center">
                  <span className="text-[10px] font-medium text-green-700">Lifestyle Factors</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                <div className="h-8 w-36 bg-purple-200 border border-purple-400 rounded-md flex items-center justify-center">
                  <span className="text-[10px] font-medium text-purple-700">Optimized Treatment Plan</span>
                </div>
                <ArrowRight size={16} className="text-purple-700 absolute -bottom-6" />
              </div>
            </div>
            <span className="text-sm font-medium text-indigo-800 mt-6">Personalized Treatment</span>
          </div>
        )}
        
        {title.includes("AI-Enhanced Diagnostics") && (
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 relative">
              <div className="absolute inset-0 border-2 border-dashed border-indigo-300 rounded-md"></div>
              <div className="absolute top-4 left-4 h-16 w-32 rounded-md bg-blue-100 border border-blue-300 flex items-center justify-center">
                <ScanLine size={24} className="text-blue-600" />
              </div>
              <div className="absolute bottom-4 left-4 h-16 w-32 rounded-md bg-teal-100 border border-teal-300 flex items-center justify-center">
                <span className="text-xs font-medium text-teal-700">AI Analysis</span>
              </div>
              <svg className="absolute inset-0" width="160" height="160" viewBox="0 0 160 160">
                <path d="M36,62 L124,120" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="2" fill="none" stroke-dasharray="4 2" />
              </svg>
            </div>
            <span className="text-sm font-medium text-indigo-800 mt-2">Medical Imaging AI</span>
          </div>
        )}
        
        {title.includes("Clinical Trial") && (
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 relative">
              <div className="absolute top-2 left-2 h-36 w-36 border-2 border-indigo-300 rounded-lg flex flex-col">
                <div className="h-8 bg-indigo-200 flex items-center justify-center">
                  <span className="text-xs font-medium text-indigo-800">Clinical Trial Design</span>
                </div>
                <div className="flex-1 p-2">
                  <div className="h-2 w-full bg-gray-200 rounded-full mb-2">
                    <div className="h-2 bg-green-500 rounded-full" style={{width: '70%'}}></div>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full mb-2">
                    <div className="h-2 bg-blue-500 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full mb-2">
                    <div className="h-2 bg-purple-500 rounded-full" style={{width: '60%'}}></div>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <ClipboardList size={16} className="text-indigo-600" />
                    <div className="h-4 w-4 rounded-full bg-green-400"></div>
                  </div>
                </div>
              </div>
            </div>
            <span className="text-sm font-medium text-indigo-800 mt-2">Optimized Trials</span>
          </div>
        )}
      </div>
    </div>
  </div>
);

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
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
