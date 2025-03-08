
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Bell, BookOpen, Calendar, ChevronRight, Download, FileText, InfoIcon, Microscope, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Mock data for research updates
const researchUpdates = [
  {
    id: 1,
    title: "AI Model Performance Improvements",
    description: "Our team has achieved a 15% improvement in prediction accuracy for cardiovascular risk assessment.",
    date: "2023-11-02",
    category: "AI Models",
    priority: "high"
  },
  {
    id: 2,
    title: "New Biomarker Dataset Available",
    description: "A comprehensive dataset with 50,000+ samples of metabolic biomarkers is now available for your research.",
    date: "2023-10-28",
    category: "Datasets",
    priority: "medium"
  },
  {
    id: 3,
    title: "Collaboration Opportunity with Stanford",
    description: "Stanford Medical Research team is looking for partners on their quantum computing project for protein folding.",
    date: "2023-10-25",
    category: "Collaboration",
    priority: "medium"
  },
  {
    id: 4,
    title: "Quarterly Research Goals Updated",
    description: "The Q4 research objectives have been updated to focus on multi-modal AI for genomic analysis.",
    date: "2023-10-20",
    category: "Planning",
    priority: "low"
  },
  {
    id: 5,
    title: "Critical: Security Protocol Update Required",
    description: "All researchers must update their data security protocols by the end of this week.",
    date: "2023-11-01",
    category: "Security",
    priority: "high"
  }
];

// Mock data for publications
const publications = [
  {
    id: 1,
    title: "Deep Learning for Biomarker Discovery: A Systematic Review",
    journal: "Nature Computational Science",
    date: "2023-09-15",
    authors: "Zhang, K., Williams, E., et al.",
    link: "#"
  },
  {
    id: 2,
    title: "Quantum Computing Applications in Genomic Data Analysis",
    journal: "Science Advances",
    date: "2023-08-22",
    authors: "Chen, L., Johnson, M., Kumar, R., et al.",
    link: "#"
  },
  {
    id: 3,
    title: "Federated Learning for Privacy-Preserving Medical Image Analysis",
    journal: "IEEE Transactions on Medical Imaging",
    date: "2023-07-10",
    authors: "Rodriguez, A., Kim, S., et al.",
    link: "#"
  }
];

// Visualization data
const researchActivityData = [
  { name: 'Jan', AI: 12, Genomics: 19, Biomarkers: 5 },
  { name: 'Feb', AI: 15, Genomics: 21, Biomarkers: 8 },
  { name: 'Mar', AI: 18, Genomics: 19, Biomarkers: 10 },
  { name: 'Apr', AI: 22, Genomics: 15, Biomarkers: 12 },
  { name: 'May', AI: 25, Genomics: 18, Biomarkers: 15 },
  { name: 'Jun', AI: 30, Genomics: 22, Biomarkers: 20 },
];

const researchDistributionData = [
  { name: 'AI Models', value: 45 },
  { name: 'Genomics', value: 30 },
  { name: 'Biomarkers', value: 15 },
  { name: 'Clinical Trials', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Updates = () => {
  const [selectedTab, setSelectedTab] = useState('updates');

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-health-dark">Research Updates</h1>
        <Button variant="outline" className="gap-2">
          <Calendar className="h-4 w-4" />
          View Calendar
        </Button>
      </div>

      <Tabs defaultValue="updates" className="space-y-6" onValueChange={setSelectedTab}>
        <TabsList className="grid grid-cols-3 gap-2 w-full max-w-md">
          <TabsTrigger value="updates" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span>Updates</span>
          </TabsTrigger>
          <TabsTrigger value="publications" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span>Publications</span>
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <Microscope className="h-4 w-4" />
            <span>Analytics</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="updates" className="space-y-4">
          <Alert variant="default" className="bg-health-primary/10 border-health-primary">
            <InfoIcon className="h-4 w-4 text-health-primary" />
            <AlertTitle>New updates available</AlertTitle>
            <AlertDescription>
              You have 5 new research updates since your last login.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {researchUpdates.map((update) => (
              <Card key={update.id} className="overflow-hidden transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg font-medium">{update.title}</CardTitle>
                      <CardDescription className="text-sm mt-1">
                        {new Date(update.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </CardDescription>
                    </div>
                    <Badge variant={
                      update.priority === "high" ? "destructive" :
                      update.priority === "medium" ? "default" : "outline"
                    }>
                      {update.priority}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{update.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <Badge variant="outline" className="bg-health-primary/5">
                      {update.category}
                    </Badge>
                    <Button variant="ghost" size="sm" className="gap-1 text-xs">
                      View Details
                      <ChevronRight className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="publications" className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Recent Publications</h3>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Export List
            </Button>
          </div>

          <div className="space-y-4">
            {publications.map((pub) => (
              <Card key={pub.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="hidden sm:flex items-center justify-center h-12 w-12 rounded-full bg-health-primary/10">
                      <FileText className="h-6 w-6 text-health-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold hover:text-health-primary transition-colors">
                        <a href={pub.link}>{pub.title}</a>
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground mt-1 gap-1 sm:gap-4">
                        <span>{pub.journal}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{pub.date}</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {pub.authors}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Research Activity</CardTitle>
                <CardDescription>Monthly research activity across different domains</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={researchActivityData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="AI" fill="#0088FE" />
                      <Bar dataKey="Genomics" fill="#00C49F" />
                      <Bar dataKey="Biomarkers" fill="#FFBB28" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Research Distribution</CardTitle>
                <CardDescription>Distribution of research focus areas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={researchDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {researchDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Updates;
