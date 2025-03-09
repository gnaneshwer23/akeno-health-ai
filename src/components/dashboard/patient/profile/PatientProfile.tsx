
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Edit, 
  Save, 
  Smartphone, 
  Hospital, 
  Shield, 
  HeartPulse, 
  Brain, 
  Activity, 
  Lock, 
  Database, 
  FileText
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';

const PatientProfile = () => {
  const { user } = useAuth();
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Profile saved",
      description: "Your profile information has been updated successfully.",
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-medium text-health-dark">Your Health Profile</h1>
          <p className="text-muted-foreground">Personalized AI-driven health insights and data management</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Lock size={16} />
            <span>Privacy Settings</span>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Database size={16} />
            <span>Export Data</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Personal Information Card */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-health-primary" />
              Personal Information
            </CardTitle>
            <CardDescription>Your basic profile details</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <div className="relative group">
              <Avatar className="h-32 w-32 border-4 border-health-primary/10 shadow-md">
                <AvatarImage src={user?.profileImage} alt={user?.name} />
                <AvatarFallback className="text-4xl bg-gradient-to-br from-health-primary to-health-secondary text-white">
                  {user?.name?.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200">
                <Edit className="h-6 w-6 text-white" />
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-medium">{user?.name}</h3>
              <p className="text-muted-foreground">{user?.email}</p>
              <div className="mt-3 flex items-center justify-center gap-2">
                <Badge variant="outline" className="bg-health-primary/10 text-health-primary border-health-primary/20 px-3 py-1">
                  <span className="capitalize">{user?.role || 'Patient'}</span>
                </Badge>
                <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200 px-3 py-1">
                  Active
                </Badge>
              </div>
            </div>
            
            <div className="w-full mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Profile Completion</span>
                <span className="font-medium">85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
            
            <Button variant="outline" className="w-full mt-2" onClick={() => toast({
              title: "Coming Soon",
              description: "Profile picture upload will be available soon!",
            })}>
              <Edit className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        {/* Health Overview Card */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HeartPulse className="h-5 w-5 text-health-primary" />
              AI Health Overview
            </CardTitle>
            <CardDescription>Your personalized health command center</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-medium text-green-800">Health Score</h4>
                    <p className="text-3xl font-bold text-green-600">86</p>
                  </div>
                  <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Activity className="h-5 w-5 text-green-500" />
                  </div>
                </div>
                <p className="text-xs text-green-700 mt-2">12% better than last month</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-medium text-blue-800">Risk Level</h4>
                    <p className="text-3xl font-bold text-blue-600">Low</p>
                  </div>
                  <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Shield className="h-5 w-5 text-blue-500" />
                  </div>
                </div>
                <p className="text-xs text-blue-700 mt-2">Based on AI assessment of vitals</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-medium text-purple-800">Cognitive Health</h4>
                    <p className="text-3xl font-bold text-purple-600">Good</p>
                  </div>
                  <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Brain className="h-5 w-5 text-purple-500" />
                  </div>
                </div>
                <p className="text-xs text-purple-700 mt-2">Based on sleep and stress data</p>
              </div>
            </div>

            <Tabs defaultValue="personal">
              <TabsList className="mb-4 w-full">
                <TabsTrigger value="personal" className="flex-1">Personal</TabsTrigger>
                <TabsTrigger value="medical" className="flex-1">Medical History</TabsTrigger>
                <TabsTrigger value="devices" className="flex-1">Connected Devices</TabsTrigger>
                <TabsTrigger value="providers" className="flex-1">Healthcare Providers</TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <input type="text" defaultValue={user?.name} className="w-full p-2 border rounded-md" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input type="email" defaultValue={user?.email} className="w-full p-2 border rounded-md bg-gray-50" readOnly />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Age</label>
                    <input type="number" defaultValue="35" className="w-full p-2 border rounded-md" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Gender</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Non-binary</option>
                      <option>Prefer not to say</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone</label>
                    <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full p-2 border rounded-md" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Address</label>
                    <input type="text" defaultValue="123 Health St, CA" className="w-full p-2 border rounded-md" />
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <Button onClick={handleSave} className="bg-health-primary hover:bg-health-secondary">
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="medical" className="space-y-4">
                <div className="space-y-4">
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md text-yellow-800 text-sm">
                    <strong>AI Health Insight:</strong> Your heart rate variability (HRV) and sleep pattern indicate increased stress levels. Consider taking a break, meditating, or scheduling a wellness check-up.
                  </div>
                
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <HeartPulse className="h-4 w-4 text-red-500" />
                      Chronic Conditions
                    </label>
                    <textarea className="w-full p-2 border rounded-md" rows={2} defaultValue="Type 2 Diabetes (managed with medication)"></textarea>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Activity className="h-4 w-4 text-blue-500" />
                      Current Medications
                    </label>
                    <textarea className="w-full p-2 border rounded-md" rows={2} defaultValue="Metformin 500mg twice daily"></textarea>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Allergies</label>
                    <textarea className="w-full p-2 border rounded-md" rows={2} defaultValue="Penicillin, Shellfish"></textarea>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Brain className="h-4 w-4 text-purple-500" />
                      Family Medical History
                    </label>
                    <textarea className="w-full p-2 border rounded-md" rows={2} defaultValue="Father: Hypertension, Mother: Type 2 Diabetes"></textarea>
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <Button onClick={handleSave} className="bg-health-primary hover:bg-health-secondary">
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="devices" className="space-y-4">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-xl">
                      <Smartphone className="h-7 w-7 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">Apple Watch Series 8</h4>
                          <p className="text-sm text-muted-foreground">Connected since: Jan 15, 2023</p>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">Active</Badge>
                      </div>
                      <p className="text-xs text-green-600 mt-1">Last sync: 10 minutes ago</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-gray-100">Heart Rate</Badge>
                        <Badge variant="secondary" className="bg-gray-100">ECG</Badge>
                        <Badge variant="secondary" className="bg-gray-100">Activity</Badge>
                        <Badge variant="secondary" className="bg-gray-100">Sleep</Badge>
                      </div>
                      <div className="mt-3">
                        <Button variant="outline" size="sm">Disconnect</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start gap-4">
                    <div className="p-3 bg-purple-50 rounded-xl">
                      <Activity className="h-7 w-7 text-purple-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">Continuous Glucose Monitor</h4>
                          <p className="text-sm text-muted-foreground">Connected since: Mar 3, 2023</p>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">Active</Badge>
                      </div>
                      <p className="text-xs text-green-600 mt-1">Last sync: 25 minutes ago</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-gray-100">Glucose Levels</Badge>
                        <Badge variant="secondary" className="bg-gray-100">Trends</Badge>
                      </div>
                      <div className="mt-3">
                        <Button variant="outline" size="sm">Disconnect</Button>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full border-dashed border-2" onClick={() => toast({
                    title: "Coming Soon",
                    description: "Connect new device functionality will be available soon!",
                  })}>
                    + Connect New Device
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="providers" className="space-y-4">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start gap-4">
                    <div className="p-3 bg-health-primary/10 rounded-xl">
                      <Hospital className="h-7 w-7 text-health-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">Dr. Sarah Johnson</h4>
                          <p className="text-sm text-muted-foreground">Primary Care Physician</p>
                        </div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">Primary</Badge>
                      </div>
                      <p className="text-xs mt-1">Health Partners Medical Group</p>
                      <div className="mt-3 flex gap-2">
                        <Button variant="outline" size="sm">Message</Button>
                        <Button variant="outline" size="sm">Schedule</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start gap-4">
                    <div className="p-3 bg-health-primary/10 rounded-xl">
                      <Hospital className="h-7 w-7 text-health-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">Dr. Michael Chen</h4>
                          <p className="text-sm text-muted-foreground">Endocrinologist</p>
                        </div>
                        <Badge variant="outline" className="bg-gray-100 text-gray-600 border-gray-200">Specialist</Badge>
                      </div>
                      <p className="text-xs mt-1">Metabolic Health Specialists</p>
                      <div className="mt-3 flex gap-2">
                        <Button variant="outline" size="sm">Message</Button>
                        <Button variant="outline" size="sm">Schedule</Button>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full border-dashed border-2" onClick={() => toast({
                    title: "Coming Soon",
                    description: "Add healthcare provider functionality will be available soon!",
                  })}>
                    + Add Healthcare Provider
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      
      {/* Data Privacy & Security Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-health-primary" />
            AI-Enhanced Data Privacy & Security
          </CardTitle>
          <CardDescription>Control your blockchain-protected health records and data permissions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white shadow-sm rounded-lg border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-health-primary/10 rounded-lg">
                  <Shield className="h-6 w-6 text-health-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Share Health Data with Primary Doctor</h4>
                  <p className="text-sm text-muted-foreground">Dr. Sarah Johnson can view your health metrics</p>
                </div>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="share-doctor" className="mr-2" defaultChecked />
                <label htmlFor="share-doctor" className="text-sm">Active</label>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-white shadow-sm rounded-lg border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-health-primary/10 rounded-lg">
                  <Shield className="h-6 w-6 text-health-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Share Health Data with Family</h4>
                  <p className="text-sm text-muted-foreground">Emergency contacts can view critical health alerts</p>
                </div>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="share-family" className="mr-2" />
                <label htmlFor="share-family" className="text-sm">Inactive</label>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-white shadow-sm rounded-lg border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-health-primary/10 rounded-lg">
                  <Shield className="h-6 w-6 text-health-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Contribute to AI Research</h4>
                  <p className="text-sm text-muted-foreground">Share anonymized data to improve healthcare AI</p>
                </div>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="share-research" className="mr-2" defaultChecked />
                <label htmlFor="share-research" className="text-sm">Active</label>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            <p>Your data is secured with blockchain technology and meets HIPAA & GDPR compliance standards.</p>
          </div>
        </CardFooter>
      </Card>
      
      {/* AI Health Recommendations Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-health-primary" />
            AI Health Recommendations
          </CardTitle>
          <CardDescription>Personalized insights based on your health data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 rounded-full">
                  <Activity className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-green-800">Activity Recommendation</h4>
                  <p className="text-sm text-green-700 mt-1">Your glucose levels have shown a rising trend over the last three weeks. Increasing daily fiber intake and adding 20 minutes of walking could help stabilize levels.</p>
                  <Button size="sm" variant="outline" className="mt-2 border-green-200 text-green-700 hover:bg-green-100">Apply to Health Plan</Button>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-full">
                  <HeartPulse className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-blue-800">Cardiac Health</h4>
                  <p className="text-sm text-blue-700 mt-1">Your ECG readings are within normal range, but your sleep patterns suggest some nighttime elevated heart rates. Consider reducing screen time 1 hour before bed.</p>
                  <Button size="sm" variant="outline" className="mt-2 border-blue-200 text-blue-700 hover:bg-blue-100">Learn More</Button>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-100 rounded-full">
                  <Brain className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium text-purple-800">Cognitive Health</h4>
                  <p className="text-sm text-purple-700 mt-1">Your cognitive assessments show strong performance. To maintain brain health, consider adding omega-3 rich foods and daily cognitive exercises.</p>
                  <Button size="sm" variant="outline" className="mt-2 border-purple-200 text-purple-700 hover:bg-purple-100">View Cognitive Plan</Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PatientProfile;
