
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Brand } from './navbar/Brand';
import { NavLinks } from './navbar/NavLinks';
import { AuthButtons } from './navbar/AuthButtons';
import { MobileMenu } from './navbar/MobileMenu';

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

    // Initial check for page load
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12",
        isScrolled ? "py-3 glassmorphism backdrop-blur-lg shadow-md" : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Brand />
        <NavLinks />
        <AuthButtons />

        <button
          className="lg:hidden text-health-dark"
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
