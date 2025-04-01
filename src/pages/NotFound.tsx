
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { CustomButton } from '@/components/ui/custom-button';
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
          <CustomButton 
            onClick={() => navigate(-1)} 
            variant="outline"
            className="group"
            icon={<ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />}
          >
            Go Back
          </CustomButton>
          
          <CustomButton 
            to="/"
            variant="primary"
          >
            Return Home
          </CustomButton>
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
