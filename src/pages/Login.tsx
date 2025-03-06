
import React, { useState } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useAuth, UserRole } from '@/contexts/AuthContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/Button';
import { Loader2, Lock, User, Send, Shield, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('patient');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  const from = (location.state as any)?.from?.pathname || '/dashboard';
  
  // If already authenticated, redirect to dashboard
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Login failed",
        description: "Please enter both email and password",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    try {
      await login(email, password, role);
      navigate(from, { replace: true });
    } catch (error) {
      // Error is handled in the login function
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleShowPassword = () => setShowPassword(!showPassword);

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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-16 px-6 bg-gradient-to-br from-white via-health-light/20 to-health-primary/10">
        <div className="w-full max-w-md">
          <motion.div 
            className="bg-white shadow-xl rounded-xl p-8 border border-health-primary/10 relative overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-health-primary to-health-secondary"></div>
            
            <motion.div className="text-center mb-8" variants={itemVariants}>
              <h1 className="text-3xl font-bold text-health-dark mb-2 bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">Welcome Back</h1>
              <p className="text-muted-foreground">Access your AI-powered health dashboard</p>
            </motion.div>
            
            <Tabs defaultValue="patient" onValueChange={(value) => setRole(value as UserRole)}>
              <motion.div variants={itemVariants}>
                <TabsList className="grid grid-cols-3 mb-6">
                  <TabsTrigger value="patient" className="flex items-center gap-1 data-[state=active]:bg-health-primary/10 data-[state=active]:text-health-primary">
                    <User size={16} />
                    <span>Patient</span>
                  </TabsTrigger>
                  <TabsTrigger value="doctor" className="flex items-center gap-1 data-[state=active]:bg-health-primary/10 data-[state=active]:text-health-primary">
                    <Shield size={16} />
                    <span>Doctor</span>
                  </TabsTrigger>
                  <TabsTrigger value="researcher" className="flex items-center gap-1 data-[state=active]:bg-health-primary/10 data-[state=active]:text-health-primary">
                    <Send size={16} />
                    <span>Researcher</span>
                  </TabsTrigger>
                </TabsList>
              </motion.div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <motion.div className="space-y-2" variants={itemVariants}>
                  <Label htmlFor="email" className="text-sm font-medium flex items-center gap-1.5">
                    <User size={14} className="text-health-primary" />
                    Email
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="transition-all duration-300 focus:ring-2 focus:ring-health-primary/30 focus:border-health-primary shadow-sm"
                  />
                </motion.div>
                
                <motion.div className="space-y-2" variants={itemVariants}>
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password" className="text-sm font-medium flex items-center gap-1.5">
                      <Lock size={14} className="text-health-primary" />
                      Password
                    </Label>
                    <a href="#" className="text-xs text-health-primary hover:underline transition-colors">
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <Input 
                      id="password" 
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="pr-10 transition-all duration-300 focus:ring-2 focus:ring-health-primary/30 focus:border-health-primary shadow-sm"
                    />
                    <button
                      type="button"
                      onClick={toggleShowPassword}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-health-primary transition-colors"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    className="w-full mt-2 group relative shadow-sm"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="mr-2 animate-spin" />
                        Signing in...
                      </>
                    ) : (
                      <>
                        <Lock size={16} className="mr-2" />
                        Sign In
                        <ArrowRight size={16} className="absolute right-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                      </>
                    )}
                  </Button>
                </motion.div>
                
                <motion.div className="text-center mt-6" variants={itemVariants}>
                  <p className="text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <a href="#" className="text-health-primary hover:underline transition-colors font-medium">
                      Contact us for access
                    </a>
                  </p>
                </motion.div>
              </form>
            </Tabs>
          </motion.div>
          
          <motion.div 
            className="mt-8 text-center text-sm text-muted-foreground bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-health-primary/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p>For demo purposes, you can use any email and password</p>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
