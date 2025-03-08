
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, UserPlus, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { useAuth } from '@/contexts/AuthContext';
import { useDemoData } from '@/utils/demoData';
import { useToast } from '@/hooks/use-toast';

const AuthCard = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const { loadDemoData } = useDemoData();
  const { toast } = useToast();

  // Handle successful registration
  const handleSuccessfulRegistration = async (email: string, password: string) => {
    setRegisterEmail(email);
    setRegisterPassword(password);
    setActiveTab('login');
  };

  // Handle loading demo data
  const handleLoadDemoData = async () => {
    try {
      setLoading(true);
      
      // Generate a random email and password for demo account
      const randomId = Math.floor(Math.random() * 1000000);
      const email = `demo${randomId}@akeno.health`;
      const password = `demo${randomId}`;
      
      // Register the demo account
      await signup(email, password);
      
      toast({
        title: 'Demo Account Created',
        description: 'Logging you in and preparing your demo data...',
      });
      
      // Wait a moment for sign up to complete and trigger auth state change
      setTimeout(async () => {
        try {
          // Load demo data for the new account
          await loadDemoData();
        } catch (err) {
          console.error('Error loading demo data:', err);
          toast({
            title: 'Error',
            description: 'Error loading demo data. Please try again.',
            variant: 'destructive',
          });
        } finally {
          setLoading(false);
        }
      }, 2000);
      
    } catch (error) {
      console.error('Error setting up demo account:', error);
      toast({
        title: 'Error',
        description: 'Could not create demo account. Please try again.',
        variant: 'destructive',
      });
      setLoading(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.div 
      className="bg-white shadow-xl rounded-xl p-8 border border-health-primary/10 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-health-primary to-health-secondary"></div>
      
      <motion.div className="text-center mb-8" variants={itemVariants}>
        <h1 className="text-3xl font-bold text-health-dark mb-2 bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
          {activeTab === 'login' ? 'Welcome Back' : 'Join Akeno Health'}
        </h1>
        <p className="text-muted-foreground">
          {activeTab === 'login' 
            ? 'Access your AI-powered health dashboard' 
            : 'Create your account for personalized healthcare'}
        </p>
      </motion.div>
      
      <Tabs 
        defaultValue="login" 
        value={activeTab} 
        onValueChange={(value) => setActiveTab(value as 'login' | 'register')}
        className="space-y-6"
      >
        <motion.div variants={itemVariants}>
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger 
              value="login" 
              className="flex items-center gap-1 data-[state=active]:bg-health-primary/10 data-[state=active]:text-health-primary"
            >
              <User size={16} />
              <span>Login</span>
            </TabsTrigger>
            <TabsTrigger 
              value="register" 
              className="flex items-center gap-1 data-[state=active]:bg-health-primary/10 data-[state=active]:text-health-primary"
            >
              <UserPlus size={16} />
              <span>Register</span>
            </TabsTrigger>
          </TabsList>
        </motion.div>
        
        <TabsContent value="login" className="space-y-6">
          <LoginForm />
        </TabsContent>
        
        <TabsContent value="register" className="space-y-6">
          <RegisterForm />
        </TabsContent>
        
        <motion.div className="mt-6 pt-6 border-t" variants={itemVariants}>
          <div className="text-center mb-4">
            <p className="text-sm text-muted-foreground">
              Want to explore without creating an account?
            </p>
          </div>
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 border-health-primary/30 hover:bg-health-primary/5"
            onClick={handleLoadDemoData}
            disabled={loading}
          >
            <Database size={16} />
            <span>Try Demo Account</span>
            {loading && <span className="ml-2 size-4 rounded-full border-2 border-t-transparent border-health-primary animate-spin"></span>}
          </Button>
        </motion.div>
        
        <motion.div className="text-center mt-6" variants={itemVariants}>
          <p className="text-sm text-muted-foreground">
            {activeTab === 'login' ? (
              <>
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => setActiveTab('register')}
                  className="text-health-primary hover:underline transition-colors font-medium"
                >
                  Register here
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setActiveTab('login')}
                  className="text-health-primary hover:underline transition-colors font-medium"
                >
                  Sign in
                </button>
              </>
            )}
          </p>
        </motion.div>
      </Tabs>
    </motion.div>
  );
};

export default AuthCard;
