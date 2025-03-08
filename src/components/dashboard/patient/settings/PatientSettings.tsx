
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bell, 
  Globe, 
  Brain, 
  Lock, 
  Shield, 
  Phone, 
  Mail, 
  Save
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PatientSettings = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-medium text-health-dark">Settings</h1>
        <p className="text-muted-foreground">Control app preferences, privacy settings, and AI customization options</p>
      </div>

      <Tabs defaultValue="notifications">
        <TabsList className="mb-6">
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="data-sharing">Data Sharing</TabsTrigger>
          <TabsTrigger value="ai-customization">AI Customization</TabsTrigger>
          <TabsTrigger value="security">Security & Privacy</TabsTrigger>
        </TabsList>
        
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Control what notifications you receive and how</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Health Alerts</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Bell className="h-5 w-5 text-health-primary" />
                      <div>
                        <p className="font-medium">Critical Health Alerts</p>
                        <p className="text-sm text-muted-foreground">Urgent notifications for concerning health metrics</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Bell className="h-5 w-5 text-health-primary" />
                      <div>
                        <p className="font-medium">Daily Health Summary</p>
                        <p className="text-sm text-muted-foreground">Daily overview of your health metrics</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Bell className="h-5 w-5 text-health-primary" />
                      <div>
                        <p className="font-medium">Medication Reminders</p>
                        <p className="text-sm text-muted-foreground">Reminders to take medications on schedule</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">AI Recommendations</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Brain className="h-5 w-5 text-health-primary" />
                      <div>
                        <p className="font-medium">Health Insights</p>
                        <p className="text-sm text-muted-foreground">AI-generated insights based on your health data</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Brain className="h-5 w-5 text-health-primary" />
                      <div>
                        <p className="font-medium">Wellness Recommendations</p>
                        <p className="text-sm text-muted-foreground">Lifestyle and wellness suggestions</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Brain className="h-5 w-5 text-health-primary" />
                      <div>
                        <p className="font-medium">Research Updates</p>
                        <p className="text-sm text-muted-foreground">Updates on new research relevant to your health</p>
                      </div>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Delivery Methods</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-health-primary" />
                      <div>
                        <p className="font-medium">Push Notifications</p>
                        <p className="text-sm text-muted-foreground">Receive notifications on your device</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-health-primary" />
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button onClick={handleSave}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="data-sharing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Sharing Settings</CardTitle>
              <CardDescription>Control who can access your health data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Healthcare Providers</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-health-primary" />
                      <div>
                        <p className="font-medium">Primary Care Physician</p>
                        <p className="text-sm text-muted-foreground">Dr. Sarah Johnson can view your health data</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-health-primary" />
                      <div>
                        <p className="font-medium">Specialists</p>
                        <p className="text-sm text-muted-foreground">Allow specialists to view relevant health data</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Family Members</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-health-primary" />
                      <div>
                        <p className="font-medium">Emergency Contact</p>
                        <p className="text-sm text-muted-foreground">Share critical health alerts with emergency contact</p>
                      </div>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Research & Development</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-health-primary" />
                      <div>
                        <p className="font-medium">Anonymous Data for Research</p>
                        <p className="text-sm text-muted-foreground">Contribute anonymized data to improve healthcare AI</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-health-primary" />
                      <div>
                        <p className="font-medium">Clinical Trials Matching</p>
                        <p className="text-sm text-muted-foreground">Allow matching with relevant clinical trials</p>
                      </div>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button onClick={handleSave}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="ai-customization" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>AI Model Customization</CardTitle>
              <CardDescription>Adjust AI recommendations based on personal preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Focus Areas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-md p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium">Cardiovascular Health</p>
                      <Switch defaultChecked />
                    </div>
                    <p className="text-sm text-muted-foreground">Prioritize insights related to heart health</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium">Metabolic Health</p>
                      <Switch defaultChecked />
                    </div>
                    <p className="text-sm text-muted-foreground">Prioritize glucose and metabolism insights</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium">Mental Wellbeing</p>
                      <Switch defaultChecked />
                    </div>
                    <p className="text-sm text-muted-foreground">Include stress and sleep quality recommendations</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium">Physical Fitness</p>
                      <Switch defaultChecked />
                    </div>
                    <p className="text-sm text-muted-foreground">Focus on activity and exercise insights</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">AI Interaction Style</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <input type="radio" id="detailed" name="ai-style" defaultChecked />
                    <div>
                      <label htmlFor="detailed" className="font-medium">Detailed</label>
                      <p className="text-sm text-muted-foreground">Comprehensive explanations with medical terminology</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <input type="radio" id="simplified" name="ai-style" />
                    <div>
                      <label htmlFor="simplified" className="font-medium">Simplified</label>
                      <p className="text-sm text-muted-foreground">Easy-to-understand explanations without medical jargon</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <input type="radio" id="motivational" name="ai-style" />
                    <div>
                      <label htmlFor="motivational" className="font-medium">Motivational</label>
                      <p className="text-sm text-muted-foreground">Encouraging language focused on progress and goals</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Recommendation Frequency</h3>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">How often would you like to receive AI insights?</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Daily</option>
                      <option>Twice a week</option>
                      <option>Weekly</option>
                      <option>Monthly</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button onClick={handleSave}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Security & Privacy</CardTitle>
              <CardDescription>Manage login security and access permissions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Account Security</h3>
                <div className="space-y-3">
                  <div className="border rounded-md p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Lock className="h-5 w-5 text-health-primary" />
                        <p className="font-medium">Two-Factor Authentication</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    <Button variant="outline" size="sm" className="mt-2" onClick={() => toast({
                      title: "Coming Soon",
                      description: "2FA configuration will be available soon!",
                    })}>
                      Configure
                    </Button>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Lock className="h-5 w-5 text-health-primary" />
                        <p className="font-medium">Change Password</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Update your account password</p>
                    <Button variant="outline" size="sm" className="mt-2" onClick={() => toast({
                      title: "Coming Soon",
                      description: "Password change feature will be available soon!",
                    })}>
                      Change Password
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Data Privacy</h3>
                <div className="space-y-3">
                  <div className="border rounded-md p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-health-primary" />
                        <p className="font-medium">Data Retention</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Control how long your health data is stored</p>
                    <div className="mt-2">
                      <select className="w-full p-2 border rounded-md">
                        <option>Indefinitely (default)</option>
                        <option>5 years</option>
                        <option>2 years</option>
                        <option>1 year</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-health-primary" />
                        <p className="font-medium">Download My Data</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Export all your health data in a portable format</p>
                    <Button variant="outline" size="sm" className="mt-2" onClick={() => toast({
                      title: "Coming Soon",
                      description: "Data export feature will be available soon!",
                    })}>
                      Export Data
                    </Button>
                  </div>
                  
                  <div className="border rounded-md p-4 border-red-100">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-red-500" />
                        <p className="font-medium text-red-600">Delete My Account</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Permanently delete your account and all associated data</p>
                    <Button variant="destructive" size="sm" className="mt-2" onClick={() => toast({
                      title: "Coming Soon",
                      description: "Account deletion feature will be available soon!",
                    })}>
                      Delete Account
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button onClick={handleSave}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PatientSettings;
