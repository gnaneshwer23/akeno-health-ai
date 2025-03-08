
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Video, FileText, MessageSquare, Calendar } from 'lucide-react';

interface ConsultationsListProps {
  status: 'upcoming' | 'past';
}

const upcomingConsultations = [
  {
    id: 1,
    patient: "Emma Thompson",
    type: "Follow-up",
    condition: "Type 2 Diabetes",
    date: "Today",
    time: "2:30 PM",
    duration: "30 min",
    status: "Scheduled",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    patient: "James Wilson",
    type: "New Consultation",
    condition: "Hypertension",
    date: "Today",
    time: "4:00 PM",
    duration: "45 min",
    status: "Confirmed",
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    patient: "Michael Chen",
    type: "Follow-up",
    condition: "Asthma",
    date: "Tomorrow",
    time: "10:15 AM",
    duration: "30 min",
    status: "Scheduled",
    avatar: "/placeholder.svg"
  },
  {
    id: 4,
    patient: "Sarah Johnson",
    type: "Medication Review",
    condition: "Rheumatoid Arthritis",
    date: "May 20, 2023",
    time: "11:30 AM",
    duration: "30 min",
    status: "Pending",
    avatar: "/placeholder.svg"
  }
];

const pastConsultations = [
  {
    id: 1,
    patient: "Emma Thompson",
    type: "Initial Consultation",
    condition: "Type 2 Diabetes",
    date: "May 15, 2023",
    time: "2:30 PM",
    duration: "45 min",
    status: "Completed",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    patient: "James Wilson",
    type: "Follow-up",
    condition: "Hypertension",
    date: "May 10, 2023",
    time: "11:00 AM",
    duration: "30 min",
    status: "Completed",
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    patient: "Michael Chen",
    type: "Medication Review",
    condition: "Asthma",
    date: "May 5, 2023",
    time: "9:15 AM",
    duration: "30 min",
    status: "Completed",
    avatar: "/placeholder.svg"
  },
  {
    id: 4,
    patient: "David Rodriguez",
    type: "Emergency Consult",
    condition: "Chest Pain",
    date: "May 1, 2023",
    time: "3:45 PM",
    duration: "20 min",
    status: "Completed",
    avatar: "/placeholder.svg"
  }
];

const ConsultationsList: React.FC<ConsultationsListProps> = ({ status }) => {
  const consultations = status === 'upcoming' ? upcomingConsultations : pastConsultations;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Scheduled':
        return <Badge className="bg-blue-500">Scheduled</Badge>;
      case 'Confirmed':
        return <Badge className="bg-green-500">Confirmed</Badge>;
      case 'Pending':
        return <Badge className="bg-amber-500">Pending</Badge>;
      case 'Completed':
        return <Badge variant="outline">Completed</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Patient</TableHead>
            <TableHead className="hidden md:table-cell">Type</TableHead>
            <TableHead className="hidden md:table-cell">Condition</TableHead>
            <TableHead className="hidden md:table-cell">Date & Time</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {consultations.map((consultation) => (
            <TableRow key={consultation.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={consultation.avatar} alt={consultation.patient} />
                    <AvatarFallback>{consultation.patient.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{consultation.patient}</p>
                    <p className="text-xs text-muted-foreground md:hidden">{consultation.condition}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">{consultation.type}</TableCell>
              <TableCell className="hidden md:table-cell">{consultation.condition}</TableCell>
              <TableCell className="hidden md:table-cell">
                <div>
                  <p>{consultation.date}</p>
                  <p className="text-xs text-muted-foreground">{consultation.time} ({consultation.duration})</p>
                </div>
              </TableCell>
              <TableCell>{getStatusBadge(consultation.status)}</TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  {status === 'upcoming' ? (
                    <>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Video size={16} />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Calendar size={16} />
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <FileText size={16} />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MessageSquare size={16} />
                      </Button>
                    </>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ConsultationsList;
