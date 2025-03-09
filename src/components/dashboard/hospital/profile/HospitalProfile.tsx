
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Hospital, MapPin, Phone, Mail, Globe, Shield, Users, Clock } from 'lucide-react';

const HospitalProfile = () => {
  const { user } = useAuth();
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <h1 className="text-3xl font-bold tracking-tight">Hospital Profile</h1>
        <Button className="bg-health-primary hover:bg-health-primary/90">Save Changes</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column */}
        <Card className="md:col-span-1">
          <CardHeader className="pb-3">
            <div className="flex flex-col items-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={user?.profileImage} alt={user?.name} />
                <AvatarFallback className="bg-teal-100 text-teal-800 text-xl">
                  <Hospital />
                </AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h2 className="text-xl font-semibold">{user?.name || 'Hospital Name'}</h2>
                <p className="text-sm text-muted-foreground">Hospital ID: {user?.id?.substring(0, 8) || 'HOS-12345'}</p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Button variant="outline" size="sm" className="w-full mb-2">
                Upload New Photo
              </Button>
              <Button variant="ghost" size="sm" className="w-full text-destructive">
                Remove Photo
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">123 Healthcare Ave, Medical District</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{user?.email || 'contact@hospital.com'}</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">www.hospitalwebsite.com</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t">
              <h3 className="font-medium mb-3">Hospital Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-teal-600" />
                    <span className="text-sm">Staff Count</span>
                  </div>
                  <span className="text-sm font-medium">580</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-teal-600" />
                    <span className="text-sm">Avg. Wait Time</span>
                  </div>
                  <span className="text-sm font-medium">14 min</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-teal-600" />
                    <span className="text-sm">Insurance Networks</span>
                  </div>
                  <span className="text-sm font-medium">12</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Right column */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Hospital Information</CardTitle>
            <CardDescription>Update your hospital details and preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="mb-4 grid grid-cols-3">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="facilities">Facilities</TabsTrigger>
                <TabsTrigger value="credentials">Credentials</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general" className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="hospitalName">Hospital Name</Label>
                    <Input id="hospitalName" defaultValue={user?.name || 'General Medical Center'} />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue={user?.email || 'contact@hospital.com'} />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="fax">Fax Number</Label>
                      <Input id="fax" type="tel" defaultValue="+1 (555) 123-4568" />
                    </div>
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" type="url" defaultValue="https://www.hospitalwebsite.com" />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" defaultValue="123 Healthcare Ave" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" defaultValue="Medical District" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" defaultValue="NY" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input id="zip" defaultValue="10001" />
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="facilities" className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="bedCount">Total Bed Count</Label>
                    <Input id="bedCount" type="number" defaultValue="350" />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="icuBeds">ICU Beds</Label>
                    <Input id="icuBeds" type="number" defaultValue="45" />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="operatingRooms">Operating Rooms</Label>
                    <Input id="operatingRooms" type="number" defaultValue="12" />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="departments">Specialty Departments</Label>
                    <Input id="departments" defaultValue="Cardiology, Neurology, Oncology, Pediatrics, Orthopedics" />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="emergencyServices">Emergency Services</Label>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="emergencyServices" className="w-4 h-4" defaultChecked />
                      <label htmlFor="emergencyServices" className="text-sm">24/7 Emergency Department Available</label>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="credentials" className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="accreditation">Accreditation</Label>
                    <Input id="accreditation" defaultValue="Joint Commission, HFAP" />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="licenseNumber">Hospital License Number</Label>
                    <Input id="licenseNumber" defaultValue="HL-12345-67" />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="medicareId">Medicare Provider ID</Label>
                    <Input id="medicareId" defaultValue="14-0123" />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="taxId">Tax ID / EIN</Label>
                    <Input id="taxId" defaultValue="XX-XXXXXXX" />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HospitalProfile;
