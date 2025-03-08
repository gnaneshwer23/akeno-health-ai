
import React from 'react';
import RegisterForm from '@/components/auth/RegisterForm';
import AuthLayout from '@/components/auth/AuthLayout';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const Signup = () => {
  const { isAuthenticated } = useAuth();

  // Redirect if already authenticated
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <AuthLayout 
      title="Create Your Account"
      description="Join Akeno Health to access personalized AI healthcare insights"
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default Signup;
