
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Activity, AlertCircle, Clock, ArrowUpRight, Users, AlertTriangle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface EmergencyResponseSectionProps {
  onActionClick: (action: string) => void;
}

// Mock data
const emergencyCases = [
  { 
    id: 'ER-1204',
    name: 'Michael Johnson',
    age: 58,
    time: '08:42 AM',
    condition: 'Chest Pain',
    severity: 'Critical',
    vitals: { bp: '165/95', hr: 112, o2: 94 },
    triageScore: 1,
  },
  { 
    id: 'ER-1205',
    name: 'Emily Foster',
    age: 32,
    time: '09:15 AM',
    condition: 'Head Injury',
    severity: 'Serious',
    vitals: { bp: '135/85', hr: 98, o2: 97 },
    triageScore: 2,
  },
  { 
    id: 'ER-1206',
    name: 'Robert Chen',
    age: 45,
    time: '09:22 AM',
    condition: 'Allergic Reaction',
    severity: 'Urgent',
    vitals: { bp: '140/88', hr: 105, o2: 95 },
    triageScore: 2,
  },
  { 
    id: 'ER-1207',
    name: 'James Wilson',
    age: 8,
    time: '09:35 AM',
    condition: 'Broken Arm',
    severity: 'Moderate',
    vitals: { bp: '110/70', hr: 92, o2: 99 },
    triageScore: 3,
  },
  { 
    id: 'ER-1208',
    name: 'Sophia Garcia',
    age: 68,
    time: '09:40 AM',
    condition: 'Dizziness',
    severity: 'Non-urgent',
    vitals: { bp: '145/85', hr: 76, o2: 98 },
    triageScore: 4,
  },
];

const loadData = {
  currentLoad: 78,
  predictedTrend: 'increasing',
  estimatedWaitTimes: {
    critical: '0 min',
    serious: '5-10 min',
    urgent: '20-30 min',
    moderate: '45-60 min',
    nonUrgent: '90-120 min'
  },
  staffingStatus: {
    physicians: 'Adequate',
    nurses: 'Strained',
    techs: 'Adequate'
  },
  criticalResources: {
    traumaBays: { available: 1, total: 2 },
    resuscitationRooms: { available: 2, total: 3 },
    isolationRooms: { available: 2, total: 4 }
  }
};

