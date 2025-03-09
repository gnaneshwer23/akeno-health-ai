
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Clock, AlertCircle, ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PatientRiskCard from '@/components/hospital-solutions/decision-support/PatientRiskCard';

interface PatientRiskMonitorSectionProps {
  onActionClick: (action: string) => void;
}

const PatientRiskMonitorSection: React.FC<PatientRiskMonitorSectionProps> = ({ onActionClick }) => {
  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-health-primary" />
              Real-Time Patient Risk Monitoring
            </CardTitle>
            <CardDescription>
              AI-powered early detection of patient deterioration and critical events
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="critical">
              <TabsList className="mb-4">
                <TabsTrigger value="critical" className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                  Critical (3)
                </TabsTrigger>
                <TabsTrigger value="moderate" className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-amber-500" />
                  Moderate (7)
                </TabsTrigger>
                <TabsTrigger value="stable" className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-green-500" />
                  Stable (42)
                </TabsTrigger>
              </TabsList>

              <TabsContent value="critical">
                <div className="grid gap-3 md:grid-cols-2">
                  <Card className="border-red-200 bg-red-50">
                    <CardHeader className="py-2 px-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="bg-red-100 p-1.5 rounded-full">
                            <AlertTriangle className="h-4 w-4 text-red-600" />
                          </div>
                          <span className="font-medium text-sm text-red-800">
                            Sepsis Risk Alert
                          </span>
                        </div>
                        <span className="text-xs bg-red-200 text-red-800 px-2 py-0.5 rounded-full">
                          Room 302
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="py-2 px-3">
                      <div className="text-sm text-gray-700">
                        <p className="mb-1"><span className="font-medium">Patient:</span> John Doe, 68M</p>
                        <p className="mb-1"><span className="font-medium">Alert:</span> Rising lactate levels and decreasing BP</p>
                        <p className="mb-1"><span className="font-medium">AI Score:</span> <span className="text-red-600 font-bold">92%</span> probability of early sepsis</p>
                        <div className="flex space-x-2 mt-2">
                          <Button size="sm" variant="default" onClick={() => onActionClick('View sepsis alert details')}>
                            Respond Now
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => onActionClick('View patient chart')}>
                            View Chart
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-red-200 bg-red-50">
                    <CardHeader className="py-2 px-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="bg-red-100 p-1.5 rounded-full">
                            <AlertTriangle className="h-4 w-4 text-red-600" />
                          </div>
                          <span className="font-medium text-sm text-red-800">
                            Respiratory Distress
                          </span>
                        </div>
                        <span className="text-xs bg-red-200 text-red-800 px-2 py-0.5 rounded-full">
                          ICU 4
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="py-2 px-3">
                      <div className="text-sm text-gray-700">
                        <p className="mb-1"><span className="font-medium">Patient:</span> Sarah Johnson, 72F</p>
                        <p className="mb-1"><span className="font-medium">Alert:</span> O2 saturation dropped from 92% to 85%</p>
                        <p className="mb-1"><span className="font-medium">AI Suggestion:</span> Immediate ventilation support</p>
                        <div className="flex space-x-2 mt-2">
                          <Button size="sm" variant="default" onClick={() => onActionClick('Respond to respiratory distress')}>
                            Respond Now
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => onActionClick('View ICU patient chart')}>
                            View Chart
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="moderate">
                <div className="grid gap-3 md:grid-cols-2">
                  {/* Sample moderate risk patients - these would be populated from real data */}
                  {[1, 2, 3, 4].map((idx) => (
                    <Card key={idx} className="border-amber-200 bg-amber-50">
                      <CardHeader className="py-2 px-3">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div className="bg-amber-100 p-1.5 rounded-full">
                              <Clock className="h-4 w-4 text-amber-600" />
                            </div>
                            <span className="font-medium text-sm text-amber-800">
                              Moderate Risk
                            </span>
                          </div>
                          <span className="text-xs bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full">
                            Room {300 + idx}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="py-2 px-3">
                        <div className="text-sm text-gray-700">
                          <p className="mb-1"><span className="font-medium">Patient:</span> Patient #{idx}</p>
                          <p className="mb-1"><span className="font-medium">Risk:</span> Elevated vitals requiring monitoring</p>
                          <div className="flex space-x-2 mt-2">
                            <Button size="sm" variant="outline" onClick={() => onActionClick(`View patient ${idx} details`)}>
                              View Details
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="stable">
                <div className="p-4 text-center text-gray-500">
                  <p>42 patients currently stable with no significant risk factors</p>
                  <Button variant="outline" className="mt-2" onClick={() => onActionClick('View all stable patients')}>
                    View All Stable Patients
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card className="h-full">
          <CardHeader>
            <CardTitle>AI Risk Predictions</CardTitle>
            <CardDescription>
              Machine learning predicts patient outcomes based on clinical patterns
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <PatientRiskCard
              title="Cardiac Complication"
              patientId="P-2458"
              risk={78}
              factors={[
                "History of MI",
                "Elevated troponin",
                "Abnormal ECG pattern"
              ]}
            />
            
            <PatientRiskCard
              title="Fall Risk"
              patientId="P-8903"
              risk={65}
              factors={[
                "Advanced age (82)",
                "Gait instability",
                "Multiple medications"
              ]}
            />
            
            <PatientRiskCard
              title="Rehospitalization"
              patientId="P-4571"
              risk={42}
              factors={[
                "Recent discharge (7 days)",
                "Chronic COPD",
                "Medication non-compliance"
              ]}
            />

            <div className="pt-3">
              <Button variant="outline" className="w-full" onClick={() => onActionClick('View all risk predictions')}>
                View All Predictions <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PatientRiskMonitorSection;
