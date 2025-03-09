
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileCheck, Clock, ArrowRight, Calendar, AlertCircle } from 'lucide-react';

interface DischargeManagementSectionProps {
  onActionClick: (action: string) => void;
}

const DischargeManagementSection: React.FC<DischargeManagementSectionProps> = ({ onActionClick }) => {
  // Sample discharge data for demonstration
  const pendingDischarges = [
    { id: 'P123', name: 'Emma Thompson', room: '405B', planStatus: 'Ready', riskLevel: 'Low', admissionDate: '05/14/2023', dischargeDate: '05/19/2023' },
    { id: 'P456', name: 'Michael Chen', room: '312A', planStatus: 'Pending Approval', riskLevel: 'Medium', admissionDate: '05/10/2023', dischargeDate: '05/20/2023' },
    { id: 'P789', name: 'Sophia Rodriguez', room: '201C', planStatus: 'Awaiting Transport', riskLevel: 'High', admissionDate: '04/28/2023', dischargeDate: '05/19/2023' },
    { id: 'P101', name: 'James Wilson', room: '503D', planStatus: 'Pending Final Check', riskLevel: 'Low', admissionDate: '05/15/2023', dischargeDate: '05/20/2023' },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Discharges</CardTitle>
            <FileCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14</div>
            <p className="text-xs text-muted-foreground">
              4 high-risk patients
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average LOS</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2 days</div>
            <p className="text-xs text-muted-foreground">
              -0.8 days vs. previous month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">30-Day Readmissions</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.8%</div>
            <p className="text-xs text-muted-foreground">
              -0.5% vs. previous month
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pending Discharges Today</CardTitle>
          <CardDescription>
            AI-optimized discharge planning with readmission risk prediction
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Room</TableHead>
                <TableHead>Discharge Status</TableHead>
                <TableHead>Risk Level</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pendingDischarges.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell className="font-medium">{patient.id}</TableCell>
                  <TableCell>{patient.name}</TableCell>
                  <TableCell>{patient.room}</TableCell>
                  <TableCell>{patient.planStatus}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      patient.riskLevel === 'High' 
                        ? 'bg-red-100 text-red-800' 
                        : patient.riskLevel === 'Medium'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                    }`}>
                      {patient.riskLevel}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onActionClick(`View discharge plan for ${patient.name}`)}
                    >
                      View Plan
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Post-Discharge Follow-Up</CardTitle>
            <CardDescription>
              AI-recommended follow-up schedule based on risk assessment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">High Risk Patients</p>
                  <p className="text-sm text-muted-foreground">
                    Follow up within 48 hours
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onActionClick('View high risk follow-up schedule')}
                  className="gap-1"
                >
                  <Calendar className="h-4 w-4" />
                  Schedule
                </Button>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Medium Risk Patients</p>
                  <p className="text-sm text-muted-foreground">
                    Follow up within 5 days
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onActionClick('View medium risk follow-up schedule')}
                  className="gap-1"
                >
                  <Calendar className="h-4 w-4" />
                  Schedule
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Low Risk Patients</p>
                  <p className="text-sm text-muted-foreground">
                    Follow up within 14 days
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onActionClick('View low risk follow-up schedule')}
                  className="gap-1"
                >
                  <Calendar className="h-4 w-4" />
                  Schedule
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Discharge Optimization</CardTitle>
            <CardDescription>
              AI-generated recommendations to improve discharge process
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border bg-zinc-50 p-3">
                <div className="flex items-center space-x-3">
                  <AlertCircle className="h-5 w-5 text-amber-500" />
                  <div className="font-medium">Medication Reconciliation Alert</div>
                </div>
                <div className="mt-1 text-sm text-gray-700 pl-8">
                  3 patients have complex medication regimens requiring additional counseling before discharge.
                </div>
                <Button 
                  variant="link" 
                  size="sm"
                  onClick={() => onActionClick('View medication reconciliation details')}
                  className="pl-8 mt-1 gap-1"
                >
                  Review <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="rounded-lg border bg-zinc-50 p-3">
                <div className="flex items-center space-x-3">
                  <AlertCircle className="h-5 w-5 text-emerald-500" />
                  <div className="font-medium">Transportation Optimization</div>
                </div>
                <div className="mt-1 text-sm text-gray-700 pl-8">
                  AI suggests scheduling morning discharges to optimize bed turnover and transport efficiency.
                </div>
                <Button 
                  variant="link" 
                  size="sm"
                  onClick={() => onActionClick('View transportation optimization details')}
                  className="pl-8 mt-1 gap-1"
                >
                  Review <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DischargeManagementSection;
