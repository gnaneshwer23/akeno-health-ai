
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import AIInsightCard from './AIInsightCard';

const AIInsightsTabContent: React.FC = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">AI-Generated Research Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <AIInsightCard
            borderColor="border-blue-500"
            bgColor="bg-blue-50"
            title="Novel Biomarker Correlation Detected"
            description="AI analysis has identified a statistically significant correlation (p<0.001) between elevated levels of serum protein PRDX4 and early-stage pancreatic cancer that was not previously documented in literature. This finding is consistent across three independent cohorts."
            confidenceScore={92}
          />
          
          <AIInsightCard
            borderColor="border-purple-500"
            bgColor="bg-purple-50"
            title="Treatment Response Pattern Identified"
            description="AI has detected a gene expression signature that predicts response to immunotherapy in colorectal cancer patients with MSI-H status. The 18-gene signature shows 83% accuracy in predicting complete response at 6 months."
            confidenceScore={87}
          />
          
          <AIInsightCard
            borderColor="border-green-500"
            bgColor="bg-green-50"
            title="Potential Drug Repurposing Opportunity"
            description="Based on pathway analysis and molecular docking simulations, AI suggests that the existing JAK inhibitor tofacitinib may have efficacy in treating a subset of patients with treatment-resistant rheumatoid arthritis characterized by specific IL-6 pathway mutations."
            confidenceScore={79}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default AIInsightsTabContent;
