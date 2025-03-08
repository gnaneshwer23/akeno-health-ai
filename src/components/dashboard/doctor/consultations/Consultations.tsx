
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Video,
  MessageSquare,
  Calendar,
  Clock,
  Filter,
  Search,
  Plus
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import ConsultationsList from './components/ConsultationsList';
import VideoConsultation from './components/VideoConsultation';
import PatientSymptomChecker from './components/PatientSymptomChecker';
import PrescriptionGenerator from './components/PrescriptionGenerator';

const Consultations = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-medium text-health-dark">Consultations</h1>
          <p className="text-muted-foreground">Manage telemedicine & real-time patient case management</p>
        </div>
        <Button>
          <Plus size={16} className="mr-2" />
          New Consultation
        </Button>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="px-3 py-1">
            <Calendar size={14} className="mr-1" />
            Today: 4 Consultations
          </Badge>
          <Badge variant="outline" className="px-3 py-1">
            <Clock size={14} className="mr-1" />
            Next: 2:30 PM
          </Badge>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-[250px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search consultations..."
              className="pl-8"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="upcoming">
            <Calendar size={16} className="mr-2" />
            Upcoming
          </TabsTrigger>
          <TabsTrigger value="past">
            <Clock size={16} className="mr-2" />
            Past
          </TabsTrigger>
          <TabsTrigger value="live">
            <Video size={16} className="mr-2" />
            Live Room
          </TabsTrigger>
          <TabsTrigger value="tools">
            <MessageSquare size={16} className="mr-2" />
            Tools
          </TabsTrigger>
        </TabsList>

        {/* Upcoming Consultations */}
        <TabsContent value="upcoming">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Consultations</CardTitle>
              <CardDescription>Your scheduled telemedicine appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <ConsultationsList status="upcoming" />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Past Consultations */}
        <TabsContent value="past">
          <Card>
            <CardHeader>
              <CardTitle>Past Consultations</CardTitle>
              <CardDescription>Review your completed consultations</CardDescription>
            </CardHeader>
            <CardContent>
              <ConsultationsList status="past" />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Live Consultation Room */}
        <TabsContent value="live">
          <VideoConsultation />
        </TabsContent>

        {/* Consultation Tools */}
        <TabsContent value="tools">
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
