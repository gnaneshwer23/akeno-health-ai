
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Brand } from './navbar/Brand';
import { NavLinks } from './navbar/NavLinks';
import { AuthButtons } from './navbar/AuthButtons';
import { MobileMenu } from './navbar/MobileMenu';
import { useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Initial check for page load
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8",
        isScrolled || location.pathname !== "/" 
          ? "py-2 bg-white shadow-sm" 
          : "py-4 bg-white shadow-sm"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Brand />
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <NavLinks />
        </div>
        <div className="hidden lg:flex items-center space-x-6">
          <AuthButtons />
        </div>
        <button
          className="lg:hidden ml-4 text-health-dark hover:text-health-primary transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <MobileMenu isOpen={mobileMenuOpen} onLinkClick={closeMobileMenu} />
    </header>
  );
};

export { Navbar };
