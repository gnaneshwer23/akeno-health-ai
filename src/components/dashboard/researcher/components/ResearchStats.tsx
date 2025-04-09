
import React from 'react';
import { Database, Users, Microscope, Dna } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import StatCard from './StatCard';

const ResearchStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardContent className="p-0">
          <StatCard
            icon={<Database size={24} />}
            iconBgClass="bg-blue-100"
            iconTextClass="text-blue-600"
            title="Data Points"
            value="12.5M"
            subtext="↑ 1.2M this month"
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <StatCard
            icon={<Users size={24} />}
            iconBgClass="bg-purple-100"
            iconTextClass="text-purple-600"
            title="Research Cohorts"
            value="24"
            subtext="Active Subjects: 1,842"
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <StatCard
            icon={<Microscope size={24} />}
            iconBgClass="bg-green-100"
            iconTextClass="text-green-600"
            title="Active Studies"
            value="8"
            subtext="3 in Phase II, 5 in Phase III"
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <StatCard
            icon={<Dna size={24} />}
            iconBgClass="bg-amber-100"
            iconTextClass="text-amber-600"
            title="Genomic Samples"
            value="3.8K"
            subtext="Full Sequence: 2.4K"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ResearchStats;
