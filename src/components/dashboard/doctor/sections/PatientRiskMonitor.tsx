
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
} from "@/components/ui/card";
import { 
  Search,
  AlertTriangle,
  Filter,
  ChevronDown,
  Activity
} from 'lucide-react';
import { Button } from '@/components/ui/button';
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useToast } from '@/hooks/use-toast';

const PatientRiskMonitor = () => {
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();

  // Filter patients based on status and search query
  const filteredPatients = patients.filter(patient => {
    const matchesStatus = statusFilter ? patient.status === statusFilter : true;
    const matchesSearch = searchQuery
      ? patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        patient.condition.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesStatus && matchesSearch;
  });

  const handlePatientAlert = (patientName: string, status: string) => {
    const alertType = status === 'Critical' ? 'destructive' : 'default';
    toast({
      title: `${status} Alert: ${patientName}`,
      description: `Patient requires immediate attention. Vital signs indicate ${status.toLowerCase()} condition.`,
      variant: alertType,
    });
  };

  const getRiskColor = (score: number) => {
    if (score > 80) return '#ef4444'; // red
    if (score > 60) return '#f59e0b'; // amber
    if (score > 40) return '#3b82f6'; // blue
    return '#10b981'; // green
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-health-primary" />
              Patient Risk Monitor
            </CardTitle>
            <CardDescription>AI-powered risk assessment and real-time alerts</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search patients..."
                className="w-[250px] pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  {statusFilter || 'All Status'}
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setStatusFilter(null)}>
                  All Status
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter('Critical')}>
                  Critical
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter('Warning')}>
                  Warning
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter('Stable')}>
                  Stable
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
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
              {filteredPatients.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-6 text-muted-foreground">
                    No patients found matching your filters
                  </TableCell>
                </TableRow>
              ) : (
                filteredPatients.map(patient => (
                  <TableRow key={patient.id} className={
                    patient.status === 'Critical' ? 'bg-red-50' : 
                    patient.status === 'Warning' ? 'bg-amber-50' : ''
                  }>
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
                      <div className="flex items-center gap-1">
                        {patient.status === 'Critical' && 
                          <AlertTriangle size={14} className="text-red-500" />
                        }
                        <Badge variant={
                          patient.status === 'Critical' ? 'destructive' :
                          patient.status === 'Warning' ? 'default' : 'outline'
                        } className={
                          patient.status === 'Critical' ? 'bg-red-500' :
                          patient.status === 'Warning' ? 'bg-amber-500' : ''
                        }>
                          {patient.status}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>{patient.lastReading}</TableCell>
                    <TableCell>{patient.lastVisit}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={patient.riskScore} className="h-2 w-24" 
                          style={{ 
                            color: getRiskColor(patient.riskScore)
                          }} 
                        />
                        <span className="text-sm font-medium">{patient.riskScore}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" onClick={() => handlePatientAlert(patient.name, patient.status)}>
                          Alert
                        </Button>
                        <Button variant="ghost" size="sm">
                          Details
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default PatientRiskMonitor;
