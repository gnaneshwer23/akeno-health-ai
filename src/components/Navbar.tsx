
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedLogo } from './AnimatedLogo';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check in case page is loaded at a position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12",
        isScrolled ? "py-3 glassmorphism backdrop-blur-lg shadow-md" : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-health-dark">
          <AnimatedLogo size="md" />
          <span className="font-medium text-lg hidden sm:block">Akeno Health AI</span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            to="/how-it-works"
            className="text-health-dark/80 hover:text-health-primary transition-colors relative group text-sm font-medium"
          >
            How It Works
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-health-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Button 
            variant="primary" 
            size="sm" 
            className="shadow hover:shadow-md transition-all"
          >
            Get Started
          </Button>
        </div>

        <button
          className="lg:hidden text-health-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-[72px] bg-white/95 backdrop-blur-lg transition-transform duration-300 z-40 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-6">
          <nav className="flex flex-col space-y-6 mt-6">
            <Link
              to="/how-it-works"
              className="text-health-dark/80 hover:text-health-primary transition-colors text-2xl font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
          </nav>
          <div className="mt-auto mb-8 flex flex-col gap-4 w-full">
            <Button variant="primary" fullWidth className="shadow">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Navbar };
