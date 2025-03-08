
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
} from "@/components/ui/card";
import { 
  Search
} from 'lucide-react';
import { Button } from '@/components/Button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { patients } from '../data/mockPatientData';

const PatientRiskMonitor = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Patient Risk Monitor</CardTitle>
            <CardDescription>AI-powered risk assessment and alerts</CardDescription>
          </div>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search patients..."
              className="w-[250px] pl-8"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient</TableHead>
              <TableHead>Condition</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Reading</TableHead>
              <TableHead>Last Visit</TableHead>
              <TableHead>Risk Score</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map(patient => (
              <TableRow key={patient.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={patient.avatar} alt={patient.name} />
                      <AvatarFallback>{patient.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p>{patient.name}</p>
                      <p className="text-xs text-muted-foreground">{patient.age} years</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{patient.condition}</TableCell>
                <TableCell>
                  <Badge variant={
                    patient.status === 'Critical' ? 'destructive' :
                    patient.status === 'Warning' ? 'default' : 'outline'
                  } className={
                    patient.status === 'Critical' ? 'bg-red-500' :
                    patient.status === 'Warning' ? 'bg-amber-500' : ''
                  }>
                    {patient.status}
                  </Badge>
                </TableCell>
                <TableCell>{patient.lastReading}</TableCell>
                <TableCell>{patient.lastVisit}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Progress value={patient.riskScore} className="h-2 w-24" 
                      style={{ 
                        background: '#e2e8f0',
                        color: patient.riskScore > 80 ? '#ef4444' : 
                               patient.riskScore > 60 ? '#f59e0b' : 
                               patient.riskScore > 40 ? '#3b82f6' : '#10b981'
                      }} 
                    />
                    <span className="text-sm font-medium">{patient.riskScore}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default PatientRiskMonitor;
