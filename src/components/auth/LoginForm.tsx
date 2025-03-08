
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/Button';
import { Loader2, Lock, User, Send, Shield, ArrowRight, Eye, EyeOff, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'patient' | 'doctor' | 'researcher'>('patient');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  const from = (location.state as any)?.from?.pathname || '/dashboard';

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

  return (
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
  );
};

export default LoginForm;
