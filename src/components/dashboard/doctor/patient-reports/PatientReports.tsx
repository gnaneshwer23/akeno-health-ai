
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  FileText,
  Brain,
  ActivitySquare,
  Search,
  Filter,
  BarChart4,
  Image,
  ChevronDown
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import RiskReportsTable from "./components/RiskReportsTable";
import MedicalImagingGrid from "./components/MedicalImagingGrid";
import BiomarkerTrendsChart from "./components/BiomarkerTrendsChart";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PatientReports = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-medium text-health-dark">Patient Reports</h1>
        <p className="text-muted-foreground">Review, analyze, and compare AI-powered health reports</p>
      </div>

      {/* Patient Selector and Search */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex-1">
          <Select defaultValue="patient1">
            <SelectTrigger className="w-full md:w-[300px]">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>ET</AvatarFallback>
                </Avatar>
                <SelectValue placeholder="Select a patient" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="patient1">Emma Thompson</SelectItem>
              <SelectItem value="patient2">James Wilson</SelectItem>
              <SelectItem value="patient3">Michael Chen</SelectItem>
              <SelectItem value="patient4">Sarah Johnson</SelectItem>
              <SelectItem value="patient5">David Rodriguez</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-[250px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search reports..."
              className="pl-8"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Reports Tabs */}
      <Tabs defaultValue="risk-reports">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="risk-reports">
            <FileText size={16} className="mr-2" />
            Risk Reports
          </TabsTrigger>
          <TabsTrigger value="medical-imaging">
            <Image size={16} className="mr-2" />
            Medical Imaging
          </TabsTrigger>
          <TabsTrigger value="biomarkers">
            <BarChart4 size={16} className="mr-2" />
            Biomarker Trends
          </TabsTrigger>
        </TabsList>

        {/* Risk Reports */}
        <TabsContent value="risk-reports">
          <Card>
            <CardHeader>
              <CardTitle>AI-Generated Risk Reports</CardTitle>
              <CardDescription>Disease predictions based on biomarkers & real-time vitals</CardDescription>
            </CardHeader>
            <CardContent>
              <RiskReportsTable />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Medical Imaging */}
        <TabsContent value="medical-imaging">
          <Card>
            <CardHeader>
              <CardTitle>Medical Imaging AI Insights</CardTitle>
              <CardDescription>AI-powered MRI, CT, and PET scan analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <MedicalImagingGrid />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Biomarker Trends */}
        <TabsContent value="biomarkers">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <CardTitle>Lab & Biomarker Trends</CardTitle>
                  <CardDescription>AI tracks glucose, lipid, and metabolic changes over time</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Select defaultValue="6months">
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Time period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1month">Last Month</SelectItem>
                      <SelectItem value="3months">Last 3 Months</SelectItem>
                      <SelectItem value="6months">Last 6 Months</SelectItem>
                      <SelectItem value="1year">Last Year</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="sm">
                    <BarChart4 size={16} className="mr-2" />
                    Compare
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <BiomarkerTrendsChart />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PatientReports;
