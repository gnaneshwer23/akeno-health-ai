import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Toaster } from 'sonner'
import {
  ThemeProvider
} from "@/components/theme-provider"
import { QueryClient, QueryClientProvider } from 'react-query';

import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';
import Index from './pages/Index';
import AboutUs from './pages/AboutUs';
import HowItWorks from './pages/HowItWorks';
import DoctorSolutions from './pages/DoctorSolutions';
import PatientSolutions from './pages/PatientSolutions';
import BiotechSolutions from './pages/BiotechSolutions';
import QuantumComputing from './pages/QuantumComputing';
import CaseStudiesAndBlog from './pages/CaseStudiesAndBlog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import './App.css';
import HealthcareDecisionMaking from './pages/HealthcareDecisionMaking';

const queryClient = new QueryClient();

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="light" storageKey="healthai-theme">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/doctor-solutions" element={<DoctorSolutions />} />
              <Route path="/patient-solutions" element={<PatientSolutions />} />
              <Route path="/biotech-solutions" element={<BiotechSolutions />} />
              <Route path="/quantum-computing" element={<QuantumComputing />} />
              <Route path="/case-studies" element={<CaseStudiesAndBlog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/healthcare-decision-making" element={<HealthcareDecisionMaking />} />
              
              {/* Protected routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard/*" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              
              {/* 404 route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
            <ScrollToTop />
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
