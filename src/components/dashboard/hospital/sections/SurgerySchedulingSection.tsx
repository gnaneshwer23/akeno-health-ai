
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Calendar, Clock, Users, AlertTriangle, Activity, ChevronRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface SurgerySchedulingProps {
  onActionClick: (action: string) => void;
}

const SurgerySchedulingSection: React.FC<SurgerySchedulingProps> = ({ onActionClick }) => {
  // Sample surgery scheduling data
  const scheduledSurgeries = [
    { id: 'S001', patientId: 'P245', patientName: 'Robert Johnson', procedure: 'Knee Arthroscopy', surgeon: 'Dr. Emily Chang', room: 'OR-3', time: '08:30 AM', duration: '1.5 hrs', status: 'Confirmed' },
    { id: 'S002', patientId: 'P312', patientName: 'Sarah Martinez', procedure: 'Appendectomy', surgeon: 'Dr. David Kim', room: 'OR-1', time: '10:00 AM', duration: '1 hr', status: 'Confirmed' },
    { id: 'S003', patientId: 'P178', patientName: 'Thomas Williams', procedure: 'Cataract Surgery', surgeon: 'Dr. Lisa Wong', room: 'OR-5', time: '11:30 AM', duration: '45 min', status: 'Pending Pre-Op' },
    { id: 'S004', patientId: 'P423', patientName: 'Maria Garcia', procedure: 'Cholecystectomy', surgeon: 'Dr. James Wilson', room: 'OR-2', time: '01:00 PM', duration: '2 hrs', status: 'Confirmed' },
  ];

  const emergencySurgeries = [
    { id: 'E001', patientId: 'P789', patientName: 'Daniel Smith', procedure: 'Emergency Appendectomy', surgeon: 'Dr. David Kim', room: 'OR-4', time: 'ASAP', severity: 'High', status: 'Waiting' },
    { id: 'E002', patientId: 'P651', patientName: 'Jennifer Taylor', procedure: 'Trauma Surgery', surgeon: 'Dr. Michael Brown', room: 'OR-6', time: 'ASAP', severity: 'Critical', status: 'In Prep' },
  ];

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-green-100 text-green-800';
      case 'Pending Pre-Op':
        return 'bg-yellow-100 text-yellow-800';
      case 'Waiting':
        return 'bg-amber-100 text-amber-800';
      case 'In Prep':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityBadgeClass = (severity: string) => {
    switch (severity) {
      case 'Critical':
        return 'bg-red-100 text-red-800';
      case 'High':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Surgeries</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              2 emergency, 6 scheduled
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">OR Utilization</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">
              +5% vs. previous week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Surgical Team</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              5 surgeons, 7 support staff
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="scheduled" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="scheduled">Scheduled Surgeries</TabsTrigger>
          <TabsTrigger value="emergency">Emergency Surgeries</TabsTrigger>
        </TabsList>
        <TabsContent value="scheduled">
          <Card>
            <CardHeader>
              <CardTitle>Scheduled Surgeries</CardTitle>
              <CardDescription>
                AI-optimized surgery schedule for today
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Patient</TableHead>
                    <TableHead>Procedure</TableHead>
                    <TableHead>Surgeon</TableHead>
                    <TableHead>Room</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {scheduledSurgeries.map((surgery) => (
                    <TableRow key={surgery.id}>
                      <TableCell>
                        <div className="font-medium">{surgery.patientName}</div>
                        <div className="text-xs text-muted-foreground">{surgery.patientId}</div>
                      </TableCell>
                      <TableCell>{surgery.procedure}</TableCell>
                      <TableCell>{surgery.surgeon}</TableCell>
                      <TableCell>{surgery.room}</TableCell>
                      <TableCell>
                        <div className="font-medium">{surgery.time}</div>
                        <div className="text-xs text-muted-foreground">{surgery.duration}</div>
                      </TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusBadgeClass(surgery.status)}`}>
                          {surgery.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onActionClick(`View details for surgery ${surgery.id}`)}
                        >
                          Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="emergency">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Emergency Surgeries</CardTitle>
                <CardDescription>
                  High-priority surgeries requiring immediate attention
                </CardDescription>
              </div>
              <AlertTriangle className="h-5 w-5 text-amber-500" />
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Patient</TableHead>
                    <TableHead>Procedure</TableHead>
                    <TableHead>Surgeon</TableHead>
                    <TableHead>Room</TableHead>
                    <TableHead>Severity</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {emergencySurgeries.map((surgery) => (
                    <TableRow key={surgery.id}>
                      <TableCell>
                        <div className="font-medium">{surgery.patientName}</div>
                        <div className="text-xs text-muted-foreground">{surgery.patientId}</div>
                      </TableCell>
                      <TableCell>{surgery.procedure}</TableCell>
                      <TableCell>{surgery.surgeon}</TableCell>
                      <TableCell>{surgery.room}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getSeverityBadgeClass(surgery.severity)}`}>
                          {surgery.severity}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusBadgeClass(surgery.status)}`}>
                          {surgery.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onActionClick(`Prioritize emergency surgery ${surgery.id}`)}
                          className="bg-red-50 hover:bg-red-100 text-red-700 border-red-200"
                        >
                          Prioritize
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>OR Time Management</CardTitle>
            <CardDescription>
              AI-powered suggestions for optimizing surgical schedules
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border bg-amber-50 p-3">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-amber-500" />
                  <div className="font-medium">Schedule Optimization Alert</div>
                </div>
                <div className="mt-1 text-sm text-gray-700 pl-8">
                  Potential 20% reduction in OR turnaround time with AI-suggested workflow improvements.
                </div>
                <Button 
                  variant="link" 
                  size="sm"
                  onClick={() => onActionClick('View OR efficiency recommendations')}
                  className="pl-8 mt-1 gap-1 text-amber-700"
                >
                  View Recommendations <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="rounded-lg border bg-blue-50 p-3">
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-blue-500" />
                  <div className="font-medium">Surgical Team Allocation</div>
                </div>
                <div className="mt-1 text-sm text-gray-700 pl-8">
                  AI recommends reassigning Dr. Kim's afternoon slot to accommodate the emergency appendectomy.
                </div>
                <Button 
                  variant="link" 
                  size="sm"
                  onClick={() => onActionClick('View team allocation suggestions')}
                  className="pl-8 mt-1 gap-1 text-blue-700"
                >
                  View Suggestions <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Surgical Outcomes Prediction</CardTitle>
            <CardDescription>
              AI-powered risk assessment for scheduled surgeries
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Quality Metrics</p>
                  <p className="text-sm text-muted-foreground">
                    Current complication rate: 2.3% (below national average)
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onActionClick('View quality metrics details')}
                >
                  View Details
                </Button>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Risk Assessment</p>
                  <p className="text-sm text-muted-foreground">
                    1 patient flagged for potential surgical complications
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onActionClick('View surgical risk assessment')}
                  className="text-amber-700 border-amber-200 bg-amber-50"
                >
                  Review Risk
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Resource Utilization</p>
                  <p className="text-sm text-muted-foreground">
                    AI predicts 15% reduction in OR time with new protocols
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onActionClick('View resource utilization details')}
                >
                  View Analytics
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SurgerySchedulingSection;
