
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Eye, FilePlus, AlertTriangle, ExternalLink } from "lucide-react";

// Mock data for patient risk reports
const riskReportsData = [
  {
    id: 1,
    patientName: "Sarah Johnson",
    patientId: "PT-7823",
    age: 42,
    assessmentDate: "Jun 12, 2023",
    primaryRisk: "Cardiovascular Disease",
    riskScore: 68,
    biomarkers: ["Elevated LDL", "High Blood Pressure", "Triglycerides"],
    aiConfidence: 92,
    status: "high"
  },
  {
    id: 2,
    patientName: "Michael Williams",
    patientId: "PT-5642",
    age: 57,
    assessmentDate: "Jun 10, 2023",
    primaryRisk: "Type 2 Diabetes",
    riskScore: 72,
    biomarkers: ["HbA1c", "Fasting Glucose", "BMI"],
    aiConfidence: 95,
    status: "high"
  },
  {
    id: 3,
    patientName: "Robert Chen",
    patientId: "PT-9103",
    age: 48,
    assessmentDate: "Jun 8, 2023",
    primaryRisk: "Liver Fibrosis",
    riskScore: 42,
    biomarkers: ["ALT", "AST", "Platelet Count"],
    aiConfidence: 89,
    status: "medium"
  },
  {
    id: 4,
    patientName: "Emma Davis",
    patientId: "PT-3216",
    age: 35,
    assessmentDate: "Jun 7, 2023",
    primaryRisk: "Autoimmune Disorder",
    riskScore: 35,
    biomarkers: ["ANA", "CRP", "ESR"],
    aiConfidence: 82,
    status: "medium"
  },
  {
    id: 5,
    patientName: "James Wilson",
    patientId: "PT-4789",
    age: 61,
    assessmentDate: "Jun 5, 2023",
    primaryRisk: "Chronic Kidney Disease",
    riskScore: 22,
    biomarkers: ["eGFR", "Urine Albumin"],
    aiConfidence: 87,
    status: "low"
  }
];

const RiskReportsTable = () => {
  const getRiskBadge = (status: string) => {
    switch (status) {
      case 'high':
        return <Badge className="bg-red-500">High Risk</Badge>;
      case 'medium':
        return <Badge className="bg-amber-500">Medium Risk</Badge>;
      case 'low':
        return <Badge className="bg-green-500">Low Risk</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getRiskProgressBar = (score: number) => {
    const getColor = () => {
      if (score >= 70) return "bg-red-500";
      if (score >= 40) return "bg-amber-500";
      return "bg-green-500";
    };

    return (
      <div className="w-full flex items-center gap-2">
        <Progress 
          value={score} 
          className={`h-2 ${score >= 70 ? 'bg-red-200' : score >= 40 ? 'bg-amber-200' : 'bg-green-200'}`}
        />
        <span className="text-sm font-medium">{score}%</span>
      </div>
    );
  };

  return (
    <div className="border rounded-md">
      <div className="flex justify-between items-center p-4 border-b">
        <h3 className="font-medium">Patient Risk Assessment Reports</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <FilePlus className="h-4 w-4 mr-1" />
            New Assessment
          </Button>
          <Button variant="outline" size="sm">
            <AlertTriangle className="h-4 w-4 mr-1" />
            View All High Risk
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient</TableHead>
              <TableHead>Assessment Date</TableHead>
              <TableHead>Primary Risk</TableHead>
              <TableHead>Risk Score</TableHead>
              <TableHead>Key Biomarkers</TableHead>
              <TableHead>AI Confidence</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {riskReportsData.map((report) => (
              <TableRow key={report.id}>
                <TableCell>
                  <div>
                    <div className="font-medium">{report.patientName}</div>
                    <div className="text-sm text-muted-foreground">ID: {report.patientId} • {report.age} yrs</div>
                  </div>
                </TableCell>
                <TableCell>{report.assessmentDate}</TableCell>
                <TableCell>{report.primaryRisk}</TableCell>
                <TableCell className="w-[140px]">
                  {getRiskProgressBar(report.riskScore)}
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {report.biomarkers.map((biomarker, index) => (
                      <span key={index} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                        {biomarker}
                      </span>
                    ))}
                  </div>
                </TableCell>
                <TableCell>{report.aiConfidence}%</TableCell>
                <TableCell>{getRiskBadge(report.status)}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RiskReportsTable;
