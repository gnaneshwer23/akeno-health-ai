
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CustomButton } from '@/components/ui/custom-button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Database, 
  Shield, 
  Share2, 
  Heart, 
  Brain, 
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Star
} from 'lucide-react';
import { useAuth } from '@/contexts/auth/useAuth';
import { useToast } from '@/hooks/use-toast';
import { simulatedDataService } from '@/services/simulatedDataService';

interface OnboardingStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  action?: () => Promise<void> | void;
  actionText?: string;
}

const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  const handleDataGeneration = async () => {
    setIsLoading(true);
    try {
      const result = await simulatedDataService.seedAllData();
      if (result.success) {
        toast({
          title: "Demo Data Created!",
          description: "Your healthcare data is ready to explore",
        });
        markStepCompleted(6);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate demo data",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const steps: OnboardingStep[] = [
    {
      id: 1,
      title: "Welcome to Akeno Health",
      description: "Your AI-powered healthcare data platform",
      icon: <Heart className="h-6 w-6 text-health-primary" />,
      content: (
        <div className="text-center space-y-4">
          <div className="text-4xl">🏥</div>
          <p className="text-gray-600">
            Welcome! You're about to experience the future of healthcare data analytics. 
            Let's get you set up in just 10 simple steps.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-700">
              <strong>Tip:</strong> This onboarding will take about 3 minutes to complete
            </p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Your Profile Setup",
      description: "Confirm your account details",
      icon: <User className="h-6 w-6 text-health-primary" />,
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-green-700">✅ Account Created Successfully!</p>
            <div className="mt-2 text-sm text-gray-600">
              <p><strong>Name:</strong> {user?.name}</p>
              <p><strong>Email:</strong> {user?.email}</p>
              <p><strong>Role:</strong> {user?.role}</p>
            </div>
          </div>
          <p className="text-gray-600">
            Your profile is all set up! You can update these details anytime in your dashboard settings.
          </p>
        </div>
      )
    },
    {
      id: 3,
      title: "Platform Overview",
      description: "Understanding what you can do",
      icon: <Brain className="h-6 w-6 text-health-primary" />,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <Database className="h-8 w-8 mx-auto text-blue-600 mb-2" />
              <p className="text-sm font-medium">Data Analytics</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg text-center">
              <Brain className="h-8 w-8 mx-auto text-purple-600 mb-2" />
              <p className="text-sm font-medium">AI Insights</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <Heart className="h-8 w-8 mx-auto text-green-600 mb-2" />
              <p className="text-sm font-medium">Health Tracking</p>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg text-center">
              <Share2 className="h-8 w-8 mx-auto text-orange-600 mb-2" />
              <p className="text-sm font-medium">Data Sharing</p>
            </div>
          </div>
          <p className="text-gray-600">
            Akeno Health combines AI, real-world evidence, and personalized healthcare data 
            to provide actionable insights for better health outcomes.
          </p>
        </div>
      )
    },
    {
      id: 4,
      title: "Privacy & Security",
      description: "Your data protection guaranteed",
      icon: <Shield className="h-6 w-6 text-health-primary" />,
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Shield className="h-5 w-5 text-green-600 mr-2" />
              <span className="font-medium text-green-800">Enterprise Security</span>
            </div>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• End-to-end encryption</li>
              <li>• HIPAA compliant infrastructure</li>
              <li>• Row-level security policies</li>
              <li>• Your data stays private to you</li>
            </ul>
          </div>
          <p className="text-gray-600">
            We use advanced security measures to ensure your healthcare data remains 
            completely secure and private.
          </p>
        </div>
      )
    },
    {
      id: 5,
      title: "Data Sources",
      description: "What kind of data you can work with",
      icon: <Database className="h-6 w-6 text-health-primary" />,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-2">
            {[
              "Electronic Health Records (EHR)",
              "Wearable Device Data",
              "Genomic & Biomarker Data",
              "Medical Imaging & Scans",
              "Clinical Research Data",
              "Real-World Evidence"
            ].map((source, index) => (
              <div key={index} className="flex items-center p-2 bg-gray-50 rounded">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">{source}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600">
            Connect multiple data sources to get a complete picture of health insights.
          </p>
        </div>
      )
    },
    {
      id: 6,
      title: "Generate Demo Data",
      description: "Create sample data to explore features",
      icon: <Database className="h-6 w-6 text-health-primary" />,
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-700 mb-3">
              Generate realistic healthcare data to explore the platform's capabilities
            </p>
            <ul className="text-sm text-blue-600 space-y-1">
              <li>• Sample patient profiles</li>
              <li>• 30 days of wearable data</li>
              <li>• Medical records & imaging</li>
              <li>• Genomic analysis results</li>
            </ul>
          </div>
          <p className="text-gray-600">
            This creates fictional but realistic data for demonstration purposes.
          </p>
        </div>
      ),
      action: handleDataGeneration,
      actionText: isLoading ? "Generating..." : "Generate Demo Data"
    },
    {
      id: 7,
      title: "Dashboard Navigation",
      description: "Your personalized control center",
      icon: <User className="h-6 w-6 text-health-primary" />,
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
            <p className="font-medium mb-2">Your Dashboard Includes:</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>• Health Overview</div>
              <div>• AI Insights</div>
              <div>• Data Analytics</div>
              <div>• Settings & Profile</div>
            </div>
          </div>
          <p className="text-gray-600">
            Access your dashboard anytime to view health metrics, AI recommendations, 
            and manage your data preferences.
          </p>
        </div>
      )
    },
    {
      id: 8,
      title: "AI Features",
      description: "Powered by advanced machine learning",
      icon: <Brain className="h-6 w-6 text-health-primary" />,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-purple-50 p-3 rounded-lg">
              <h4 className="font-medium text-purple-800">Predictive Analytics</h4>
              <p className="text-sm text-purple-600">Early risk detection and prevention</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <h4 className="font-medium text-blue-800">Personalized Insights</h4>
              <p className="text-sm text-blue-600">Tailored recommendations for your health</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <h4 className="font-medium text-green-800">Real-time Monitoring</h4>
              <p className="text-sm text-green-600">Continuous health tracking and alerts</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 9,
      title: "Data Sharing & Collaboration",
      description: "Connect with healthcare providers",
      icon: <Share2 className="h-6 w-6 text-health-primary" />,
      content: (
        <div className="space-y-4">
          <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg text-center">
            <Share2 className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-600 mb-2">Secure Data Sharing</p>
            <div className="text-sm text-gray-500 space-y-1">
              <p>• Share insights with your doctors</p>
              <p>• Collaborate on research projects</p>
              <p>• Export reports for appointments</p>
              <p>• Maintain full control over permissions</p>
            </div>
          </div>
          <p className="text-gray-600">
            You control who sees your data and can revoke access anytime.
          </p>
        </div>
      )
    },
    {
      id: 10,
      title: "You're All Set!",
      description: "Ready to explore your health data",
      icon: <Star className="h-6 w-6 text-health-primary" />,
      content: (
        <div className="text-center space-y-4">
          <div className="text-6xl">🎉</div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-green-700 font-medium mb-2">Onboarding Complete!</p>
            <p className="text-sm text-green-600">
              You're now ready to explore the full power of AI-driven healthcare analytics
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="bg-blue-50 p-2 rounded">
              <p className="font-medium">Next Steps:</p>
            </div>
            <div className="bg-purple-50 p-2 rounded">
              <p className="font-medium">Quick Actions:</p>
            </div>
            <div className="text-left text-xs text-gray-600">
              • Explore dashboard<br/>
              • View AI insights<br/>
              • Check health metrics
            </div>
            <div className="text-left text-xs text-gray-600">
              • Update profile<br/>
              • Set preferences<br/>
              • Share first insight
            </div>
          </div>
        </div>
      )
    }
  ];

  const currentStepData = steps.find(step => step.id === currentStep);
  const progress = (currentStep / steps.length) * 100;

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      markStepCompleted(currentStep);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const markStepCompleted = (stepId: number) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  const handleStepAction = async () => {
    if (currentStepData?.action) {
      await currentStepData.action();
    }
    nextStep();
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold text-health-dark">Getting Started</h1>
          <Badge variant="outline">
            Step {currentStep} of {steps.length}
          </Badge>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <AnimatePresence mode="wait">
        {currentStepData && (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center gap-3">
                  {currentStepData.icon}
                  <div>
                    <CardTitle>{currentStepData.title}</CardTitle>
                    <CardDescription>{currentStepData.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {currentStepData.content}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-between">
        <CustomButton
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 1}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Previous
        </CustomButton>

        {currentStep === steps.length ? (
          <CustomButton
            to="/dashboard"
            className="flex items-center gap-2"
          >
            Go to Dashboard
            <ArrowRight className="h-4 w-4" />
          </CustomButton>
        ) : (
          <CustomButton
            onClick={currentStepData?.action ? handleStepAction : nextStep}
            disabled={isLoading}
            className="flex items-center gap-2"
          >
            {currentStepData?.actionText || "Next"}
            <ArrowRight className="h-4 w-4" />
          </CustomButton>
        )}
      </div>

      {/* Step indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`w-2 h-2 rounded-full transition-colors ${
              step.id === currentStep
                ? 'bg-health-primary'
                : completedSteps.includes(step.id)
                ? 'bg-green-500'
                : step.id < currentStep
                ? 'bg-gray-400'
                : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default OnboardingFlow;
