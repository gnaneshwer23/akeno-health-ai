
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, Users, AlertCircle, CheckCircle2, ArrowUpDown, BadgeAlert } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface SurgerySchedulingSectionProps {
  onActionClick: (action: string) => void;
}

const SurgerySchedulingSection: React.FC<SurgerySchedulingSectionProps> = ({ onActionClick }) => {
  // Sample surgery data for demonstration
  const todaySurgeries = [
    { id: 'S001', patient: 'Robert Johnson', procedure: 'Total Knee Replacement', surgeon: 'Dr. Zhang', room: 'OR 3', startTime: '08:30 AM', duration: '2 hrs', status: 'In Progress' },
    { id: 'S002', patient: 'Olivia Smith', procedure: 'Laparoscopic Cholecystectomy', surgeon: 'Dr. Patel', room: 'OR 1', startTime: '10:00 AM', duration: '1.5 hrs', status: 'Scheduled' },
    { id: 'S003', patient: 'William Davis', procedure: 'Colonoscopy', surgeon: 'Dr. Garcia', room: 'OR 5', startTime: '11:30 AM', duration: '1 hr', status: 'Scheduled' },
    { id: 'S004', patient: 'Emily Wilson', procedure: 'C-Section', surgeon: 'Dr. Martinez', room: 'OR 2', startTime: '09:15 AM', duration: '1.5 hrs', status: 'Completed' },
  ];

  const tomorrowSurgeries = [
    { id: 'S005', patient: 'Daniel Lee', procedure: 'Appendectomy', surgeon: 'Dr. Thompson', room: 'OR 4', startTime: '08:00 AM', duration: '1 hr', status: 'Scheduled' },
    { id: 'S006', patient: 'Sophia Brown', procedure: 'Cataract Surgery', surgeon: 'Dr. Wilson', room: 'OR 6', startTime: '09:30 AM', duration: '45 min', status: 'Scheduled' },
    { id: 'S007', patient: 'Ethan Miller', procedure: 'Hernia Repair', surgeon: 'Dr. Rodriguez', room: 'OR 2', startTime: '11:00 AM', duration: '1.5 hrs', status: 'Scheduled' },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">OR Utilization</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">82%</div>
            <Progress value={82} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              +5% vs. previous month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Surgeries Today</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              8 elective, 4 emergency
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Surgical Teams</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              3 specialized, 2 general
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">OR Turnover Time</CardTitle>
            <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28 min</div>
            <p className="text-xs text-muted-foreground">
              -4 min vs. target
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Surgery Schedule</CardTitle>
              <CardDescription>
                AI-optimized operating room allocation and scheduling
              </CardDescription>
            </div>
            <Button onClick={() => onActionClick('Create new surgery schedule')}>Schedule Surgery</Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="today" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="tomorrow">Tomorrow</TabsTrigger>
            </TabsList>
            <TabsContent value="today" className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Patient</TableHead>
                    <TableHead>Procedure</TableHead>
                    <TableHead>Surgeon</TableHead>
                    <TableHead>Room</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {todaySurgeries.map((surgery) => (
                    <TableRow key={surgery.id}>
                      <TableCell className="font-medium">{surgery.id}</TableCell>
                      <TableCell>{surgery.patient}</TableCell>
                      <TableCell>{surgery.procedure}</TableCell>
                      <TableCell>{surgery.surgeon}</TableCell>
                      <TableCell>{surgery.room}</TableCell>
                      <TableCell>{surgery.startTime}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          surgery.status === 'In Progress' 
                            ? 'bg-blue-100 text-blue-800' 
                            : surgery.status === 'Completed'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                        }`}>
                          {surgery.status === 'In Progress' && <Clock className="mr-1 h-3 w-3" />}
                          {surgery.status === 'Completed' && <CheckCircle2 className="mr-1 h-3 w-3" />}
                          {surgery.status === 'Scheduled' && <Calendar className="mr-1 h-3 w-3" />}
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
            </TabsContent>
            <TabsContent value="tomorrow" className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Patient</TableHead>
                    <TableHead>Procedure</TableHead>
                    <TableHead>Surgeon</TableHead>
                    <TableHead>Room</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tomorrowSurgeries.map((surgery) => (
                    <TableRow key={surgery.id}>
                      <TableCell className="font-medium">{surgery.id}</TableCell>
                      <TableCell>{surgery.patient}</TableCell>
                      <TableCell>{surgery.procedure}</TableCell>
                      <TableCell>{surgery.surgeon}</TableCell>
                      <TableCell>{surgery.room}</TableCell>
                      <TableCell>{surgery.startTime}</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-800">
                          <Calendar className="mr-1 h-3 w-3" />
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
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>AI-Predicted Surgery Risks</CardTitle>
            <CardDescription>
              Risk assessment for upcoming procedures
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border bg-amber-50 p-3">
                <div className="flex items-center space-x-3">
                  <BadgeAlert className="h-5 w-5 text-amber-500" />
                  <div className="font-medium">Total Knee Replacement (Patient: Robert Johnson)</div>
                </div>
                <div className="mt-1 text-sm text-gray-700 pl-8">
                  <p>AI predicts 12% risk of post-operative infection due to patient's diabetes history.</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-xs font-medium">Risk level: Medium</span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => onActionClick('View risk details for Robert Johnson')}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border bg-red-50 p-3">
                <div className="flex items-center space-x-3">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  <div className="font-medium">C-Section (Patient: Emily Wilson)</div>
                </div>
                <div className="mt-1 text-sm text-gray-700 pl-8">
                  <p>AI predicts 18% risk of hemorrhage based on patient history and lab values.</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-xs font-medium">Risk level: High</span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => onActionClick('View risk details for Emily Wilson')}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resource Optimization</CardTitle>
            <CardDescription>
              AI-generated recommendations for surgery efficiency
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border bg-green-50 p-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <div className="font-medium">Surgical Team Allocation</div>
                </div>
                <div className="mt-1 text-sm text-gray-700 pl-8">
                  <p>AI recommends redistributing nursing staff to optimize morning procedures.</p>
                  <div className="mt-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => onActionClick('Apply team redistribution recommendation')}
                    >
                      Apply Recommendation
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border bg-blue-50 p-3">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <div className="font-medium">Schedule Optimization</div>
                </div>
                <div className="mt-1 text-sm text-gray-700 pl-8">
                  <p>AI suggests swapping the order of two laparoscopic procedures to reduce OR turnover time by 15 minutes.</p>
                  <div className="mt-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => onActionClick('Apply schedule optimization recommendation')}
                    >
                      Apply Recommendation
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SurgerySchedulingSection;
