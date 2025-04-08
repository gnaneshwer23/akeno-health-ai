import React from 'react';
import { useAuth } from '@/contexts/auth/useAuth';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User,
  Award,
  BookText,
  FileCheck,
  Landmark,
  PenLine,
  Download,
  ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';

const ResearcherProfile = () => {
  const { user } = useAuth();

  return (
    <motion.div 
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h1 className="text-3xl font-medium text-health-dark">Researcher Profile</h1>
        <p className="text-muted-foreground">Manage your research credentials, publications, and affiliations</p>
      </div>

      {/* Profile Overview */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle>Researcher Information</CardTitle>
          <CardDescription>View and edit your professional details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="h-32 w-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-medium">
                    {user?.name?.substring(0, 1) || 'R'}
                  </div>
                  <Button variant="outline" size="sm" className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0">
                    <PenLine size={14} />
                  </Button>
                </div>
                <h2 className="mt-4 text-xl font-medium">{user?.name || 'Researcher'}</h2>
                <p className="text-muted-foreground">{user?.email}</p>
                <div className="mt-2 flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline" className="bg-blue-50">Bioinformatics</Badge>
                  <Badge variant="outline" className="bg-green-50">Genomics</Badge>
                  <Badge variant="outline" className="bg-purple-50">AI Research</Badge>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium flex items-center gap-2">
                    <User size={18} className="text-health-primary" />
                    Bio & Specialization
                  </h3>
                  <p className="mt-1 text-sm">
                    Leading researcher in AI-driven genomic analysis and precision medicine with focus on 
                    multi-omics data integration for treatment optimization and early disease detection.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium flex items-center gap-2">
                    <Award size={18} className="text-health-primary" />
                    Affiliations
                  </h3>
                  <ul className="mt-1 text-sm space-y-1">
                    <li className="flex items-center justify-between">
                      <span>Stanford Medical Genomics Research Institute</span>
                      <Badge>Primary</Badge>
                    </li>
                    <li>Harvard Computational Biology Consortium</li>
                    <li>International Society for Computational Biology</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium flex items-center gap-2">
                    <Landmark size={18} className="text-health-primary" />
                    Education
                  </h3>
                  <ul className="mt-1 text-sm space-y-1">
                    <li>Ph.D. in Computational Biology, Stanford University</li>
                    <li>M.S. in Biomedical Informatics, MIT</li>
                    <li>B.S. in Computer Science and Biology, UC Berkeley</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">Edit Profile</Button>
        </CardFooter>
      </Card>

      {/* Research Tabs */}
      <Tabs defaultValue="publications">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="publications">Publications</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
          <TabsTrigger value="funding">Funding & Grants</TabsTrigger>
          <TabsTrigger value="patents">Patents</TabsTrigger>
        </TabsList>
        
        <TabsContent value="publications" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Published Research</CardTitle>
                <Button variant="outline" size="sm">
                  <PenLine size={14} className="mr-2" />
                  Add Publication
                </Button>
              </div>
              <CardDescription>
                Your peer-reviewed publications and research papers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">AI-Driven Biomarker Discovery for Early Cancer Detection</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Journal of Computational Biology (2023)
                      </p>
                      <div className="flex items-center mt-2">
                        <Badge variant="outline" className="mr-2">Citation: 76</Badge>
                        <Badge variant="outline">Impact Factor: 8.2</Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Download size={14} className="mr-1" />
                        PDF
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ExternalLink size={14} className="mr-1" />
                        View
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">Multi-omics Integration for Precision Medicine: A Deep Learning Approach</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Nature Biotechnology (2022)
                      </p>
                      <div className="flex items-center mt-2">
                        <Badge variant="outline" className="mr-2">Citation: 142</Badge>
                        <Badge variant="outline">Impact Factor: 12.9</Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Download size={14} className="mr-1" />
                        PDF
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ExternalLink size={14} className="mr-1" />
                        View
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">Quantum Computing Applications in Protein Folding Prediction</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Science (2021)
                      </p>
                      <div className="flex items-center mt-2">
                        <Badge variant="outline" className="mr-2">Citation: 203</Badge>
                        <Badge variant="outline">Impact Factor: 41.8</Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Download size={14} className="mr-1" />
                        PDF
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ExternalLink size={14} className="mr-1" />
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View All Publications</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="certifications" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Ethical Compliance & Certifications</CardTitle>
                <Button variant="outline" size="sm">
                  <PenLine size={14} className="mr-2" />
                  Add Certificate
                </Button>
              </div>
              <CardDescription>
                Your research ethics certifications and compliance records
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 mr-3">
                        <FileCheck size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium">Human Subjects Research Ethics</h3>
                        <p className="text-sm text-muted-foreground">Expires: May 2025</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500">Active</Badge>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 mr-3">
                        <FileCheck size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium">Responsible AI in Healthcare Research</h3>
                        <p className="text-sm text-muted-foreground">Expires: November 2024</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500">Active</Badge>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 mr-3">
                        <FileCheck size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium">Genomic Data Privacy & Security</h3>
                        <p className="text-sm text-muted-foreground">Expires: August 2024</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500">Active</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="funding" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Funding & Grants</CardTitle>
                <Button variant="outline" size="sm">
                  <PenLine size={14} className="mr-2" />
                  Add Grant
                </Button>
              </div>
              <CardDescription>
                Your research funding and grant information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div>
                    <div className="flex justify-between">
                      <h3 className="font-medium">NIH R01 Grant: AI-Driven Biomarker Discovery</h3>
                      <Badge className="bg-green-500">Active</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      National Institutes of Health
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Amount:</span>
                        <span className="ml-2 font-medium">$2.4M</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Period:</span>
                        <span className="ml-2">2022-2026</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Role:</span>
                        <span className="ml-2">Principal Investigator</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Status:</span>
                        <span className="ml-2 text-green-600">Funded</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div>
                    <div className="flex justify-between">
                      <h3 className="font-medium">DARPA Grant: Quantum Computing for Drug Discovery</h3>
                      <Badge className="bg-green-500">Active</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Defense Advanced Research Projects Agency
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Amount:</span>
                        <span className="ml-2 font-medium">$1.8M</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Period:</span>
                        <span className="ml-2">2021-2024</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Role:</span>
                        <span className="ml-2">Co-Principal Investigator</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Status:</span>
                        <span className="ml-2 text-green-600">Funded</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div>
                    <div className="flex justify-between">
                      <h3 className="font-medium">Chan Zuckerberg Initiative: Multi-omics Data Integration</h3>
                      <Badge variant="outline">Pending</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Chan Zuckerberg Initiative
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Amount:</span>
                        <span className="ml-2 font-medium">$3.2M</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Period:</span>
                        <span className="ml-2">2024-2028</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Role:</span>
                        <span className="ml-2">Principal Investigator</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Status:</span>
                        <span className="ml-2 text-amber-600">Under Review</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="patents">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Patents & Intellectual Property</CardTitle>
                <Button variant="outline" size="sm">
                  <PenLine size={14} className="mr-2" />
                  Add Patent
                </Button>
              </div>
              <CardDescription>
                Your patents and intellectual property related to research
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">Method for AI-Driven Biomarker Discovery</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Patent #: US1234567A
                      </p>
                      <div className="mt-2 flex gap-2">
                        <Badge variant="outline">Filed: 2022</Badge>
                        <Badge variant="outline">Granted: 2023</Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ExternalLink size={14} className="mr-1" />
                      View
                    </Button>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">AI System for Multi-omics Data Integration</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Patent #: US9876543B
                      </p>
                      <div className="mt-2 flex gap-2">
                        <Badge variant="outline">Filed: 2021</Badge>
                        <Badge variant="outline">Granted: 2022</Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ExternalLink size={14} className="mr-1" />
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default ResearcherProfile;
