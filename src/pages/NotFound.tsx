
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/Button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Scroll to top when this page loads
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-health-light/20 to-white px-4 py-20">
        <div className="max-w-lg w-full text-center p-10 bg-white rounded-2xl shadow-xl border border-health-primary/10">
          <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">404</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-health-primary to-health-secondary mx-auto mb-6 rounded-full"></div>
          <h2 className="text-3xl font-semibold text-health-dark mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            We're sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              as="Link" 
              to="/" 
              variant="primary"
              className="group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Button>
            <Button 
              as="Link" 
              to="/contact" 
              variant="outline"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
