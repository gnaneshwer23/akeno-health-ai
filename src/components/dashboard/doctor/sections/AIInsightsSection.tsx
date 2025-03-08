
import React from 'react';
import { 
  Card, 
  CardHeader, 
  CardContent, 
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { 
  HeartPulse,
  Brain,
  BarChart
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DiagnosticInsightCard from '../components/DiagnosticInsightCard';
import TreatmentRecommendation from '../components/TreatmentRecommendation';
import ResearchInsight from '../components/ResearchInsight';

const AIInsightsSection = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>AI Clinical Insights</CardTitle>
        <CardDescription>AI-driven diagnostic and treatment recommendations</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="diagnostics">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="diagnostics">
              <HeartPulse size={16} className="mr-2" />
              Diagnostics
            </TabsTrigger>
            <TabsTrigger value="treatments">
              <Brain size={16} className="mr-2" />
              Treatments
            </TabsTrigger>
            <TabsTrigger value="research">
              <BarChart size={16} className="mr-2" />
              Research
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="diagnostics" className="space-y-4">
            <DiagnosticInsightCard 
              patientName="Emma Thompson"
              condition="Type 2 Diabetes"
              priority="High Priority"
              analysis="Recent blood work indicates HbA1c of 9.2% (up from 8.1% 3 months ago). AI analysis suggests:"
              insights={[
                "Deteriorating glycemic control despite current medication",
                "Possible medication non-adherence (refill pattern analysis)",
                "Early signs of diabetic nephropathy (creatinine trend analysis)"
              ]}
            />
            
            <DiagnosticInsightCard 
              patientName="James Wilson"
              condition="Coronary Artery Disease"
              priority="Medium Priority"
              analysis="AI analysis of home ECG readings shows:"
              insights={[
                "Increased heart rate variability during sleep",
                "Occasional ST-segment depression in early morning hours",
                "Possible correlation with reported shortness of breath"
              ]}
            />
          </TabsContent>
          
          <TabsContent value="treatments" className="space-y-4">
            <Card>
              <CardHeader className="py-3">
                <CardTitle className="text-base">Personalized Treatment Recommendations</CardTitle>
              </CardHeader>
              <CardContent className="py-2">
                <div className="space-y-4">
                  <TreatmentRecommendation 
                    patientName="Emma Thompson"
                    condition="Type 2 Diabetes"
                    description="AI recommendation based on genetic profile + disease progression:"
                    recommendations={[
                      "Consider adding GLP-1 receptor agonist (predicted 68% response rate)",
                      "Adjust metformin timing to improve absorption (genetic metabolism profile)",
                      "Schedule nephrology consult within 2 weeks"
                    ]}
                  />
                  
                  <TreatmentRecommendation 
                    patientName="Michael Chen"
                    condition="Hypertension"
                    description="AI recommendation based on medicine response pattern:"
                    recommendations={[
                      "Switch from current ACE inhibitor to ARB (predicted better response)",
                      "Add low-dose calcium channel blocker (evening dosage)",
                      "Increase dietary potassium based on genomic analysis"
                    ]}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="research" className="space-y-4">
            <Card>
              <CardHeader className="py-3">
                <CardTitle className="text-base">Recent Research Insights</CardTitle>
              </CardHeader>
              <CardContent className="py-2">
                <div className="space-y-4">
                  <ResearchInsight 
                    relevance="Relevant to 5 of your patients"
                    content="New NEJM study on GLP-1 agonists shows 32% reduction in cardiovascular events in patients with T2DM and established CAD"
                    color="border-blue-500"
                  />
                  
                  <ResearchInsight 
                    relevance="Relevant to 3 of your patients"
                    content="Meta-analysis in Lancet indicates cognitive benefits from aggressive BP control in patients with hypertension over age 60"
                    color="border-purple-500"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AIInsightsSection;
