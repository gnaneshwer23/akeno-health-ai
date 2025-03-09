
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader2, Lock, Mail, User, Check, UserPlus, AlertTriangle, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { UserRole } from '@/contexts/auth/types';
import RoleSelector from './RoleSelector';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import { itemVariants } from './animations';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState<UserRole>('patient');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { signup } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    // Validation
    if (!email || !password || !name) {
      setError("All fields are required");
      return;
    }
    
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    
    if (!agreeTerms) {
      setError("You must agree to the Terms of Service and Privacy Policy");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await signup(email, password, role, name);
      
      toast({
        title: "Registration successful",
        description: "Please check your email to confirm your account",
      });
      
      // Redirect to login page
      navigate('/login', { replace: true });
    } catch (error: any) {
      console.error("Signup error:", error);
      setError(error.message || "Registration failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      <form onSubmit={handleRegister} className="space-y-5">
        {error && (
          <Alert variant="destructive" className="animate-fade-in">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        <div className="space-y-4">
          <RoleSelector 
            role={role} 
            onRoleSelect={(newRole) => setRole(newRole)} 
          />
          
          <motion.div className="space-y-2" variants={itemVariants}>
            <Label htmlFor="name" className="text-sm font-medium flex items-center gap-1.5">
              <User size={14} className="text-health-primary" />
              Full Name
            </Label>
            <Input 
              id="name" 
              type="text" 
              placeholder="Your Full Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="transition-all duration-300 focus:ring-2 focus:ring-health-primary/30 focus:border-health-primary shadow-sm"
            />
          </motion.div>
          
          <EmailInput 
            email={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          
          <motion.div className="space-y-2" variants={itemVariants}>
            <Label htmlFor="password" className="text-sm font-medium flex items-center gap-1.5">
              <Lock size={14} className="text-health-primary" />
              Password
            </Label>
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
          
          <motion.div className="space-y-2" variants={itemVariants}>
            <Label htmlFor="confirmPassword" className="text-sm font-medium flex items-center gap-1.5">
              <Check size={14} className="text-health-primary" />
              Confirm Password
            </Label>
            <Input 
              id="confirmPassword" 
              type={showPassword ? "text" : "password"}
              placeholder="••••••••" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="transition-all duration-300 focus:ring-2 focus:ring-health-primary/30 focus:border-health-primary shadow-sm"
            />
          </motion.div>
          
          <motion.div className="flex items-center space-x-2 pt-2" variants={itemVariants}>
            <Checkbox 
              id="terms" 
              checked={agreeTerms}
              onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
              required
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the{" "}
              <a href="#" className="text-health-primary hover:underline">Terms of Service</a>
              {" "}and{" "}
              <a href="#" className="text-health-primary hover:underline">Privacy Policy</a>
            </label>
          </motion.div>
        </div>
        
        <motion.div variants={itemVariants}>
          <Button 
            type="submit" 
            variant="default" 
            size="lg" 
            className="w-full mt-4 group relative shadow-sm bg-health-primary text-white hover:bg-health-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="mr-2 animate-spin" />
                Creating account...
              </>
            ) : (
              <>
                <UserPlus size={16} className="mr-2" />
                Create Account
              </>
            )}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default RegisterForm;
