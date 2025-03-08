
import React, { useState } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useAuth, UserRole } from '@/contexts/AuthContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/Button';
import { Loader2, Lock, User, Send, Shield, ArrowRight, Eye, EyeOff, Mail, UserPlus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

const Login = () => {
  // Login state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('patient');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  // Register state
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerRole, setRegisterRole] = useState<UserRole>('patient');
  const [isRegistering, setIsRegistering] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  
  // Tab state
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  
  const { login, signup, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  const from = (location.state as any)?.from?.pathname || '/dashboard';
  
  // If already authenticated, redirect to dashboard
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  
  const handleLogin = async (e: React.FormEvent) => {
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
      await login(email, password);
      navigate(from, { replace: true });
    } catch (error) {
      // Error is handled in the login function
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!registerEmail || !registerPassword || !registerName) {
      toast({
        title: "Registration failed",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsRegistering(true);
    try {
      await signup(registerEmail, registerPassword, registerRole, registerName);
      setActiveTab('login');
      setEmail(registerEmail);
      setPassword(registerPassword);
    } catch (error) {
      // Error is handled in the signup function
    } finally {
      setIsRegistering(false);
    }
  };

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowRegisterPassword = () => setShowRegisterPassword(!showRegisterPassword);

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
                <form onSubmit={handleLogin} className="space-y-5">
                  <div className="space-y-4">
                    <motion.div className="space-y-2" variants={itemVariants}>
                      <Label htmlFor="role" className="text-sm font-medium">
                        I am a
                      </Label>
                      <div className="grid grid-cols-3 gap-2">
                        <Button
                          type="button"
                          variant={role === 'patient' ? 'default' : 'outline'}
                          onClick={() => setRole('patient')}
                          className="flex items-center justify-center gap-1"
                        >
                          <User size={16} />
                          <span>Patient</span>
                        </Button>
                        <Button
                          type="button"
                          variant={role === 'doctor' ? 'default' : 'outline'}
                          onClick={() => setRole('doctor')}
                          className="flex items-center justify-center gap-1"
                        >
                          <Shield size={16} />
                          <span>Doctor</span>
                        </Button>
                        <Button
                          type="button"
                          variant={role === 'researcher' ? 'default' : 'outline'}
                          onClick={() => setRole('researcher')}
                          className="flex items-center justify-center gap-1"
                        >
                          <Send size={16} />
                          <span>Researcher</span>
                        </Button>
                      </div>
                    </motion.div>
                    
                    <motion.div className="space-y-2" variants={itemVariants}>
                      <Label htmlFor="email" className="text-sm font-medium flex items-center gap-1.5">
                        <Mail size={14} className="text-health-primary" />
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
                  </div>
                  
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
                </form>
              </TabsContent>
              
              <TabsContent value="register" className="space-y-6">
                <form onSubmit={handleRegister} className="space-y-5">
                  <div className="space-y-4">
                    <motion.div className="space-y-2" variants={itemVariants}>
                      <Label htmlFor="registerRole" className="text-sm font-medium">
                        I am a
                      </Label>
                      <div className="grid grid-cols-3 gap-2">
                        <Button
                          type="button"
                          variant={registerRole === 'patient' ? 'default' : 'outline'}
                          onClick={() => setRegisterRole('patient')}
                          className="flex items-center justify-center gap-1"
                        >
                          <User size={16} />
                          <span>Patient</span>
                        </Button>
                        <Button
                          type="button"
                          variant={registerRole === 'doctor' ? 'default' : 'outline'}
                          onClick={() => setRegisterRole('doctor')}
                          className="flex items-center justify-center gap-1"
                        >
                          <Shield size={16} />
                          <span>Doctor</span>
                        </Button>
                        <Button
                          type="button"
                          variant={registerRole === 'researcher' ? 'default' : 'outline'}
                          onClick={() => setRegisterRole('researcher')}
                          className="flex items-center justify-center gap-1"
                        >
                          <Send size={16} />
                          <span>Researcher</span>
                        </Button>
                      </div>
                    </motion.div>
                    
                    <motion.div className="space-y-2" variants={itemVariants}>
                      <Label htmlFor="registerName" className="text-sm font-medium flex items-center gap-1.5">
                        <User size={14} className="text-health-primary" />
                        Full Name
                      </Label>
                      <Input 
                        id="registerName" 
                        type="text" 
                        placeholder="John Smith" 
                        value={registerName}
                        onChange={(e) => setRegisterName(e.target.value)}
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-health-primary/30 focus:border-health-primary shadow-sm"
                      />
                    </motion.div>
                    
                    <motion.div className="space-y-2" variants={itemVariants}>
                      <Label htmlFor="registerEmail" className="text-sm font-medium flex items-center gap-1.5">
                        <Mail size={14} className="text-health-primary" />
                        Email
                      </Label>
                      <Input 
                        id="registerEmail" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-health-primary/30 focus:border-health-primary shadow-sm"
                      />
                    </motion.div>
                    
                    <motion.div className="space-y-2" variants={itemVariants}>
                      <Label htmlFor="registerPassword" className="text-sm font-medium flex items-center gap-1.5">
                        <Lock size={14} className="text-health-primary" />
                        Password
                      </Label>
                      <div className="relative">
                        <Input 
                          id="registerPassword" 
                          type={showRegisterPassword ? "text" : "password"}
                          placeholder="••••••••" 
                          value={registerPassword}
                          onChange={(e) => setRegisterPassword(e.target.value)}
                          required
                          className="pr-10 transition-all duration-300 focus:ring-2 focus:ring-health-primary/30 focus:border-health-primary shadow-sm"
                        />
                        <button
                          type="button"
                          onClick={toggleShowRegisterPassword}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-health-primary transition-colors"
                          aria-label={showRegisterPassword ? "Hide password" : "Show password"}
                        >
                          {showRegisterPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div variants={itemVariants}>
                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg" 
                      className="w-full mt-2 group relative shadow-sm"
                      disabled={isRegistering}
                    >
                      {isRegistering ? (
                        <>
                          <Loader2 size={16} className="mr-2 animate-spin" />
                          Creating Account...
                        </>
                      ) : (
                        <>
                          <UserPlus size={16} className="mr-2" />
                          Create Account
                          <ArrowRight size={16} className="absolute right-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </TabsContent>
              
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
          
          <motion.div 
            className="mt-8 text-center text-sm text-muted-foreground bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-health-primary/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p>For demo purposes, you can create an account with any email and password</p>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
