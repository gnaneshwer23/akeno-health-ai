
import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

// Lazy loaded pages for better performance
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/auth/Login'));
const Register = lazy(() => import('./pages/Register'));
const ResetPassword = lazy(() => import('./pages/auth/ResetPassword'));
const ForgotPassword = lazy(() => import('./pages/auth/ForgotPassword'));
const Products = lazy(() => import('./pages/Products'));
const AIStudio = lazy(() => import('./pages/AIStudio'));
const RealWorldEvidence = lazy(() => import('./pages/RealWorldEvidence'));
const DigitalTwinPanel = lazy(() => import('./pages/DigitalTwinPanel'));
const BiomarkerAnalytics = lazy(() => import('./pages/BiomarkerAnalytics'));
const CaseStudiesAndBlog = lazy(() => import('./pages/CaseStudiesAndBlog'));

// Loading fallback
const PageLoading = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-health-primary"></div>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<PageLoading />}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<PageLoading />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: 'products',
        element: (
          <Suspense fallback={<PageLoading />}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: 'ai-studio',
        element: (
          <Suspense fallback={<PageLoading />}>
            <AIStudio />
          </Suspense>
        ),
      },
      {
        path: 'real-world-evidence',
        element: (
          <Suspense fallback={<PageLoading />}>
            <RealWorldEvidence />
          </Suspense>
        ),
      },
      {
        path: 'digital-twin-panel',
        element: (
          <Suspense fallback={<PageLoading />}>
            <DigitalTwinPanel />
          </Suspense>
        ),
      },
      {
        path: 'biomarker-analytics',
        element: (
          <Suspense fallback={<PageLoading />}>
            <BiomarkerAnalytics />
          </Suspense>
        ),
      },
      {
        path: 'case-studies-blog',
        element: (
          <Suspense fallback={<PageLoading />}>
            <CaseStudiesAndBlog />
          </Suspense>
        ),
      },
      {
        path: 'login',
        element: (
          <Suspense fallback={<PageLoading />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: 'register',
        element: (
          <Suspense fallback={<PageLoading />}>
            <Register />
          </Suspense>
        ),
      },
      {
        path: 'reset-password',
        element: (
          <Suspense fallback={<PageLoading />}>
            <ResetPassword />
          </Suspense>
        ),
      },
      {
        path: 'forgot-password',
        element: (
          <Suspense fallback={<PageLoading />}>
            <ForgotPassword />
          </Suspense>
        ),
      },
      {
        path: 'dashboard/*',
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
