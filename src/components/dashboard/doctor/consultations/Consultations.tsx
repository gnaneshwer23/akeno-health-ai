
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Video, Clock, Search } from "lucide-react";
import ConsultationsList from './components/ConsultationsList';
import VideoConsultation from './components/VideoConsultation';
import PatientSymptomChecker from './components/PatientSymptomChecker';
import PrescriptionGenerator from './components/PrescriptionGenerator';

const Consultations = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Consultations</h1>
        <p className="text-muted-foreground">
          Manage your teleconsultations and in-person appointments
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Today's Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">
              3 virtual, 4 in-person
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pending Consultations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              4 awaiting review
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg. Consultation Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18 min</div>
            <p className="text-xs text-muted-foreground">
              2 min faster than last week
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Patient Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">
              +2% from previous month
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="flex justify-between">
        <div className="flex space-x-2">
          <Button className="shadow">
            <Video className="mr-2 h-4 w-4" />
            Start New Consultation
          </Button>
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Appointment
          </Button>
        </div>
        <Button variant="outline">
          <Search className="mr-2 h-4 w-4" />
          Find Patient
        </Button>
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="live">Live Consultations</TabsTrigger>
          <TabsTrigger value="past">Past Consultations</TabsTrigger>
          <TabsTrigger value="tools">Consultation Tools</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming" className="mt-6">
          <ConsultationsList type="upcoming" />
        </TabsContent>
        
        <TabsContent value="live" className="mt-6">
          <VideoConsultation />
        </TabsContent>
        
        <TabsContent value="past" className="mt-6">
          <ConsultationsList type="past" />
        </TabsContent>
        
        <TabsContent value="tools" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PatientSymptomChecker />
            <PrescriptionGenerator />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Consultations;
