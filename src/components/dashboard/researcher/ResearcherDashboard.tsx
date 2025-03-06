
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { 
  Microscope,
  Database,
  Flask,
  Dna,
  Users,
  Search,
  Download,
  BarChart4,
  LineChart,
  PieChart,
  ChevronRight,
  Filter
} from 'lucide-react';
import { Button } from '@/components/Button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ResearcherDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-medium text-health-dark">Welcome, {user?.name}</h1>
        <p className="text-muted-foreground">Here's your AI-powered research dashboard</p>
      </div>

      {/* Research Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <Database size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Data Points</p>
              <p className="text-2xl font-semibold">12.5M</p>
              <p className="text-xs text-green-600">↑ 1.2M this month</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
              <Users size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Research Cohorts</p>
              <p className="text-2xl font-semibold">24</p>
              <p className="text-xs">Active Subjects: 1,842</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <Microscope size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Studies</p>
              <p className="text-2xl font-semibold">8</p>
              <p className="text-xs">3 in Phase II, 5 in Phase III</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
              <Dna size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Genomic Samples</p>
              <p className="text-2xl font-semibold">3.8K</p>
              <p className="text-xs">Full Sequence: 2.4K</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Research Data Explorer */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>AI-Powered Data Explorer</CardTitle>
              <CardDescription>Analyze anonymized patient data with AI insights</CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search datasets..."
                  className="pl-8 w-full"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter size={16} className="mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="datasets">
            <TabsList className="mb-4">
              <TabsTrigger value="datasets">Datasets</TabsTrigger>
              <TabsTrigger value="visualizations">Visualizations</TabsTrigger>
              <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
            </TabsList>
            
            <TabsContent value="datasets">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="Dataset Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="genomic">Genomic</SelectItem>
                        <SelectItem value="clinical">Clinical</SelectItem>
                        <SelectItem value="imaging">Imaging</SelectItem>
                        <SelectItem value="biomarker">Biomarker</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Select defaultValue="all-time">
                      <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="Time Period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-time">All Time</SelectItem>
                        <SelectItem value="last-month">Last Month</SelectItem>
                        <SelectItem value="last-quarter">Last Quarter</SelectItem>
                        <SelectItem value="last-year">Last Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button variant="ghost" size="sm">
                    <Download size={16} className="mr-2" />
                    Export
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <div className="p-4 border rounded-lg flex items-center hover:bg-gray-50 transition-colors">
                    <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                      <Database size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">Cardiovascular Disease Biomarker Dataset</h3>
                        <Badge>10.2K patients</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Multi-omics data including proteomics, metabolomics, and clinical outcomes</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ChevronRight size={16} />
                    </Button>
                  </div>
                  
                  <div className="p-4 border rounded-lg flex items-center hover:bg-gray-50 transition-colors">
                    <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 mr-3">
                      <Dna size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">Type 2 Diabetes Genomic Analysis</h3>
                        <Badge>3.8K patients</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Whole genome sequencing with treatment response correlations</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ChevronRight size={16} />
                    </Button>
                  </div>
                  
                  <div className="p-4 border rounded-lg flex items-center hover:bg-gray-50 transition-colors">
                    <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 mr-3">
                      <Flask size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">Immunotherapy Response Prediction</h3>
                        <Badge>1.5K patients</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Immune profile sequencing with clinical response data</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ChevronRight size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="visualizations">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Biomarker Distribution</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="h-64 w-full flex items-center justify-center bg-gray-50 rounded-md border">
                      <BarChart4 size={64} className="text-gray-300" />
                      {/* This would be replaced with an actual chart in a real implementation */}
                    </div>
                    <div className="mt-2 text-xs text-center text-muted-foreground">
                      Distribution of IL-6 levels across different patient cohorts
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Treatment Response</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="h-64 w-full flex items-center justify-center bg-gray-50 rounded-md border">
                      <LineChart size={64} className="text-gray-300" />
                      {/* This would be replaced with an actual chart in a real implementation */}
                    </div>
                    <div className="mt-2 text-xs text-center text-muted-foreground">
                      Response to treatment over time by genetic profile
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Genetic Variant Frequency</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="h-64 w-full flex items-center justify-center bg-gray-50 rounded-md border">
                      <PieChart size={64} className="text-gray-300" />
                      {/* This would be replaced with an actual chart in a real implementation */}
                    </div>
                    <div className="mt-2 text-xs text-center text-muted-foreground">
                      Distribution of key genetic variants in study population
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Multi-omics Clustering</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="h-64 w-full flex items-center justify-center bg-gray-50 rounded-md border">
                      <Database size={64} className="text-gray-300" />
                      {/* This would be replaced with an actual visualization in a real implementation */}
                    </div>
                    <div className="mt-2 text-xs text-center text-muted-foreground">
                      Patient clustering based on integrated omics data
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="ai-insights">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">AI-Generated Research Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 border-l-4 border-blue-500 bg-blue-50 rounded-r-md">
                      <h4 className="font-medium">Novel Biomarker Correlation Detected</h4>
                      <p className="text-sm mt-1">
                        AI analysis has identified a statistically significant correlation (p&lt;0.001) between elevated levels of serum protein PRDX4 and early-stage pancreatic cancer that was not previously documented in literature. This finding is consistent across three independent cohorts.
                      </p>
                      <div className="mt-2 flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Confidence score: 92%</span>
                        <Button variant="link" size="sm" className="h-auto p-0">View detailed analysis</Button>
                      </div>
                    </div>
                    
                    <div className="p-3 border-l-4 border-purple-500 bg-purple-50 rounded-r-md">
                      <h4 className="font-medium">Treatment Response Pattern Identified</h4>
                      <p className="text-sm mt-1">
                        AI has detected a gene expression signature that predicts response to immunotherapy in colorectal cancer patients with MSI-H status. The 18-gene signature shows 83% accuracy in predicting complete response at 6 months.
                      </p>
                      <div className="mt-2 flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Confidence score: 87%</span>
                        <Button variant="link" size="sm" className="h-auto p-0">View detailed analysis</Button>
                      </div>
                    </div>
                    
                    <div className="p-3 border-l-4 border-green-500 bg-green-50 rounded-r-md">
                      <h4 className="font-medium">Potential Drug Repurposing Opportunity</h4>
                      <p className="text-sm mt-1">
                        Based on pathway analysis and molecular docking simulations, AI suggests that the existing JAK inhibitor tofacitinib may have efficacy in treating a subset of patients with treatment-resistant rheumatoid arthritis characterized by specific IL-6 pathway mutations.
                      </p>
                      <div className="mt-2 flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Confidence score: 79%</span>
                        <Button variant="link" size="sm" className="h-auto p-0">View detailed analysis</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* AI Model Discovery */}
      <Card>
        <CardHeader>
          <CardTitle>AI-Guided Drug Discovery</CardTitle>
          <CardDescription>ML-powered target identification and compound optimization</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-3">Active Discovery Projects</h3>
              <div className="space-y-3">
                <div className="border rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">PARP Inhibitor Optimization</h4>
                    <Badge className="bg-green-500">Phase 2</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    AI-driven structure optimization for improved blood-brain barrier penetration
                  </p>
                  <div className="mt-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Progress</span>
                      <span>72%</span>
                    </div>
                    <Progress value={72} className="h-1.5" />
                  </div>
                </div>
                
                <div className="border rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">Novel T-Cell Engager</h4>
                    <Badge className="bg-blue-500">Phase 1</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    AI screening of protein-protein interactions for optimized binding
                  </p>
                  <div className="mt-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Progress</span>
                      <span>38%</span>
                    </div>
                    <Progress value={38} className="h-1.5" />
                  </div>
                </div>
                
                <div className="border rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">mRNA Stability Enhancement</h4>
                    <Badge className="bg-purple-500">Phase 1</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Computational prediction of modified nucleosides for improved half-life
                  </p>
                  <div className="mt-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Progress</span>
                      <span>45%</span>
                    </div>
                    <Progress value={45} className="h-1.5" />
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Recent AI Discoveries</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                      <Flask size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Novel Kinase Inhibitor</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        AI identified a novel scaffold with high selectivity for JAK3 over JAK1/2, potentially reducing off-target effects.
                      </p>
                      <Button variant="link" size="sm" className="p-0 h-auto mt-1">View molecule details</Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                      <Dna size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">RNA Therapeutic Target</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        AI analysis of transcriptomics data revealed a previously unidentified long non-coding RNA involved in fibrosis regulation.
                      </p>
                      <Button variant="link" size="sm" className="p-0 h-auto mt-1">View target details</Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600">
                      <Microscope size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Biomarker Panel for NASH</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        AI-derived serum biomarker panel shows 92% accuracy in diagnosing NASH without liver biopsy.
                      </p>
                      <Button variant="link" size="sm" className="p-0 h-auto mt-1">View panel details</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">View All Research Projects</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ResearcherDashboard;
