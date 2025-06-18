
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CustomButton } from '@/components/ui/custom-button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Zap, Shield, Globe } from 'lucide-react';

interface OnboardingWelcomeProps {
  onStart: () => void;
}

const OnboardingWelcome = ({ onStart }: OnboardingWelcomeProps) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <div className="text-6xl mb-4">🏥</div>
        <h1 className="text-4xl font-bold text-health-dark mb-4">
          Welcome to Akeno Health
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Your AI-powered healthcare data platform is ready to transform how you 
          understand and manage health information
        </p>
        <Badge className="bg-health-primary text-white px-4 py-2">
          🚀 Let's get you started in 10 easy steps
        </Badge>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-health-primary" />
                <CardTitle className="text-lg">For Everyone</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Patients: Track your health journey</li>
                <li>• Doctors: Make data-driven decisions</li>
                <li>• Researchers: Discover new insights</li>
                <li>• Hospitals: Optimize operations</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-health-primary" />
                <CardTitle className="text-lg">AI-Powered</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Real-time health insights</li>
                <li>• Predictive analytics</li>
                <li>• Personalized recommendations</li>
                <li>• Advanced pattern recognition</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-health-primary" />
                <CardTitle className="text-lg">Secure & Private</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• HIPAA compliant infrastructure</li>
                <li>• End-to-end encryption</li>
                <li>• Row-level security</li>
                <li>• You control your data</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-health-primary" />
                <CardTitle className="text-lg">Global Impact</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Connect with healthcare networks</li>
                <li>• Share insights securely</li>
                <li>• Contribute to research</li>
                <li>• Improve global health outcomes</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center"
      >
        <Card className="bg-gradient-to-r from-health-primary to-blue-600 text-white">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-2">Ready to Begin?</h3>
            <p className="mb-6 opacity-90">
              The onboarding process takes about 3 minutes and will help you 
              understand all the powerful features available to you.
            </p>
            <CustomButton
              onClick={onStart}
              size="lg"
              className="bg-white text-health-primary hover:bg-gray-100"
            >
              Start 10-Step Setup
              <ArrowRight className="h-4 w-4 ml-2" />
            </CustomButton>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default OnboardingWelcome;
