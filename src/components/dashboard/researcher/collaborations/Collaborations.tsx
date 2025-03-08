
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Plus, Users, Building, Brain, DollarSign, Globe } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Collaborations = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Research Collaborations</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Collaboration
        </Button>
      </div>

      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid grid-cols-5 mb-4">
          <TabsTrigger value="active">
            <Users className="h-4 w-4 mr-2" />
            Active
          </TabsTrigger>
          <TabsTrigger value="industry">
            <Building className="h-4 w-4 mr-2" />
            Industry
          </TabsTrigger>
          <TabsTrigger value="ai-teams">
            <Brain className="h-4 w-4 mr-2" />
            AI Teams
          </TabsTrigger>
          <TabsTrigger value="funding">
            <DollarSign className="h-4 w-4 mr-2" />
            Funding
          </TabsTrigger>
          <TabsTrigger value="conferences">
            <Globe className="h-4 w-4 mr-2" />
            Conferences
          </TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Research Collaborations</CardTitle>
              <CardDescription>Ongoing collaborative research projects and partnerships</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-medium text-lg">Alzheimer's Biomarker Study</h3>
                      <p className="text-sm text-muted-foreground">Multi-institutional effort to identify early biomarkers</p>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Active</Badge>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">Genomics</Badge>
                    <Badge variant="secondary">Proteomics</Badge>
                    <Badge variant="secondary">Neuroimaging</Badge>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex -space-x-2">
                      <Avatar className="h-8 w-8 border-2 border-background">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8 border-2 border-background">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>MG</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8 border-2 border-background">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>AS</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8 border-2 border-background bg-muted">
                        <AvatarFallback>+4</AvatarFallback>
                      </Avatar>
                    </div>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                </div>
                
                <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-medium text-lg">Precision Oncology Database</h3>
                      <p className="text-sm text-muted-foreground">Collaborative cancer genomics and treatment outcomes database</p>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Active</Badge>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">Cancer Genomics</Badge>
                    <Badge variant="secondary">Clinical Trials</Badge>
                    <Badge variant="secondary">Drug Response</Badge>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex -space-x-2">
                      <Avatar className="h-8 w-8 border-2 border-background">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>RK</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8 border-2 border-background">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>LM</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8 border-2 border-background bg-muted">
                        <AvatarFallback>+7</AvatarFallback>
                      </Avatar>
                    </div>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                </div>
                
                <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-medium text-lg">Global Respiratory Disease Network</h3>
                      <p className="text-sm text-muted-foreground">International collaboration on respiratory infections and treatments</p>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Active</Badge>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">Epidemiology</Badge>
                    <Badge variant="secondary">Immunology</Badge>
                    <Badge variant="secondary">Virology</Badge>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex -space-x-2">
                      <Avatar className="h-8 w-8 border-2 border-background">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>TH</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8 border-2 border-background">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>BW</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8 border-2 border-background bg-muted">
                        <AvatarFallback>+12</AvatarFallback>
                      </Avatar>
                    </div>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="industry" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Industry Partnerships</CardTitle>
              <CardDescription>Joint research projects with biotech, pharma, and healthcare companies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 text-center text-muted-foreground">
                Industry partnerships data will be displayed here
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai-teams" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI Model Development Teams</CardTitle>
              <CardDescription>Collaboration hub for AI engineers, data scientists, and medical researchers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 text-center text-muted-foreground">
                AI teams collaboration data will be displayed here
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="funding" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Funding & Grant Partnerships</CardTitle>
              <CardDescription>Co-funded studies, grant applications, and shared research budgets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 text-center text-muted-foreground">
                Funding and grant partnership data will be displayed here
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conferences" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Conference & Knowledge Sharing</CardTitle>
              <CardDescription>Share datasets and findings in scientific events and research summits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 text-center text-muted-foreground">
                Conference and knowledge sharing data will be displayed here
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Collaborations;
