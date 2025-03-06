
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FlaskConical, 
  Dna, 
  User, 
  ScanLine, 
  ClipboardList,
  ArrowRight,
  Atom,
  Zap,
  MicroscopeIcon,
  Workflow,
  BrainCircuit,
  Network,
  Pill,
  Syringe,
  BarChart4
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
      {/* Drug Discovery Diagram */}
      {title.includes("Drug Discovery") && (
        <div className="flex flex-col items-center">
          <div className="w-full h-40 relative">
            {/* Central atom with electron orbits */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <Atom size={32} className="text-blue-600" />
                {/* Electron orbits with molecules */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute w-28 h-28 rounded-full border border-dashed border-indigo-300 animate-spin" style={{animationDuration: '20s'}} />
                  <div className="absolute w-20 h-20 rounded-full border border-dashed border-blue-300 animate-spin" style={{animationDuration: '15s', transform: 'rotate(45deg)'}} />
                  <div className="absolute w-12 h-12 rounded-full border border-dashed border-purple-300 animate-spin" style={{animationDuration: '10s', transform: 'rotate(90deg)'}} />
                </div>
                
                {/* Molecules at orbit points */}
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                  <FlaskConical size={16} className="text-purple-600" />
                </div>
                <div className="absolute top-2 -right-14">
                  <Pill size={16} className="text-green-600" />
                </div>
                <div className="absolute bottom-2 -right-12">
                  <MicroscopeIcon size={16} className="text-amber-600" />
                </div>
                <div className="absolute bottom-2 -left-12">
                  <Syringe size={16} className="text-red-600" />
                </div>
              </div>
            </div>
            
            {/* Processing arrows and quantum notes */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
              <div className="bg-blue-600/10 px-3 py-1 rounded-lg text-xs font-medium text-blue-800 flex items-center">
                <Zap size={12} className="mr-1" /> Quantum Acceleration
              </div>
            </div>
          </div>
          <span className="text-sm font-medium text-indigo-800 mt-2 text-center">
            Quantum-powered molecular modeling<br/>10,000x faster simulations
          </span>
        </div>
      )}
      
      {/* Multi-Omics Analysis Diagram */}
      {title.includes("Multi-Omics") && (
        <div className="flex flex-col items-center">
          <div className="w-full h-40 relative">
            {/* Network of interconnected data nodes */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-32 h-32">
                {/* Central brain node */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <BrainCircuit size={28} className="text-purple-600" />
                </div>
                
                {/* Data nodes */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="h-8 w-20 bg-blue-100 border border-blue-300 rounded-md flex items-center justify-center">
                    <span className="text-[10px] font-medium text-blue-700">Genomics</span>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="h-8 w-20 bg-green-100 border border-green-300 rounded-md flex items-center justify-center">
                    <span className="text-[10px] font-medium text-green-700">Proteomics</span>
                  </div>
                </div>
                
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
                  <div className="h-8 w-20 bg-amber-100 border border-amber-300 rounded-md flex items-center justify-center">
                    <span className="text-[10px] font-medium text-amber-700">Metabolomics</span>
                  </div>
                </div>
                
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
                  <div className="h-8 w-20 bg-red-100 border border-red-300 rounded-md flex items-center justify-center">
                    <span className="text-[10px] font-medium text-red-700">Transcriptomics</span>
                  </div>
                </div>
                
                {/* Connection lines with animation */}
                <svg className="absolute inset-0 z-0" width="100%" height="100%" viewBox="0 0 128 128">
                  <path d="M64,16 L64,64" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="2" strokeDasharray="3 2">
                    <animate attributeName="stroke-dashoffset" from="5" to="0" dur="2s" repeatCount="indefinite" />
                  </path>
                  <path d="M64,112 L64,64" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="2" strokeDasharray="3 2">
                    <animate attributeName="stroke-dashoffset" from="5" to="0" dur="2s" repeatCount="indefinite" />
                  </path>
                  <path d="M16,64 L64,64" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="2" strokeDasharray="3 2">
                    <animate attributeName="stroke-dashoffset" from="5" to="0" dur="2s" repeatCount="indefinite" />
                  </path>
                  <path d="M112,64 L64,64" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="2" strokeDasharray="3 2">
                    <animate attributeName="stroke-dashoffset" from="5" to="0" dur="2s" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>
            </div>
            
            {/* Quantum computing label */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
              <div className="bg-purple-600/10 px-3 py-1 rounded-lg text-xs font-medium text-purple-800 flex items-center">
                <Network size={12} className="mr-1" /> Quantum Pattern Recognition
              </div>
            </div>
          </div>
          <span className="text-sm font-medium text-indigo-800 mt-2 text-center">
            Integrated multi-dimensional analysis<br/>Correlation across biological datasets
          </span>
        </div>
      )}
      
      {/* Personalized Medicine Diagram */}
      {title.includes("Personalized Medicine") && (
        <div className="flex flex-col items-center">
          <div className="w-full h-40 relative">
            {/* Patient silhouette with overlaid layers */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Patient silhouette background */}
                <div className="w-20 h-36 bg-indigo-50 rounded-full mx-auto opacity-50"></div>
                
                {/* Central patient icon */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                  <User size={32} className="text-indigo-600" />
                </div>
                
                {/* Data layers with glow effects */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-28 h-28 rounded-full border-2 border-dashed border-blue-300 opacity-60 animate-pulse"></div>
                  <div className="w-24 h-24 rounded-full border-2 border-dashed border-green-300 opacity-60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" 
                       style={{animationDelay: '0.5s'}}></div>
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-purple-300 opacity-60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
                       style={{animationDelay: '1s'}}></div>
                </div>
                
                {/* Data point nodes around patient */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                  <div className="h-6 w-16 bg-blue-100 border border-blue-300 rounded-md flex items-center justify-center">
                    <span className="text-[8px] font-medium text-blue-700">Genomic Data</span>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                  <div className="h-6 w-16 bg-green-100 border border-green-300 rounded-md flex items-center justify-center">
                    <span className="text-[8px] font-medium text-green-700">Medical History</span>
                  </div>
                </div>
                
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                  <div className="h-6 w-16 bg-purple-100 border border-purple-300 rounded-md flex items-center justify-center">
                    <span className="text-[8px] font-medium text-purple-700">Biomarkers</span>
                  </div>
                </div>
                
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                  <div className="h-6 w-16 bg-amber-100 border border-amber-300 rounded-md flex items-center justify-center">
                    <span className="text-[8px] font-medium text-amber-700">Lifestyle</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Treatment recommendation label */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
              <div className="bg-indigo-600/10 px-3 py-1 rounded-lg text-xs font-medium text-indigo-800 flex items-center">
                <Pill size={12} className="mr-1" /> Optimized Treatment
              </div>
            </div>
          </div>
          <span className="text-sm font-medium text-indigo-800 mt-2 text-center">
            Quantum-enhanced precision matching<br/>Patient-specific treatment optimization
          </span>
        </div>
      )}
      
      {/* AI Diagnostics Diagram */}
      {title.includes("AI-Enhanced Diagnostics") && (
        <div className="flex flex-col items-center">
          <div className="w-full h-40 relative">
            {/* Medical scan with AI analysis overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Image frame */}
              <div className="w-32 h-32 border-2 border-blue-300 rounded-md bg-blue-50 relative overflow-hidden">
                {/* Scan graphic - simplified brain scan look */}
                <div className="absolute inset-2 bg-black/5 rounded">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-blue-200/50 relative">
                      <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-blue-300/70"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-4 h-4 rounded-full bg-red-300/70 animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                {/* AI analysis overlay */}
                <div className="absolute inset-0">
                  {/* Scanning line animation */}
                  <div className="absolute left-0 right-0 h-0.5 bg-green-400 animate-[scan_3s_ease-in-out_infinite]" 
                       style={{"--scan-y": "0%", "--scan-y-end": "100%"} as any}></div>
                  
                  {/* Target markers */}
                  <div className="absolute top-1/4 left-1/4 w-8 h-8">
                    <div className="w-full h-full border border-green-400 rounded-sm opacity-70"></div>
                    <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-green-400"></div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-green-400"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-green-400"></div>
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-green-400"></div>
                  </div>
                  
                  {/* Alert marker */}
                  <div className="absolute bottom-1/4 right-1/4 w-6 h-6">
                    <div className="w-full h-full border border-red-400 rounded-sm opacity-70 animate-pulse"></div>
                    <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-red-400"></div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-red-400"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-red-400"></div>
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-red-400"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Data analysis and prediction labels */}
            <div className="absolute top-1 left-0 right-0 flex justify-center">
              <div className="bg-blue-600/10 px-3 py-1 rounded-lg text-xs font-medium text-blue-800 flex items-center">
                <ScanLine size={12} className="mr-1" /> Enhanced Imaging
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
              <div className="bg-green-600/10 px-3 py-1 rounded-lg text-xs font-medium text-green-800 flex items-center">
                <BrainCircuit size={12} className="mr-1" /> Quantum AI Analysis
              </div>
            </div>
          </div>
          <span className="text-sm font-medium text-indigo-800 mt-2 text-center">
            Pattern recognition at quantum scale<br/>Early disease detection & characterization
          </span>
        </div>
      )}
      
      {/* Clinical Trial Diagram */}
      {title.includes("Clinical Trial") && (
        <div className="flex flex-col items-center">
          <div className="w-full h-40 relative">
            {/* Clinical trial optimization visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-32">
                {/* Main framework */}
                <div className="h-32 w-full border-2 border-indigo-300 rounded-lg bg-indigo-50 flex flex-col">
                  {/* Header */}
                  <div className="h-8 bg-indigo-200 rounded-t-md flex items-center justify-center">
                    <span className="text-xs font-medium text-indigo-800">Trial Optimization</span>
                  </div>
                  
                  {/* Content area */}
                  <div className="flex-1 p-2 relative">
                    {/* Patient cohort visualization */}
                    <div className="absolute top-2 left-2 right-2 flex space-x-1">
                      <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                      <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                      <div className="h-3 w-3 rounded-full bg-purple-400"></div>
                      <div className="h-3 w-3 rounded-full bg-green-400"></div>
                      <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                      <div className="h-3 w-3 rounded-full bg-purple-400"></div>
                    </div>
                    
                    {/* Treatment paths visualization */}
                    <div className="absolute top-7 left-2 right-2">
                      <div className="h-12 w-full flex">
                        {/* Path A */}
                        <div className="flex-1 flex flex-col items-center">
                          <div className="h-2 w-full bg-blue-200 mb-1"></div>
                          <div className="h-2 w-full bg-blue-300 mb-1"></div>
                          <div className="h-2 w-full bg-blue-400 mb-1"></div>
                          <div className="h-2 w-full bg-green-500"></div>
                        </div>
                        
                        {/* Path B */}
                        <div className="flex-1 flex flex-col items-center mx-1">
                          <div className="h-2 w-full bg-purple-200 mb-1"></div>
                          <div className="h-2 w-full bg-purple-300 mb-1"></div>
                          <div className="h-2 w-full bg-red-400 mb-1"></div>
                          <div className="h-2 w-full bg-red-500"></div>
                        </div>
                        
                        {/* Path C - optimized path */}
                        <div className="flex-1 flex flex-col items-center relative">
                          <div className="h-2 w-full bg-green-200 mb-1"></div>
                          <div className="h-2 w-full bg-green-300 mb-1"></div>
                          <div className="h-2 w-full bg-green-400 mb-1"></div>
                          <div className="h-2 w-full bg-green-500"></div>
                          <div className="absolute -right-2 -top-1 h-4 w-4 rounded-full bg-green-100 border border-green-500 flex items-center justify-center">
                            <span className="text-[8px] text-green-700">✓</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Success metrics */}
                    <div className="absolute bottom-1 left-2 right-2 flex justify-between items-center">
                      <BarChart4 size={14} className="text-indigo-600" />
                      <div className="text-[8px] font-medium text-indigo-800">Efficacy +68%</div>
                    </div>
                  </div>
                </div>
                
                {/* Quantum computing process indicator */}
                <div className="absolute -right-4 -bottom-2 h-6 w-6 rounded-full bg-indigo-100 border border-indigo-400 flex items-center justify-center">
                  <Atom size={14} className="text-indigo-600" />
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
              <div className="bg-indigo-600/10 px-3 py-1 rounded-lg text-xs font-medium text-indigo-800 flex items-center">
                <ClipboardList size={12} className="mr-1" /> Quantum-Optimized Trials
              </div>
            </div>
          </div>
          <span className="text-sm font-medium text-indigo-800 mt-2 text-center">
            Trial simulation & optimization<br/>Reduced failure rates & development time
          </span>
        </div>
      )}
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

