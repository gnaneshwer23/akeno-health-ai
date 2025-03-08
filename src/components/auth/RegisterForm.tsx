
import React, { useState } from 'react';
import { useAuth, UserRole } from '@/contexts/AuthContext';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/Button';
import { Loader2, Lock, User, Send, Shield, ArrowRight, Eye, EyeOff, Mail, UserPlus } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

const RegisterForm = () => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerRole, setRegisterRole] = useState<UserRole>('patient');
  const [isRegistering, setIsRegistering] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  
  const { signup } = useAuth();
  const { toast } = useToast();

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
      // Registration successful - the parent component will handle tab switching
    } catch (error) {
      // Error is handled in the signup function
    } finally {
      setIsRegistering(false);
    }
  };

  const toggleShowRegisterPassword = () => setShowRegisterPassword(!showRegisterPassword);

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
  );
};

export default RegisterForm;
