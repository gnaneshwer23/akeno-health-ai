
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { 
  Stethoscope,
  Users,
  AlertTriangle,
  Clock,
  Search,
  HeartPulse,
  Brain,
  Activity,
  ChevronRight,
  BarChart
} from 'lucide-react';
import { Button } from '@/components/Button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const DoctorDashboard = () => {
  const { user } = useAuth();

  // Mock patient data
  const patients = [
    {
      id: '1',
      name: 'Emma Thompson',
      age: 58,
      condition: 'Type 2 Diabetes',
      status: 'Critical',
      lastReading: 'Blood Glucose: 210 mg/dL',
      lastVisit: '3 days ago',
      riskScore: 85,
      avatar: 'https://ui-avatars.com/api/?name=Emma+Thompson&background=E57373&color=fff'
    },
    {
      id: '2',
      name: 'Michael Chen',
      age: 42,
      condition: 'Hypertension',
      status: 'Warning',
      lastReading: 'BP: 150/95 mmHg',
      lastVisit: '1 week ago',
      riskScore: 65,
      avatar: 'https://ui-avatars.com/api/?name=Michael+Chen&background=64B5F6&color=fff'
    },
    {
      id: '3',
      name: 'Sophia Rodriguez',
      age: 35,
      condition: 'Asthma',
      status: 'Stable',
      lastReading: 'Peak Flow: 380 L/min',
      lastVisit: '2 weeks ago',
      riskScore: 30,
      avatar: 'https://ui-avatars.com/api/?name=Sophia+Rodriguez&background=81C784&color=fff'
    },
    {
      id: '4',
      name: 'James Wilson',
      age: 67,
      condition: 'Coronary Artery Disease',
      status: 'Warning',
      lastReading: 'Heart Rate: 92 bpm',
      lastVisit: '5 days ago',
      riskScore: 70,
      avatar: 'https://ui-avatars.com/api/?name=James+Wilson&background=FFB74D&color=fff'
    },
    {
      id: '5',
      name: 'Aisha Johnson',
      age: 29,
      condition: 'Multiple Sclerosis',
      status: 'Stable',
      lastReading: 'EDSS Score: 2.5',
      lastVisit: '1 month ago',
      riskScore: 45,
      avatar: 'https://ui-avatars.com/api/?name=Aisha+Johnson&background=9575CD&color=fff'
    }
  ];

  const upcomingAppointments = [
    {
      id: '1',
      patient: 'Emma Thompson',
      type: 'Follow-up',
      time: '10:30 AM',
      date: 'Today',
      avatar: 'https://ui-avatars.com/api/?name=Emma+Thompson&background=E57373&color=fff'
    },
    {
      id: '2',
      patient: 'Robert Garcia',
      type: 'New Patient',
      time: '1:15 PM',
      date: 'Today',
      avatar: 'https://ui-avatars.com/api/?name=Robert+Garcia&background=4FC3F7&color=fff'
    },
    {
      id: '3',
      patient: 'Michael Chen',
      type: 'Urgent Care',
      time: '9:00 AM',
      date: 'Tomorrow',
      avatar: 'https://ui-avatars.com/api/?name=Michael+Chen&background=64B5F6&color=fff'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-medium text-health-dark">Welcome, {user?.name}</h1>
        <p className="text-muted-foreground">Here's your AI-enhanced clinical dashboard</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <Users size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Patients</p>
              <p className="text-2xl font-semibold">248</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-600">
              <AlertTriangle size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Critical Alerts</p>
              <p className="text-2xl font-semibold">7</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <Stethoscope size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Consultations</p>
              <p className="text-2xl font-semibold">18</p>
              <p className="text-xs text-green-600">↑ 12% this week</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Upcoming</p>
              <p className="text-2xl font-semibold">3</p>
              <p className="text-xs">Next: 10:30 AM</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Patient Risk Monitor */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Patient Risk Monitor</CardTitle>
              <CardDescription>AI-powered risk assessment and alerts</CardDescription>
            </div>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search patients..."
                className="w-[250px] pl-8"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Condition</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Reading</TableHead>
                <TableHead>Last Visit</TableHead>
                <TableHead>Risk Score</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patients.map(patient => (
                <TableRow key={patient.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={patient.avatar} alt={patient.name} />
                        <AvatarFallback>{patient.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p>{patient.name}</p>
                        <p className="text-xs text-muted-foreground">{patient.age} years</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{patient.condition}</TableCell>
                  <TableCell>
                    <Badge variant={
                      patient.status === 'Critical' ? 'destructive' :
                      patient.status === 'Warning' ? 'default' : 'outline'
                    } className={
                      patient.status === 'Critical' ? 'bg-red-500' :
                      patient.status === 'Warning' ? 'bg-amber-500' : ''
                    }>
                      {patient.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{patient.lastReading}</TableCell>
                  <TableCell>{patient.lastVisit}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={patient.riskScore} className="h-2 w-24" 
                        style={{ 
                          background: '#e2e8f0',
                          color: patient.riskScore > 80 ? '#ef4444' : 
                                 patient.riskScore > 60 ? '#f59e0b' : 
                                 patient.riskScore > 40 ? '#3b82f6' : '#10b981'
                        }} 
                      />
                      <span className="text-sm font-medium">{patient.riskScore}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* AI Clinical Insights */}
        <div className="md:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>AI Clinical Insights</CardTitle>
              <CardDescription>AI-driven diagnostic and treatment recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="diagnostics">
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="diagnostics">
                    <HeartPulse size={16} className="mr-2" />
                    Diagnostics
                  </TabsTrigger>
                  <TabsTrigger value="treatments">
                    <Brain size={16} className="mr-2" />
                    Treatments
                  </TabsTrigger>
                  <TabsTrigger value="research">
                    <BarChart size={16} className="mr-2" />
                    Research
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="diagnostics" className="space-y-4">
                  <Card>
                    <CardHeader className="py-3">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-base">Emma Thompson - Type 2 Diabetes</CardTitle>
                        <Badge className="bg-red-500">High Priority</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="py-2">
                      <p className="text-sm text-muted-foreground mb-2">
                        Recent blood work indicates HbA1c of 9.2% (up from 8.1% 3 months ago). AI analysis suggests:
                      </p>
                      <ul className="text-sm list-disc pl-4 space-y-1">
                        <li>Deteriorating glycemic control despite current medication</li>
                        <li>Possible medication non-adherence (refill pattern analysis)</li>
                        <li>Early signs of diabetic nephropathy (creatinine trend analysis)</li>
                      </ul>
                    </CardContent>
                    <CardFooter className="pt-0 pb-3">
                      <Button variant="default" size="sm">View Complete Analysis</Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader className="py-3">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-base">James Wilson - Coronary Artery Disease</CardTitle>
                        <Badge className="bg-amber-500">Medium Priority</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="py-2">
                      <p className="text-sm text-muted-foreground mb-2">
                        AI analysis of home ECG readings shows:
                      </p>
                      <ul className="text-sm list-disc pl-4 space-y-1">
                        <li>Increased heart rate variability during sleep</li>
                        <li>Occasional ST-segment depression in early morning hours</li>
                        <li>Possible correlation with reported shortness of breath</li>
                      </ul>
                    </CardContent>
                    <CardFooter className="pt-0 pb-3">
                      <Button variant="default" size="sm">View Complete Analysis</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="treatments" className="space-y-4">
                  <Card>
                    <CardHeader className="py-3">
                      <CardTitle className="text-base">Personalized Treatment Recommendations</CardTitle>
                    </CardHeader>
                    <CardContent className="py-2">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-1">Emma Thompson - Type 2 Diabetes</h4>
                          <p className="text-sm text-muted-foreground mb-1">AI recommendation based on genetic profile + disease progression:</p>
                          <ul className="text-sm list-disc pl-4 space-y-1">
                            <li>Consider adding GLP-1 receptor agonist (predicted 68% response rate)</li>
                            <li>Adjust metformin timing to improve absorption (genetic metabolism profile)</li>
                            <li>Schedule nephrology consult within 2 weeks</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium mb-1">Michael Chen - Hypertension</h4>
                          <p className="text-sm text-muted-foreground mb-1">AI recommendation based on medicine response pattern:</p>
                          <ul className="text-sm list-disc pl-4 space-y-1">
                            <li>Switch from current ACE inhibitor to ARB (predicted better response)</li>
                            <li>Add low-dose calcium channel blocker (evening dosage)</li>
                            <li>Increase dietary potassium based on genomic analysis</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="research" className="space-y-4">
                  <Card>
                    <CardHeader className="py-3">
                      <CardTitle className="text-base">Recent Research Insights</CardTitle>
                    </CardHeader>
                    <CardContent className="py-2">
                      <div className="space-y-4">
                        <div className="border-l-4 border-blue-500 pl-3">
                          <h4 className="text-sm font-medium">Relevant to 5 of your patients</h4>
                          <p className="text-sm">New NEJM study on GLP-1 agonists shows 32% reduction in cardiovascular events in patients with T2DM and established CAD</p>
                          <a href="#" className="text-sm text-blue-500 hover:underline">View study details</a>
                        </div>
                        
                        <div className="border-l-4 border-purple-500 pl-3">
                          <h4 className="text-sm font-medium">Relevant to 3 of your patients</h4>
                          <p className="text-sm">Meta-analysis in Lancet indicates cognitive benefits from aggressive BP control in patients with hypertension over age 60</p>
                          <a href="#" className="text-sm text-blue-500 hover:underline">View study details</a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Appointments */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
            <CardDescription>Upcoming appointments and consultations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAppointments.map(appointment => (
                <div key={appointment.id} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={appointment.avatar} alt={appointment.patient} />
                    <AvatarFallback>{appointment.patient.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-medium">{appointment.patient}</p>
                      <Badge variant="outline">{appointment.type}</Badge>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-sm text-muted-foreground">
                        {appointment.date}, {appointment.time}
                      </p>
                      <Button variant="ghost" size="sm" className="h-6 p-0">
                        <ChevronRight size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View Full Schedule</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default DoctorDashboard;
