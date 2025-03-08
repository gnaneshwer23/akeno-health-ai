
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Brain, FileText, Eye } from 'lucide-react';

const riskReports = [
  {
    id: 1,
    disease: "Type 2 Diabetes",
    riskScore: 78,
    confidence: 92,
    factors: ["Family history", "Elevated HbA1c", "BMI > 30"],
    date: "May 12, 2023",
    status: "High Risk"
  },
  {
    id: 2,
    disease: "Coronary Artery Disease",
    riskScore: 62,
    confidence: 85,
    factors: ["Hypertension", "Elevated LDL", "Family history"],
    date: "May 10, 2023",
    status: "Moderate Risk"
  },
  {
    id: 3,
    disease: "Chronic Kidney Disease",
    riskScore: 45,
    confidence: 78,
    factors: ["Microalbuminuria", "Hypertension"],
    date: "May 5, 2023",
    status: "Moderate Risk"
  },
  {
    id: 4,
    disease: "Stroke",
    riskScore: 38,
    confidence: 72,
    factors: ["Hypertension", "Age factor"],
    date: "Apr 28, 2023",
    status: "Low Risk"
  },
  {
    id: 5,
    disease: "COPD",
    riskScore: 22,
    confidence: 68,
    factors: ["Former smoker", "Occupational exposure"],
    date: "Apr 20, 2023",
    status: "Low Risk"
  }
];

const RiskReportsTable = () => {
  const getRiskColor = (score: number) => {
    if (score > 70) return 'bg-red-500';
    if (score > 50) return 'bg-amber-500';
    if (score > 30) return 'bg-blue-500';
    return 'bg-green-500';
  };

  const getRiskBadge = (status: string) => {
    switch (status) {
      case 'High Risk':
        return <Badge className="bg-red-500">High Risk</Badge>;
      case 'Moderate Risk':
        return <Badge className="bg-amber-500">Moderate Risk</Badge>;
      case 'Low Risk':
        return <Badge className="bg-green-500">Low Risk</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Disease</TableHead>
            <TableHead>Risk Score</TableHead>
            <TableHead className="hidden md:table-cell">AI Confidence</TableHead>
            <TableHead className="hidden md:table-cell">Key Factors</TableHead>
            <TableHead className="hidden md:table-cell">Generated</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {riskReports.map((report) => (
            <TableRow key={report.id}>
              <TableCell className="font-medium">{report.disease}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Progress 
                    value={report.riskScore} 
                    className="h-2 w-16 md:w-24" 
                    indicatorColor={getRiskColor(report.riskScore)} 
                  />
                  <span className="text-sm">{report.riskScore}%</span>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">{report.confidence}%</TableCell>
              <TableCell className="hidden md:table-cell">
                <div className="flex flex-wrap gap-1">
                  {report.factors.map((factor, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {factor}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">{report.date}</TableCell>
              <TableCell>{getRiskBadge(report.status)}</TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Eye size={16} />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <FileText size={16} />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Brain size={16} />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RiskReportsTable;
