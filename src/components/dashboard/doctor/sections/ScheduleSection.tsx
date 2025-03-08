
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from '@/components/Button';
import AppointmentCard from '../components/AppointmentCard';
import { upcomingAppointments } from '../data/mockPatientData';

const ScheduleSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Schedule</CardTitle>
        <CardDescription>Upcoming appointments and consultations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingAppointments.map(appointment => (
            <AppointmentCard 
              key={appointment.id}
              id={appointment.id}
              patient={appointment.patient}
              type={appointment.type}
              time={appointment.time}
              date={appointment.date}
              avatar={appointment.avatar}
            />
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">View Full Schedule</Button>
      </CardFooter>
    </Card>
  );
};

export default ScheduleSection;
