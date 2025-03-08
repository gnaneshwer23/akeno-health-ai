
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Circle, Search, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const symptomsData = [
  { id: 1, name: 'Headache', severity: 'Moderate', duration: '3 days', frequency: 'Constant' },
  { id: 2, name: 'Fatigue', severity: 'Severe', duration: '1 week', frequency: 'Constant' },
  { id: 3, name: 'Dizziness', severity: 'Mild', duration: '2 days', frequency: 'Intermittent' },
  { id: 4, name: 'Nausea', severity: 'Moderate', duration: '2 days', frequency: 'Morning only' },
];

const aiSuggestions = [
  { id: 1, condition: 'Migraine', probability: 'High', evidencePoints: ['Headache pattern', 'Associated symptoms', 'Family history'] },
  { id: 2, condition: 'Anemia', probability: 'Medium', evidencePoints: ['Fatigue', 'Dizziness'] },
  { id: 3, condition: 'Pregnancy', probability: 'Low', evidencePoints: ['Morning nausea', 'Fatigue'] },
];

const PatientSymptomChecker = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Patient Symptom Checker</CardTitle>
        <CardDescription>AI-powered symptom analysis before consultation</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="reported">
          <TabsList className="mb-4">
            <TabsTrigger value="reported">Reported Symptoms</TabsTrigger>
            <TabsTrigger value="ai">AI Analysis</TabsTrigger>
            <TabsTrigger value="search">Search Symptoms</TabsTrigger>
          </TabsList>
          
          <TabsContent value="reported">
            <div className="space-y-4">
              {symptomsData.map(symptom => (
                <div key={symptom.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                  <div>
                    <p className="font-medium">{symptom.name}</p>
                    <div className="flex text-sm text-gray-500 mt-1 space-x-3">
                      <span>Severity: {symptom.severity}</span>
                      <span>Duration: {symptom.duration}</span>
                      <span>Frequency: {symptom.frequency}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Details</Button>
                </div>
              ))}
              
              <Button className="mt-4 w-full">
                Ask Additional Questions
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="ai">
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 rounded-md text-sm mb-4">
                <div className="flex items-center">
                  <AlertCircle className="h-4 w-4 text-blue-500 mr-2" />
                  <p className="font-medium text-blue-700">AI Diagnostic Suggestions</p>
                </div>
                <p className="mt-1 text-blue-600">
                  Based on reported symptoms, consider the following possibilities:
                </p>
              </div>
              
              {aiSuggestions.map(suggestion => (
                <div key={suggestion.id} className="border rounded-md p-3">
                  <div className="flex justify-between items-center">
                    <p className="font-medium">{suggestion.condition}</p>
                    <div className={`px-2 py-1 rounded text-xs ${
                      suggestion.probability === 'High' ? 'bg-red-100 text-red-700' :
                      suggestion.probability === 'Medium' ? 'bg-amber-100 text-amber-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {suggestion.probability} probability
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-xs text-gray-500 mb-1">Supporting evidence:</p>
                    <ul className="text-sm space-y-1">
                      {suggestion.evidencePoints.map((point, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              
              <div className="flex justify-between mt-4">
                <Button variant="outline">Request Lab Tests</Button>
                <Button>Add to Consultation Notes</Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="search">
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Input placeholder="Search for symptoms..." className="flex-1" />
                <Button variant="outline">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
              
              <div className="p-8 border border-dashed rounded-md flex flex-col items-center justify-center">
                <Search className="h-8 w-8 text-gray-300 mb-2" />
                <p className="text-gray-500 text-center">Search for additional symptoms to add to this patient's record</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PatientSymptomChecker;
