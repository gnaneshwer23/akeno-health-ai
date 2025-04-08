import React, { memo, useState } from 'react';
import LoginForm from '@/components/auth/LoginForm';
import AuthLayout from '@/components/auth/AuthLayout';
import ResearcherAuthLayout from '@/components/auth/ResearcherAuthLayout';
import HospitalAuthLayout from '@/components/auth/HospitalAuthLayout';
import { useAuth } from '@/contexts/auth/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import { UserRole } from '@/contexts/auth/types';

const Login = () => {
  const { isAuthenticated } = useAuth();
  const [role, setRole] = useState<UserRole>(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const roleParam = searchParams.get('role');

  // Check for role in URL params (e.g., /login?role=researcher)
  React.useEffect(() => {
    if (roleParam && ['patient', 'doctor', 'researcher', 'hospital'].includes(roleParam)) {
      setRole(roleParam as UserRole);
    }
  }, [roleParam]);

  // Early return with redirect if already authenticated
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  // Use the ResearcherAuthLayout for researchers
  if (role === 'researcher') {
    return (
      <ResearcherAuthLayout>
        <LoginForm initialRole="researcher" />
      </ResearcherAuthLayout>
    );
  }
  
  // Use the HospitalAuthLayout for hospitals
  if (role === 'hospital') {
    return (
      <HospitalAuthLayout>
        <LoginForm initialRole="hospital" />
      </HospitalAuthLayout>
    );
  }

  // Default layout for other roles
  return (
    <AuthLayout>
      <LoginForm initialRole={role} />
    </AuthLayout>
  );
};

export default memo(Login);
