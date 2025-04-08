
import React from 'react';
import MainLayout from '@/layouts/MainLayout';

const Home = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to Akeno Health</h1>
        <p className="text-lg">Our AI-powered healthcare platform provides personalized insights and analytics.</p>
      </div>
    </MainLayout>
  );
};

export default Home;
