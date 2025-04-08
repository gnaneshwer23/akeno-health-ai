
import React from 'react';
import MainLayout from '@/layouts/MainLayout';

const Login = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <p>Please sign in to access your account.</p>
        
        {/* Login form placeholder */}
        <div className="mt-8 max-w-md mx-auto p-6 border rounded-lg shadow-sm">
          <p className="text-center text-gray-500">Login form will be implemented here.</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
