
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Award, 
  Database, 
  Globe, 
  Bell, 
  ExternalLink, 
  Calendar, 
  ArrowUpRight,
  ChevronRight,
  FileText,
  LineChart,
  ArrowRight,
  Download 
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const modelData = [
  { name: 'MultiOmics Integration Model v2.5', accuracy: 93, date: 'Yesterday', category: 'Integration' },
  { name: 'MedicalVision AI v3.1', accuracy: 97, date: '3 days ago', category: 'Imaging' },
  { name: 'GenomicNLP v1.8', accuracy: 89, date: '1 week ago', category: 'NLP' },
  { name: 'BiomarkerPredictor v4.2', accuracy: 92, date: '2 weeks ago', category: 'Prediction' },
];

const publicationData = [
  { name: 'Nature Medicine', title: 'Quantum Computing Applications in Drug Discovery', impact: 53.44, date: '2 weeks ago' },
  { name: 'JAMA', title: 'AI-Driven Diagnostic Systems: Multi-institutional Validation', impact: 44.41, date: '1 month ago' },
  { name: 'The Lancet', title: 'Deep Learning in Rare Disease Diagnosis', impact: 49.96, date: '3 weeks ago' }
];

const pieData = [
  { name: 'Genomic', value: 35 },
  { name: 'Clinical', value: 25 },
  { name: 'Imaging', value: 20 },
  { name: 'Wearable', value: 15 },
  { name: 'Other', value: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const Updates = () => {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  const handleModelClick = (modelName: string) => {
    setSelectedModel(selectedModel === modelName ? null : modelName);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Research Updates</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Bell className="h-4 w-4 mr-2" />
            Customize Alerts
          </Button>
          <Button size="sm">
            <ArrowUpRight className="h-4 w-4 mr-2" />
            View All
          </Button>
        </div>
      </div>

      <Tabs defaultValue="ai-models" className="w-full">
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="ai-models">
            <Brain className="h-4 w-4 mr-2" />
            AI Models
          </TabsTrigger>
          <TabsTrigger value="research">
            <Award className="h-4 w-4 mr-2" />
            Research Milestones
          </TabsTrigger>
          <TabsTrigger value="datasets">
            <Database className="h-4 w-4 mr-2" />
            New Datasets
          </TabsTrigger>
          <TabsTrigger value="news">
            <Globe className="h-4 w-4 mr-2" />
            Industry News
          </TabsTrigger>
        </TabsList>

        <TabsContent value="ai-models" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>New AI Model Releases</CardTitle>
              <CardDescription>Updates to AI-driven analysis tools and predictive models</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1 md:col-span-2 space-y-4">
                  {modelData.map((model) => (
                    <div 
                      key={model.name}
                      className={`border rounded-md overflow-hidden transition-all duration-200 hover:shadow-md ${selectedModel === model.name ? 'ring-2 ring-primary' : ''}`}
                      onClick={() => handleModelClick(model.name)}
                    >
                      <div className="bg-muted p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <Badge className="mb-2 bg-blue-100 text-blue-800 hover:bg-blue-100">New Release</Badge>
                            <h3 className="font-medium text-lg">{model.name}</h3>
                            <p className="text-sm text-muted-foreground">Advanced AI model for {model.category.toLowerCase()} tasks</p>
                          </div>
                          <Badge variant="outline">{model.date}</Badge>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-sm mb-4">
                          This update introduces improved feature detection and enhanced correlation analysis between biomarkers and clinical outcomes.
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="space-x-2">
                            <Badge variant="secondary">{model.accuracy}% Accuracy</Badge>
                            <Badge variant="secondary">{model.category}</Badge>
                          </div>
                          <Button size="sm" variant="outline">
                            <ExternalLink className="h-3 w-3 mr-2" />
                            Explore
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="col-span-1 border rounded-md p-4">
                  <h3 className="font-medium mb-4 flex items-center">
                    <LineChart className="h-4 w-4 mr-2 text-primary" />
                    Model Accuracy Trends
                  </h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={modelData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="category" />
                      <YAxis domain={[80, 100]} />
                      <RechartsTooltip />
                      <Bar dataKey="accuracy" fill="#6366f1" />
                    </BarChart>
                  </ResponsiveContainer>
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground">Overall performance across model types</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm font-medium">Average Accuracy: 92.75%</span>
                      <Button variant="ghost" size="sm" className="text-xs">
                        <Download className="h-3 w-3 mr-1" />
                        Export Data
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="ghost">View All AI Model Updates</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="research" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Research Milestones & Grant Approvals</CardTitle>
              <CardDescription>Status updates on published studies, approved funding, and patent filings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1 md:col-span-2 space-y-4">
                  <div className="flex items-start gap-4 p-4 border rounded-md">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Award className="h-5 w-5 text-green-700" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">NIH Grant Approved: $2.5M</h3>
                        <Badge variant="outline">1 week ago</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 mb-2">
                        "AI-Driven Biomarker Discovery in Neurodegenerative Disorders" project received full funding approval.
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">Project start: June 15, 2023</span>
                      </div>
                    </div>
                  </div>

                  {publicationData.map((pub) => (
                    <div key={pub.title} className="flex items-start gap-4 p-4 border rounded-md">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <FileText className="h-5 w-5 text-blue-700" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium">Publication in {pub.name}</h3>
                          <Badge variant="outline">{pub.date}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1 mb-2">
                          "{pub.title}" accepted for publication.
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <Badge variant="secondary" className="flex items-center">
                                    Impact: {pub.impact.toFixed(2)}
                                  </Badge>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Journal Impact Factor</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                          <Button size="sm" variant="outline" className="mt-2">
                            Read Publication <ArrowRight className="ml-2 h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="col-span-1 border rounded-md p-4">
                  <h3 className="font-medium mb-4">Research Focus Distribution</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <RechartsTooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    Distribution of research focus areas by data type
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="datasets" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>New Datasets Available</CardTitle>
              <CardDescription>Recently added genomic, imaging, and epidemiological datasets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'COVID-19 Long-Term Effects', type: 'Clinical', samples: 15420, size: '2.3 GB' },
                  { name: 'Oncology Imaging Collection', type: 'Imaging', samples: 8750, size: '18.7 GB' },
                  { name: 'Genomic Variants Database', type: 'Genomic', samples: 12500, size: '42.1 GB' },
                  { name: 'Mental Health Biomarkers', type: 'Multi-omics', samples: 5280, size: '3.8 GB' },
                  { name: 'Cardiovascular Risk Factors', type: 'Clinical', samples: 24800, size: '1.6 GB' },
                  { name: 'Rare Disease Registry', type: 'Mixed', samples: 3700, size: '5.2 GB' },
                ].map((dataset) => (
                  <div key={dataset.name} className="border rounded-md p-4 hover:shadow-md transition-all">
                    <div className="flex justify-between">
                      <Badge className="mb-2">{dataset.type}</Badge>
                      <Badge variant="outline">{dataset.size}</Badge>
                    </div>
                    <h3 className="font-medium">{dataset.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{dataset.samples.toLocaleString()} samples</p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Added: 2 weeks ago</span>
                      <Button size="sm" variant="outline" className="text-xs">Request Access</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="ghost">Browse All Datasets</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="news" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Industry & Scientific News</CardTitle>
              <CardDescription>AI-curated insights on emerging medical research and healthcare trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: 'FDA Approves New AI-Based Diagnostic Tool',
                    source: 'HealthTech Today',
                    snippet: 'The FDA has granted approval for a new AI-powered diagnostic tool that can detect early signs of retinal disease with 94% accuracy, potentially saving millions from preventable vision loss.',
                    date: '2 days ago',
                    relevance: 'High',
                    tags: ['AI Diagnostics', 'FDA Approval', 'Ophthalmology']
                  },
                  {
                    title: 'Major Breakthrough in Alzheimer's Research',
                    source: 'Neuroscience Journal',
                    snippet: 'Researchers have identified a new biomarker that may predict Alzheimer's disease up to 15 years before symptoms appear, opening new avenues for early intervention treatments.',
                    date: '1 week ago',
                    relevance: 'Very High',
                    tags: ['Neurology', 'Biomarkers', 'Early Detection']
                  },
                  {
                    title: 'Global Consortium Launches Healthcare Data Exchange Platform',
                    source: 'Digital Health News',
                    snippet: 'A new international consortium of research institutions has launched a secure platform for sharing anonymized patient data, accelerating cross-border research collaborations.',
                    date: '3 days ago',
                    relevance: 'Medium',
                    tags: ['Data Sharing', 'International Collaboration', 'Privacy']
                  }
                ].map((news, idx) => (
                  <div key={idx} className="border rounded-md p-4">
                    <div className="flex justify-between items-start mb-2">
                      <Badge className={
                        news.relevance === 'High' ? 'bg-orange-100 text-orange-800' : 
                        news.relevance === 'Very High' ? 'bg-red-100 text-red-800' : 
                        'bg-blue-100 text-blue-800'
                      }>
                        {news.relevance} Relevance
                      </Badge>
                      <Badge variant="outline">{news.date}</Badge>
                    </div>
                    <h3 className="font-medium text-lg">{news.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2">Source: {news.source}</p>
                    <p className="text-sm mb-3">{news.snippet}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {news.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                    <Button size="sm" variant="outline" className="w-full">
                      Read Full Article
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="ghost">View All Industry News</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Updates;
