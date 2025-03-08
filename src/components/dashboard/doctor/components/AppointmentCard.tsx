
import React from 'react';
import { Button } from '@/components/Button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChevronRight } from 'lucide-react';

interface AppointmentCardProps {
  id: string;
  patient: string;
  type: string;
  time: string;
  date: string;
  avatar: string;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  id,
  patient,
  type,
  time,
  date,
  avatar
}) => {
  return (
    <div key={id} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
      <Avatar className="h-10 w-10">
        <AvatarImage src={avatar} alt={patient} />
        <AvatarFallback>{patient.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex justify-between">
          <p className="font-medium">{patient}</p>
          <Badge variant="outline">{type}</Badge>
        </div>
        <div className="flex justify-between items-center mt-1">
          <p className="text-sm text-muted-foreground">
            {date}, {time}
          </p>
          <Button variant="ghost" size="sm" className="h-6 p-0">
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
