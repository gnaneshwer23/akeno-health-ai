
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClipboardCheck, AlertCircle, CheckCircle, Search, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const recommendedMedications = [
  { id: 1, name: 'Amoxicillin', dosage: '500mg', frequency: 'Three times daily', duration: '7 days', aiReason: 'Indicated for suspected respiratory infection based on symptoms' },
  { id: 2, name: 'Ibuprofen', dosage: '400mg', frequency: 'Every 6 hours as needed', duration: 'As needed for pain', aiReason: 'For pain management and anti-inflammatory effects' },
  { id: 3, name: 'Promethazine', dosage: '25mg', frequency: 'Once daily at bedtime', duration: '5 days', aiReason: 'For nausea management' },
];

const PrescriptionGenerator = () => {
  const [prescription, setPrescription] = useState({
    medication: '',
    dosage: '',
    frequency: '',
    duration: '',
    instructions: '',
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>E-Prescription</CardTitle>
        <CardDescription>Generate and send prescriptions with AI assistance</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="ai">
          <TabsList className="mb-4">
            <TabsTrigger value="ai">AI Recommendations</TabsTrigger>
            <TabsTrigger value="manual">Manual Entry</TabsTrigger>
            <TabsTrigger value="history">Prescription History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="ai">
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 rounded-md text-sm mb-4">
                <div className="flex items-center">
                  <AlertCircle className="h-4 w-4 text-blue-500 mr-2" />
                  <p className="font-medium text-blue-700">AI-Suggested Medications</p>
                </div>
                <p className="mt-1 text-blue-600">
                  Based on patient symptoms and medical history:
                </p>
              </div>
              
              {recommendedMedications.map(med => (
                <div key={med.id} className="border rounded-md p-3">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">{med.name}</p>
                      <div className="flex text-sm text-gray-500 mt-1 space-x-3">
                        <span>Dosage: {med.dosage}</span>
                        <span>Frequency: {med.frequency}</span>
                        <span>Duration: {med.duration}</span>
                      </div>
                      <p className="text-xs mt-2 text-blue-600">
                        <span className="font-semibold">AI reasoning:</span> {med.aiReason}
                      </p>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Button variant="outline" size="sm">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Select
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Search className="h-4 w-4 mr-1" />
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="p-3 bg-amber-50 rounded-md text-sm mt-4">
                <div className="flex items-center">
                  <AlertCircle className="h-4 w-4 text-amber-500 mr-2" />
                  <p className="font-medium text-amber-700">Patient Allergies</p>
                </div>
                <p className="mt-1 text-amber-600">
                  Penicillin, Sulfa drugs
                </p>
              </div>
              
              <div className="flex justify-between mt-4">
                <Button variant="outline">Check Interactions</Button>
                <Button>Generate Prescription</Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="manual">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="medication">Medication</Label>
                  <Input id="medication" placeholder="Enter medication name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dosage">Dosage</Label>
                  <Input id="dosage" placeholder="e.g., 500mg" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="frequency">Frequency</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="once">Once daily</SelectItem>
                      <SelectItem value="twice">Twice daily</SelectItem>
                      <SelectItem value="thrice">Three times daily</SelectItem>
                      <SelectItem value="four">Four times daily</SelectItem>
                      <SelectItem value="asNeeded">As needed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Input id="duration" placeholder="e.g., 7 days" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="instructions">Special Instructions</Label>
                <Textarea id="instructions" placeholder="Additional instructions for the patient" rows={3} />
              </div>
              
              <div className="flex justify-between mt-4">
                <Button variant="outline">Clear Form</Button>
                <Button>Add to Prescription</Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="history">
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Input placeholder="Search previous prescriptions..." className="flex-1" />
                <Button variant="outline">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
              
              <div className="border rounded-md p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center">
                      <p className="font-medium">Lisinopril 10mg</p>
                      <Badge className="ml-2" variant="outline">
                        Active
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      <p>Prescribed: 2 weeks ago</p>
                      <p>Once daily, 30 days</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-1" />
                    Renew
                  </Button>
                </div>
              </div>
              
              <div className="border rounded-md p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center">
                      <p className="font-medium">Metformin 500mg</p>
                      <Badge className="ml-2" variant="secondary">
                        Completed
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      <p>Prescribed: 2 months ago</p>
                      <p>Twice daily, 60 days</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-1" />
                    View
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PrescriptionGenerator;
