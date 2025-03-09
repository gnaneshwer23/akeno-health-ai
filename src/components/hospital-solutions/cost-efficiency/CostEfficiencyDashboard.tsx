
import React from 'react';
import { TrendingDown, BarChart, DollarSign } from 'lucide-react';
import CostSavingsChart from './CostSavingsChart';
import EfficiencyStatCard from './EfficiencyStatCard';
import ResourceOptimizationCard from './ResourceOptimizationCard';

const CostEfficiencyDashboard = () => (
  <div className="relative">
    <div className="aspect-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-health-primary/10 p-6">
      <div className="h-full flex flex-col">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <div className="flex items-center gap-2">
            <TrendingDown size={24} className="text-health-primary" />
            <h3 className="font-medium">Cost Optimization Dashboard</h3>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm font-medium">Live Savings</span>
          </div>
        </div>
        
        <CostSavingsChart />
        
        <div className="grid grid-cols-3 gap-4 my-4">
          <EfficiencyStatCard 
            title="Staff Efficiency"
            value="+32%"
            icon={<BarChart size={16} />}
            description="Increased productivity"
          />
          <EfficiencyStatCard 
            title="Cost Reduction"
            value="-24%"
            icon={<DollarSign size={16} />}
            description="Administrative costs"
          />
          <EfficiencyStatCard 
            title="Revenue Impact"
            value="+18%"
            icon={<TrendingDown size={16} />}
            description="Billing optimization"
          />
        </div>
        
        <ResourceOptimizationCard />
        
        <div className="mt-4 p-4 bg-gradient-to-r from-health-primary/5 to-health-secondary/5 rounded-lg">
          <h4 className="text-sm font-medium mb-2">AI-Generated Savings Forecast</h4>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-sm">
              <span>This Quarter:</span>
              <span className="font-medium text-green-600">$426,800</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Projected Annual:</span>
              <span className="font-medium text-green-600">$1,842,500</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>ROI:</span>
              <span className="font-medium text-green-600">428%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Decorative elements */}
    <div className="absolute -z-10 -top-6 -right-6 h-32 w-32 bg-health-primary/20 rounded-full blur-xl"></div>
    <div className="absolute -z-10 -bottom-6 -left-6 h-32 w-32 bg-health-secondary/20 rounded-full blur-xl"></div>
  </div>
);

export default CostEfficiencyDashboard;
