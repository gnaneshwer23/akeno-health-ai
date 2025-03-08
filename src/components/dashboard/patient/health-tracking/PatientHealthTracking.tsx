
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Heart, 
  Activity, 
  Droplet, 
  Brain, 
  Stethoscope,  // Replace Lungs with Stethoscope
  Plus, 
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Clock
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

const PatientHealthTracking = () => {
  const { toast } = useToast();
  const { user } = useAuth();

  const handleAddSymptom = () => {
    toast({
      title: "Coming Soon",
      description: "Symptom tracking will be available soon!",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-medium text-health-dark">Health Tracking</h1>
        <p className="text-muted-foreground">Real-time monitoring and AI-driven health trends analysis</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <Heart className="h-5 w-5 text-red-500" />
              <Badge variant="outline" className="bg-white">Live Data</Badge>
            </div>
            <CardTitle className="text-lg">Heart Rate</CardTitle>
            <CardDescription>Current: 68 BPM</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-24 flex items-end gap-1">
              {[30, 45, 40, 50, 65, 55, 60, 68, 65, 70, 65, 68].map((value, i) => (
                <div 
                  key={i}
                  className="bg-red-400 rounded-t w-full"
                  style={{ height: `${value}%` }}
                ></div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="text-xs text-muted-foreground flex justify-between">
            <span>Last 12 hours</span>
            <span className="flex items-center gap-1 text-green-600">
              <TrendingDown className="h-3 w-3" /> 
              5% lower than average
            </span>
          </CardFooter>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <Brain className="h-5 w-5 text-purple-500" />
              <Badge variant="outline" className="bg-white">Live Data</Badge>
            </div>
            <CardTitle className="text-lg">Sleep Quality</CardTitle>
            <CardDescription>Last night: 7.4 hours</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Deep Sleep</span>
                  <span>1.8 hrs</span>
                </div>
                <Progress value={25} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>REM Sleep</span>
                  <span>2.1 hrs</span>
                </div>
                <Progress value={28} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Light Sleep</span>
                  <span>3.5 hrs</span>
                </div>
                <Progress value={47} className="h-2" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="text-xs text-muted-foreground flex justify-between">
            <span>Sleep efficiency: 89%</span>
            <span className="flex items-center gap-1 text-green-600">
              <TrendingUp className="h-3 w-3" /> 
              12% better than last week
            </span>
          </CardFooter>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-100">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <Droplet className="h-5 w-5 text-blue-500" />
              <Badge variant="outline" className="bg-white">Live Data</Badge>
            </div>
            <CardTitle className="text-lg">Blood Glucose</CardTitle>
            <CardDescription>Current: 92 mg/dL</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-24 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-20 w-20 rounded-full border-4 border-blue-200 flex items-center justify-center">
                  <div className="text-2xl font-bold text-blue-600">92</div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-8 flex items-end justify-between text-xs text-muted-foreground px-1">
                <span>70</span>
                <span className="text-green-600 font-medium">Target Range</span>
                <span>130</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="text-xs text-muted-foreground flex justify-between">
            <span>Today's average: 94 mg/dL</span>
            <span className="flex items-center gap-1 text-green-600">
              <Activity className="h-3 w-3" /> 
              Stable
            </span>
          </CardFooter>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="biometrics">
            <TabsList className="mb-4">
              <TabsTrigger value="biometrics">Biometrics</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
              <TabsTrigger value="symptom">Symptom Tracker</TabsTrigger>
            </TabsList>

            <TabsContent value="biometrics">
              <Card>
                <CardHeader>
                  <CardTitle>Health Metrics Trends</CardTitle>
                  <CardDescription>View your historical health data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Heart className="h-5 w-5 text-red-500" />
                          <h4 className="font-medium">Cardiovascular Health</h4>
                        </div>
                        <Badge>Good</Badge>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Resting Heart Rate</span>
                            <span className="flex items-center gap-1">
                              <TrendingDown className="h-3 w-3 text-green-600" /> 
                              <span className="font-medium">68 bpm</span>
                            </span>
                          </div>
                          <Progress value={65} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Blood Pressure</span>
                            <span className="flex items-center gap-1">
                              <Activity className="h-3 w-3 text-blue-600" /> 
                              <span className="font-medium">118/78 mmHg</span>
                            </span>
                          </div>
                          <Progress value={78} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Heart Rate Variability</span>
                            <span className="flex items-center gap-1">
                              <TrendingUp className="h-3 w-3 text-green-600" /> 
                              <span className="font-medium">62 ms</span>
                            </span>
                          </div>
                          <Progress value={72} className="h-2" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Droplet className="h-5 w-5 text-blue-500" />
                          <h4 className="font-medium">Metabolic Health</h4>
                        </div>
                        <Badge>Excellent</Badge>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Fasting Glucose</span>
                            <span className="flex items-center gap-1">
                              <Activity className="h-3 w-3 text-blue-600" /> 
                              <span className="font-medium">92 mg/dL</span>
                            </span>
                          </div>
                          <Progress value={90} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Cholesterol (Total)</span>
                            <span className="flex items-center gap-1">
                              <Activity className="h-3 w-3 text-blue-600" /> 
                              <span className="font-medium">175 mg/dL</span>
                            </span>
                          </div>
                          <Progress value={85} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Body Fat</span>
                            <span className="flex items-center gap-1">
                              <TrendingDown className="h-3 w-3 text-green-600" /> 
                              <span className="font-medium">18.5%</span>
                            </span>
                          </div>
                          <Progress value={88} className="h-2" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Stethoscope className="h-5 w-5 text-indigo-500" />
                          <h4 className="font-medium">Respiratory Health</h4>
                        </div>
                        <Badge>Good</Badge>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Resting Respiratory Rate</span>
                            <span className="flex items-center gap-1">
                              <Activity className="h-3 w-3 text-blue-600" /> 
                              <span className="font-medium">14 breaths/min</span>
                            </span>
                          </div>
                          <Progress value={76} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Blood Oxygen</span>
                            <span className="flex items-center gap-1">
                              <Activity className="h-3 w-3 text-blue-600" /> 
                              <span className="font-medium">98%</span>
                            </span>
                          </div>
                          <Progress value={96} className="h-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity">
              <Card>
                <CardHeader>
                  <CardTitle>Physical Activity</CardTitle>
                  <CardDescription>Your movement and exercise data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 mb-3">
                          <Activity size={24} className="text-blue-600" />
                        </div>
                        <h4 className="text-2xl font-medium">8,456</h4>
                        <p className="text-sm text-muted-foreground">Steps today</p>
                        <p className="text-xs mt-2 text-green-600">84% of daily goal</p>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-3">
                          <Activity size={24} className="text-green-600" />
                        </div>
                        <h4 className="text-2xl font-medium">42</h4>
                        <p className="text-sm text-muted-foreground">Active minutes</p>
                        <p className="text-xs mt-2 text-green-600">70% of daily goal</p>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 mb-3">
                          <Activity size={24} className="text-purple-600" />
                        </div>
                        <h4 className="text-2xl font-medium">3</h4>
                        <p className="text-sm text-muted-foreground">Workouts this week</p>
                        <p className="text-xs mt-2 text-green-600">60% of weekly goal</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium">Recent Workouts</h4>
                      <div className="space-y-3">
                        <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                              <Activity size={20} className="text-green-600" />
                            </div>
                            <div>
                              <h5 className="font-medium">Morning Walk</h5>
                              <p className="text-xs text-muted-foreground">45 minutes, 4,500 steps</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-medium">Today</span>
                            <p className="text-xs text-muted-foreground">7:30 AM</p>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <Activity size={20} className="text-blue-600" />
                            </div>
                            <div>
                              <h5 className="font-medium">Strength Training</h5>
                              <p className="text-xs text-muted-foreground">30 minutes, upper body</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-medium">Yesterday</span>
                            <p className="text-xs text-muted-foreground">6:00 PM</p>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                              <Activity size={20} className="text-purple-600" />
                            </div>
                            <div>
                              <h5 className="font-medium">Yoga Session</h5>
                              <p className="text-xs text-muted-foreground">45 minutes, flexibility focus</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-medium">2 days ago</span>
                            <p className="text-xs text-muted-foreground">7:15 AM</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium">AI-Recommended Activity Goals</h4>
                      <div className="bg-green-50 border border-green-100 p-4 rounded-lg">
                        <p className="text-sm">Based on your health profile and recent metrics, our AI recommends:</p>
                        <ul className="mt-2 text-sm list-disc pl-5 space-y-1">
                          <li>Aim for 10,000 steps daily to improve cardiovascular health</li>
                          <li>Add 2 strength training sessions per week</li>
                          <li>Include 15 minutes of stretching after workouts to improve flexibility</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="nutrition">
              <Card>
                <CardHeader>
                  <CardTitle>Nutrition Tracking</CardTitle>
                  <CardDescription>Track your food intake and nutrition</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 px-4">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 mb-4">
                      <Clock size={32} className="text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Coming Soon</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Nutrition tracking features are currently in development and will be available soon!
                    </p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => toast({
                        title: "Feature in Development",
                        description: "We're working hard to bring you nutrition tracking soon!",
                      })}
                    >
                      Get Notified When Available
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="symptom">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Symptom Tracker</CardTitle>
                      <CardDescription>Log and monitor your symptoms over time</CardDescription>
                    </div>
                    <Button onClick={handleAddSymptom}>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Symptom
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border-b pb-4">
                      <h3 className="font-medium mb-2">Recent Symptoms</h3>
                      <div className="space-y-3">
                        <div className="bg-orange-50 border border-orange-100 p-4 rounded-lg flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium">Headache</h4>
                              <Badge variant="outline" className="bg-white">Moderate</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">Reported yesterday at 3:15 PM</p>
                            <p className="text-sm mt-2">Dull pain behind eyes, lasted approximately 2 hours.</p>
                            <div className="mt-2">
                              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Stress</span>
                              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full ml-1">Dehydration</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium">Fatigue</h4>
                              <Badge variant="outline" className="bg-white">Mild</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">Reported 2 days ago at 9:30 PM</p>
                            <p className="text-sm mt-2">General tiredness throughout the day, improved after rest.</p>
                            <div className="mt-2">
                              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Poor Sleep</span>
                              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full ml-1">Stress</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">AI Insights</h3>
                      <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg">
                        <p className="text-sm">Based on your symptom patterns, our AI has identified:</p>
                        <ul className="mt-2 text-sm list-disc pl-5 space-y-1">
                          <li>Your headaches may be correlated with periods of high stress</li>
                          <li>Fatigue symptoms tend to occur after days with less than 7 hours of sleep</li>
                          <li>Both symptoms improve with increased hydration</li>
                        </ul>
                        <div className="mt-3 pt-3 border-t border-blue-200">
                          <p className="text-sm font-medium">Recommendations:</p>
                          <ul className="mt-1 text-sm list-disc pl-5 space-y-1">
                            <li>Maintain consistent sleep schedule (7-8 hours)</li>
                            <li>Practice stress management techniques</li>
                            <li>Increase daily water intake by 16oz</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>AI-Powered Risk Analysis</CardTitle>
              <CardDescription>AI-detected health risks based on your data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-green-50 p-3 rounded-lg border border-green-100 flex items-start gap-3">
                  <div className="p-1.5 bg-green-100 rounded-full flex-shrink-0">
                    <Activity className="h-4 w-4 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800">Low Cardiovascular Risk</h4>
                    <p className="text-xs text-green-700 mt-1">Your heart health metrics indicate low risk of cardiovascular issues.</p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100 flex items-start gap-3">
                  <div className="p-1.5 bg-yellow-100 rounded-full flex-shrink-0">
                    <AlertTriangle className="h-4 w-4 text-yellow-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-800">Moderate Metabolic Risk</h4>
                    <p className="text-xs text-yellow-700 mt-1">Slight variations in glucose levels suggest monitoring.</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 flex items-start gap-3">
                  <div className="p-1.5 bg-gray-100 rounded-full flex-shrink-0">
                    <Brain className="h-4 w-4 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Low Cognitive Risk</h4>
                    <p className="text-xs text-gray-700 mt-1">Sleep quality and stress levels are within healthy ranges.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Health Goals</CardTitle>
              <CardDescription>AI-recommended goals based on your health profile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Daily Steps</h4>
                    <Badge variant="outline">8,456 / 10,000</Badge>
                  </div>
                  <Progress value={84} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-2">You're on track to reach your goal!</p>
                </div>

                <div className="border rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Water Intake</h4>
                    <Badge variant="outline">4 / 8 glasses</Badge>
                  </div>
                  <Progress value={50} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-2">You're halfway to your daily hydration goal.</p>
                </div>

                <div className="border rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Weekly Exercise</h4>
                    <Badge variant="outline">3 / 5 days</Badge>
                  </div>
                  <Progress value={60} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-2">2 more days of activity needed this week.</p>
                </div>

                <Button variant="outline" className="w-full" onClick={() => toast({
                  title: "Coming Soon",
                  description: "Custom goal setting will be available soon!",
                })}>
                  <Plus className="mr-2 h-4 w-4" />
                  Set Custom Goal
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PatientHealthTracking;
