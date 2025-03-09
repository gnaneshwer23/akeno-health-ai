
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { 
  Bell, 
  Shield, 
  Users, 
  BarChart3, 
  Lock, 
  Mail, 
  AlertTriangle,
  Smartphone,
  Monitor
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const HospitalSettings = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  const handleSaveSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your hospital settings have been updated successfully.",
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Hospital Settings</h1>
        <Button 
          className="bg-health-primary hover:bg-health-primary/90"
          onClick={handleSaveSettings}
        >
          Save Changes
        </Button>
      </div>
      
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="account">
            <Users className="h-4 w-4 mr-2" />
            Account
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security">
            <Shield className="h-4 w-4 mr-2" />
            Security
          </TabsTrigger>
          <TabsTrigger value="integrations">
            <BarChart3 className="h-4 w-4 mr-2" />
            Integrations
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="account" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>Manage your hospital account details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="adminName">Administrator Name</Label>
                  <Input id="adminName" defaultValue="John Smith" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="adminEmail">Administrator Email</Label>
                  <Input id="adminEmail" type="email" defaultValue="admin@hospital.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="billingEmail">Billing Email</Label>
                <Input id="billingEmail" type="email" defaultValue="billing@hospital.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="timezone">Hospital Timezone</Label>
                <select className="w-full h-10 px-3 border rounded-md">
                  <option value="ET">Eastern Time (ET)</option>
                  <option value="CT">Central Time (CT)</option>
                  <option value="MT">Mountain Time (MT)</option>
                  <option value="PT">Pacific Time (PT)</option>
                </select>
              </div>
              
              <div className="pt-4 border-t">
                <h3 className="font-medium mb-3">Billing Plan</h3>
                <div className="p-3 bg-teal-50 border border-teal-200 rounded-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-teal-700">Enterprise Plan</span>
                      <p className="text-sm text-teal-600">Unlimited access to all AI features</p>
                    </div>
                    <Button variant="outline" size="sm">Manage Plan</Button>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <h3 className="font-medium mb-3 text-destructive">Danger Zone</h3>
                <div className="p-3 bg-red-50 border border-red-200 rounded-md flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-red-700">Delete Account</span>
                    <p className="text-sm text-red-600">Permanently delete your hospital account and all data</p>
                  </div>
                  <Button variant="destructive" size="sm">Delete Account</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Configure how and when you receive alerts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Notifications
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-alerts">System Alerts</Label>
                      <p className="text-sm text-muted-foreground">Receive critical system notifications</p>
                    </div>
                    <Switch id="email-alerts" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-patient">Patient Risk Alerts</Label>
                      <p className="text-sm text-muted-foreground">Notifications for high-risk patient alerts</p>
                    </div>
                    <Switch id="email-patient" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-reports">Daily Reports</Label>
                      <p className="text-sm text-muted-foreground">Daily summary of hospital activity</p>
                    </div>
                    <Switch id="email-reports" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 pt-4 border-t">
                <h3 className="font-medium flex items-center gap-2">
                  <Smartphone className="h-4 w-4" />
                  Mobile Notifications
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="mobile-alerts">Emergency Alerts</Label>
                      <p className="text-sm text-muted-foreground">Critical emergency and capacity alerts</p>
                    </div>
                    <Switch id="mobile-alerts" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="mobile-updates">AI Insights</Label>
                      <p className="text-sm text-muted-foreground">New AI-generated insights and recommendations</p>
                    </div>
                    <Switch id="mobile-updates" defaultChecked />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 pt-4 border-t">
                <h3 className="font-medium flex items-center gap-2">
                  <Monitor className="h-4 w-4" />
                  Dashboard Alerts
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="capacity-alerts">Capacity Alerts</Label>
                      <p className="text-sm text-muted-foreground">Alerts when capacity thresholds are reached</p>
                    </div>
                    <Switch id="capacity-alerts" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="resource-alerts">Resource Shortages</Label>
                      <p className="text-sm text-muted-foreground">Notifications for predicted resource shortages</p>
                    </div>
                    <Switch id="resource-alerts" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="security" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your security preferences and access controls</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Authentication
                </h3>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" defaultValue="••••••••" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                  
                  <Button className="mt-2">Update Password</Button>
                </div>
              </div>
              
              <div className="space-y-4 pt-4 border-t">
                <h3 className="font-medium flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Access Control
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Require 2FA for all administrator accounts</p>
                    </div>
                    <Switch id="two-factor" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="ip-restrict">IP Restrictions</Label>
                      <p className="text-sm text-muted-foreground">Limit access to specific IP addresses</p>
                    </div>
                    <Switch id="ip-restrict" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="session-timeout">Session Timeout</Label>
                      <p className="text-sm text-muted-foreground">Automatically log out after inactivity</p>
                    </div>
                    <Switch id="session-timeout" defaultChecked />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 pt-4 border-t">
                <h3 className="font-medium flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  Data Protection
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="data-encrypt">End-to-End Encryption</Label>
                      <p className="text-sm text-muted-foreground">Enable encryption for all sensitive data</p>
                    </div>
                    <Switch id="data-encrypt" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="audit-logs">Audit Logs</Label>
                      <p className="text-sm text-muted-foreground">Maintain detailed access and activity logs</p>
                    </div>
                    <Switch id="audit-logs" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="integrations" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>System Integrations</CardTitle>
              <CardDescription>Connect with other healthcare systems and services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-md">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-2 rounded-md">
                      <img src="https://placehold.co/32x32/blue/white" className="w-8 h-8" alt="EHR" />
                    </div>
                    <div>
                      <h4 className="font-medium">Electronic Health Records (EHR)</h4>
                      <p className="text-sm text-muted-foreground">Integrate with your existing EHR system</p>
                    </div>
                  </div>
                  <Switch id="ehr-integration" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded-md">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-2 rounded-md">
                      <img src="https://placehold.co/32x32/green/white" className="w-8 h-8" alt="PACS" />
                    </div>
                    <div>
                      <h4 className="font-medium">PACS/Imaging System</h4>
                      <p className="text-sm text-muted-foreground">Connect with radiology and imaging systems</p>
                    </div>
                  </div>
                  <Switch id="pacs-integration" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded-md">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 p-2 rounded-md">
                      <img src="https://placehold.co/32x32/purple/white" className="w-8 h-8" alt="LIS" />
                    </div>
                    <div>
                      <h4 className="font-medium">Laboratory Information System (LIS)</h4>
                      <p className="text-sm text-muted-foreground">Connect with laboratory testing systems</p>
                    </div>
                  </div>
                  <Switch id="lis-integration" />
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded-md">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-100 p-2 rounded-md">
                      <img src="https://placehold.co/32x32/orange/white" className="w-8 h-8" alt="Telehealth" />
                    </div>
                    <div>
                      <h4 className="font-medium">Telehealth Platform</h4>
                      <p className="text-sm text-muted-foreground">Connect with remote patient care systems</p>
                    </div>
                  </div>
                  <Switch id="telehealth-integration" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded-md">
                  <div className="flex items-center gap-4">
                    <div className="bg-red-100 p-2 rounded-md">
                      <img src="https://placehold.co/32x32/red/white" className="w-8 h-8" alt="HIE" />
                    </div>
                    <div>
                      <h4 className="font-medium">Health Information Exchange (HIE)</h4>
                      <p className="text-sm text-muted-foreground">Share patient data across healthcare networks</p>
                    </div>
                  </div>
                  <Switch id="hie-integration" />
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <Button variant="outline" className="w-full">
                  <span className="mr-2">+</span> Add Custom Integration
                </Button>
              </div>
              
              <div className="pt-4 border-t">
                <h3 className="font-medium mb-3">API Access</h3>
                <div className="p-3 bg-gray-50 border rounded-md">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <span className="font-medium">API Key</span>
                    </div>
                    <Button variant="outline" size="sm">Generate New Key</Button>
                  </div>
                  <div className="flex items-center">
                    <Input 
                      readOnly 
                      value="ak_h1s92m38xjd7k29dj38s92kdj38sj3" 
                      className="font-mono text-sm"
                    />
                    <Button variant="ghost" size="sm" className="ml-2">Copy</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HospitalSettings;
