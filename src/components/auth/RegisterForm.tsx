
import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { UserRole } from '@/contexts/auth/types';

import RoleSelector from './RoleSelector';
import EmailInput from './EmailInput';
import PasswordInputRegister from './PasswordInputRegister';
import NameInput from './NameInput';
import ConfirmPasswordInput from './ConfirmPasswordInput';
import TermsCheckbox from './TermsCheckbox';
import RegisterButton from './RegisterButton';
import RegisterErrorAlert from './RegisterErrorAlert';

interface RegisterFormProps {
  initialRole?: UserRole;
}

const RegisterForm = ({ initialRole }: RegisterFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState<UserRole>(initialRole || 'patient');
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
      // Fixed: Ensuring role is passed as UserRole type
      await signup(email, password, role as UserRole, name);
      
      toast({
        title: "Registration successful",
        description: "Please check your email to confirm your account",
      });
      
      navigate('/login', { replace: true });
    } catch (error: any) {
      console.error("Signup error:", error);
      setError(error.message || "Registration failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Make sure we're handling UserRole type correctly
  const handleRoleSelect = (newRole: UserRole) => setRole(newRole);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value);
  const handleTermsChange = (checked: boolean) => setAgreeTerms(checked);

  const toggleShowPassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

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
        <RegisterErrorAlert error={error} />
        
        <div className="space-y-4">
          <RoleSelector 
            role={role} 
            onRoleSelect={handleRoleSelect} 
          />
          
          <NameInput
            name={name}
            onChange={handleNameChange}
          />
          
          <EmailInput 
            email={email} 
            onChange={handleEmailChange} 
          />
          
          <div className="relative">
            <PasswordInputRegister 
              password={password} 
              onChange={handlePasswordChange}
              showPassword={showPassword}
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
          
          <ConfirmPasswordInput 
            confirmPassword={confirmPassword}
            onChange={handleConfirmPasswordChange}
            showPassword={showPassword}
          />
          
          <TermsCheckbox 
            checked={agreeTerms}
            onCheckedChange={handleTermsChange}
          />
        </div>
        
        <RegisterButton isSubmitting={isSubmitting} />
      </form>
    </motion.div>
  );
};

export default RegisterForm;
