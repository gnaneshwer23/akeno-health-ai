
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './contexts/auth/AuthContext';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/auth/ProtectedRoute';
import ScrollToTop from '@/components/utils/ScrollToTop';
import { Loader2 } from 'lucide-react';
import { Toaster } from 'sonner';
import FloatingChatbot from '@/components/chatbot/FloatingChatbot';

// Create a client
const queryClient = new QueryClient();

// Lazy-loaded pages
const Index = lazy(() => import('./pages/Index'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const Solutions = lazy(() => import('./pages/Solutions')); 
const CaseStudiesAndBlog = lazy(() => import('./pages/CaseStudiesAndBlog'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="health-tech-theme">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Router>
            <ScrollToTop />
            <Suspense fallback={
              <div className="flex items-center justify-center h-screen w-screen">
                <Loader2 className="h-10 w-10 animate-spin text-health-primary" />
                <span className="ml-2 text-xl font-medium text-health-dark">Loading...</span>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/case-studies" element={<CaseStudiesAndBlog />} />
                <Route path="/case-studies-blog" element={<CaseStudiesAndBlog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route 
                  path="/dashboard/*" 
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <FloatingChatbot id="floating-chatbot-button" />
            <Toaster position="top-right" />
          </Router>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
