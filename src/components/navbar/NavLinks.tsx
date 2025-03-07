
import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="text-health-dark/80 hover:text-health-primary transition-colors text-sm font-medium px-2"
    >
      {children}
    </Link>
  );
};

const NavLinks: React.FC = () => {
  return (
    <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/how-it-works">How It Works</NavLink>
      <NavLink to="/case-studies-blog">Case Studies & Blog</NavLink>
      <NavLink to="/patient-solutions">For Patients</NavLink>
      <NavLink to="/doctor-solutions">For Doctors</NavLink>
      <NavLink to="/biotech-solutions">For Pharma & Biotech</NavLink>
      <NavLink to="/quantum-computing">Quantum</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
};

export { NavLinks };
