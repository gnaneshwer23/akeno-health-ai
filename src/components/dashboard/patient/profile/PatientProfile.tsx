
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, Save, Smartphone, Hospital, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-medium text-health-dark">Your Profile</h1>
        <p className="text-muted-foreground">Manage your personal health information and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Your basic information</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <Avatar className="h-32 w-32 border-4 border-health-primary/10">
              <AvatarImage src={user?.profileImage} alt={user?.name} />
              <AvatarFallback className="text-4xl bg-health-primary text-white">
                {user?.name?.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h3 className="text-2xl font-medium">{user?.name}</h3>
              <p className="text-muted-foreground">{user?.email}</p>
              <div className="mt-2 flex items-center justify-center gap-1">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-sm capitalize">{user?.role || 'Patient'}</span>
              </div>
            </div>
            <Button variant="outline" className="mt-2" onClick={() => toast({
              title: "Coming Soon",
              description: "Profile picture upload will be available soon!",
            })}>
              <Edit className="mr-2 h-4 w-4" />
              Change Picture
            </Button>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Health Profile</CardTitle>
            <CardDescription>Manage your detailed medical information</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="personal">
              <TabsList className="mb-4">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="medical">Medical History</TabsTrigger>
                <TabsTrigger value="devices">Connected Devices</TabsTrigger>
                <TabsTrigger value="providers">Healthcare Providers</TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <input type="text" defaultValue={user?.name} className="w-full p-2 border rounded-md" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input type="email" defaultValue={user?.email} className="w-full p-2 border rounded-md" readOnly />
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
                  <Button onClick={handleSave}>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="medical" className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Chronic Conditions</label>
                    <textarea className="w-full p-2 border rounded-md" rows={3} defaultValue="Type 2 Diabetes (managed with medication)"></textarea>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Current Medications</label>
                    <textarea className="w-full p-2 border rounded-md" rows={3} defaultValue="Metformin 500mg twice daily"></textarea>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Allergies</label>
                    <textarea className="w-full p-2 border rounded-md" rows={3} defaultValue="Penicillin, Shellfish"></textarea>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Family Medical History</label>
                    <textarea className="w-full p-2 border rounded-md" rows={3} defaultValue="Father: Hypertension, Mother: Type 2 Diabetes"></textarea>
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <Button onClick={handleSave}>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="devices" className="space-y-4">
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-4">
                    <Smartphone className="h-10 w-10 text-health-primary" />
                    <div>
                      <h4 className="font-medium">Apple Watch Series 8</h4>
                      <p className="text-sm text-muted-foreground">Connected since: Jan 15, 2023</p>
                      <p className="text-xs text-green-600 mt-1">Status: Active - Last sync 10 minutes ago</p>
                      <div className="mt-2">
                        <Button variant="outline" size="sm">Disconnect</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-4">
                    <Smartphone className="h-10 w-10 text-health-primary" />
                    <div>
                      <h4 className="font-medium">Continuous Glucose Monitor</h4>
                      <p className="text-sm text-muted-foreground">Connected since: Mar 3, 2023</p>
                      <p className="text-xs text-green-600 mt-1">Status: Active - Last sync 25 minutes ago</p>
                      <div className="mt-2">
                        <Button variant="outline" size="sm">Disconnect</Button>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full" onClick={() => toast({
                    title: "Coming Soon",
                    description: "Connect new device functionality will be available soon!",
                  })}>
                    + Connect New Device
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="providers" className="space-y-4">
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-4">
                    <Hospital className="h-10 w-10 text-health-primary" />
                    <div>
                      <h4 className="font-medium">Dr. Sarah Johnson</h4>
                      <p className="text-sm text-muted-foreground">Primary Care Physician</p>
                      <p className="text-xs mt-1">Health Partners Medical Group</p>
                      <div className="mt-2 flex gap-2">
                        <Button variant="outline" size="sm">Message</Button>
                        <Button variant="outline" size="sm">Schedule</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-4">
                    <Hospital className="h-10 w-10 text-health-primary" />
                    <div>
                      <h4 className="font-medium">Dr. Michael Chen</h4>
                      <p className="text-sm text-muted-foreground">Endocrinologist</p>
                      <p className="text-xs mt-1">Metabolic Health Specialists</p>
                      <div className="mt-2 flex gap-2">
                        <Button variant="outline" size="sm">Message</Button>
                        <Button variant="outline" size="sm">Schedule</Button>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full" onClick={() => toast({
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
      
      <Card>
        <CardHeader>
          <CardTitle>Privacy & Security</CardTitle>
          <CardDescription>Control who can access your health data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-health-primary" />
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
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-health-primary" />
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
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-health-primary" />
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
      </Card>
    </div>
  );
};

export default PatientProfile;
