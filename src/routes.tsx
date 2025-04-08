import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Analytics from './pages/Analytics';

// Lazy loaded pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));

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
            <About />
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
        path: 'analytics',
        element: (
          <Suspense fallback={<PageLoading />}>
            <Analytics />
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
