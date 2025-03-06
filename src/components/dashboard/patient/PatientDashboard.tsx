import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Activity, 
  Heart, 
  Dna, 
  Brain, 
  Droplet, 
  AlertCircle,
  MessageSquare,
  User
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/Button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PatientDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-medium text-health-dark">Welcome, {user?.name}</h1>
        <p className="text-muted-foreground">Here's your AI-powered health analysis</p>
      </div>

      {/* Health Score Overview */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Your Health Score</CardTitle>
          <CardDescription>AI-generated assessment based on your health metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-2xl font-bold">
              86
            </div>
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Overall Health</span>
                <span className="text-sm font-medium text-green-600">Good</span>
              </div>
              <Progress value={86} className="h-2" />
              <p className="mt-2 text-sm text-muted-foreground">
                Your health score is <span className="text-green-600 font-medium">12% higher</span> than last month
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Health Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="py-3">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                <span>Heart Health</span>
              </CardTitle>
              <span className="text-green-600 text-sm">Optimal</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Resting Heart Rate</span>
                  <span className="font-medium">68 bpm</span>
                </div>
                <Progress value={65} className="h-1.5" />
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Blood Pressure</span>
                  <span className="font-medium">118/78 mmHg</span>
                </div>
                <Progress value={80} className="h-1.5" />
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Heart Rate Variability</span>
                  <span className="font-medium">62 ms</span>
                </div>
                <Progress value={72} className="h-1.5" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="py-3">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-500" />
                <span>Cognitive Health</span>
              </CardTitle>
              <span className="text-yellow-600 text-sm">Good</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Sleep Quality</span>
                  <span className="font-medium">7.4 hrs</span>
                </div>
                <Progress value={78} className="h-1.5" />
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Stress Level</span>
                  <span className="font-medium">Moderate</span>
                </div>
                <Progress value={55} className="h-1.5" />
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Focus & Attention</span>
                  <span className="font-medium">Good</span>
                </div>
                <Progress value={75} className="h-1.5" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="py-3">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg flex items-center gap-2">
                <Activity className="h-5 w-5 text-blue-500" />
                <span>Metabolic Health</span>
              </CardTitle>
              <span className="text-green-600 text-sm">Excellent</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Blood Glucose</span>
                  <span className="font-medium">92 mg/dL</span>
                </div>
                <Progress value={90} className="h-1.5" />
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Cholesterol</span>
                  <span className="font-medium">175 mg/dL</span>
                </div>
                <Progress value={85} className="h-1.5" />
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Body Fat</span>
                  <span className="font-medium">18.5%</span>
                </div>
                <Progress value={88} className="h-1.5" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Risk Assessment */}
      <Card>
        <CardHeader>
          <CardTitle>AI-Powered Risk Assessment</CardTitle>
          <CardDescription>Personalized disease risk based on genetics, biometrics, and lifestyle</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-red-500" />
                  <span>Cardiovascular Disease</span>
                </span>
                <span className="text-green-600 font-medium">Low Risk</span>
              </div>
              <Progress value={18} className="h-2" />
              <p className="mt-1 text-sm text-muted-foreground">
                Your risk is 62% lower than average for your age group
              </p>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="flex items-center gap-2">
                  <Droplet className="h-4 w-4 text-blue-500" />
                  <span>Type 2 Diabetes</span>
                </span>
                <span className="text-green-600 font-medium">Low Risk</span>
              </div>
              <Progress value={15} className="h-2" />
              <p className="mt-1 text-sm text-muted-foreground">
                Your risk is 75% lower than average for your age group
              </p>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="flex items-center gap-2">
                  <Dna className="h-4 w-4 text-purple-500" />
                  <span>Alzheimer's Disease</span>
                </span>
                <span className="text-yellow-600 font-medium">Moderate Risk</span>
              </div>
              <Progress value={42} className="h-2" />
              <p className="mt-1 text-sm text-muted-foreground">
                Your genetic profile shows some risk factors, but lifestyle interventions can help
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Health Assistant */}
      <Card>
        <CardHeader>
          <CardTitle>AI Health Assistant</CardTitle>
          <CardDescription>Get instant answers to your health questions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 rounded-lg p-4 mb-4 max-h-[200px] overflow-y-auto">
            <div className="flex gap-3 mb-3">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-health-primary/20 flex items-center justify-center">
                <Brain size={16} className="text-health-primary" />
              </div>
              <div className="flex-1 bg-white p-3 rounded-lg shadow-sm">
                <p className="text-sm">Hello {user?.name}! Based on your recent activity data, I've noticed that your sleep quality has improved by 15% since you started the new evening routine. Would you like some additional recommendations to optimize your sleep further?</p>
              </div>
            </div>
            
            <div className="flex gap-3 justify-end mb-3">
              <div className="flex-1 bg-health-primary/10 p-3 rounded-lg">
                <p className="text-sm">Yes, I'd like to know more about optimizing sleep.</p>
              </div>
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                <User size={16} />
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-health-primary/20 flex items-center justify-center">
                <Brain size={16} className="text-health-primary" />
              </div>
              <div className="flex-1 bg-white p-3 rounded-lg shadow-sm">
                <p className="text-sm">Great! Here are 3 evidence-based suggestions:</p>
                <ol className="text-sm mt-2 pl-5 list-decimal">
                  <li>Try to maintain a consistent sleep schedule, even on weekends</li>
                  <li>Limit blue light exposure 1 hour before bedtime</li>
                  <li>Consider a magnesium supplement in the evening, as your recent blood work showed slightly low levels</li>
                </ol>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <input 
              type="text" 
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-health-primary/50"
              placeholder="Ask about your health..."
            />
            <Button variant="primary" size="icon">
              <MessageSquare size={18} />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Preventive Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>AI-Guided Wellness Plan</CardTitle>
          <CardDescription>Personalized recommendations based on your health profile</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="nutrition">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
              <TabsTrigger value="fitness">Fitness</TabsTrigger>
              <TabsTrigger value="mental">Mental Health</TabsTrigger>
            </TabsList>
            
            <TabsContent value="nutrition" className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <AlertCircle size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Increase Omega-3 Intake</h4>
                  <p className="text-sm text-muted-foreground">Your blood work indicates slightly low omega-3 levels. Consider adding fatty fish, flaxseeds, or a supplement to your diet.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <AlertCircle size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Reduce Refined Carbohydrates</h4>
                  <p className="text-sm text-muted-foreground">Your glucose variability would benefit from replacing refined carbs with complex carbohydrates and fiber-rich foods.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <AlertCircle size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Optimize Vitamin D</h4>
                  <p className="text-sm text-muted-foreground">Your current level is 28 ng/mL, which is below optimal. Consider 15 minutes of morning sunlight and a daily supplement.</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="fitness" className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <AlertCircle size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Increase Cardiovascular Exercise</h4>
                  <p className="text-sm text-muted-foreground">Aim for 150 minutes of moderate-intensity aerobic activity weekly for optimal heart health.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <AlertCircle size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Add Resistance Training</h4>
                  <p className="text-sm text-muted-foreground">Your muscle mass is slightly below optimal. Add 2-3 strength training sessions per week.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <AlertCircle size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Improve Flexibility</h4>
                  <p className="text-sm text-muted-foreground">Your mobility assessment indicates tight hip flexors and hamstrings. Add daily stretching or yoga.</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="mental" className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                  <AlertCircle size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Stress Management</h4>
                  <p className="text-sm text-muted-foreground">Your cortisol patterns suggest elevated stress. Consider daily meditation or deep breathing exercises.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                  <AlertCircle size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Cognitive Training</h4>
                  <p className="text-sm text-muted-foreground">Regular brain games can help maintain cognitive function, especially important with your family history.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                  <AlertCircle size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Social Connection</h4>
                  <p className="text-sm text-muted-foreground">Research shows social engagement is critical for mental health. Aim for regular social activities.</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientDashboard;
