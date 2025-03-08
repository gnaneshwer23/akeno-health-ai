
import React from 'react';
import { 
  Card, 
  CardContent
} from "@/components/ui/card";
import { 
  Stethoscope,
  Users,
  AlertTriangle,
  Clock
} from 'lucide-react';

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardContent className="p-6 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <Users size={24} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total Patients</p>
            <p className="text-2xl font-semibold">248</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-600">
            <AlertTriangle size={24} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Critical Alerts</p>
            <p className="text-2xl font-semibold">7</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            <Stethoscope size={24} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Consultations</p>
            <p className="text-2xl font-semibold">18</p>
            <p className="text-xs text-green-600">↑ 12% this week</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
            <Clock size={24} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Upcoming</p>
            <p className="text-2xl font-semibold">3</p>
            <p className="text-xs">Next: 10:30 AM</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