const EmergencyResponseSection: React.FC<EmergencyResponseSectionProps> = ({ onActionClick }) => {
  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-health-primary" />
              AI-Powered Emergency Response System
            </CardTitle>
            <CardDescription>
              Real-time emergency triage, prioritization, and resource allocation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="triage">
              <TabsList className="mb-4">
                <TabsTrigger value="triage" className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  Emergency Triage
                </TabsTrigger>
                <TabsTrigger value="stats" className="flex items-center gap-2">
                  <Activity className="h-4 w-4" />
                  ER Analytics
                </TabsTrigger>
              </TabsList>

              <TabsContent value="triage">
                <div className="space-y-3">
                  {emergencyCases.map((patient, index) => (
                    <Card 
                      key={index} 
                      className={
                        patient.severity === 'Critical' ? 'border-red-300 bg-red-50' :
                        patient.severity === 'Serious' ? 'border-orange-300 bg-orange-50' :
                        patient.severity === 'Urgent' ? 'border-amber-300 bg-amber-50' :
                        patient.severity === 'Moderate' ? 'border-blue-300 bg-blue-50' :
                        'border-green-300 bg-green-50'
                      }
                    >
                      <CardContent className="p-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{patient.name}</span>
                              <span className="text-sm">{patient.age}y</span>
                              <Badge 
                                variant={
                                  patient.severity === 'Critical' ? "destructive" :
                                  patient.severity === 'Serious' ? "destructive" :
                                  patient.severity === 'Urgent' ? "default" :
                                  patient.severity === 'Moderate' ? "secondary" :
                                  "outline"
                                }
                              >
                                {patient.severity}
                              </Badge>
                            </div>
                            <div className="text-sm mt-1">{patient.condition}</div>
                            <div className="flex gap-3 mt-1 text-xs">
                              <span>BP: {patient.vitals.bp}</span>
                              <span>HR: {patient.vitals.hr}</span>
                              <span>O₂: {patient.vitals.o2}%</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs">{patient.time}</div>
                            <div className="text-xs">ID: {patient.id}</div>
                            <div className="mt-1">
                              <Badge variant="outline" className="text-xs">
                                AI Triage Score: {patient.triageScore}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end gap-2 mt-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => onActionClick(`View patient ${patient.id} details`)}
                          >
                            Details
                          </Button>
                          <Button 
                            size="sm" 
                            variant={patient.severity === 'Critical' || patient.severity === 'Serious' ? "destructive" : "default"}
                            onClick={() => onActionClick(`Attend to patient ${patient.id}`)}
                          >
                            Attend Now
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="stats">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Current ER Load</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Current Load</span>
                          <span className="font-medium">{loadData.currentLoad}%</span>
                        </div>
                        <Progress value={loadData.currentLoad} className="bg-amber-100" />
                        <div className="flex justify-between text-xs">
                          <span>Trend</span>
                          <span className="text-amber-600 flex items-center">
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            {loadData.predictedTrend}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Wait Times</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Critical:</span>
                          <span className="font-medium text-red-600">{loadData.estimatedWaitTimes.critical}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Serious:</span>
                          <span className="font-medium text-orange-600">{loadData.estimatedWaitTimes.serious}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Urgent:</span>
                          <span className="font-medium text-amber-600">{loadData.estimatedWaitTimes.urgent}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Moderate:</span>
                          <span className="font-medium">{loadData.estimatedWaitTimes.moderate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Non-urgent:</span>
                          <span className="font-medium">{loadData.estimatedWaitTimes.nonUrgent}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Staffing Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center">
                          <span>Physicians:</span>
                          <Badge variant="outline" className="bg-green-50">
                            {loadData.staffingStatus.physicians}
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Nurses:</span>
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                            {loadData.staffingStatus.nurses}
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Techs:</span>
                          <Badge variant="outline" className="bg-green-50">
                            {loadData.staffingStatus.techs}
                          </Badge>
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        className="w-full mt-3" 
                        variant="outline"
                        onClick={() => onActionClick('Request additional nursing staff')}
                      >
                        Request Additional Staff
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Critical Resources</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div>
                          <div className="flex justify-between">
                            <span>Trauma Bays:</span>
                            <span className="font-medium">
                              {loadData.criticalResources.traumaBays.available}/{loadData.criticalResources.traumaBays.total} Available
                            </span>
                          </div>
                          <Progress 
                            value={
                              (loadData.criticalResources.traumaBays.available / loadData.criticalResources.traumaBays.total) * 100
                            } 
                            className="mt-1 h-2 bg-gray-100" 
                          />
                        </div>
                        <div>
                          <div className="flex justify-between">
                            <span>Resuscitation Rooms:</span>
                            <span className="font-medium">
                              {loadData.criticalResources.resuscitationRooms.available}/{loadData.criticalResources.resuscitationRooms.total} Available
                            </span>
                          </div>
                          <Progress 
                            value={
                              (loadData.criticalResources.resuscitationRooms.available / loadData.criticalResources.resuscitationRooms.total) * 100
                            } 
                            className="mt-1 h-2 bg-gray-100" 
                          />
                        </div>
                        <div>
                          <div className="flex justify-between">
                            <span>Isolation Rooms:</span>
                            <span className="font-medium">
                              {loadData.criticalResources.isolationRooms.available}/{loadData.criticalResources.isolationRooms.total} Available
                            </span>
                          </div>
                          <Progress 
                            value={
                              (loadData.criticalResources.isolationRooms.available / loadData.criticalResources.isolationRooms.total) * 100
                            } 
                            className="mt-1 h-2 bg-gray-100" 
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-health-primary" />
              ER Congestion Forecast
            </CardTitle>
            <CardDescription>
              AI predicts upcoming ER demand and resource needs
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Card className="border-amber-200 bg-amber-50">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Clock className="h-4 w-4 text-amber-600" />
                  Next 4 Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Predicted Load:</span>
                    <span className="font-medium text-amber-700">85% (High)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Admission Rate:</span>
                    <span className="font-medium">22%</span>
                  </div>
                  <div className="flex justify-between text-amber-800 bg-amber-100 p-1 rounded mt-2">
                    <span>AI Alert:</span>
                    <span className="font-medium">Traffic accident reported nearby</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Staff Recommendation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-3 border rounded bg-gray-50 text-sm space-y-2">
                  <p>Based on predicted ER demand, AI recommends:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Add 2 additional nurses for evening shift</li>
                    <li>Prepare extra trauma bay</li>
                    <li>Alert on-call neurologist</li>
                  </ul>
                  <Button 
                    size="sm" 
                    className="w-full mt-2" 
                    onClick={() => onActionClick('Implement ER staff recommendations')}
                  >
                    Implement Recommendations
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Users className="h-4 w-4 text-health-primary" />
                  Upcoming Shift Coverage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="p-2 border rounded flex justify-between items-center bg-red-50 border-red-200">
                    <div className="text-sm">
                      <div className="font-medium">Night Shift (11PM-7AM)</div>
                      <div className="text-xs text-red-600">2 nurses short</div>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-xs" 
                      onClick={() => onActionClick('Address night shift staffing')}
                    >
                      Address
                    </Button>
                  </div>
                  <div className="p-2 border rounded flex justify-between items-center">
                    <div className="text-sm">
                      <div className="font-medium">Morning Shift (7AM-3PM)</div>
                      <div className="text-xs text-green-600">Fully staffed</div>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-xs"
                      onClick={() => onActionClick('View morning shift details')}
                    >
                      View
                    </Button>
                  </div>
                  <div className="p-2 border rounded flex justify-between items-center">
                    <div className="text-sm">
                      <div className="font-medium">Evening Shift (3PM-11PM)</div>
                      <div className="text-xs text-amber-600">1 physician short</div>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-xs"
                      onClick={() => onActionClick('Address evening shift staffing')}
                    >
                      Address
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmergencyResponseSection;
