
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader2, Lock, User, Send, Shield, ArrowRight, Eye, EyeOff, Mail, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'patient' | 'doctor' | 'researcher'>('patient');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [twoFactorCode, setTwoFactorCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  const from = (location.state as any)?.from?.pathname || '/dashboard';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
    
    setIsSubmitting(true);
    try {
      // For demo, show 2FA screen after initial login
      if (!showTwoFactor) {
        // In a real app, this would be the first stage of auth
        setShowTwoFactor(true);
        toast({
          title: "Verification required",
          description: "Please enter the code sent to your email",
        });
        
        // Simulate sending a verification code
        setTimeout(() => {
          setIsSubmitting(false);
        }, 1000);
        
        return;
      }
      
      // For demo, any 6-digit code will work
      if (twoFactorCode.length !== 6) {
        setError("Please enter a valid 6-digit code");
        setIsSubmitting(false);
        return;
      }
      
      // Complete the login process
      await login(email, password);
      
      toast({
        title: "Login successful",
        description: "Welcome to your AI-powered healthcare dashboard",
      });
      
      // Navigate to the appropriate dashboard based on role
      navigate(from, { replace: true });
    } catch (error: any) {
      setError(error.message || "Authentication failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleShowPassword = () => setShowPassword(!showPassword);

  // Animation variants
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

  if (showTwoFactor) {
    return (
      <form onSubmit={handleLogin} className="space-y-5">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-6"
        >
          <div className="h-20 w-20 bg-health-primary/10 rounded-full mx-auto flex items-center justify-center mb-4">
            <Lock size={30} className="text-health-primary" />
          </div>
          <h3 className="text-xl font-semibold">Two-Factor Authentication</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Please enter the 6-digit verification code sent to your email
          </p>
        </motion.div>
        
        {error && (
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        <motion.div className="space-y-2" variants={itemVariants}>
          <div className="flex justify-between items-center">
            <Label htmlFor="verification-code" className="text-sm font-medium">
              Verification Code
            </Label>
          </div>
          <Input 
            id="verification-code" 
            type="text"
            placeholder="000000" 
            value={twoFactorCode}
            onChange={(e) => {
              // Only allow digits and max 6 characters
              const value = e.target.value.replace(/\D/g, '').slice(0, 6);
              setTwoFactorCode(value);
            }}
            className="text-center text-lg tracking-widest"
            maxLength={6}
            autoComplete="one-time-code"
          />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Button 
            type="submit" 
            variant="default" 
            size="lg" 
            className="w-full mt-4 bg-health-primary text-white hover:bg-health-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="mr-2 animate-spin" />
                Verifying...
              </>
            ) : (
              <>
                Verify and Login
                <ArrowRight size={16} className="ml-2" />
              </>
            )}
          </Button>
          
          <Button 
            type="button" 
            variant="ghost" 
            size="sm"
            className="w-full mt-2 text-muted-foreground"
            onClick={() => setShowTwoFactor(false)}
            disabled={isSubmitting}
          >
            Back to Login
          </Button>
        </motion.div>
      </form>
    );
  }

  return (
    <form onSubmit={handleLogin} className="space-y-5">
      {error && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
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
        
        <motion.div className="flex items-center space-x-2" variants={itemVariants}>
          <Checkbox 
            id="remember" 
            checked={rememberMe}
            onCheckedChange={(checked) => setRememberMe(checked as boolean)}
          />
          <label
            htmlFor="remember"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Remember me for 30 days
          </label>
        </motion.div>
      </div>
      
      <motion.div variants={itemVariants}>
        <Button 
          type="submit" 
          variant="default" 
          size="lg" 
          className="w-full mt-2 group relative shadow-sm bg-health-primary text-white hover:bg-health-primary/90"
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
  );
};

export default LoginForm;
