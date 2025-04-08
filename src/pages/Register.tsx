
import React, { useState, useEffect } from 'react';
import RegisterForm from '@/components/auth/RegisterForm';
import AuthLayout from '@/components/auth/AuthLayout';
import ResearcherAuthLayout from '@/components/auth/ResearcherAuthLayout';
import HospitalAuthLayout from '@/components/auth/HospitalAuthLayout';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import { UserRole } from '@/contexts/auth/types';

const Register = () => {
  const { isAuthenticated } = useAuth();
  const [role, setRole] = useState<UserRole>(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const roleParam = searchParams.get('role');

  // Check for role in URL params (e.g., /register?role=researcher)
  useEffect(() => {
    if (roleParam && ['patient', 'doctor', 'researcher', 'hospital'].includes(roleParam)) {
      setRole(roleParam as UserRole);
    }
  }, [roleParam]);

  // Redirect if already authenticated
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  // Use the ResearcherAuthLayout for researchers
  if (role === 'researcher') {
    return (
      <ResearcherAuthLayout 
        title="Create Researcher Account"
        description="Join Akeno Health's AI platform for biotech and pharmaceutical research"
      >
        <RegisterForm initialRole="researcher" />
      </ResearcherAuthLayout>
    );
  }
  
  // Use the HospitalAuthLayout for hospitals
  if (role === 'hospital') {
    return (
      <HospitalAuthLayout 
        title="Create Hospital Account"
        description="Join Akeno Health's AI platform for healthcare institutions"
      >
        <RegisterForm initialRole="hospital" />
      </HospitalAuthLayout>
    );
  }

  // Default layout for other roles
  return (
    <AuthLayout 
      title="Create Your Account"
      description="Join Akeno Health to access personalized AI healthcare insights"
    >
      <RegisterForm initialRole={role} />
    </AuthLayout>
  );
};

export default Register;
