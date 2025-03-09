
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, AlertCircle, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface DashboardSummaryCardsProps {
  onActionClick: (action: string) => void;
}

const DashboardSummaryCards: React.FC<DashboardSummaryCardsProps> = ({ onActionClick }) => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Bed Occupancy</CardTitle>
          <Users className="h-4 w-4 text-health-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">86%</div>
          <Progress value={86} className="mt-2" />
          <p className="text-xs text-muted-foreground mt-2">
            AI predicts <span className="text-health-primary font-medium">7 discharges</span> today
          </p>
        </CardContent>
        <CardFooter className="p-2">
          <Button variant="outline" size="sm" className="w-full" onClick={() => onActionClick('View bed allocation')}>
            View Details
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Critical Alerts</CardTitle>
          <AlertCircle className="h-4 w-4 text-red-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">3</div>
          <div className="text-xs text-red-600 mt-1">
            <span className="inline-block w-2 h-2 bg-red-600 rounded-full mr-1"></span>
            ICU patient deterioration risk
          </div>
          <div className="text-xs text-amber-600 mt-1">
            <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mr-1"></span>
            2 sepsis risk alerts
          </div>
        </CardContent>
        <CardFooter className="p-2">
          <Button variant="outline" size="sm" className="w-full" onClick={() => onActionClick('View critical alerts')}>
            Respond Now
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">ER Status</CardTitle>
          <Activity className="h-4 w-4 text-health-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">Moderate</div>
          <div className="grid grid-cols-5 gap-1 mt-2">
            <div className="h-2 rounded bg-green-500"></div>
            <div className="h-2 rounded bg-green-500"></div>
            <div className="h-2 rounded bg-amber-500"></div>
            <div className="h-2 rounded bg-gray-200"></div>
            <div className="h-2 rounded bg-gray-200"></div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Wait time: <span className="font-medium">28 minutes</span>
          </p>
        </CardContent>
        <CardFooter className="p-2">
          <Button variant="outline" size="sm" className="w-full" onClick={() => onActionClick('View ER status')}>
            View Queue
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Resource Forecast</CardTitle>
          <Clock className="h-4 w-4 text-health-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">4 hours</div>
          <p className="text-xs text-amber-600 mt-1">
            <span className="inline-block w-2 h-2 bg-amber-600 rounded-full mr-1"></span>
            Projected ICU overflow at 2:00 PM
          </p>
          <p className="text-xs text-green-600 mt-1">
            <span className="inline-block w-2 h-2 bg-green-600 rounded-full mr-1"></span>
            Staff allocation optimized
          </p>
        </CardContent>
        <CardFooter className="p-2">
          <Button variant="outline" size="sm" className="w-full" onClick={() => onActionClick('View resource forecast')}>
            See Forecast
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DashboardSummaryCards;
