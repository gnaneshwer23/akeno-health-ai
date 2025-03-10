
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MainLayout from '@/layouts/MainLayout';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <h1 className="text-9xl font-bold text-health-primary">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-health-dark mt-4">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mt-2">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button 
            onClick={() => navigate(-1)} 
            variant="outline"
            className="group"
          >
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </Button>
          
          <Button 
            onClick={() => navigate('/')}
            className="bg-health-primary hover:bg-health-secondary"
          >
            Return Home
          </Button>
        </div>
        
        <div className="mt-16">
          <p className="text-muted-foreground text-sm">
            Need assistance? <a href="/contact" className="text-health-primary hover:underline">Contact Support</a>
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
