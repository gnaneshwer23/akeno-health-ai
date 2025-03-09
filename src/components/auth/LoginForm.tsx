
import React, { useState, useCallback, memo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { UserRole } from '@/contexts/auth/types';

// Import refactored components
import RoleSelector from './RoleSelector';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import RememberMeCheckbox from './RememberMeCheckbox';
import LoginButton from './LoginButton';
import LoginErrorAlert from './LoginErrorAlert';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('patient');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  const from = (location.state as any)?.from?.pathname || '/dashboard';

  // Memoize event handlers to prevent recreating functions on each render
  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // Clear errors when user starts typing
    if (error) setError(null);
  }, [error]);

  const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    // Clear errors when user starts typing
    if (error) setError(null);
  }, [error]);

  const handleRoleSelect = useCallback((selectedRole: UserRole) => {
    setRole(selectedRole);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (error: any) {
      console.error("Login error:", error);
      
      // Extract the most user-friendly error message
      let errorMessage = "Authentication failed";
      
      if (error.message) {
        if (error.message.includes("Invalid login credentials")) {
          errorMessage = "Invalid email or password. Please try again.";
        } else if (error.message.includes("Email not confirmed")) {
          errorMessage = "Please verify your email before logging in.";
        } else {
          errorMessage = error.message;
        }
      }
      
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <form onSubmit={handleLogin} className="space-y-5">
        <LoginErrorAlert error={error} />
        
        <div className="space-y-4">
          <RoleSelector 
            role={role} 
            onRoleSelect={handleRoleSelect} 
          />
          
          <EmailInput 
            email={email} 
            onChange={handleEmailChange} 
          />
          
          <PasswordInput 
            password={password} 
            onChange={handlePasswordChange} 
          />
          
          <RememberMeCheckbox 
            checked={rememberMe} 
            onCheckedChange={setRememberMe} 
          />
        </div>
        
        <LoginButton isSubmitting={isSubmitting} />
      </form>
    </motion.div>
  );
};

export default memo(LoginForm);
