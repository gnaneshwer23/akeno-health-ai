
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Brain, Award, Database, Globe, Bell, ExternalLink, Calendar, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Updates = () => {
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
            <CardContent className="space-y-4">
              <div className="border rounded-md overflow-hidden">
                <div className="bg-muted p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge className="mb-2 bg-blue-100 text-blue-800 hover:bg-blue-100">New Release</Badge>
                      <h3 className="font-medium text-lg">MultiOmics Integration Model v2.5</h3>
                      <p className="text-sm text-muted-foreground">Advanced AI model for integrating genomic, proteomic, and metabolomic data</p>
                    </div>
                    <Badge variant="outline">Yesterday</Badge>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm mb-4">
                    This update introduces improved feature detection across diverse data types and enhanced correlation analysis between biomarkers and clinical outcomes.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="space-x-2">
                      <Badge variant="secondary">93% Accuracy</Badge>
                      <Badge variant="secondary">Multi-modal</Badge>
                    </div>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-3 w-3 mr-2" />
                      Explore
                    </Button>
                  </div>
                </div>
              </div>

              <div className="border rounded-md overflow-hidden">
                <div className="bg-muted p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge className="mb-2 bg-blue-100 text-blue-800 hover:bg-blue-100">New Release</Badge>
                      <h3 className="font-medium text-lg">MedicalVision AI v3.1</h3>
                      <p className="text-sm text-muted-foreground">Computer vision model for medical imaging analysis</p>
                    </div>
                    <Badge variant="outline">3 days ago</Badge>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm mb-4">
                    This release significantly improves lesion detection accuracy in low-contrast imaging and includes new capabilities for 3D volumetric analysis.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="space-x-2">
                      <Badge variant="secondary">97% Sensitivity</Badge>
                      <Badge variant="secondary">3D Analysis</Badge>
                    </div>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-3 w-3 mr-2" />
                      Explore
                    </Button>
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
              <div className="space-y-4">
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

                <div className="flex items-start gap-4 p-4 border rounded-md">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <ExternalLink className="h-5 w-5 text-blue-700" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">Publication in Nature Medicine</h3>
                      <Badge variant="outline">2 weeks ago</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 mb-2">
                      "Quantum Computing Applications in Drug Discovery: A Multi-institutional Study" accepted for publication.
                    </p>
                    <Button size="sm" variant="outline" className="mt-2">
                      Read Publication
                    </Button>
                  </div>
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
              <div className="p-4 text-center text-muted-foreground">
                New datasets information will be displayed here
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="news" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Industry & Scientific News</CardTitle>
              <CardDescription>AI-curated insights on emerging medical research and healthcare trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 text-center text-muted-foreground">
                Industry and scientific news will be displayed here
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Updates;
